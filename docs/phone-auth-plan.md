# Phone Sign-up / Login — Implementation Plan (KarKhmer v2)

> Hand-off plan. This document is self-contained: a new conversation with **no
> prior context** should be able to read this and start building. Read it top to
> bottom before writing any code.

---

## 0. Context — the project as it stands today

**KarKhmer** is a bilingual (Khmer / English) job marketplace for Cambodia. It is
a static single-page app talking directly to a Supabase backend.

- **Files:** `index.html` (all UI sections), `app.js` (all logic), `style.css`.
  No build step, no framework. Deployed via **GitHub Pages** at
  `https://mightytiny.github.io/jobrecruitment/`.
- **Backend:** Supabase project `xhgkcydmnydtnykjkoun` (auth + Postgres + RLS).
  Publishable/anon key is in `app.js`. Migrations live in `supabase/migrations/`
  and are applied manually via the Supabase SQL Editor.
- **Entities:** `employers`, `jobs`, `seekers`, each with a `user_id` FK to
  `auth.users` and owner-only RLS. Seekers' `phone`/`email` are protected by
  column-level grants (only authenticated users can read them).

**Current auth (email/password only):**
- `index.html` sections: `#login`, `#signup`, `#verify` (email-confirmation
  notice), plus the recently added `#forgot` and `#reset` (password reset).
- `app.js` key pieces:
  - `T = { km:{…}, en:{…} }` — the i18n dictionary. **Every user-facing string
    lives here in both languages.** UI elements carry `data-t="key"` and
    `applyLang()` fills them.
  - Buttons that trigger auth carry `data-auth="login|signup|forgot|reset"`; a
    single delegated handler wraps each in `withBusy(btn, fn)` and dispatches.
  - `doSignup()` — `sb.auth.signUp({ email, password, options:{ data:{ role } } })`
    then navigates to `#verify`. Role (`seeker`/`employer`) is captured from a
    radio group and stored in `user_metadata`.
  - `doLogin()` — `sb.auth.signInWithPassword({ email, password })`.
  - `initAuth()` registers `sb.auth.onAuthStateChange((event, s) => …)`, which
    drives navigation: on SIGNED_IN it goes to `pendingNav||"home"`; it also
    handles `PASSWORD_RECOVERY`.
  - `userRole()` reads `session.user.user_metadata.role`.
  - `validEmail` / `validPhone` regex helpers; `DEV` flag still `true` (a test
    backdoor that must be set `false` before launch).
  - Navigation: `go(id)` / `showPage(id)` toggle `.page` sections.

**Why phone auth:** in Cambodia most users think in phone numbers, not email, and
the email path also depends on deliverability (custom SMTP not yet set up). Phone
sign-up is expected to convert much better.

---

## 1. Goal & scope

