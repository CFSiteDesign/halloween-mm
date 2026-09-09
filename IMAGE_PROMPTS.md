# Image prompts: Mad Monkey Halloween Party 2026

The look is taken from the two supplied assets: the pixel-rough `HALLOWEEN party`
wordmark and the halftone vamp-mouth-with-bat-wings collage.

**The house style, in one line:** hard-flash photography, printed as a coarse
halftone dot screen, duotone in blood pink `#FF154C` on near-black plum
`#0B0410`, cut-out collage energy, zero gloss, zero stock-photo smiles.

Every prompt below is written to be pasted straight into Midjourney, Higgsfield
(GPT Image 2), Nano Banana or similar. Add your own `--ar` flag if the tool needs it.

---

## 1. Live DJ card: `src/assets/card-dj.jpg` (4:3)

> Hard-flash photograph of a DJ mid-set in a packed hostel bar in Southeast Asia,
> arms up on the mixer, sweat and smoke in the air, crowd hands and costume
> silhouettes in the foreground. Printed as a coarse halftone dot screen, duotone
> in hot blood pink #FF154C and deep near-black plum #0B0410, heavy contrast,
> blown-out flash highlights, slight print misregistration. Cut-out collage
> aesthetic, gritty, 90s rave flyer energy. Leave the top-left quarter simple and
> dark for a label. No text, no logos, no watermarks, no clean studio lighting.

## 2. Drink deals card: `src/assets/card-drinks.jpg` (4:3)

> Hard-flash photograph of a cluster of Halloween cocktails and a bucket on a wet
> bar top: blood-red drinks, dry-ice mist creeping over the rim, a glowing shot
> tray, black-painted nails reaching in. Coarse halftone dot screen, duotone in
> hot blood pink #FF154C and deep near-black plum #0B0410, high contrast, glossy
> liquid reflections crushed to pure white. Cut-out collage aesthetic, printed
> zine texture. Leave the top-left quarter simple and dark for a label. No text,
> no brand labels on bottles, no watermarks.

## 3. Pub crawl card: `src/assets/card-crawl.jpg` (4:3)

> Hard-flash night photograph from behind a crowd of costumed backpackers
> spilling down a dark street between bars, motion blur on the edges, neon
> signage bokeh, one figure in a vampire cape looking back at the camera. Coarse
> halftone dot screen, duotone in hot blood pink #FF154C and deep near-black plum
> #0B0410, heavy grain, flash falloff into black. Cut-out collage aesthetic,
> disposable-camera feel. Leave the top-left quarter simple and dark for a label.
> No text, no readable signage, no watermarks.

## 4. Social share image: `public/og-halloween.jpg` (1200x630)

> Poster-style layout on a deep near-black plum #0B0410 background with a soft
> blood-pink #FF154C spotlight glow behind the centre. A halftone cut-out collage
> of a screaming glossy mouth with bat wings floating in the upper third, small
> scattered bat silhouettes and four-point sparkles around it, generous empty
> space in the lower half for headline type. Printed zine texture, coarse dot
> screen, high contrast. No text, no logos, no watermarks.

*(Then drop the wordmark from `public/halloween-party-wordmark.png` into the
empty lower half and export at 1200x630.)*

## 5. Hero background plate (optional): `src/assets/hero-bg.jpg` (16:9)

> Empty hostel bar at night shot with a hard flash: sticky floor, fairy lights
> dead, cobwebs strung across the rafters, fog low to the ground, nobody in
> frame. Coarse halftone dot screen, duotone in blood pink #FF154C and near-black
> plum #0B0410, crushed blacks, heavy vignette so the centre stays dark enough
> for white type to sit on top. No text, no people, no watermarks.

## 6. Floating collage cut-outs (optional, transparent PNGs)

Generate on a plain white background, then knock the background out.

> a. A single glossy severed hand with black nails holding a shot glass, halftone
>    dot screen, duotone blood pink #FF154C and near-black plum #0B0410, hard
>    drop shadow, cut-out collage sticker, isolated on plain white background.
>
> b. A disco ball with bat wings, same halftone duotone treatment, hard drop
>    shadow, cut-out collage sticker, isolated on plain white background.
>
> c. A grinning skull wearing cheap plastic sunglasses, same halftone duotone
>    treatment, hard drop shadow, cut-out collage sticker, isolated on plain
>    white background.

Drop these in `src/assets/` and float them between sections the same way
`vamp-mouth.webp` is used in `CrawlSection`.

---

## Where the files go

| File | Path | Used by |
| --- | --- | --- |
| `card-dj.jpg` | `src/assets/` | Live DJ card |
| `card-drinks.jpg` | `src/assets/` | Drink Deals card |
| `card-crawl.jpg` | `src/assets/` | Pub Crawl card |
| `og-halloween.jpg` | `public/` | Social share preview |

Until a card image exists the card falls back to a glowing gradient with an SVG
skull, ghost or bat, so nothing breaks while you are still generating.
