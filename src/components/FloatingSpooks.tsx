import { Bat, Sparkle, Cobweb } from '@/components/SpookyIcons'

type Item = {
  top: string
  left: string
  size: string
  anim: string
  delay: string
  rotate: string
  opacity: string
  kind: 'bat' | 'sparkle'
}

const ITEMS: Item[] = [
  { top: '8%', left: '6%', size: 'w-16 md:w-24', anim: 'animate-float', delay: '0s', rotate: '-14deg', opacity: 'opacity-25', kind: 'bat' },
  { top: '18%', left: '86%', size: 'w-12 md:w-20', anim: 'animate-float-reverse', delay: '1.2s', rotate: '12deg', opacity: 'opacity-20', kind: 'bat' },
  { top: '62%', left: '4%', size: 'w-10 md:w-16', anim: 'animate-float-reverse', delay: '0.6s', rotate: '8deg', opacity: 'opacity-20', kind: 'bat' },
  { top: '74%', left: '90%', size: 'w-14 md:w-20', anim: 'animate-float', delay: '2s', rotate: '-9deg', opacity: 'opacity-25', kind: 'bat' },
  { top: '30%', left: '48%', size: 'w-5 md:w-8', anim: 'animate-twinkle', delay: '0.4s', rotate: '0deg', opacity: 'opacity-70', kind: 'sparkle' },
  { top: '12%', left: '34%', size: 'w-4 md:w-6', anim: 'animate-twinkle', delay: '1.6s', rotate: '0deg', opacity: 'opacity-60', kind: 'sparkle' },
  { top: '82%', left: '62%', size: 'w-4 md:w-7', anim: 'animate-twinkle', delay: '2.4s', rotate: '0deg', opacity: 'opacity-60', kind: 'sparkle' },
  { top: '48%', left: '76%', size: 'w-3 md:w-5', anim: 'animate-twinkle', delay: '3.1s', rotate: '0deg', opacity: 'opacity-50', kind: 'sparkle' },
]

type Props = {
  webs?: boolean
}

/** Decorative bats + sparkles scattered behind a section. */
const FloatingSpooks = ({ webs = true }: Props) => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden z-0" aria-hidden="true">
    {webs && (
      <>
        <Cobweb className="absolute top-0 left-0 w-24 md:w-40 text-foreground/15" />
        <Cobweb className="absolute top-0 right-0 w-24 md:w-40 text-foreground/15 scale-x-[-1]" />
      </>
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
          } as React.CSSProperties
        }
      >
        {item.kind === 'bat' ? (
          <Bat className="w-full text-foreground" />
        ) : (
          <Sparkle className="w-full text-primary" />
        )}
      </div>
    ))}
  </div>
)

export default FloatingSpooks
