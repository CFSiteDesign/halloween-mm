import { getAsset } from '@/lib/images'
import { Cobweb, Sparkle } from '@/components/SpookyIcons'

const vampMouth = getAsset('vamp-mouth.webp')

const STEPS = [
  {
    time: 'From 8pm',
    title: 'Costume check in',
    copy: 'Pre-drinks at the hostel bar. Face paint, fake blood and a first drink deal while the DJ warms up.',
  },
  {
    time: '9:30pm',
    title: 'The crawl rolls out',
    copy: 'Out into the dark with the crew. Free entry at every stop and a shot waiting on arrival.',
  },
  {
    time: '11pm',
    title: 'Main room, main DJ',
    copy: 'Back to the hostel for the headline set. This is the bit people talk about at breakfast.',
  },
  {
    time: 'Late',
    title: 'No last call',
    copy: 'The music runs until the bar closes. What happens after that is between you and your dorm mates.',
  },
]

const CrawlSection = () => {
  return (
    <section
      id="crawl"
      className="relative py-14 md:py-24 px-4 md:px-12 overflow-hidden"
      style={{ backgroundColor: 'hsl(282 46% 8%)' }}
    >
      <Cobweb className="absolute top-0 right-0 w-28 md:w-48 text-foreground/10 scale-x-[-1]" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-10 md:gap-16 items-start">
        <div className="lg:sticky lg:top-12">
          <h2 className="font-display uppercase leading-[0.9]" style={{ fontSize: 'clamp(2.6rem, 8vw, 5.5rem)' }}>
            How the <span className="text-primary text-blood-glow">night</span> runs
          </h2>
          <p className="mt-4 md:mt-6 text-sm md:text-lg font-semibold text-foreground/70 leading-relaxed">
            Same night, same energy, every Mad Monkey. Timings shift a little by property, so check
            your hostel before you commit to the wig.
          </p>

          {vampMouth && (
            <img
              src={vampMouth}
              alt=""
              aria-hidden="true"
              className="hidden lg:block w-full max-w-sm mt-10 animate-float-reverse opacity-90"
            />
          )}
        </div>

        <ol className="relative flex flex-col gap-5 md:gap-7 border-l-2 border-dashed border-foreground/25 pl-5 md:pl-10">
          {STEPS.map((step, i) => (
            <li key={step.title} className="relative bg-background bone-border p-4 md:p-7 lift-hover">
              <span
                className="absolute -left-[27px] md:-left-[49px] top-6 w-4 h-4 md:w-5 md:h-5 bg-primary bone-border"
                aria-hidden="true"
              />
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-primary text-primary-foreground font-black uppercase text-[10px] md:text-xs px-2 py-1 tracking-widest">
                  {step.time}
                </span>
                <span className="font-black uppercase text-[10px] md:text-xs tracking-[0.3em] text-foreground/40">
                  Stop {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-display uppercase text-2xl md:text-3xl mb-1.5 md:mb-2">{step.title}</h3>
              <p className="text-sm md:text-base font-semibold text-foreground/70 leading-relaxed">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto mt-10 md:mt-16">
        <div className="bg-primary text-primary-foreground bone-border p-5 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-8 -rotate-1">
          <Sparkle className="w-8 md:w-12 shrink-0 animate-twinkle" />
          <p className="font-display uppercase text-xl md:text-3xl leading-tight text-center md:text-left">
            Turn up in costume. Turn up early. The good stuff goes fast.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CrawlSection
