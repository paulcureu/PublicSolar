import type { StaticImageData } from 'next/image';
import acoperis from '@/assets/images/acoperis-panouri.jpg';
import echipa from '@/assets/images/echipa-solarmount.jpg';
import ueLogos from '@/assets/images/logo-ue-guvern-mysmis.png';
import parteneri from '@/assets/images/parteneri-solarmount.jpg';

export type Category = 'peo' | 'see' | 'caz';

export const categories: Array<{ id: 'toate' | Category; label: string }> = [
  { id: 'toate', label: 'Toate' },
  { id: 'peo', label: 'Educație și Ocupare' },
  { id: 'see', label: 'Granturi SEE' },
  { id: 'caz', label: 'Studii de caz' },
];

export type Block =
  | { type: 'p'; text: string }
  | { type: 'intro'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'stats'; items: Array<{ value: string; label: string }> }
  | { type: 'callout'; text: string }
  | { type: 'docs'; items: Array<{ type: string; name: string; file: string }> }
  | { type: 'link'; text: string; href: string };

export type Post = {
  slug: string;
  category: Category;
  categoryLabel: string;
  date: string; // ISO
  dateLabel: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  excerpt: string;
  image: StaticImageData;
  imageAlt: string;
  imageKind: 'photo' | 'logos';
  href?: string; // pentru studiile de caz cu pagină proprie
  funding: 'eu' | 'norway' | null;
  facts: Array<{ label: string; value: string }>;
  body: Block[];
  readingMinutes: number;
};

