import { getAsset } from '@/lib/images'
import FloatingSpooks from '@/components/FloatingSpooks'
import { Moon, Sparkle } from '@/components/SpookyIcons'

const wordmark = getAsset('hero-wordmark.webp')
const vampMouth = getAsset('vamp-mouth.webp')
const madMonkeyLogo = getAsset('mad-monkey-logo.svg')

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 md:px-8 pt-8 pb-14 md:pt-10 md:pb-16 overflow-hidden">
      {/* blood spotlight + moon glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 50% 30%, rgba(255,21,76,0.22) 0%, transparent 62%), radial-gradient(ellipse 60% 50% at 80% 8%, rgba(181,123,255,0.16) 0%, transparent 60%)',
        }}
      />
      <Moon className="absolute top-8 right-6 md:top-14 md:right-16 w-16 md:w-28 text-foreground/25 animate-flicker" />

      <FloatingSpooks />

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center">
        {madMonkeyLogo ? (
          <img
            src={madMonkeyLogo}
            alt="Mad Monkey Hostels"
            className="w-24 md:w-36 mb-4 md:mb-6"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        ) : (
          <span className="font-display uppercase tracking-[0.3em] text-base md:text-xl mb-6 md:mb-8">
            Mad Monkey
          </span>
        )}

        {/* vamp mouth */}
        {vampMouth && (
          <img
            src={vampMouth}
            alt=""
            aria-hidden="true"
            className="w-[74%] max-w-md md:max-w-xl max-h-[24vh] object-contain animate-float animate-pulse-glow select-none pointer-events-none"
          />
        )}

        {/* the wordmark */}
        {wordmark ? (
          <img
            src={wordmark}
            alt="Halloween Party"
            className="relative z-10 w-full max-w-2xl max-h-[28vh] object-contain -mt-2 md:-mt-4"
            style={{ filter: 'drop-shadow(0 10px 40px rgba(255,21,76,0.45))' }}
          />
        ) : (
          <h1 className="font-display uppercase leading-[0.9] text-primary text-blood-glow" style={{ fontSize: 'clamp(3.5rem, 16vw, 11rem)' }}>
            Halloween<span className="block text-foreground text-[0.35em]">party</span>
          </h1>
        )}

        {/* date tape */}
        <div className="mt-4 md:mt-6 inline-flex items-center gap-2 md:gap-3 bg-primary text-primary-foreground font-display uppercase text-sm md:text-2xl tracking-wide px-5 py-2 md:px-8 md:py-3 -rotate-2 bone-border">
          <Sparkle className="w-3 md:w-5" />
          Saturday 31 October
          <Sparkle className="w-3 md:w-5" />
        </div>

        <p className="mt-4 md:mt-6 max-w-2xl text-sm md:text-lg font-bold leading-relaxed text-foreground/80">
          One night. Every Mad Monkey. Live DJs until the lights come up, drink deals that make
          bad decisions cheap, and a pub crawl through the dark. Dress up. It is not optional.
        </p>

        <div className="mt-6 md:mt-8 w-full flex flex-col sm:flex-row gap-3 md:gap-5 justify-center">
          <a
            href="#hostels"
            className="bg-primary text-primary-foreground font-display uppercase text-lg md:text-2xl px-8 py-4 md:px-12 md:py-5 bone-border blood-shadow-sm lift-hover tracking-wide"
          >
            Find your party
          </a>
          <a
            href="#lineup"
            className="bg-transparent text-foreground font-display uppercase text-lg md:text-2xl px-8 py-4 md:px-12 md:py-5 bone-border hover:bg-foreground hover:text-background transition-colors tracking-wide"
          >
            What is going down
          </a>
        </div>
      </div>

      <a
        href="#lineup"
        className="absolute bottom-5 md:bottom-7 left-1/2 -translate-x-1/2 z-10 text-[10px] md:text-xs font-black uppercase tracking-[0.35em] text-foreground/50 hover:text-primary transition-colors"
      >
        Scroll if you dare
      </a>
    </section>
  )
}

export default HeroSection
