# Guided CV / Profile Builder for Job Seekers — Plan

> **Status:** Approved 2026-06-12. Self-contained — a new conversation can read this
> and execute it. No work started yet.
>
> **Product thesis:** The competition only serves high-tier (white-collar, CV-literate)
> jobseekers. KarKhmer wants to serve *everyone*, including informal/blue-collar
> workers (construction, domestic, driving, garment, agriculture…) who have never made
> a CV and won't fill in a blank "Career Objective" box. So **the worker doesn't write
> a CV — the app builds it for them.** They answer a few simple questions by **tapping,
> not typing**, and the app assembles a clean profile they'd be proud to show. The
> "template" the owner asked for = this guided, suggestion-filled flow (the *input*),
> not a visual theme. The output is just a normal page in the existing SPA, rendered
> with the existing `style.css` — no new styling system, no theme choice.

---

## What exists today (baseline)

A seeker has two parts already:
- **Account / contact** (in the Profile page `#myposts`, `account_seeker_section`):
  name, phone, email (locked to login), telegram.
- **Seeker ad / listing** (`#seeker` section, saved via `data-save="seeker"`, table
  `seeker_ads`): `title`, `cat`, `prov`, `exp`, `salary`, and one free-text `bio`
  (the "skills" textarea). Rendered to viewers on the worker-detail page
  `#seekerdetail`.

The builder **replaces the single `#seeker` form** with a guided wizard and enriches
what's stored. Contact stays in the account section as-is.

Existing structured pickers we reuse: `CAT` (9 categories), `PROV` (25 provinces),
`EXP` (none / 1–3 / 3+), `TYPE` (full/part-time). Bilingual via the `T` dictionary.

---

## The wizard (the "template they fill out")

One question per step, big tap targets, almost no typing. A slim progress bar +
gentle encouragement ("80% ready").

1. **"What work do you do?"** → category (`CAT`). Drives the skill chips next.
2. **"What can you do well?"** → **tap skill chips** from the category-specific set
   (see library below). Multi-select. "+ add your own" allows one typed skill.
3. **"How much experience?"** → `EXP`. Optional free "where did you work?" (kept optional).
4. **"Where & when can you work?"** → `PROV`, `TYPE`, plus availability chips
   (start immediately / weekends / can travel / live-in OK).
5. **"Expected pay?"** → salary number + a **"negotiable"** toggle (so they can skip a number).
6. **"Add a photo"** *(deferred — see Photo phase)*.
7. **"About you"** → **pre-filled** with an auto-generated sentence (see below) they may
   tweak or leave. Never a blank box.

---

## Skill-chip library (the core content asset)

Curated, **bilingual** chips per category. Predefined so both languages are hand-written
(no machine translation needed) and consistent with `T`. **Store the chip KEY, not the
label** — the renderer maps key → KM/EN, so a profile shows correctly in either language.

> ⚠️ **Khmer strings below are a first draft and need a native review pass by the owner
> before shipping.** English is authoritative; Khmer to be confirmed.

**Construction (`con`)** — mason/bricklaying ជាងឥដ្ឋ · steel-fixer/rebar ជាងដែក · concrete pouring ការចាក់បេតុង · tiling ការក្រាលក្បឿង · plastering ការបូកស៊ីម៉ងត៍ · painting ការលាបថ្នាំ · scaffolding ការតម្លើងរនាង · carpentry/formwork ជាងឈើ/ពុម្ពបេតុង · welding ការផ្សារដែក · electrical wiring ការតម្លើងខ្សែភ្លើង · plumbing ការតម្លើងបំពង់ទឹក · can read drawings អាចអានប្លង់ · operate machinery បើកបរម៉ាស៊ីន

**Domestic (`dom`)** — cleaning ការសម្អាត · cooking ការធ្វើម្ហូប · childcare/nanny ការមើលថែកុមារ · elderly care ការមើលថែមនុស្សចាស់ · laundry & ironing ការបោកគក់និងអ៊ុត · gardening ការថែសួនច្បារ · market shopping ការទៅផ្សារ · pet care ការមើលថែសត្វចិញ្ចឹម · live-in available អាចស្នាក់នៅផ្ទះម្ចាស់

