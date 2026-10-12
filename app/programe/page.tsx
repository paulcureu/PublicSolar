import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import acoperis from '@/assets/images/acoperis-panouri.jpg';
import { Faq } from '@/components/Faq';
import { Arrow } from '@/components/icons';
import { Breadcrumbs, Btn, Label } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Programe de finanțare — Casa Verde, Voucher baterii, IMM',
  description:
    'Casa Verde Baterii 2026 (până la 15.000 lei), Casa Verde fotovoltaice, voucher baterii RePowerEU și programe pentru IMM. Ne ocupăm de ofertă și de dosar.',
  alternates: { canonical: '/programe' },
};

const programs = [
  {
    href: '/simulator-casa-verde-baterii-2026',
    tags: ['Deschis 2026', 'Persoane fizice'],
    title: (
      <>
        Casa Verde <span className="gold">Baterii</span> 2026
      </>
    ),
    text: 'Până la 15.000 lei de la AFM pentru o baterie de minim 10 kWh, dacă ești deja prosumator.',
    featured: true,
  },
  {
    href: '/inscriere-casa-verde',
    tags: ['Persoane fizice'],
    title: <>Casa Verde — fotovoltaice</>,
    text: 'Lasă-ne datele și te sunăm cu oferta pentru un sistem complet, monofazic sau trifazic.',
  },
  {
    href: '/voucher-baterii',
    tags: ['Prosumatori', 'RePowerEU'],
    title: (
      <>
        Voucher baterii <span className="forest">5.000 €</span>
      </>
    ),
    text: 'Vouchere pentru instalarea de baterii la prosumatorii care au deja panouri.',
  },
  {
    href: '/programe-pentru-imm',
    tags: ['Firme'],
    title: <>Programe pentru IMM</>,
    text: 'Costul cu energia a devenit greu de suportat? Te ajutăm să accesezi programul potrivit firmei tale.',
  },
];

const paths = [
  { n: '01', who: 'Persoană fizică', situation: 'Nu am încă panouri', program: 'Casa Verde fotovoltaice', href: '/inscriere-casa-verde' },
  { n: '02', who: 'Prosumator', situation: 'Am panouri, vreau baterii', program: 'Casa Verde Baterii / Voucher', href: '/simulator-casa-verde-baterii-2026' },
  { n: '03', who: 'Firmă', situation: 'Am facturi mari la energie', program: 'Programe pentru IMM', href: '/programe-pentru-imm' },
];

const faqs = [
  {
    q: 'Cine poate aplica la Casa Verde Baterii 2026?',
    a: 'Persoanele fizice care au deja calitatea de prosumator, au sistemul fotovoltaic racordat la rețea și nu au un sistem de stocare la aceeași adresă.',
  },
  {
    q: 'Care este capacitatea minimă a bateriei?',
    a: '10 kWh. Punctajul pentru capacitate crește până la 20 kWh; peste această valoare nu mai aduce puncte suplimentare.',
  },
  {
    q: 'Cât plătesc eu din investiție?',
    a: 'Finanțarea AFM acoperă cel mult 75% din ofertă și maxim 15.000 lei, deci contribuția ta este de minim 25%. Cu cât contribui mai mult, cu atât crește punctajul.',
  },
  { q: 'Vă ocupați voi de dosar?', a: 'Da. Pregătim oferta conform ghidului, te ajutăm cu înscrierea și ne ocupăm de dosarul de prosumator.' },
  { q: 'Lucrați și cu firme?', a: 'Da. Prin programele pentru IMM montăm sisteme pentru hale, birouri și spații comerciale.' },
];

