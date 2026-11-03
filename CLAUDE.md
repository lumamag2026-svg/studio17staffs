# Studio 17 — site notes for Claude

Marketing site for **Studio 17 Reformer Studio** (Stafford, UK). Live at
https://studio17staffs.co.uk. Client contact: Emma.

## Stack

- Astro 6 + Tailwind 4 (static site)
- Node ≥ 22.12
- Hosted on Vercel, auto-deploys from `main` on push

## Local setup

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

## Where things live

- `src/data/schedule.ts` — single source of truth for class times,
  instructors, capacity, and the `pricing` object. Change prices here, not
  in component markup.
- `src/data/images.ts` — image references.
- `src/components/` — section components (Hero, Services, Contact, etc.)
  used by the pages.
- `src/pages/` — one `.astro` per route (`/`, `/about`, `/bookings`,
  `/contact`, `/faq`, `/location`, `/parq`, `/schedule`).
- `src/layouts/`, `src/styles/` — layout shell and global CSS.

## Deploy

Push `main` to `origin` — Vercel builds and ships. No manual step.

```sh
git push origin main
```

Repo: https://github.com/lumamag2026-svg/studio17staffs

## Pricing conventions

Three offerings on the site:

| Label on site      | Ratio | Price      | Source                        |
|--------------------|-------|------------|-------------------------------|
| Reformer Class     | 3:1   | £19.50/head| `pricing.single`              |
| One to One         | 1:1   | £40/session| `pricing.privateOne`          |
| Two to One         | 2:1   | £50/session| `pricing.privateTwo`          |

`pricing.fivePack` and `pricing.tenPack` are class-pack prices for the
group Reformer Class.

**Note on 1:1 price:** Emma raised it from £30 to £40 on 2026-11-03. If
you see an older copy with £30, that's stale — £40 is correct.

**FAQ mirror:** `src/pages/faq.astro` repeats the 1:1 and 1:2 prices in
prose — update both when pricing changes.

## Forms

Contact form and PARQ post to **FormSubmit**, delivering to Emma's
Outlook. Honeypot + WhatsApp fallback already wired. Do not add a direct
`hello@` email — removed deliberately (commit `4741b4d`); contact is form
+ WhatsApp + phone only.

## CTAs

All class/booking CTAs point to WhatsApp, not an email booking flow.

## Session length

Private sessions are **45 minutes** (not 60). The copy change is in
`src/components/Services.astro`. `src/pages/faq.astro` still says "Sixty
minutes" in one answer — pre-existing, flag before changing.
