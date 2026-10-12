import type { Metadata } from 'next';
import Image from 'next/image';
import hala from '@/assets/images/hala-drona.jpg';
import { IconBarn, IconFactory, IconOffice } from '@/components/icons';
import { LeadForm } from '@/components/LeadForm';
import { Breadcrumbs, Btn, Label } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Programe pentru IMM — sisteme fotovoltaice pentru firme',
  description:
    'Costul cu energia a devenit greu de suportat? Public Solar te ajută să accesezi programul de finanțare potrivit pentru firma ta: analiză, ofertă, montaj și mentenanță.',
  alternates: { canonical: '/programe-pentru-imm' },
};

export default function ImmPage() {
  return (
    <>
      <section className="inset">
        <div className="hero__frame cut cut-lg" style={{ justifyContent: 'space-between', minHeight: 'clamp(640px, 86vh, 760px)' }}>
          <Image src={hala} alt="Hală industrială cu sistem fotovoltaic pe acoperiș" fill priority sizes="100vw" placeholder="blur" style={{ objectFit: 'cover' }} />
          <div className="scrim" aria-hidden="true" style={{ background: 'rgba(7,24,15,.52)' }} />
          <div className="container" style={{ position: 'relative', paddingTop: 32 }}>
            <Breadcrumbs tone="photo" items={[{ label: 'Acasă', href: '/' }, { label: 'Programe', href: '/programe' }, { label: 'IMM' }]} />
          </div>
          <div className="container hero__content">
            <div className="hero__text">
              <Label color="var(--gold)">
                <span style={{ color: '#e6ebe6' }}>Programe pentru IMM</span>
              </Label>
              <h1 className="display t-h1 mt-md">
                Energia nu mai trebuie să-ți mănânce <span className="gold">profitul.</span>
              </h1>
              <p className="hero__lead">
                Costul cu energia a devenit greu de suportat? Aplică pentru unul din programele de finanțare pentru IMM-uri —
                te ajutăm să accesezi programul dedicat firmei tale.
              </p>
              <div className="btn-row mt-lg">
                <Btn href="#aplica" variant="gold">
                  Aplică pentru firmă
                </Btn>
              </div>
            </div>
            <div className="hero__card cut cut-sm" style={{ flexBasis: 300 }}>
              <div className="mono" style={{ color: '#e6ebe6' }}>
                Amortizare estimată
              </div>
              <div className="display mt-sm" style={{ fontSize: 72, lineHeight: 1 }}>
                2–4 ani
              </div>
              <p style={{ fontSize: 15, color: '#e6ebe6' }}>pentru o investiție fotovoltaică</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head-row">
            <div style={{ maxWidth: 780 }}>
              <Label>(01) Pentru cine</Label>
              <h2 className="display t-h2 mt-md">
                Pentru firme care consumă <span className="forest">ziua.</span>
              </h2>
            </div>
            <p className="lead" style={{ maxWidth: 420 }}>
              Programul de lucru coincide cu orele de producție maximă — de aceea fotovoltaicul se amortizează cel mai repede la
              firme.
            </p>
          </div>
          <div className="grid grid--3 mt-xl">
            {[
              { Icon: IconFactory, t: 'Hale și producție', d: 'Acoperișuri mari, consum constant pe parcursul zilei.' },
              { Icon: IconOffice, t: 'Birouri și retail', d: 'Climatizare, iluminat și echipamente, din producție proprie.' },
              { Icon: IconBarn, t: 'Depozite și ferme', d: 'Refrigerare, pompe și utilaje alimentate de soare.' },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="card card--outline cut card--min">
                <Icon className="forest" />
                <div className="display t-h4" style={{ marginTop: 'auto', paddingTop: 28 }}>
                  {t}
                </div>
                <p className="card__text">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-stone">
        <div className="container split split--stretch">
          <div className="grow-15">
            <Label>(02) Ce primești</Label>
            <h2 className="display t-h3 mt-md">
              Un partener tehnic, <span className="forest">nu doar un montator.</span>
            </h2>
            <div className="rows mt-lg">
              {[
                ['01', 'Analiză pe consumul real', 'Dimensionăm sistemul pe facturile și profilul firmei.'],
                ['02', 'Ofertă conformă cu programul', 'Pregătită pentru cerințele programului de finanțare ales.'],
                ['03', 'Execuție și punere în funcțiune', 'Cu echipa proprie, din 2004 în instalații electrice.'],
                ['04', 'Mentenanță pe termen lung', 'Ca sistemul să producă la capacitate 25+ ani.'],
              ].map(([n, t, d]) => (
                <div key={n} className="row" style={{ borderBottomColor: '#cfc9ba' }}>
                  <span className="row__idx">{n}</span>
                  <div>
                    <div className="row__title">{t}</div>
                    <div className="row__text">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card card--forest cut" style={{ justifyContent: 'space-between', gap: 40 }}>
            <div className="mono on-forest">La scară mare</div>
            <div>
              <div className="display gold" style={{ fontSize: 'clamp(130px, 15vw, 230px)', lineHeight: 0.85 }}>
                949
              </div>
              <p className="mt-md" style={{ fontSize: 19, lineHeight: 1.45 }}>
                sisteme fotovoltaice și 949 de sisteme de stocare, livrate într-un singur proiect RePowerEU.
              </p>
            </div>
            <div>
              <Btn href="/repowereu" variant="outline-forest" small icon>
                Vezi proiectul
              </Btn>
            </div>
          </div>
        </div>
      </section>

      <section id="aplica" className="section">
        <div className="container split">
          <div>
            <Label>(03) Formular IMM</Label>
            <h2 className="display t-h2 mt-md">
              Spune-ne despre <span className="forest">firma ta.</span>
            </h2>
            <p className="lead mt-md">Te contactăm cu detalii despre programul potrivit.</p>
          </div>
          <LeadForm
            formName="Programe pentru IMM"
            className="grow-15"
            fields={[
              { type: 'text', name: 'firma', label: 'Denumire firmă', autoComplete: 'organization', full: true, required: true },
              { type: 'text', name: 'cod_fiscal', label: 'Cod fiscal' },
              { type: 'text', name: 'localitate', label: 'Localitate', autoComplete: 'address-level2' },
              { type: 'tel', name: 'telefon', label: 'Telefon', autoComplete: 'tel', required: true },
              { type: 'email', name: 'email', label: 'E-mail', autoComplete: 'email', required: true },
              { type: 'text', name: 'subiect', label: 'Subiect', full: true },
              { type: 'textarea', name: 'mesaj', label: 'Mesaj (opțional)', full: true },
            ]}
          />
        </div>
      </section>
    </>
  );
}
