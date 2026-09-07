# Assets needed

Real images to replace the placeholder frames on the site. Drop files into the
folders below using the given names, then wire them into `index.html` (each
placeholder is marked with `image pending` / `image-pending` text).

**Format:** export as **WebP** (quality ~80–85) when possible; PNG is fine for
screenshots, JPG acceptable for photos. Keep the longest edge around the size
noted. Add `loading="lazy"` for anything below the first screen. Always set
`width`/`height` on the `<img>`.

**Do not include:** children's faces in sensitive contexts, legible badges/name
tags, documents, personal data, or anything that needs someone's permission.

---

## `assets/images/profile/`
| file | use | orientation | size | notes |
|---|---|---|---|---|
| `portrait.webp` | optional editorial portrait for the hero, replacing the flower crop | portrait | ~1200×1500 | rectangular crop, not a circular avatar |

`flower-avatar.png` is already in place (an illustration used as the profile image).

## `assets/images/creative/` — Creative gallery (section 07)
One image per piece. The gallery layout expects a mix of sizes.
| file | piece | orientation | size |
|---|---|---|---|
| `reaching.webp` | REACHING | landscape | ~1800px wide |
| `moments.webp` | MOMENTS | square-ish | ~1400px |
| `what-remains.webp` | WHAT REMAINS | portrait | ~1400px tall |
| `flower.webp` | flower | square-ish | ~1400px |
| `my-love-2.webp` | My love 2.0 | landscape | ~1600px |
| `9to5.webp` | 9to5 | landscape | ~1800px wide |
| `run.webp` | RUN | landscape | ~1600px |

Optional per piece, for the modal: 1–3 detail crops (`reaching-detail-1.webp`, …)
and a one or two sentence note about the concept (send as text; nothing is invented
on the site until you provide it).

## `assets/images/coffee-code/` — Coffee & Code (section 06)
| file | use | orientation | size |
|---|---|---|---|
| `identity.webp` | logo / visual identity board | landscape | ~1600px |
| `poster.webp` | a real poster or session photo | portrait or landscape | ~1400px |
| `social.webp` | a social-media piece | square | ~1200px |

## `assets/images/community/` — Community & social impact (section 08)
| file | use | orientation | size |
|---|---|---|---|
| `ddm.webp` | Diretoria da Mulher — one strong photo of an action/event | landscape | ~1600px |
| `teia-do-bem.webp` | Teia do Bem — one photo | landscape or square | ~1400px |
| `volunteer.webp` | Interact / environmental / volunteer work | landscape | ~1600px |

## `assets/images/beyond/` — Beyond the screen (section 10)
| file | use | orientation | size |
|---|---|---|---|
| `bread.webp` | a loaf | portrait | ~1200px |
| `cookies.webp` | cookies | square | ~1200px |
| `dessert.webp` | a dessert | square | ~1200px |
| `photography.webp` | one photograph you like | landscape | ~1800px wide |

## `assets/og/`
| file | use | size |
|---|---|---|
| `og.png` | social share image (link previews) | 1200×630 | a generated version is committed; replace with a designed one if you want |

---

## Already in place (real assets)
- `assets/images/tech/datasus-dashboard.webp` — real Streamlit dashboard
- `assets/images/tech/health-data-before-after.webp`, `netflix-before-after.webp` — real data before/after
- `assets/images/tech/pibble-dashboard.webp`, `pibble-funcionarios.webp` — real app screenshots
- `assets/images/tech/game-start-screen.webp`, `game-win-screen.webp` — real game art (AI-generated, noted on the site)
