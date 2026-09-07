# ribasgiovanna.github.io

Personal portfolio of **Giovanna Ribas** — software engineering, data automation,
creative technology, visual design and community work.

The site is the destination: projects, creative work and community are shown on the
page itself. GitHub, Behance and LinkedIn are optional depth, not the place you go
to finally see the work.

**Live:** https://ribasgiovanna.github.io/

## Stack

Plain **HTML + CSS + JavaScript**. No framework, no build step. Hosted on GitHub Pages.

- `Fraunces` (display serif) + `Inter` (body) + system monospace (labels), via Google Fonts
- Light/dark aware (`prefers-color-scheme`), responsive down to 320px
- EN/PT language toggle (see below), accessible modal, work filters
- Semantic HTML, skip link, visible focus, `prefers-reduced-motion` respected

## Structure

```
.
├── index.html            # all content
├── style.css             # editorial system: tokens, layout, sections
├── script.js             # i18n dictionary, work filters, artwork modal, year
├── 404.html
├── ASSETS_NEEDED.md      # real images still to add (placeholders on the page)
└── assets/
    ├── images/
    │   ├── profile/      # flower-avatar.png (illustration); portrait optional
    │   ├── tech/         # real project screenshots (webp)
    │   ├── creative/     # gallery — pending
    │   ├── coffee-code/  # identity/posters — pending
    │   ├── community/    # event photos — pending
    │   └── beyond/       # baking / photography — pending
    └── og/               # og.png share image
```

## Editing content

- English text lives in `index.html`. Every translatable node has `data-i18n="key"`.
- Both languages live in the `I18N = { en, pt }` object in `script.js`. Keep the two
  halves in sync **per key** — that's the only rule that keeps the toggle from drifting.
- To add a real image, replace the matching `.frame` / `.wk__img--flat` / `.art__frame`
  placeholder in `index.html` with an `<img>` (see `ASSETS_NEEDED.md` for names/sizes).

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
- Team projects (DATASUS, Pibble Express, Curitibars) credit collaborators and state
  Giovanna's specific contribution.

## Credits

Design and build: Giovanna Ribas. Project screenshots generated from the real apps
and datasets in the linked repositories.
