import { getAsset } from '@/lib/images'
import { Bat, Sparkle } from '@/components/SpookyIcons'

const madMonkeyLogo = getAsset('mad-monkey-logo.svg')
const wordmark = getAsset('hero-wordmark.webp')

const SOCIALS = [
  { name: 'Instagram', url: 'https://www.instagram.com/madmonkeyhostels/' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@madmonkeyhostels' },
  { name: 'Facebook', url: 'https://www.facebook.com/MadMonkeyHostels' },
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UCkUGlFdhp5Ndk68j_QRS1kw' },
  { name: 'Website', url: 'https://madmonkeyhostels.com' },
]

const FooterSection = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* final call */}
      <div className="relative py-14 md:py-24 px-4 md:px-12 text-center">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse 70% 70% at 50% 100%, rgba(255,21,76,0.25) 0%, transparent 65%)',
          }}
        />
        <Bat className="absolute top-6 left-[12%] w-12 md:w-20 text-foreground/20 animate-float" aria-hidden="true" />
        <Bat className="absolute top-10 right-[10%] w-10 md:w-16 text-foreground/20 animate-float-reverse" aria-hidden="true" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          {wordmark && (
            <img src={wordmark} alt="Halloween Party" className="w-full max-w-md md:max-w-xl mb-6 md:mb-8" />
          )}
          <p className="font-display uppercase text-2xl md:text-5xl leading-[0.9] mb-6 md:mb-8">
            Saturday 31 October
            <span className="block text-primary text-blood-glow">Every Mad Monkey</span>
          </p>
          <a
            href="#hostels"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-display uppercase text-lg md:text-2xl px-9 py-4 md:px-14 md:py-5 bone-border blood-shadow-sm lift-hover tracking-wide"
          >
            <Sparkle className="w-4 md:w-6" />
            Find your party
          </a>
        </div>
      </div>

      {/* footer proper */}
      <div className="border-t-2 border-foreground/20 py-8 md:py-12 px-4 md:px-12" style={{ backgroundColor: 'hsl(282 46% 8%)' }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 md:gap-8">
          {madMonkeyLogo ? (
            <img
              src={madMonkeyLogo}
              alt="Mad Monkey Hostels"
              className="w-40 md:w-56"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          ) : (
            <span className="font-display uppercase text-3xl tracking-[0.2em]">Mad Monkey</span>
          )}

          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {SOCIALS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-black uppercase text-[11px] md:text-sm px-3 md:px-4 py-1.5 border-2 border-foreground/30 hover:border-primary hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-foreground/40 text-center">
            © 2026 Mad Monkey Hostels · Halloween Party · 31 October
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
