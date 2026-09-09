# Mad Monkey Halloween Party 2026

Landing page for the Halloween Party running at every Mad Monkey hostel on
**Saturday 31 October 2026**. Live DJs, drink deals, pub crawl.

## The page

Hero → ticker → what is going down (3 cards) → how the night runs → hostel
selector → FAQ → footer. Bats, cobwebs and sparkles are inline SVG components
(`src/components/SpookyIcons.tsx`), so they cost nothing and scale cleanly.
`SectionBreak` is the strip that flies bats between sections.

## Artwork

- `src/assets/hero-wordmark.webp`: the `HALLOWEEN party` lockup, isolated from
  the supplied poster (transparent background). Also in `public/halloween-party-wordmark.png`
  if you need the PNG for socials or print.
- `src/assets/vamp-mouth.webp`: the winged vamp mouth, isolated.
- Photography is not in yet. See `IMAGE_PROMPTS.md` for the prompts that match
  the vibe, and where each file drops in.

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
