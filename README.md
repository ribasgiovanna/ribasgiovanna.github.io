# ribasgiovanna.github.io

Personal hub and portfolio site for Giovanna Ribas, built with plain HTML, CSS and
JavaScript and hosted on GitHub Pages.

**Live:** https://ribasgiovanna.github.io/

## Structure

```
.
├── index.html   # all content
├── style.css    # styling (light/dark aware, responsive)
└── script.js    # EN/PT language toggle (data-i18n), year, small helpers
```

## Editing

- Text lives in `index.html` (English by default) and in the `I18N` dictionary in
  `script.js` (both `en` and `pt`). Keep the two in sync per `data-i18n` key.
- No build step. Open `index.html` in a browser, or run a static server:
  `python -m http.server`.
