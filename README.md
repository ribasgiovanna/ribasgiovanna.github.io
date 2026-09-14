# ribasgiovanna.github.io

Personal portfolio of **Giovanna Ribas** — software engineering, data automation,
creative technology, visual design and community work.

The site is the destination: projects, creative work and community are shown on the
page itself. GitHub, Behance and LinkedIn are optional depth, not the place you go
to finally see the work.

**Live:** https://ribasgiovanna.github.io/

## Stack

Plain **HTML + CSS + JavaScript**. No framework, no build step. Hosted on GitHub Pages.

- `Fraunces` (display serif) + `Inter` (body) + system monospace (labels), via Google Fonts.
  `Caveat` and `DM Mono`/`DM Sans` are loaded only for the Archive component below.
- Light/dark aware (`prefers-color-scheme`), responsive down to 320px
- EN/PT language toggle (see below), accessible modals, gallery filters
- Semantic HTML, skip link, visible focus, `prefers-reduced-motion` respected
- `loading="lazy"` + `decoding="async"` on every image below the first viewport

## Structure

```
.
├── index.html            # all content
├── style.css             # editorial system: tokens, layout, sections
├── script.js             # i18n dictionary, filters, modals, scroll-linked story line
├── gr-archive.html-in-index / gr-archive.css / gr-archive.js
│                         # the "Archive" folder component (Projects / Technologies /
│                         # Learning) — a literal, self-contained widget; its own
│                         # LIBRARY of project/cert copy lives inside gr-archive.js
├── 404.html
└── assets/
    ├── images/
    │   ├── profile/      # ID card photo
    │   ├── about/        # About section portrait + sticker cutouts for the story line
    │   ├── tech/          # real project screenshots (webp)
    │   ├── certs/         # certificate/education scans used inside the Archive
    │   ├── coffee-code/   # club poster
    │   ├── community/     # real event photos + certificates for Community & Events
    │   └── playground/    # design / illustration / photography / food, by category
    └── og/                # og.png share image
```

## Editing content

- English text lives in `index.html`. Every translatable node has `data-i18n="key"`.
- Both languages live in the `I18N = { en, pt }` object in `script.js`. Keep the two
  halves in sync **per key** — that's the only rule that keeps the toggle from drifting.
- The Archive folder's own copy (project/tech/learning entries) lives separately, in
  the bilingual `LIBRARY` object inside `gr-archive.js`, not in `script.js`'s `I18N`.
- To add a real image, drop the file into the matching `assets/images/...` folder and
  reference it directly with an `<img>` (Archive images are indirected through the
  `#gr-archive-assets` JSON block and referenced by key from `gr-archive.js`).

## Run locally

No build. Open `index.html`, or:

```bash
python -m http.server
```

## Deploy

Push to `main`. GitHub Pages serves the repo root. Verify at the live URL after each push.

## Privacy & transparency

- No corporate code, screenshots, endpoints, architecture, tickets, client data or
  internal materials. Professional experience is described at the level of competence only.
- The game *Corrida para a Faculdade*: the code is Giovanna's; its visual assets are
  AI-generated and labelled as such on the site.
- Team projects (DATASUS, Pibble Express, Clínica Veterinária) credit collaborators and
  state Giovanna's specific contribution.
- Community photos are chosen with care — no children's faces in sensitive contexts, no
  legible badges or personal data.

## Credits

Design and build: Giovanna Ribas. Project screenshots generated from the real apps
and datasets in the linked repositories.