Add **phone-based sign-up and login via SMS OTP**, coexisting with the existing
email/password auth (don't remove email). Fully bilingual. Reuse the existing
i18n, navigation, `withBusy`, and error-display patterns so it looks native.

---

## 2. Decisions to confirm with the user before building

1. **Passwordless OTP vs phone + password.**
   - *Recommended: passwordless OTP.* User enters phone → gets a 6-digit SMS code
     → verified → logged in. No password to remember (best for this audience).
     Supabase sessions persist, so returning users rarely need a new code — which
     keeps SMS volume (and cost) low. `signInWithOtp` doubles as both sign-up and
     login, which simplifies the UI.
   - *Alternative:* phone + password (`signUp({ phone, password })`, OTP once to
     confirm, then `signInWithPassword({ phone })`). Fewer SMS over time, but adds
     password management back.

2. **SMS provider.** Supabase does **not** send SMS itself — you must connect a
   third-party gateway (Twilio, MessageBird/Bird, Vonage, Textlocal, or Twilio
   Verify). *Recommended: Twilio* (best-supported, works for +855). **Caveats:**
   SMS delivery to Cambodia can need sender-ID setup and costs per message
   (~$0.04–0.08+ each). Note culturally that **Telegram** is the dominant
   messaging app in Cambodia; Telegram-based OTP is common locally but is **not**
   natively supported by Supabase (would require a custom Edge Function flow) —
   out of scope for v1, worth revisiting later.

3. **Keep email auth too?** Recommended **yes** — offer both, phone as the
   default/primary.

4. **Default country.** Cambodia (`+855`). See §4.

---

## 3. Supabase configuration (dashboard — the long pole, do this first)

1. **Authentication → Providers → Phone:** enable it; enable phone sign-ups.
2. **Connect an SMS provider** (e.g. Twilio): account SID, auth token, and a
   Message Service SID / sending number.
3. **OTP settings:** code length (6), expiry (e.g. 60s–600s).
4. **Authentication → Rate Limits:** tighten OTP send limits — OTP abuse costs you
   real money. Set a sane per-hour cap and rely on resend cooldowns in the UI.
5. **For development:** use Twilio **test credentials / magic test numbers** so you
   can build the flow without paying for or waiting on real SMS.

> This step gates everything else and involves account setup + spend approval, so
> start it before writing frontend code.

---

## 4. Phone-number normalization (critical — get this right)

Supabase requires **E.164** format (`+85512345678`). Cambodian users write numbers
many ways: `012 345 678`, `0 12-345-678`, `+855 12 345 678`, `85512345678`.

Write a `normalizePhoneKH(raw)` helper that:
- strips spaces, dashes, parentheses;
- if it starts with `0`, replace the leading `0` with `+855`;
- if it starts with `855` (no `+`), prepend `+`;
- if it already starts with `+`, leave it;
- validate the result against a Cambodia E.164 pattern (`+855` followed by 8–9
  digits) and reject otherwise with a clear bilingual error.

All phone values sent to Supabase auth (`signInWithOtp`, `verifyOtp`, `signUp`)
**must** be normalized first. Keep the user's display input friendly; normalize on
submit. For the MVP, fix the country to Cambodia (`+855`) rather than building a
full country-code picker.

---

## 5. Frontend changes (`index.html` + `app.js`)

### UI
- **Sign-up method toggle** on `#signup` (and login on `#login`): `Phone | Email`,
  phone selected by default. Show the relevant fields per choice.
- **Phone sign-up fields:** phone input (with a visible `+855` affordance), the
  existing **role** radio group (seeker/employer), and — if passwordless — no
  password field.
- **New OTP screen** (`#otp` section, or repurpose `#verify`): a 6-digit code
  input, a **Verify** button, and a **Resend code** button with a cooldown timer
  (e.g. 30–60s disabled).
- **Phone login** on `#login`: phone input → sends OTP → same `#otp` screen.

### Handlers (mirror the existing `data-auth` dispatch + `withBusy` + `showErr`)
- `doPhoneStart()` (sign-up or login): normalize phone →
  `sb.auth.signInWithOtp({ phone, options:{ shouldCreateUser:true, data:{ role } } })`
  → stash the phone in a module var → go to `#otp`.
  *(With passwordless OTP, the same call covers sign-up and login; `data.role` is
  only applied when the user is first created.)*
- `doVerifyOtp()`: read the 6-digit code →
  `sb.auth.verifyOtp({ phone, token: code, type:'sms' })`. On success a session is
  created and the **existing** `onAuthStateChange` SIGNED_IN path navigates onward —
  no change needed there.
- `doResendOtp()`: re-call `signInWithOtp`; enforce the UI cooldown.
- If going the **password** route instead: `doPhoneSignup()` uses
  `sb.auth.signUp({ phone, password, options:{ data:{ role } } })` then OTP-confirm;
  `doPhoneLogin()` uses `sb.auth.signInWithPassword({ phone, password })`.

### i18n
Add every new string (method toggle, phone label/placeholder, OTP prompt, verify,
resend, cooldown, all error messages) to **both** `T.km` and `T.en`. Follow the
existing `data-t` convention.

### Validation
Reuse the normalize+validate helper from §4; show errors via the existing
`showErr(errEl, msg)` pattern.

---

## 6. Data model / RLS impact

- **auth.users** stores `phone` natively — no schema change needed for auth.
- **RLS is unaffected** (everything keys off `auth.uid()`).
- **Integration gotcha — contact email is currently required.** `saveSeeker()` and
  `saveAccountEmployer()` require an email in the seeker/employer **contact** form.
  Phone-auth users may have no email. **Decision needed:** relax this so contact
  email is optional and require **at least one** contact method (phone is already
  collected). Update the validation and the `required` attributes accordingly.
- **Optional nicety:** prefill the seeker/employer contact `phone` field from the
  authenticated phone (`session.user.phone`).

---

## 7. Edge cases & gotchas

- **OTP abuse / cost:** every send costs money; rate-limit in Supabase **and** add a
  UI resend cooldown. Consider a max-attempts lockout.
- **No account linking:** a person who signs up with phone and later with email
  gets **two separate accounts**. Supabase has identity-linking but it's advanced —
  out of scope for v1; just be aware.
- **Wrong/expired code:** handle `verifyOtp` errors with clear bilingual messages
  and an easy resend.
- **Session persistence:** Supabase keeps users logged in via refresh tokens, so
  OTP is infrequent after first login — lean on this to keep SMS volume down.
- **Number change / lost phone:** no self-serve recovery if they lose the number;
  note as a future support concern.
- **`DEV` flag:** the existing `DEV=true` backdoor accepts literal `"phone"`; make
  sure phone normalization/validation isn't bypassed in production (set `DEV=false`).

---

## 8. Suggested build order

1. **Supabase:** enable Phone provider + connect Twilio (test creds first). (§3)
2. **Utilities:** `normalizePhoneKH` + validation, with unit-style manual tests. (§4)
3. **Sign-up (passwordless):** method toggle → phone form → `signInWithOtp` →
   `#otp` screen → `verifyOtp` → lands logged in. (§5)
4. **Login:** phone → OTP via the same `#otp` screen. (§5)
5. **Role + contact-email relaxation:** confirm role lands in metadata; make contact
   email optional for phone users. (§6)
6. **Polish:** bilingual strings, error states, resend cooldown, real-device test.

Build and verify each phase before moving on; keep email auth working throughout.

---

## 9. Testing checklist

- [ ] Twilio test mode: OTP send + verify without real SMS.
- [ ] Real device, real number, both Khmer and English.
- [ ] Number formats: `012…`, `+855…`, `855…`, with spaces/dashes — all normalize.
- [ ] Wrong code, expired code, resend (with cooldown).
- [ ] Role (seeker/employer) correctly stored in `user_metadata`.
- [ ] Session persists across reloads; no re-OTP on every visit.
- [ ] Existing **email** sign-up / login / reset still work unchanged.
- [ ] Phone-auth user can complete a seeker profile / employer record without an
      email.

---

## 10. Cost & ops note

SMS OTP is a recurring per-message cost and an abuse target. Before launch: set
Supabase OTP rate limits, add UI cooldowns, and monitor Twilio spend. This pairs
with the still-pending **custom SMTP** work for email — both are part of making auth
production-ready.

---

## Open questions to settle with the user

1. Passwordless OTP (recommended) or phone + password?
2. Which SMS provider account will you use (Twilio recommended)? Is there budget
   approval for per-SMS cost?
3. Keep email auth alongside phone (recommended yes)?
4. OK to make the **contact** email optional for phone users (require phone OR email)?
