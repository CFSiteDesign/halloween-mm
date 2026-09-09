import { Sparkle } from '@/components/SpookyIcons'

type Props = {
  /** background colour of the strip, so it blends with the sections either side */
  className?: string
}

/** A thin dashed strip between sections. */
const SectionBreak = ({ className = '' }: Props) => (
  <div className={`relative h-16 md:h-24 overflow-hidden ${className}`} aria-hidden="true">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t-2 border-dashed border-foreground/15" />
    </div>

    <Sparkle className="absolute top-4 left-[22%] w-3 md:w-5 text-primary animate-twinkle" />
    <Sparkle className="absolute bottom-3 left-[68%] w-4 md:w-6 text-primary animate-twinkle" style={{ animationDelay: '1.4s' }} />
    <Sparkle className="absolute top-6 left-[88%] w-3 md:w-4 text-foreground animate-twinkle" style={{ animationDelay: '2.2s' }} />
  </div>
)

export default SectionBreak
