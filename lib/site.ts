export const site = {
  name: 'Public Solar',
  company: 'Public Creation S.R.L.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.publicsolar.ro',
  phone: '+40 746 333 332',
  phoneShort: '0746 333 332',
  phoneHref: 'tel:+40746333332',
  email: 'publicsolar@yahoo.com',
  address: 'Șos. Brăilei nr. 6, Buzău',
  addressFull: 'Șos. Brăilei nr. 6, Buzău, România',
  hours: 'Luni–Vineri, 08:00–16:00',
  mapsHref: 'https://maps.google.com/?q=Soseaua+Brailei+6+Buzau',
  youtube: 'https://www.youtube.com/@publicsolarenergy',
  facebook: 'https://www.facebook.com/',
  tiktok: 'https://www.tiktok.com/',
};

export type NavItem = { id: string; label: string; href: string; match: string[] };

export const nav: NavItem[] = [
  { id: 'acasa', label: 'Acasă', href: '/', match: ['/'] },
  {
    id: 'programe',
    label: 'Programe',
    href: '/programe',
    match: ['/programe', '/simulator-casa-verde-baterii-2026', '/inscriere-casa-verde', '/voucher-baterii', '/programe-pentru-imm'],
  },
  { id: 'proiecte', label: 'Proiecte', href: '/proiecte', match: ['/proiecte', '/repowereu'] },
  { id: 'energie', label: 'Energie solară', href: '/energie-solara', match: ['/energie-solara'] },
  { id: 'despre', label: 'Despre noi', href: '/despre-noi', match: ['/despre-noi'] },
  { id: 'contact', label: 'Contact', href: '/contact', match: ['/contact'] },
];

export const programLinks = [
  { label: 'Simulator Casa Verde Baterii', href: '/simulator-casa-verde-baterii-2026' },
  { label: 'Înscriere Casa Verde', href: '/inscriere-casa-verde' },
  { label: 'Voucher baterii', href: '/voucher-baterii' },
  { label: 'Programe pentru IMM', href: '/programe-pentru-imm' },
  { label: 'RePowerEU', href: '/repowereu' },
];

export function isActive(item: NavItem, pathname: string) {
  return item.match.some((m) => (m === '/' ? pathname === '/' : pathname === m || pathname.startsWith(m + '/')));
}
