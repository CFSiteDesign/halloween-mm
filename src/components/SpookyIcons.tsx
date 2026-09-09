import type { SVGProps } from 'react'

/* Hand-drawn SVG spooks: pure vector, no image requests, scale to any size. */

export const Bat = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 120 40" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M60 14 L10 2 L16 32 Q21 20 28 28 Q34 18 42 26 Q50 18 58 24 Z" />
    <path d="M60 14 L110 2 L104 32 Q99 20 92 28 Q86 18 78 26 Q70 18 62 24 Z" />
    <ellipse cx="60" cy="20" rx="7" ry="10" />
    <path d="M54 12 L52 2 L59 10 Z" />
    <path d="M66 12 L68 2 L61 10 Z" />
  </svg>
)

export const Cobweb = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true" {...props}>
    <path d="M0 0 L100 0M0 0 L96 28M0 0 L78 58M0 0 L58 78M0 0 L28 96M0 0 L0 100" />
    <path d="M30 0 Q9 9 0 30" />
    <path d="M56 0 Q17 17 0 56" />
    <path d="M82 0 Q25 25 0 82" />
    <path d="M100 4 Q33 33 4 100" />
  </svg>
)

export const Sparkle = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 0C13.1 7 17 10.9 24 12c-7 1.1-10.9 5-12 12-1.1-7-5-10.9-12-12C7 10.9 10.9 7 12 0Z" />
  </svg>
)

export const Ghost = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 80" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M32 2C16.5 2 6 13.5 6 29v45c0 3 3.3 4.6 5.6 2.8L20 70l7.2 6.3c2.7 2.3 6.9 2.3 9.6 0L44 70l8.4 6.8c2.3 1.8 5.6.2 5.6-2.8V29C58 13.5 47.5 2 32 2Z" />
    <circle cx="23" cy="30" r="4.5" fill="#0B0410" />
    <circle cx="42" cy="30" r="4.5" fill="#0B0410" />
    <path d="M27 44c3 3 7 3 10 0" stroke="#0B0410" strokeWidth="3" fill="none" strokeLinecap="round" />
  </svg>
)

export const Moon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M40 2a30 30 0 1 0 22 38A24 24 0 0 1 40 2Z" />
  </svg>
)

export const Skull = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M32 4C18 4 8 14 8 28c0 8 4 13 8 16v8a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4v-8c4-3 8-8 8-16C56 14 46 4 32 4Z" />
    <circle cx="22" cy="28" r="7" fill="#0B0410" />
    <circle cx="42" cy="28" r="7" fill="#0B0410" />
    <path d="M32 38l-4 7h8l-4-7Z" fill="#0B0410" />
    <path d="M24 50v6M32 50v6M40 50v6" stroke="#0B0410" strokeWidth="2.5" />
  </svg>
)
