# Spook artwork credits

All vector art below came from [freesvg.org](https://freesvg.org), which
publishes under **Creative Commons 0 (public domain)**: free to copy, modify and
use commercially with no attribution required. Credited here anyway so we know
where it came from.

| File | Original | Source |
| --- | --- | --- |
| `bat.svg` | Geometric Bat Silhouette | https://freesvg.org/1537139962 |
| `bat-wide.svg` | Bat silhouette | https://freesvg.org/bat-silhouette |
| `cobweb.svg` | Spider Web (#2) | https://freesvg.org/spider-web-2 |
| `spider.svg` | Silhouette vector image of spider | https://freesvg.org/silhouette-vector-image-of-spider |
| `moon.webp` | Full moon | https://freesvg.org/13110691316280 |

`sparkle.png` is not from freesvg: it is lifted from the supplied
`MMGBL - Halloween 2026` poster artwork, same as the hero wordmark.

Each SVG was stripped of editor metadata and ids, and its black fills swapped
for `currentColor`, so the components in `src/components/SpookyIcons.tsx` can
colour them from Tailwind text classes. The moon was rasterised because the
original vector carried hundreds of blurred crater paths.