**Driving (`drv`)** — motorbike ម៉ូតូ · car ឡាន · tuk-tuk តុកតុក · truck/lorry ឡានដឹកទំនិញ · van/minibus រថយន្តក្រុង · delivery ការដឹកជញ្ជូន · valid license មានប័ណ្ណបើកបរ · knows Phnom Penh routes ស្គាល់ផ្លូវភ្នំពេញ · heavy vehicle យានយន្តធ្ងន់

**Garment (`gar`)** — sewing-machine operator ដេរម៉ាស៊ីន · cutting ការកាត់ · QC ត្រួតពិនិត្យគុណភាព · ironing/finishing អ៊ុត/បញ្ចប់ការងារ · packing ការវេចខ្ចប់ · overlock អ៊ូវើឡុក · embroidery ការប៉ាក់ · pattern making ការធ្វើគំរូ

**Hospitality (`hos`)** — cooking ការធ្វើម្ហូប · kitchen helper ជំនួយការផ្ទះបាយ · waiter/waitress អ្នករត់តុ · barista អ្នកធ្វើកាហ្វេ · bartender អ្នកលាយភេសជ្ជៈ · housekeeping ការសម្អាតបន្ទប់ · front desk ផ្នែកទទួលភ្ញៀវ · Khmer cuisine ម្ហូបខ្មែរ · food hygiene អនាម័យអាហារ

**Retail (`ret`)** — cashier អ្នកគិតលុយ · sales/customer service លក់/សេវាអតិថិជន · stock/inventory ស្តុកទំនិញ · merchandising/display តាំងបង្ហាញទំនិញ · POS/register ប្រើម៉ាស៊ីនគិតលុយ · phone sales លក់តាមទូរស័ព្ទ · market selling លក់នៅផ្សារ

**IT (`it`)** — computer repair ជួសជុលកុំព្យូទ័រ · networking បណ្តាញ · web development អភិវឌ្ឍន៍គេហទំព័រ · graphic design រចនាក្រាហ្វិក · data entry បញ្ចូលទិន្នន័យ · MS Office កម្មវិធី MS Office · social media management គ្រប់គ្រងបណ្តាញសង្គម · phone/device repair ជួសជុលទូរស័ព្ទ

**Admin (`adm`)** — data entry បញ្ចូលទិន្នន័យ · MS Office (Word/Excel) · bookkeeping កត់ត្រាគណនី · reception ទទួលភ្ញៀវ · filing/records រៀបឯកសារ · scheduling រៀបកាលវិភាគ · Khmer typing វាយអក្សរខ្មែរ · English typing វាយអក្សរអង់គ្លេស

**Agriculture (`agr`)** — rice farming ការដាំស្រូវ · livestock/animal care ការចិញ្ចឹមសត្វ · crop harvesting ការប្រមូលផល · irrigation ប្រព័ន្ធធារាសាស្ត្រ · tractor/machinery ត្រាក់ទ័រ/ម៉ាស៊ីន · fertilizing/spraying ដាក់ជី/បាញ់ថ្នាំ · fishery/aquaculture នេសាទ/ចិញ្ចឹមត្រី · plantation work ការងារចម្ការ

**Cross-category — strengths (all)** — hardworking ឧស្សាហ៍ · punctual ទៀងពេល · honest ស្មោះត្រង់ · team worker ធ្វើការជាក្រុម · can work overtime អាចធ្វើការថែមម៉ោង

**Cross-category — availability (all)** — start immediately អាចចាប់ផ្ដើមភ្លាម · weekends ចុងសប្ដាហ៍ · can travel អាចធ្វើដំណើរ · live-in OK អាចស្នាក់នៅ

**Languages** — Khmer ខ្មែរ · English អង់គ្លេស · Chinese ចិន · Thai ថៃ · Vietnamese វៀតណាម