export const posts: Post[] = [
  {
    slug: 'concurs-planuri-de-afaceri',
    category: 'peo',
    categoryLabel: 'Educație și Ocupare',
    date: '2025-05-29',
    dateLabel: '29.05.2025',
    title: 'Anunț lansare concurs de',
    titleAccent: 'planuri de afaceri',
    subtitle: 'Proiectul „Antreprenoriat social în mediul urban, regiunea Sud-Est”, cod MySMIS 308377.',
    excerpt: 'Depunere: 01.06–14.07.2025. 21 de afaceri sociale finanțate, minim 136 de locuri de muncă noi.',
    image: ueLogos,
    imageAlt: 'Cofinanțat de Uniunea Europeană, Guvernul României, MySMIS 2021',
    imageKind: 'logos',
    funding: 'eu',
    readingMinutes: 4,
    facts: [
      { label: 'Beneficiar', value: 'Public Creation S.R.L.' },
      { label: 'Parteneri', value: 'Asociația Euroacademia · Fundația EMMA' },
      { label: 'Cod MySMIS', value: '308377' },
      { label: 'Program', value: 'Educație și Ocupare · Prioritatea 4' },
      { label: 'Depunere planuri', value: '01.06.2025 – 14.07.2025' },
    ],
    body: [
      {
        type: 'intro',
        text: 'În calitate de Beneficiar, Public Creation S.R.L., împreună cu partenerii Asociația Euroacademia și Fundația EMMA, derulează proiectul „Antreprenoriat social în mediul urban, regiunea Sud-Est”.',
      },
      {
        type: 'p',
        text: 'Începând cu 1 iunie 2025 se deschide sesiunea de depunere a dosarelor pentru concursul de planuri de afaceri. Depunerea se derulează până la 14 iulie 2025, în formatul standard publicat în metodologia de selecție.',
      },
      {
        type: 'stats',
        items: [
          { value: '21', label: 'Planuri finanțate' },
          { value: '136', label: 'Locuri de muncă, min.' },
          { value: '13 luni', label: 'Menținere' },
        ],
      },
      { type: 'h2', text: 'Cine poate participa' },
      {
        type: 'p',
        text: 'Doar persoanele care au urmat cursurile de formare antreprenorială organizate în proiect și au obținut certificatul de absolvire specific economiei sociale — Antreprenor în economia socială, cod COR 112032.',
      },
      { type: 'h2', text: 'Ce se finanțează' },
      {
        type: 'p',
        text: 'Prin schema de minimis se vor finanța 21 de planuri de afaceri inovative în sectorul social. Afacerile subvenționate vor crea minim 136 de locuri de muncă noi, menținute cel puțin 13 luni după finalizarea sprijinului financiar.',
      },
      {
        type: 'callout',
        text: 'Finanțările acordate reprezintă ajutoare de minimis în cadrul Schemei „Sprijin pentru înființarea de întreprinderi sociale”, aprobată prin Ordinul MFE nr. 772/03.08.2018.',
      },
      { type: 'h2', text: 'Documente' },
      {
        type: 'docs',
        items: [
          { type: 'PDF', name: 'Anunț lansare concurs', file: '/docs/ANUNT-Identitate-vizuala.pdf' },
          { type: 'PDF', name: 'Metodologie concurs planuri de afaceri', file: '/docs/Metodologie_concurs-plan-afaceri_ID-308377.pdf' },
          { type: 'RAR', name: 'Arhivă anexe', file: '/docs/Anexe.rar' },
          { type: 'PDF', name: 'Lista planurilor de afaceri — etapa 1', file: '/docs/Lista-PA-etapa-1.pdf' },
          { type: 'XLS', name: 'Lista planurilor de afaceri admise — etapa 1 (Excel)', file: '/docs/Lista-PA-admise-etapa-1.xlsx' },
          { type: 'PDF', name: 'Lista planurilor de afaceri — etapa 2', file: '/docs/Lista-PA-etapa-2-1.pdf' },
          { type: 'PDF', name: 'Planuri de afaceri admise pentru finanțare', file: '/docs/Lista-PA-admise-pt-finantare.pdf' },
          { type: 'PDF', name: 'Planuri de afaceri — rezervă', file: '/docs/Lista-PA-rezerva.pdf' },
        ],
      },
    ],
  },
  {
    slug: 'finalizare-proiecte-norvegiene',
    category: 'see',
    categoryLabel: 'Granturi SEE & Norvegiene',
    date: '2025-03-03',
    dateLabel: '03.03.2025',
    title: 'Finalizare proiect',
    titleAccent: 'SolarMount',
    subtitle: '„SolarMount Capacity Initiative — un studiu de fezabilitate pentru producția locală de sisteme de montaj PV”.',
    excerpt: 'Studiul de fezabilitate pentru producția locală de sisteme de montaj PV a fost finalizat.',
    image: echipa,
    imageAlt: 'Echipele partenere în proiectul SolarMount Capacity Initiative',
    imageKind: 'photo',
    funding: 'norway',
    readingMinutes: 3,
    facts: [
      { label: 'Promotor', value: 'Public Creation S.R.L.' },
      { label: 'Parteneri', value: 'Synesis Partners S.R.L. · Noveltex Oslo AS' },
      { label: 'Finanțator', value: 'EEA and Norway Grants 2014–2021, Innovation Norway' },
      { label: 'Valoare totală', value: '156.728 €' },
      { label: 'Valoarea grantului', value: '126.200 € (80,52%)' },
    ],
    body: [
      {
        type: 'intro',
        text: 'Suntem încântați să anunțăm finalizarea proiectului „SolarMount Capacity Initiative — un studiu de fezabilitate pentru producția locală de sisteme de montaj PV”.',
      },
      {
        type: 'p',
        text: 'Inițiativa este o colaborare între promotorul de proiect Public Creation S.R.L. și partenerii săi, Synesis Partners S.R.L. și Noveltex Oslo AS. Proiectul a vizat realizarea unui studiu de fezabilitate având ca rezultat principal stabilirea unei unități de producție pentru sisteme de montaj pentru infrastructuri fotovoltaice din România.',
      },
      {
        type: 'stats',
        items: [
          { value: '156.728 €', label: 'Valoare totală' },
          { value: '126.200 €', label: 'Valoarea grantului' },
          { value: '80,52%', label: 'Intensitate finanțare' },
        ],
      },
      { type: 'h2', text: 'Ce a arătat studiul' },
      {
        type: 'p',
        text: 'Analiza pieței indică faptul că sistemele de montaj fotovoltaic pentru acoperișuri reprezintă cea mai viabilă oportunitate de producție. Odată cu tranziția globală către energie regenerabilă și creșterea adopției soluțiilor solare în sectoarele rezidențial și comercial, cererea pentru aceste sisteme este susținută de eficiența utilizării spațiului, ușurința instalării și compatibilitatea cu infrastructura urbană.',
      },
      { type: 'callout', text: 'Autoritatea finanțatoare: EEA and Norway Grants 2014–2021 prin Innovation Norway.' },
      { type: 'link', text: 'Detalii despre program: eea.innovationnorway.com', href: 'https://eea.innovationnorway.com/' },
    ],
  },
  {
    slug: 'lansare-proiecte-norvegiene',
    category: 'see',
    categoryLabel: 'Granturi SEE & Norvegiene',
    date: '2024-11-04',
    dateLabel: '04.11.2024',
    title: 'Lansare proiect',
    titleAccent: 'SolarMount',
    subtitle: 'Un studiu de fezabilitate pentru producția locală de sisteme de montaj PV, cu parteneri din Norvegia.',
    excerpt: 'Public Creation, Synesis Partners și Noveltex Oslo AS, cu finanțare Innovation Norway.',
    image: parteneri,
    imageAlt: 'Reprezentanții partenerilor proiectului SolarMount',
    imageKind: 'photo',
    funding: 'norway',
    readingMinutes: 2,
    facts: [
      { label: 'Promotor', value: 'Public Creation S.R.L.' },
      { label: 'Parteneri', value: 'Synesis Partners S.R.L. · Noveltex Oslo AS' },
      { label: 'Început', value: '25.09.2024' },
      { label: 'Finalizare', value: '28.02.2025' },
      { label: 'Finanțator', value: 'EEA and Norway Grants 2014–2021, Innovation Norway' },
    ],
    body: [
      {
        type: 'intro',
        text: 'Suntem încântați să anunțăm lansarea proiectului „SolarMount Capacity Initiative — un studiu de fezabilitate pentru producția locală de sisteme de montaj PV”, care începe oficial la data de 25.09.2024. Data de finalizare: 28.02.2025.',
      },
      {
        type: 'p',
        text: 'Inițiativa este o colaborare între promotorul de proiect Public Creation S.R.L. și partenerii săi, Synesis Partners S.R.L. și Noveltex Oslo AS, și vizează realizarea unui studiu de fezabilitate având ca rezultat principal stabilirea unei unități de producție pentru sisteme de montaj pentru infrastructuri fotovoltaice din România.',
      },
      {
        type: 'p',
        text: 'Studiul va conduce la realizarea unei infrastructuri care urmărește reducerea impactului negativ asupra mediului și promovarea dezvoltării durabile.',
      },
      { type: 'callout', text: 'Autoritatea finanțatoare: EEA and Norway Grants 2014–2021 prin Innovation Norway.' },
      { type: 'link', text: 'Detalii despre program: eea.innovationnorway.com', href: 'https://eea.innovationnorway.com/' },
    ],
  },
  {
    slug: 'programul-educatie-si-ocupare',
    category: 'peo',
    categoryLabel: 'Educație și Ocupare',
    date: '2024-10-22',
    dateLabel: '22.10.2024',
    title: 'Antreprenoriat social',
    titleAccent: 'în Sud-Est',
    subtitle: 'Proiect finanțat prin Programul Educație și Ocupare, Prioritatea 4 — Antreprenoriat și economie socială.',
    excerpt: 'Proiect finanțat prin Programul Educație și Ocupare, Prioritatea 4.',
    image: ueLogos,
    imageAlt: 'Cofinanțat de Uniunea Europeană, Guvernul României, MySMIS 2021',
    imageKind: 'logos',
    funding: 'eu',
    readingMinutes: 2,
    facts: [
      { label: 'Program', value: 'Programul Educație și Ocupare' },
      { label: 'Prioritate', value: '4. Antreprenoriat și economie socială' },
      { label: 'Acțiune', value: '4.a.2 Sprijin pentru dezvoltarea antreprenoriatului' },
      { label: 'Cod apel', value: 'PEO/103/PEO_P4/OP4/ESO4.1/PEO_A52/308377' },
    ],
    body: [
      {
        type: 'intro',
        text: 'Public Creation S.R.L. implementează proiectul „Antreprenoriat social în mediul urban, regiunea Sud-Est”, finanțat prin Programul Educație și Ocupare.',
      },
      { type: 'h2', text: 'Obiectivul specific' },
      {
        type: 'p',
        text: 'Îmbunătățirea accesului la piața muncii și măsuri de activare pentru toate persoanele aflate în căutarea unui loc de muncă — în special tineri, șomeri de lungă durată, grupuri defavorizate și persoane inactive — precum și promovarea activităților independente și a economiei sociale.',
      },
      {
        type: 'callout',
        text: 'Acțiunea 4.a.2 — Sprijin pentru dezvoltarea antreprenoriatului. Cod apel: PEO/103/PEO_P4/OP4/ESO4.1/PEO_A52/308377.',
      },
      { type: 'h2', text: 'Documente' },
      {
        type: 'docs',
        items: [
          { type: 'PDF', name: 'Anunț lansare proiect', file: '/docs/ANUNT-Identitate-vizuala.pdf' },
          { type: 'PDF', name: 'Metodologie de selecție a grupului țintă', file: '/docs/Metodologie-selectie-GT.pdf' },
        ],
      },
    ],
  },
];

export const caseStudy = {
  category: 'caz' as Category,
  categoryLabel: 'Studiu de caz',
  dateLabel: 'RePowerEU',
  title: '949 de sisteme cu baterii pentru persoane vulnerabile',
  excerpt: 'Minim 3 kW și stocare LiFePO4 la fiecare beneficiar. 2.316 t CO₂ evitate.',
  image: acoperis,
  imageAlt: 'Panouri fotovoltaice pe acoperiș, la apus',
  href: '/repowereu',
};

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
