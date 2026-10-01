export interface Property {
  id: string
  name: string
  country: string
  /** Event page on madmonkeyhostels.com. Empty string = not live yet. */
  url: string
}

export type CountryFilter =
  | 'All'
  | 'Cambodia'
  | 'Indonesia'
  | 'Laos'
  | 'Philippines'
  | 'Thailand'
  | 'Vietnam'

export const COUNTRIES: CountryFilter[] = [
  'All',
  'Cambodia',
  'Indonesia',
  'Laos',
  'Philippines',
  'Thailand',
  'Vietnam',
]

/**
 * ── TURNING THE LINKS ON ───────────────────────────────────────────────
 * Every card shows "COMING SOON" until LINKS_LIVE is true. The event pages
 * went live on madmonkeyhostels.com on 1 Oct 2026, so this is now true and
 * every card links to /tours-events/halloween-party-mad-monkey-<slug>.
 * Siargao uses a different slug, so it sits in OVERRIDES. Anything listed in
 * NO_PAGE_YET has no event page at all and stays on "COMING SOON".
 */
export const LINKS_LIVE = true

const EVENT_SLUG = 'halloween-party'

const OVERRIDES: Record<string, string> = {
  siargao: 'https://madmonkeyhostels.com/tours-events/halloween-event-mad-monkey-siargao',
}

/** Properties Charlie has not sent an event page for yet. */
const NO_PAGE_YET = new Set(['kampot'])

const RAW: Array<[id: string, name: string, country: CountryFilter, slug: string]> = [
  ['koh-rong', 'Koh Rong', 'Cambodia', 'koh-rong'],
  ['koh-sdach', 'Koh Sdach', 'Cambodia', 'koh-sdach'],
  ['phnom-penh', 'Phnom Penh', 'Cambodia', 'phnom-penh'],
  ['siem-reap', 'Siem Reap', 'Cambodia', 'siem-reap'],
  ['kampot', 'Kampot', 'Cambodia', 'kampot'],
  ['gili-t', 'Gili T', 'Indonesia', 'gili-trawangan'],
  ['kuta-lombok', 'Kuta Lombok', 'Indonesia', 'kuta-lombok'],
  ['nusa-lembongan', 'Nusa Lembongan', 'Indonesia', 'nusa-lembongan'],
  ['uluwatu', 'Uluwatu', 'Indonesia', 'ulu-watu'],
  ['luang-prabang', 'Luang Prabang', 'Laos', 'luang-prabang'],
  ['vang-vieng', 'Vang Vieng', 'Laos', 'vang-vieng'],
  ['dumaguete', 'Dumaguete', 'Philippines', 'dumaguete'],
  ['manila', 'Manila', 'Philippines', 'manila'],
  ['nacpan-beach', 'Nacpan Beach', 'Philippines', 'nacpan'],
  ['panglao', 'Panglao', 'Philippines', 'panglao'],
  ['siargao', 'Siargao', 'Philippines', 'siargao'],
  ['siquijor', 'Siquijor', 'Philippines', 'siquijor'],
  ['bangkok', 'Bangkok', 'Thailand', 'bangkok'],
  ['chiang-mai', 'Chiang Mai', 'Thailand', 'chiang-mai'],
  ['pai', 'Pai', 'Thailand', 'pai'],
  ['phuket', 'Phuket', 'Thailand', 'phuket'],
  ['hanoi', 'Hanoi', 'Vietnam', 'hanoi'],
  ['hoi-an', 'Hoi An', 'Vietnam', 'hoi-an'],
]

export const PROPERTIES: Property[] = RAW.map(([id, name, country, slug]) => ({
  id,
  name,
  country,
  url:
    LINKS_LIVE && !NO_PAGE_YET.has(id)
      ? OVERRIDES[id] ?? `https://madmonkeyhostels.com/tours-events/${EVENT_SLUG}-mad-monkey-${slug}`
      : '',
}))
