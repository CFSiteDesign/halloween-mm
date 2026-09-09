# Mad Monkey Halloween Party 2026

Landing page for the Halloween Party running at every Mad Monkey hostel on
**Saturday 31 October 2026**. Live DJs, drink deals, pub crawl.

## The page

Hero → ticker → what is going down (3 cards) → how the night runs → hostel
selector → FAQ → footer. Bats, cobwebs, the spider and the sparkle are served
through `src/components/SpookyIcons.tsx`: the vector ones are inlined so they
inherit Tailwind text colour, the moon is a bitmap and the sparkle is a masked
bitmap so it can still take a colour. `SectionBreak` is the strip that flies
bats between sections.

## Artwork

- `src/assets/hero-wordmark.webp`: the `HALLOWEEN party` lockup, isolated from
  the supplied poster (transparent background). Also in `public/halloween-party-wordmark.png`
  if you need the PNG for socials or print.
- `src/assets/vamp-mouth.webp`: the winged vamp mouth, isolated.
- `src/assets/card-dj.webp`, `card-drinks.webp`, `card-crawl.webp`: the three
  lineup photos, halftone duotone to match the poster.
- `public/og-halloween.jpg`: social share card, composed from the same artwork.
- `src/assets/spooks/`: bats, cobweb and spider are real public-domain vector art
  from freesvg.org (CC0), cleaned up and recoloured to `currentColor`; the moon is
  a rasterised version of another. Sources are listed in `src/assets/spooks/CREDITS.md`.
- `IMAGE_PROMPTS.md` has the prompts behind the photography, for matching the
  look when new shots are needed.

## Turning the hostel links on

Every hostel card shows **COMING SOON** until the event pages exist. In
`src/data/properties.ts` set `LINKS_LIVE = true` and each card points at
`madmonkeyhostels.com/tours-events/halloween-mad-monkey-<slug>`. Any odd one out
goes in the `OVERRIDES` map.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6501589c-2cb6-458c-858e-51a24d9539b4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm: [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
