import { useState } from 'react'
import { Cobweb } from '@/components/SpookyIcons'

const FAQS = [
  {
    q: 'When is it?',
    a: 'Saturday 31 October. Doors and drink deals from early evening, DJs until the bar closes.',
  },
  {
    q: 'Do I need a ticket?',
    a: 'Entry is free for Mad Monkey guests. Some properties run a paid pub crawl wristband that covers entry and a shot at every stop. Check your hostel for the local details.',
  },
  {
    q: 'Do I have to dress up?',
    a: 'You do not have to. You will regret it though. Costumes get looked after first at the bar and the photographer will find you either way.',
  },
  {
    q: 'Which hostels are running it?',
    a: 'Every Mad Monkey across Cambodia, Indonesia, Laos, the Philippines, Thailand and Vietnam. Pick yours in the list above.',
  },
  {
    q: 'Can non-guests come?',
    a: 'Yes at most properties, subject to capacity on the night. If you want a guaranteed spot, book a bed and stay with us.',
  },
  {
    q: 'What are the drink deals?',
    a: 'Buckets, two for one cocktails and Halloween shots. Exact deals vary by property and land on your hostel event page closer to the night.',
  },
]

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="relative py-14 md:py-24 px-4 md:px-12 overflow-hidden"
      style={{ backgroundColor: 'hsl(282 46% 8%)' }}
    >
      <Cobweb className="absolute top-0 left-0 w-28 md:w-48 text-foreground/10" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="font-display uppercase text-center leading-[0.9] mb-8 md:mb-14" style={{ fontSize: 'clamp(2.4rem, 8vw, 5rem)' }}>
          Questions <span className="text-primary text-blood-glow">from the crypt</span>
        </h2>

        <div className="flex flex-col gap-3 md:gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q} className="bg-background bone-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left p-4 md:p-6 hover:bg-muted transition-colors"
                >
                  <span className="font-display uppercase text-xl md:text-3xl">{faq.q}</span>
                  <span
                    className={`shrink-0 font-display text-2xl md:text-4xl text-primary transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-lg font-semibold text-foreground/75 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
