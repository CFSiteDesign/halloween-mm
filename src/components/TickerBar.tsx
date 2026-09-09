const WORDS = ['Live DJs', 'Drink Deals', 'Pub Crawl', '31 October', 'Costumes On', 'All Monkeys']

type Props = {
  reverse?: boolean
}

const TickerBar = ({ reverse = false }: Props) => {
  const strip = [...WORDS, ...WORDS, ...WORDS, ...WORDS]

  return (
    <div className="relative w-full bg-primary text-primary-foreground border-y-2 border-foreground overflow-hidden py-2 md:py-3">
      <div
        className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        aria-hidden="true"
      >
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0">
            {strip.map((word, i) => (
              <span
                key={`${half}-${i}`}
                className="font-display uppercase text-lg md:text-3xl tracking-wide px-4 md:px-7 whitespace-nowrap"
              >
                {word}
                <span className="ml-4 md:ml-7 text-foreground">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
      <span className="sr-only">Live DJs, drink deals and a pub crawl on 31 October</span>
    </div>
  )
}

export default TickerBar