---

## Auto-generated "About me" (templated, no AI)

Compose from fragment templates in **both languages at once** (it's templated, so KM+EN
are free). No AI — an LLM rewriting this could misrepresent the person (owner decision).

Pattern (EN): `"{role} with {experience} in {province}. Skilled in {top 3 skills}. {strengths}. {availability}."`
→ *"Mason with 3+ years' experience in Phnom Penh. Skilled in bricklaying, plastering and tiling. Hardworking and punctual. Available to start immediately."*

KM pattern mirrors it using the chip dictionary. Shown pre-filled in step 7; editable.

---

## Data model — one small migration (016)

Add structured columns to `seeker_ads` so chips stay re-editable and become filterable
later. **Store keys, not labels.**

- `skills` — `text[]` (or `jsonb`) of chip keys, e.g. `["con.mason","con.tiling"]`.
- `languages` — `text[]` of language keys.
- `availability` — `text[]` of availability keys.
- (`photo_url text` — added in the Photo phase, not now.)

The existing `bio` column holds the generated/edited About-me text.

> **Migration discipline:** migrations are applied to the live Supabase DB **by hand via
> the SQL editor** — the repo does not auto-apply. After writing `016`, remind the owner
> to run it. Next free number is **016** (015 is the last applied). Include matching RLS:
> the new columns follow the same owner-write rules already enforced by migration 014
> (`seeker_ads_ownership`).

Future payoff: `skills` being structured unlocks **employer-side filtering by skill** —
a real advantage the high-tier competitors don't offer for blue-collar work.

---

## Output / rendering

- The generated profile renders on the worker-detail page (`#seekerdetail`) for viewers,
  and as the seeker's own live preview — **using the existing `style.css`**, same cards,
  badges, palette, and fonts as the rest of the site. No new theme.
- Skills render as badges/pills (key → localized label).
- **Save / Print** → browser print-to-PDF; works offline (PWA) so a worker can show or
  print it to bring to an employer in person.
- **Share** → reuse the existing share button to the public worker-detail link.

---

## Phasing

- **Phase 1 — wizard + chips + structured fields + generated About-me + rendered profile.**
  Front-end work on `#seeker` (wizard) and `#seekerdetail`/preview (render), plus
  migration 016 and the `data-save="seeker"` handler. Text-first, no photo.
- **Phase 2 — Photo (with in-app camera capture).** Owner specifically wants: open the
  camera from the profile, take a photo, save it.
  - Capture: in-app camera via `getUserMedia()` → snapshot to `<canvas>` → crop square →
    **downscale (~512px) + compress before upload** (mobile-data friendly). Fallback to
    `<input type="file" accept="image/*" capture="user">` (opens camera on mobile, file
    picker on desktop). HTTPS + camera permission — already satisfied by the PWA.
  - Storage: Supabase **Storage** bucket `seeker-photos`; RLS so only the owner can
    write/replace/delete their own object (path keyed by user id); public read; size/type
    limits. Moderation: photos use the existing report path on the worker page.

---

## Deferred AI (owner has a Claude API key) — not in this build

- **AI bio writing — rejected.** Could alter perception of the person; templated stays.
- **Spell-check on the one free-text field — wanted, later.** Per-call cost negligible and
  Claude is strong in Khmer, but it needs an **Edge Function** proxy (key can't live in
  the browser). ~Free usage, small one-time setup.
- **Translation — later, reframed.** The useful version is making **all UI text on a page
  render in one consistent language** (language-toggle consistency), NOT translating
  user-entered text (those stay as written). See [[project-content-translation-explored]].

---

## Open items to confirm when building
- Native Khmer review of the chip library (English is authoritative).
- Exact `seeker_ads` column names/types to match existing schema (verify in SQL editor
  before writing migration 016).
- Whether "+ add your own" free skills are stored in `skills` or appended to `bio`.

## Related
- Builds on the PWA work (offline print/share): commit `c68eaf7`.
- Deferred AI ties to [[project-content-translation-explored]].
