import { useEffect, useRef, useState } from 'react'
import { getAsset } from '@/lib/images'
import FloatingSpooks from '@/components/FloatingSpooks'
import { Bat } from '@/components/SpookyIcons'

type Card = {
  title: string
  badge: string
  description: string
  image?: string
  rotate: string
}

const CARDS: Card[] = [
  {
    title: 'Live DJ',
    badge: 'Til the lights come up',
    description:
      'Resident DJs and guest sets running all night. Halloween anthems, dirty basslines and the odd Monster Mash, because you asked for it.',
    image: getAsset('card-dj.webp'),
    rotate: '-rotate-2',
  },
  {
    title: 'Drink Deals',
    badge: 'Cheap and nasty',
    description:
      'Blood-red buckets, two for one cocktails and shots that glow. Come in costume and the bar looks after you first.',
    image: getAsset('card-drinks.webp'),
    rotate: 'rotate-2',
  },
  {
    title: 'Pub Crawl',
    badge: 'Follow the screams',
    description:
      'The Mad Monkey crawl heads out into the dark. Bar to bar with the crew, a shot at every stop, and the kind of night nobody photographs well.',
    image: getAsset('card-crawl.webp'),
    rotate: '-rotate-1',
  },
]

const LineupCard = ({ card }: { card: Card }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setSeen(e.isIntersecting), { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className="bg-card bone-border blood-shadow-sm card-hover p-4 md:p-6 group">
      <div className="aspect-[4/3] bone-border mb-4 md:mb-6 overflow-hidden relative bg-muted">
        {card.image ? (
          <img
            src={card.image}
            alt={card.title}
            loading="lazy"
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
              seen ? 'scale-100' : 'scale-105'
            }`}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background:
                'radial-gradient(circle at 50% 25%, rgba(255,21,76,0.55) 0%, rgba(26,10,36,1) 70%)',
            }}
          >
            <Bat className="w-40 md:w-48 text-foreground/80" />
          </div>
        )}
        <span
          className={`absolute top-2 left-2 md:top-3 md:left-3 bg-primary text-primary-foreground font-black uppercase text-[10px] md:text-xs px-2 py-1 ${card.rotate}`}
        >
          {card.badge}
        </span>
      </div>

      <h3 className="font-display uppercase text-3xl md:text-4xl mb-2 md:mb-3 text-foreground group-hover:text-primary transition-colors">
        {card.title}
      </h3>
      <p className="text-sm md:text-base font-semibold leading-relaxed text-foreground/75">
        {card.description}
      </p>
    </div>
  )
}

const LineupSection = () => {
  return (
    <section id="lineup" className="relative py-14 md:py-24 px-4 md:px-12 overflow-hidden">
      <FloatingSpooks webs={false} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="font-display uppercase text-center leading-[0.9] mb-3 md:mb-4" style={{ fontSize: 'clamp(2.6rem, 9vw, 7rem)' }}>
          What is <span className="text-primary text-blood-glow">going down</span>
        </h2>
        <p className="text-center text-xs md:text-base font-bold uppercase tracking-[0.25em] text-foreground/50 mb-10 md:mb-16">
          Three reasons to leave the dorm
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {CARDS.map((card) => (
            <LineupCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LineupSection
