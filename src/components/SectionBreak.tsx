import { Bat, Sparkle } from '@/components/SpookyIcons'

type Props = {
  /** background colour of the strip, so it blends with the sections either side */
  className?: string
}

/** A thin strip between sections with bats swooping across it. */
const SectionBreak = ({ className = '' }: Props) => (
  <div className={`relative h-16 md:h-24 overflow-hidden ${className}`} aria-hidden="true">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t-2 border-dashed border-foreground/15" />
    </div>

    <div className="absolute top-2 left-0 w-14 md:w-24 animate-swoop text-foreground/70">
      <Bat className="w-full animate-flap" />
    </div>
    <div
      className="absolute top-8 md:top-10 left-0 w-8 md:w-14 animate-swoop text-foreground/40"
      style={{ animationDelay: '6s', animationDuration: '24s' }}
    >
      <Bat className="w-full animate-flap" style={{ animationDelay: '0.2s' }} />
    </div>

    <Sparkle className="absolute top-4 left-[22%] w-3 md:w-5 text-primary animate-twinkle" />
    <Sparkle className="absolute bottom-3 left-[68%] w-4 md:w-6 text-primary animate-twinkle" style={{ animationDelay: '1.4s' }} />
    <Sparkle className="absolute top-6 left-[88%] w-3 md:w-4 text-foreground animate-twinkle" style={{ animationDelay: '2.2s' }} />
  </div>
)

export default SectionBreak
