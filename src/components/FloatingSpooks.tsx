import type { CSSProperties } from 'react'
import { Bat, BatWide, Sparkle, Cobweb, Spider } from '@/components/SpookyIcons'

type Item = {
  top: string
  left: string
  size: string
  anim: string
  delay: string
  rotate: string
  opacity: string
  kind: 'bat' | 'bat-wide' | 'sparkle'
}

const ITEMS: Item[] = [
  { top: '9%', left: '5%', size: 'w-16 md:w-24', anim: '', delay: '0s', rotate: '-14deg', opacity: 'opacity-30', kind: 'bat' },
  { top: '17%', left: '85%', size: 'w-12 md:w-20', anim: '', delay: '1.2s', rotate: '12deg', opacity: 'opacity-25', kind: 'bat-wide' },
  { top: '61%', left: '3%', size: 'w-10 md:w-16', anim: '', delay: '0.6s', rotate: '8deg', opacity: 'opacity-25', kind: 'bat-wide' },
  { top: '74%', left: '88%', size: 'w-14 md:w-20', anim: '', delay: '2s', rotate: '-9deg', opacity: 'opacity-30', kind: 'bat' },
  { top: '30%', left: '48%', size: 'w-5 md:w-8', anim: 'animate-twinkle', delay: '0.4s', rotate: '0deg', opacity: 'opacity-70', kind: 'sparkle' },
  { top: '12%', left: '34%', size: 'w-4 md:w-6', anim: 'animate-twinkle', delay: '1.6s', rotate: '0deg', opacity: 'opacity-60', kind: 'sparkle' },
  { top: '82%', left: '62%', size: 'w-4 md:w-7', anim: 'animate-twinkle', delay: '2.4s', rotate: '0deg', opacity: 'opacity-60', kind: 'sparkle' },
  { top: '48%', left: '76%', size: 'w-3 md:w-5', anim: 'animate-twinkle', delay: '3.1s', rotate: '0deg', opacity: 'opacity-50', kind: 'sparkle' },
]

type Props = {
  webs?: boolean
  spider?: boolean
}

/** Decorative bats, webs and sparkles scattered behind a section. */
const FloatingSpooks = ({ webs = true, spider = false }: Props) => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden z-0" aria-hidden="true">
    {webs && (
      <>
        <Cobweb className="absolute -top-10 -left-10 w-32 md:w-56 text-foreground/20" />
        <Cobweb className="absolute -top-12 -right-12 w-32 md:w-56 text-foreground/20 scale-x-[-1]" />
      </>
    )}

    {spider && (
      <div className="absolute top-0 left-[18%] md:left-[12%] flex flex-col items-center">
        <div className="w-px h-24 md:h-40 bg-foreground/25" />
        <Spider className="w-8 md:w-12 -mt-1 text-foreground/50 animate-float" style={{ '--float-rotate': '0deg' } as CSSProperties} />
      </div>
    )}

    {ITEMS.map((item, i) => (
      <div
        key={i}
        className={`absolute ${item.size} ${item.anim} ${item.opacity}`}
        style={
          {
            top: item.top,
            left: item.left,
            animationDelay: item.delay,
            '--float-rotate': item.rotate,
            transform: item.anim ? undefined : `rotate(${item.rotate})`,
          } as CSSProperties
        }
      >
        {item.kind === 'sparkle' ? (
          <Sparkle className="w-full text-primary" />
        ) : item.kind === 'bat-wide' ? (
          <BatWide className="w-full text-foreground" />
        ) : (
          <Bat className="w-full text-foreground" />
        )}
      </div>
    ))}
  </div>
)

export default FloatingSpooks
