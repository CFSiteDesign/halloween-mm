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
 * Every card shows "COMING SOON" until LINKS_LIVE is true. Once the
 * Halloween event pages exist on madmonkeyhostels.com, flip this to true
 * and every card links to /tours-events/halloween-mad-monkey-<slug>.
 * If a single property needs a different URL, put it in OVERRIDES below.
 */
export const LINKS_LIVE = false

const EVENT_SLUG = 'halloween'

const OVERRIDES: Record<string, string> = {
  // 'siargao': 'https://madmonkeyhostels.com/tours-events/some-other-url',
}

const RAW: Array<[id: string, name: string, country: CountryFilter, slug: string]> = [
  ['koh-rong', 'Koh Rong', 'Cambodia', 'koh-rong'],
  ['koh-sdach', 'Koh Sdach', 'Cambodia', 'koh-sdach'],
  ['phnom-penh', 'Phnom Penh', 'Cambodia', 'phnom-penh'],
  ['siem-reap', 'Siem Reap', 'Cambodia', 'siem-reap'],
  ['kampot', 'Kampot', 'Cambodia', 'kampot'],
  ['gili-t', 'Gili T', 'Indonesia', 'gili-trawangan'],
  ['kuta-lombok', 'Kuta Lombok', 'Indonesia', 'kuta-lombok'],
  ['nusa-lembongan', 'Nusa Lembongan', 'Indonesia', 'nusa-lembongan'],
  ['uluwatu', 'Uluwatu', 'Indonesia', 'uluwatu'],
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
  url: LINKS_LIVE
    ? OVERRIDES[id] ?? `https://madmonkeyhostels.com/tours-events/${EVENT_SLUG}-mad-monkey-${slug}`
    : '',
}))
