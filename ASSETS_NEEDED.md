# Asset status

All sections currently show real photos/screenshots — there are no placeholder
frames left on the page. This file is now a short reference for where things live
and what's unused, not a to-do list.

**Format:** WebP, quality ~80–85. `loading="lazy" decoding="async"` on everything
below the first viewport (the Home hero photo is the only exception). `width`/`height`
set on every `<img>`.

**Never include:** children's faces in sensitive contexts, legible badges/name tags,
documents with personal data, or anything that needs someone's permission.

---

## In use

- `assets/images/profile/id-photo.webp` — Home ID card photo.
- `assets/images/about/portrait.webp` — the single About-section photo. `harve.webp`
  is used as an Archive peek image.
- `assets/images/tech/` — real project screenshots for the Archive (DATASUS dashboard,
  Pibble Express, IoT/BPMN diagrams, game art).
- `assets/images/certs/` — the 3 certificate scans still shown inside the Archive's
  Learning folder (FICEM, DIO, Scrum+Kanban workshop).
- `assets/images/coffee-code/poster.webp` — the only Coffee & Code image in use.
- `assets/images/community/` — one photo/certificate per entry in the Community
  catalog grid (13 entries: Meiwa, Bom Jesus, Hospital Pequeno Príncipe, Interact Club,
  Diretoria da Mulher, blood donation, Borboleta Menarca, Vozes Femininas, Literatura
  com Elas, Teia do Bem, DCE + Identidade PUCPR, the Lei Maria da Penha panel, Maker
  Faire Curitiba) — click a thumbnail to open its detail card. `interact-2.webp`
  through `interact-5.webp` are the 4 extra Interact Club photos from the previous
  click-through-gallery version of that one card; kept, not referenced now that the
  section is a compact grid with one photo per entry.
- `assets/images/playground/` — design, illustration, photography and food pieces,
  filtered by category on the page.

## Present but unused

- `assets/images/about/aquarium.webp`, `bouquet.webp`, `snow.webp`, `talk.webp`,
  `team.webp`, `oab.webp`, `shore.webp`, `dce.webp` — real photos of Giovanna, kept
  from an earlier multi-photo version of the About section (now a single portrait).
  Not deleted since they're personal photos, not dead code — ask before removing.
- `assets/images/playground/volunteering/` (4 photos) — from an earlier "volunteering"
  gallery category that no longer exists as a filter; not currently shown anywhere.
- `assets/images/certs/cert-hotmilk.webp`, `cert-met.webp`, `cert-vgc.webp` — the two
  language certificates (MET, VGC Winter Camp) and the HOTMILK talk were dropped from
  the Archive's Learning folder to keep it to 5 records; files kept, not referenced.
- `assets/images/playground/design/my-love.webp`, `time-is-ticking.webp`, `run.webp`,
  `childhoodhaul.webp` — real design pieces, trimmed from the Outside the IDE gallery
  to keep the design category tighter (the rest live on Behance); files kept.

## `assets/og/`
`og.png` — social share image (1200×630), a generated placeholder. Replace with a
designed one if wanted.
