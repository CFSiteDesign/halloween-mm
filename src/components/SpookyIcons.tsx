import type { CSSProperties } from 'react'

/*
 * Spook artwork is real public-domain vector art pulled from freesvg.org (CC0),
 * cleaned up and recoloured to currentColor. See src/assets/spooks/CREDITS.md.
 * The line art is inlined so it inherits text colour; the moon is a bitmap and
 * the sparkle is masked so it can still take a colour.
 */

import batSvg from '@/assets/spooks/bat.svg?raw'
import batWideSvg from '@/assets/spooks/bat-wide.svg?raw'
import cobwebSvg from '@/assets/spooks/cobweb.svg?raw'
import spiderSvg from '@/assets/spooks/spider.svg?raw'
import moonImg from '@/assets/spooks/moon.webp'
import sparkleImg from '@/assets/spooks/sparkle.png'

type Props = {
  className?: string
  style?: CSSProperties
}

const vector = (svg: string) =>
  function Spook({ className = '', style }: Props) {
    return (
      <span
        aria-hidden="true"
        className={`spook ${className}`}
        style={style}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    )
  }

export const Bat = vector(batSvg)
export const BatWide = vector(batWideSvg)
export const Cobweb = vector(cobwebSvg)
export const Spider = vector(spiderSvg)

export const Moon = ({ className = '', style }: Props) => (
  <img src={moonImg} alt="" aria-hidden="true" className={`block ${className}`} style={style} />
)

export const Sparkle = ({ className = '', style }: Props) => (
  <span
    aria-hidden="true"
    className={`spook-mask ${className}`}
    style={{
      ...style,
      WebkitMaskImage: `url(${sparkleImg})`,
      maskImage: `url(${sparkleImg})`,
    }}
  />
)