export default function ProgramePage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Acasă', href: '/' }, { label: 'Programe' }]} />
          <div className="split split--stretch page-head__body">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 40 }}>
              <div>
                <Label>Programe de finanțare</Label>
                <h1 className="display t-h1 mt-md">
                  Energie solară, plătită <span className="forest">parțial de stat.</span>
                </h1>
              </div>
              <div>
                <p className="lead">
                  Ca instalator validat AFM îți spunem ce program ți se potrivește, pregătim oferta conform ghidului și ne
                  ocupăm de dosar.
                </p>
                <div className="btn-row mt-lg">
                  <Btn href="/simulator-casa-verde-baterii-2026">Simulează finanțarea</Btn>
                  <Btn href="#alege" variant="outline" icon={false}>
                    Ce mi se potrivește?
                  </Btn>
                </div>
              </div>
            </div>
            <div className="media cut" style={{ minHeight: 'clamp(360px, 42vw, 560px)' }}>
              <Image src={acoperis} alt="Panouri fotovoltaice pe acoperișul unei clădiri, la apus" fill sizes="(max-width: 900px) 100vw, 50vw" />
              <div className="overlay-panel cut cut-sm" style={{ position: 'absolute', left: 16, right: 16, bottom: 16, alignItems: 'center' }}>
                <div>
                  <div className="mono muted">Instalator validat</div>
                  <div className="display t-h5 mt-xs">AFM · Casa Verde</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head-row" style={{ paddingBottom: 32 }}>
            <h2 className="display t-h3">
              Patru programe. <span className="forest">Un singur partener.</span>
            </h2>
            <span className="mono muted">(04) programe active</span>
          </div>
          {programs.map((p, i) => (
            <Link key={p.href} href={p.href} className={`prow${p.featured ? ' prow--featured cut' : ''}`}>
              <span className="prow__idx">0{i + 1}</span>
              <div className="prow__main">
                <div className="tag-row">
                  {p.tags.map((t, j) => (
                    <span key={t} className={`tag${p.featured ? (j === 0 ? ' tag--gold' : ' tag--dark') : ''}`}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="prow__title">{p.title}</div>
              </div>
              <p className="prow__text">{p.text}</p>
              <span className={`round-arrow${p.featured ? ' round-arrow--gold' : ''}`}>
                <Arrow size={18} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="alege" className="section bg-stone">
        <div className="container">
          <Label>Ghid rapid</Label>
          <h2 className="display t-h2 mt-md">
            Ce program <span className="forest">ți se potrivește?</span>
          </h2>
          <div className="grid grid--3 mt-xl">
            {paths.map((p) => (
              <Link key={p.n} href={p.href} className="card card--white cut card--min">
                <div className="card__top mono muted">
                  <span>{p.who}</span>
                  <span>{p.n}</span>
                </div>
                <div className="display t-h4" style={{ marginTop: 'auto', paddingTop: 32 }}>
                  „{p.situation}”
                </div>
                <div className="head-row forest" style={{ marginTop: 24, paddingTop: 18, borderTop: '1px solid var(--line-soft)', alignItems: 'center', fontWeight: 500 }}>
                  {p.program}
                  <span aria-hidden="true">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="inset" style={{ paddingBlock: 12 }}>
        <div className="bg-forest cut cut-lg">
          <div className="container section--tight split split--end">
            <div className="grow-15">
              <Label light>Experiență dovedită</Label>
              <div className="display t-num gold mt-md">949</div>
              <p className="mt-md" style={{ fontSize: 'clamp(19px, 2vw, 22px)', lineHeight: 1.4, maxWidth: 560 }}>
                sisteme fotovoltaice cu baterii, instalate și puse în funcțiune pentru persoane vulnerabile, prin RePowerEU.
              </p>
            </div>
            <div style={{ flexGrow: 0 }}>
              <Btn href="/repowereu" variant="ivory">
                Vezi studiul de caz
              </Btn>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Label>Cum te ajutăm</Label>
          <h2 className="display t-h2 mt-md">
            Tu semnezi. <span className="forest">Noi facem restul.</span>
          </h2>
          <div className="grid grid--4 grid--loose mt-2xl">
            {[
              ['01', 'Verificăm eligibilitatea', 'Gratuit, la telefon sau la sediu.'],
              ['02', 'Pregătim oferta', 'Conform plafoanelor din ghidul programului.'],
              ['03', 'Ne ocupăm de dosar', 'Înscriere, documente, dosar de prosumator.'],
              ['04', 'Montăm și pornim', 'Cu echipa proprie, în termenele programului.'],
            ].map(([n, t, d]) => (
              <div key={n} className="step">
                <span className="mono muted">{n}</span>
                <div className="step__title" style={{ marginTop: 20 }}>
                  {t}
                </div>
                <p className="step__text">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white border-top">
        <div className="container split">
          <div>
            <Label>Întrebări frecvente</Label>
            <h2 className="display t-h3 mt-md">
              Ce ne întreabă <span className="forest">clienții.</span>
            </h2>
          </div>
          <div className="grow-2">
            <Faq items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
