import { useMemo, useState } from 'react'
import { PROPERTIES, COUNTRIES, type CountryFilter } from '@/data/properties'
import FloatingSpooks from '@/components/FloatingSpooks'
import { Bat } from '@/components/SpookyIcons'

const PropertySelector = () => {
  const [filter, setFilter] = useState<CountryFilter>('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return PROPERTIES.filter((p) => {
      const matchesCountry = filter === 'All' || p.country === filter
      const matchesSearch =
        !term || p.name.toLowerCase().includes(term) || p.country.toLowerCase().includes(term)
      return matchesCountry && matchesSearch
    })
  }, [filter, search])

  return (
    <section id="hostels" className="relative py-14 md:py-24 overflow-hidden">
      <FloatingSpooks webs={false} />

      <div className="relative z-10 px-4 md:px-12 max-w-7xl mx-auto">
        <h2 className="font-display uppercase text-center leading-[0.9] mb-3 md:mb-4" style={{ fontSize: 'clamp(2.6rem, 9vw, 7rem)' }}>
          Pick your <span className="text-primary text-blood-glow">haunt</span>
        </h2>
        <p className="text-center text-xs md:text-base font-bold uppercase tracking-[0.25em] text-foreground/50 mb-8 md:mb-12">
          23 hostels. One night. Choose wisely
        </p>

        <div className="sticky top-0 z-20 py-3 md:py-4 bg-background/95 backdrop-blur-sm">
          <div className="flex flex-col gap-3 md:gap-5">
            <input
              type="text"
              placeholder="SEARCH LOCATION..."
              aria-label="Search location"
              className="w-full p-4 md:p-5 text-base md:text-xl font-black uppercase bone-border bg-card text-foreground placeholder:text-foreground/35 outline-none focus:border-primary transition-colors"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="flex overflow-x-auto pb-2 gap-2 md:gap-3 no-scrollbar">
              {COUNTRIES.map((country) => (
                <button
                  key={country}
                  onClick={() => setFilter(country)}
                  className={`whitespace-nowrap px-4 md:px-7 py-2 md:py-3 font-black uppercase text-xs md:text-base bone-border transition-all ${
                    filter === country
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-foreground hover:bg-muted'
                  }`}
                >
                  {country}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {filtered.length > 0 ? (
            filtered.map((prop) => (
              <div key={prop.id} className="bg-card bone-border blood-shadow-sm card-hover flex flex-col p-5 md:p-7 group">
                <div className="flex justify-between items-start mb-5 md:mb-8">
                  <span className="bg-primary text-primary-foreground px-2 md:px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-wider">
                    {prop.country}
                  </span>
                  <Bat className="w-14 md:w-16 text-foreground/40 group-hover:text-primary transition-colors" />
                </div>

                <h3 className="font-display uppercase text-3xl md:text-4xl mb-6 md:mb-10 flex-grow group-hover:text-primary transition-colors">
                  {prop.name}
                </h3>

                {prop.url ? (
                  <a
                    href={prop.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-primary text-primary-foreground font-display uppercase tracking-wide py-3 md:py-4 bone-border text-base md:text-lg hover:bg-foreground hover:text-background transition-colors"
                  >
                    Get on the list
                  </a>
                ) : (
                  <span className="block w-full text-center bg-muted text-foreground/50 font-display uppercase tracking-wide py-3 md:py-4 bone-border border-foreground/25 text-base md:text-lg cursor-not-allowed">
                    Coming soon
                  </span>
                )}
              </div>
            ))
          ) : (
            <p className="col-span-full text-center font-display uppercase text-2xl md:text-4xl text-foreground/50 py-12">
              Nothing haunting that name. Try again.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default PropertySelector
