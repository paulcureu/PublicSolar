import Image from 'next/image';
import Link from 'next/link';
import acoperis from '@/assets/images/acoperis-panouri.jpg';
import echipa from '@/assets/images/echipa-solarmount.jpg';
import hala from '@/assets/images/hala-drona.jpg';
import sediu from '@/assets/images/sediu-buzau.jpg';
import ueLogos from '@/assets/images/logo-ue-guvern-mysmis.png';
import { Arrow, IconBattery, IconDoc, RaysBig, RaysMini } from '@/components/icons';
import { LeadForm } from '@/components/LeadForm';
import { Btn, Label } from '@/components/ui';
import { site } from '@/lib/site';

const marquee = ['Casa Verde', 'RePowerEU', 'Granturile SEE și Norvegiene', 'Educație și Ocupare', 'Programe pentru IMM', 'Voucher baterii'];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="inset">
        <div className="hero__frame cut cut-lg">
          <Image src={hala} alt="Sistem fotovoltaic Public Solar pe acoperișul unei hale industriale, fotografiat din dronă" fill priority sizes="100vw" style={{ objectFit: 'cover' }} placeholder="blur" />
          <div className="scrim" aria-hidden="true" />
          <RaysBig className="hero__rays" />
          <div className="container hero__content">
            <div className="hero__text">
              <span className="chip">
                <RaysMini /> Instalator național validat AFM · Din 2004
              </span>
              <h1 className="display t-hero mt-md">
                Energie curată, <span className="gold">produsă</span> pe acoperișul tău.
              </h1>
              <p className="hero__lead">
                Sisteme fotovoltaice și baterii la cheie pentru case și companii. Proiectare, dosar Casa Verde, montaj și
                mentenanță — o singură echipă, din Buzău.
              </p>
              <div className="btn-row mt-lg">
                <Btn href="/simulator-casa-verde-baterii-2026" variant="gold">
                  Calculează finanțarea
                </Btn>
                <Btn href="#oferta" variant="outline-light" icon={false}>
                  Cere ofertă gratuită
                </Btn>
              </div>
            </div>
            <Link href="/simulator-casa-verde-baterii-2026" className="hero__card cut cut-sm">
              <div className="head-row mono" style={{ alignItems: 'center', gap: 12, color: '#e6ebe6', fontSize: 11.5 }}>
                <span>Casa Verde Baterii</span>
                <span className="tag tag--gold">2026</span>
              </div>
              <div className="display mt-md" style={{ fontSize: 64, lineHeight: 1 }}>
                15.000 lei
              </div>
              <p style={{ fontSize: 15, color: '#e6ebe6' }}>finanțare AFM maximă pentru baterii</p>
              <div className="head-row mt-md" style={{ alignItems: 'center', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,.28)', fontWeight: 500, fontSize: 15 }}>
                Vezi cât primești tu <span className="gold">↗</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Cine suntem + cifre */}
      <section className="section">
        <div className="container">
          <Label>(01) Cine suntem</Label>
          <p className="statement mt-md">
            Din 2004 proiectăm, montăm și întreținem sisteme fotovoltaice la cheie — pentru case, firme și comunități întregi.{' '}
            <span className="statement__soft">
              Am livrat <span className="display forest" style={{ fontSize: '1.3em', letterSpacing: 0 }}>949</span> de sisteme cu
              baterii într-un singur program european.
            </span>
          </p>
          <div className="grid grid--4 grid--stats mt-2xl">
            <div className="stat">
              <div className="mono muted">Fondați</div>
              <div className="stat__value">2004</div>
              <div className="stat__note">ca firmă de instalații electrice</div>
            </div>
            <div className="stat">
              <div className="mono muted">RePowerEU</div>
              <div className="stat__value">949</div>
              <div className="stat__note">sisteme fotovoltaice cu baterii</div>
            </div>
            <div className="stat">
              <div className="mono muted">Impact</div>
              <div className="stat__value">
                2.316<small> t</small>
              </div>
              <div className="stat__note">CO₂ evitate printr-un singur proiect</div>
            </div>
            <div className="stat">
              <div className="mono muted">Amortizare</div>
              <div className="stat__value">
                2–4<small> ani</small>
              </div>
              <div className="stat__note">estimat, pentru o investiție FV</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bandă programe */}
      <section className="marquee" aria-label="Programe cu care lucrăm">
        <div className="marquee__track">
          {[0, 1].map((g) => (
            <div key={g} className="marquee__group" aria-hidden={g === 1 ? true : undefined}>
              {marquee.map((m) => (
                <span key={m} style={{ display: 'contents' }}>
                  <span>{m}</span>
                  <span className="marquee__dot" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Servicii */}
      <section className="section">
        <div className="container">
          <div className="head-row">
            <div style={{ maxWidth: 780 }}>
              <Label>(02) Servicii</Label>
              <h2 className="display t-h2 mt-md">
                De la prima vizită, la <span className="forest">prima factură mică.</span>
              </h2>
            </div>
            <p className="lead" style={{ maxWidth: 400 }}>
              O singură echipă pentru consultanță, proiectare, execuție și mentenanță — fără intermediari.
            </p>
          </div>

          <div className="bento mt-xl">
            <Link href="/inscriere-casa-verde" className="bento__feature media cut">
              <Image src={acoperis} alt="Panouri fotovoltaice pe acoperiș, la apus" fill sizes="(max-width: 900px) 100vw, 60vw" style={{ objectFit: 'cover' }} />
              <div className="overlay-panel cut cut-sm">
                <div style={{ maxWidth: 440 }}>
                  <div className="mono muted">01 — La cheie</div>
                  <div className="display t-h4 mt-xs">Sisteme fotovoltaice la cheie</div>
                  <p className="card__text">Dimensionare corectă, echipamente de calitate, montaj profesionist.</p>
                </div>
                <span className="btn__badge" style={{ width: 52, height: 52, background: 'var(--forest)', color: 'var(--gold)' }}>
                  <Arrow size={16} />
                </span>
              </div>
            </Link>
            <div className="bento__col">
              <Link href="/voucher-baterii" className="card card--outline cut">
                <div className="card__top">
                  <span className="mono muted">02 — Stocare</span>
                  <IconBattery className="forest" />
                </div>
                <div className="card__bottom">
                  <div className="display t-h4">Baterii &amp; back-up</div>
                  <p className="card__text">Energia de la prânz, folosită seara. Curent și la pene.</p>
                </div>
              </Link>
              <Link href="/inscriere-casa-verde" className="card card--stone cut">
                <div className="card__top">
                  <span className="mono muted">03 — Acte</span>
                  <IconDoc className="forest" />
                </div>
                <div className="card__bottom">
                  <div className="display t-h4">Dosar de prosumator</div>
                  <p className="card__text">Documentele și depunerea, făcute de noi.</p>
                </div>
              </Link>
            </div>
            <Link href="/programe-pentru-imm" className="bento__wide card--forest cut">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 40px', alignItems: 'baseline' }}>
                <span className="mono" style={{ color: 'var(--lime)' }}>
                  04 — Pentru firme
                </span>
                <span className="display t-h4">
                  Soluții pentru IMM, <span className="gold">hale și birouri</span>
                </span>
              </div>
              <span className="btn btn--outline-forest btn--icon btn--sm">
                <span>Discută cu un inginer</span>
                <span className="btn__badge">
                  <Arrow size={14} />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Simulator */}
      <section className="section bg-forest">
        <div className="container split split--center">
          <div>
            <Label light>(03) Casa Verde Baterii 2026</Label>
            <h2 className="display t-h2 mt-md">
              Află în 30 de secunde <span className="gold">cât îți dă statul.</span>
            </h2>
            <p className="lead mt-md">
              Simulatorul calculează finanțarea AFM, contribuția proprie și punctajul, după formula din ghidul de finanțare.
            </p>
            <div className="grid grid--3 mt-xl" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20, maxWidth: 560 }}>
              {[
                ['10 kWh', 'Capacitate min.'],
                ['1.500 lei', 'Plafon / kWh'],
                ['100 p', 'Punctaj maxim'],
              ].map(([v, l]) => (
                <div key={l} style={{ borderTop: '1px solid var(--forest-border)', paddingTop: 14 }}>
                  <div className="display" style={{ fontSize: 'clamp(30px, 3vw, 38px)' }}>
                    {v}
                  </div>
                  <div className="mono on-forest" style={{ fontSize: 11, marginTop: 4 }}>
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card card--ivory cut" style={{ color: 'var(--ink)' }}>
            <div className="head-row mono muted" style={{ alignItems: 'center', gap: 12 }}>
              <span>Exemplu de simulare</span>
              <span>Orientativ</span>
            </div>
            <div className="mt-md">
              <div className="receipt__row">
                <span>Ofertă totală</span>
                <span>40.000 lei</span>
              </div>
              <div className="receipt__row">
                <span>Capacitate baterie</span>
                <span>20 kWh</span>
              </div>
              <div className="receipt__row">
                <span>Contribuție proprie</span>
                <span>25.000 lei</span>
              </div>
            </div>
            <div className="head-row mt-md" style={{ gap: 16 }}>
              <div>
                <div className="muted" style={{ fontSize: 14 }}>
                  Finanțare AFM
                </div>
                <div className="display forest" style={{ fontSize: 'clamp(56px, 6vw, 76px)', lineHeight: 1 }}>
                  15.000 lei
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="muted" style={{ fontSize: 14 }}>
                  Punctaj
                </div>
                <div style={{ fontWeight: 500, fontSize: 32, letterSpacing: '-0.03em' }}>
                  100<span className="muted" style={{ fontSize: 18 }}>/100</span>
                </div>
              </div>
            </div>
            <div className="bar" style={{ background: 'var(--line-soft)' }}>
              <span style={{ width: '100%', background: 'var(--forest)' }} />
            </div>
            <Btn href="/simulator-casa-verde-baterii-2026" block className="mt-lg">
              Fă-ți propria simulare
            </Btn>
          </div>
        </div>
      </section>

      {/* De ce acum */}
      <section className="section">
        <div className="container split">
          <div>
            <Label>(04) De ce acum</Label>
            <h2 className="display t-h2 mt-md">
              Prețul curentului crește. <span className="forest">Al panourilor, nu.</span>
            </h2>
            <p className="lead mt-md">
              Ca prosumator folosești cu prioritate energia pe care o produci. Controlezi consumul, reduci factura și emisiile
              de CO₂ — cel puțin 25 de ani.
            </p>
          </div>
          <div className="hairgrid grow-15">
            {[
              ['01', 'Factură redusă', 'Consumi întâi energia proprie, apoi pe cea din rețea.'],
              ['02', 'Amortizare în 2–4 ani', 'Echipamente accesibile, plus finanțare Casa Verde.'],
              ['03', 'Stabilitate energetică', 'Cu baterii, rămâi alimentat și la pene de curent.'],
            ].map(([n, t, d]) => (
              <div key={n}>
                <span className="mono muted">{n}</span>
                <div className="display t-h5" style={{ marginTop: 'auto', paddingTop: 24 }}>
                  {t}
                </div>
                <p className="card__text">{d}</p>
              </div>
            ))}
            <div className="is-gold">
              <span className="mono">04</span>
              <div className="display" style={{ marginTop: 'auto', paddingTop: 24, fontSize: 64, lineHeight: 1 }}>
                25+ ani
              </div>
              <p className="card__text" style={{ color: 'var(--ink-2)' }}>
                de producție dintr-un sistem corect dimensionat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proces */}
      <section className="section bg-stone">
        <div className="container">
          <Label>(05) Cum lucrăm</Label>
          <h2 className="display t-h2 mt-md" style={{ maxWidth: 900 }}>
            Patru pași până la <span className="forest">prima zi solară.</span>
          </h2>
          <div className="grid grid--4 grid--loose mt-2xl">
            {[
              ['01', 'Consultanță', 'Analizăm consumul și verificăm eligibilitatea pentru finanțare.'],
              ['02', 'Proiectare', 'Dimensionăm sistemul și pregătim documentația.'],
              ['03', 'Execuție', 'Echipa proprie montează și pune în funcțiune instalația.'],
              ['04', 'Mentenanță', 'Rămânem alături de tine pe toată durata de viață a sistemului.'],
            ].map(([n, t, d], i) => (
              <div key={n} className="step">
                <div className={`step__num${i === 3 ? ' step__num--solid' : ''}`}>{n}</div>
                <div className="step__title">{t}</div>
                <p className="step__text">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proiecte */}
      <section className="section">
        <div className="container">
          <div className="head-row">
            <div style={{ maxWidth: 780 }}>
              <Label>(06) Proiecte &amp; finanțări</Label>
              <h2 className="display t-h2 mt-md">
                Proiecte mari, <span className="forest">cu bani europeni.</span>
              </h2>
            </div>
            <Btn href="/proiecte" variant="outline" icon={false}>
              Toate proiectele ↗
            </Btn>
          </div>
          <div className="grid grid--3 grid--loose mt-xl">
            <Link href="/repowereu" className="pcard">
              <div className="pcard__media media cut">
                <Image src={acoperis} alt="Panouri fotovoltaice pe acoperiș, la apus" fill sizes="(max-width: 640px) 100vw, 420px" />
              </div>
              <div className="pcard__meta">
                <span>RePowerEU</span>
                <span>Studiu de caz</span>
              </div>
              <p className="pcard__title">949 de case alimentate cu energie solară și baterii</p>
            </Link>
            <Link href="/proiecte/finalizare-proiecte-norvegiene" className="pcard">
              <div className="pcard__media media cut">
                <Image src={echipa} alt="Echipele partenere în proiectul SolarMount Capacity Initiative" fill sizes="(max-width: 640px) 100vw, 420px" />
              </div>
              <div className="pcard__meta">
                <span>Granturi SEE &amp; Norvegiene</span>
                <span>2024–2025</span>
              </div>
              <p className="pcard__title">SolarMount: structuri de montaj PV produse în România</p>
            </Link>
            <Link href="/proiecte/concurs-planuri-de-afaceri" className="pcard">
              <div className="pcard__media pcard__media--logos cut">
                <Image src={ueLogos} alt="Cofinanțat de Uniunea Europeană, Guvernul României, MySMIS 2021" style={{ width: '100%', height: 'auto' }} sizes="400px" />
              </div>
              <div className="pcard__meta">
                <span>Educație și Ocupare</span>
                <span>Mai 2025</span>
              </div>
              <p className="pcard__title">21 de afaceri sociale finanțate în regiunea Sud-Est</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Povestea */}
      <section className="inset">
        <div className="split split--stretch bg-white cut cut-lg" style={{ gap: 0, border: '1px solid var(--line-soft)' }}>
          <div className="media" style={{ minHeight: 'clamp(320px, 45vw, 640px)' }}>
            <Image src={sediu} alt="Sediul Public Solar Energy din Buzău, cu panouri pe fațadă" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div style={{ padding: 'clamp(28px, 5vw, 80px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Label>(07) Povestea noastră</Label>
            <h2 className="display t-h3 mt-md">
              Electricieni din 2004. <span className="forest">Solari prin convingere.</span>
            </h2>
            <p className="lead mt-md">
              Public Creation S.R.L. a pornit în Buzău ca firmă de instalații electrice. Astăzi oferim proiectare, furnizare și
              instalare de sisteme fotovoltaice pentru persoane fizice și companii din toată țara.
            </p>
            <blockquote className="display mt-lg" style={{ paddingLeft: 20, borderLeft: '2px solid var(--gold)', fontSize: 'clamp(30px, 2.8vw, 38px)', lineHeight: 1.02 }}>
              „Credem că panourile fotovoltaice reprezintă soluția energetică pentru un viitor durabil.”
            </blockquote>
            <div className="mt-lg">
              <Btn href="/despre-noi">Cunoaște-ne</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* Ofertă */}
      <section id="oferta" className="section">
        <div className="container split">
          <div>
            <Label>(08) Ofertă</Label>
            <h2 className="display t-h2 mt-md">
              Primește oferta în <span className="forest">24 de ore.</span>
            </h2>
            <p className="lead mt-md">
              Lasă câteva detalii și un inginer te sună cu o propunere personalizată, inclusiv varianta prin Casa Verde.
            </p>
            <div className="mt-xl" style={{ paddingTop: 24, borderTop: '1px solid var(--line)' }}>
              <div className="mono muted">Sau sună direct</div>
              <a href={site.phoneHref} className="display" style={{ display: 'block', marginTop: 6, fontSize: 'clamp(40px, 4vw, 52px)', lineHeight: 1 }}>
                {site.phone}
              </a>
            </div>
          </div>
          <LeadForm
            formName="Ofertă (Acasă)"
            className="grow-15"
            fields={[
              { type: 'text', name: 'nume_complet', label: 'Nume complet', autoComplete: 'name', required: true },
              { type: 'tel', name: 'telefon', label: 'Telefon', autoComplete: 'tel', required: true },
              { type: 'text', name: 'judet', label: 'Județ', autoComplete: 'address-level1' },
              { type: 'select', name: 'invertor', label: 'Tip invertor', options: ['Monofazic', 'Trifazic', 'Nu știu'], placeholder: 'Alege' },
              { type: 'textarea', name: 'mesaj', label: 'Mesaj (opțional)', full: true },
            ]}
          />
        </div>
      </section>
    </>
  );
}
