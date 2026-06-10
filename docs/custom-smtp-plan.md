# Custom SMTP for Auth Emails — Plan (postponed)

> **Status:** Needed before public launch. **Postponed** as of 2026-06-10 at the
> user's request. Self-contained — a new conversation can read this and execute it.

---

## Why this is needed

- Supabase's **built-in email sender is test-only**: capped at **2 emails/hour**
  (confirmed in the dashboard), shared across many projects, and poor at
  deliverability (lands in spam / gets blocked).
- This means **sign-up confirmation and password-reset emails won't work for real
  users.** It's a genuine launch blocker for the email auth path.
- **Important:** this is **not** fixed by a paid Supabase plan. The fix is **custom
  SMTP**, which works on the **free** Supabase plan. Paying Supabase buys other
  things (compute, no auto-pausing) but does **not** unblock email.

## What custom SMTP does

Routes all Supabase auth emails (sign-up confirmation, password reset, email OTP)
through **your own transactional email provider** instead of Supabase's shared
sender. Result:
- removes the tiny rate limit (set hundreds+/hour),
- real inbox deliverability,
- emails come from **your own domain** (e.g. `noreply@karkhmer.com`) — trusted and
  branded.

## What you need

1. **A transactional email provider account** (free tiers are plenty to start):
   - **Resend** — recommended, simplest setup (~3,000 emails/month free).
   - Alternatives: Brevo (~300/day free), SendGrid, Mailgun, Amazon SES.
2. **A domain you control** — the key prerequisite. The site is currently on
   `mightytiny.github.io`, which **can't** be used for sending. You'd register a
   domain (~$10–15/year, e.g. `karkhmer.com`) and verify it via DNS (SPF/DKIM
   records the provider gives you).
   - *Test-only path without a domain:* use the provider's sandbox domain (e.g.
     Resend's `onboarding@resend.dev`). It typically only sends to your **own
     verified email address** — fine to confirm the flow works, not for real users.
3. **SMTP credentials** from the provider: host, port (587 or 465), username,
   password / API key.

**Rough cost:** ~$0 (email provider free tier) + ~$12/year (domain), on Supabase's
free plan.

## Steps (when un-postponed)

1. Create the provider account (Resend recommended).
2. Add and verify your domain via DNS (SPF/DKIM) — or use the sandbox domain for
   testing only.
3. **Supabase → Authentication → SMTP Settings:** enable custom SMTP; paste
   host/port/username/password; set the sender name and a sender email on your
   verified domain. Save.
4. **Supabase → Authentication → Rate Limits:** raise "emails sent per hour" from 2
   to a realistic number (the box unlocks once custom SMTP is on).
5. **Test:** trigger a password reset and a fresh sign-up; confirm both arrive in
   the inbox, from your domain, not spam.
6. *(Optional)* Customize **Auth → Email Templates** for branding and Khmer/English.

## Decisions to settle

- Which provider (Resend recommended).
- Which domain to register for KarKhmer.
- Full setup (own domain) vs. sandbox test first.

## Related / context

- Pairs with the **SMS OTP** provider work in
  [phone-auth-plan.md](phone-auth-plan.md) — both are about making auth
  production-ready.
- Other known launch blockers (tracked separately, not part of this doc): apply the
  two pending Supabase migrations (seeker PII, employer_id RLS); set `DEV = false`
  in `app.js`.
