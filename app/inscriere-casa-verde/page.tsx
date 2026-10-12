import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import hala from '@/assets/images/hala-drona.jpg';
import { Arrow } from '@/components/icons';
import { LeadForm } from '@/components/LeadForm';
import { Breadcrumbs, Label } from '@/components/ui';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Înscriere Casa Verde — formular',
  description:
    'Completează formularul de înscriere Casa Verde și un specialist Public Solar te sună cu o ofertă conformă cu programul. Instalator validat AFM.',
  alternates: { canonical: '/inscriere-casa-verde' },
};

const JUDETE = [
  'Alba', 'Arad', 'Argeș', 'Bacău', 'Bihor', 'Bistrița-Năsăud', 'Botoșani', 'Brăila', 'Brașov', 'București', 'Buzău',
  'Călărași', 'Caraș-Severin', 'Cluj', 'Constanța', 'Covasna', 'Dâmbovița', 'Dolj', 'Galați', 'Giurgiu', 'Gorj',
  'Harghita', 'Hunedoara', 'Ialomița', 'Iași', 'Ilfov', 'Maramureș', 'Mehedinți', 'Mureș', 'Neamț', 'Olt', 'Prahova',
  'Sălaj', 'Satu Mare', 'Sibiu', 'Suceava', 'Teleorman', 'Timiș', 'Tulcea', 'Vâlcea', 'Vaslui', 'Vrancea',
];

export default function CasaVerdePage() {
  return (
    <>
      <section className="page-head section" style={{ paddingTop: 40 }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Acasă', href: '/' }, { label: 'Programe', href: '/programe' }, { label: 'Înscriere Casa Verde' }]} />
          <div className="split page-head__body">
            <div>
              <Label>Înscriere Casa Verde</Label>
              <h1 className="display t-h1 mt-md">
                Înscrie-te.
                <br />
                <span className="forest">Te sunăm noi.</span>
              </h1>
              <p className="lead mt-md">
                Completează formularul și un specialist în sisteme fotovoltaice te contactează cu o ofertă conformă cu
                programul Casa Verde.
              </p>
              <div className="rows mt-lg">
                {['Instalator național validat AFM', 'Verificare gratuită a eligibilității', 'Dosarul de prosumator, făcut de noi'].map((t, i) => (
                  <div key={t} className="row" style={{ alignItems: 'baseline' }}>
                    <span className="row__idx">0{i + 1}</span>
                    <span style={{ fontSize: 18, fontWeight: 500 }}>{t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-lg" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px 40px' }}>
                <a href={site.phoneHref}>
                  <span className="mono muted" style={{ display: 'block' }}>
                    Preferi să suni?
                  </span>
                  <span className="display" style={{ fontSize: 34 }}>
                    {site.phone}
                  </span>
                </a>
                <a href={`mailto:${site.email}`}>
                  <span className="mono muted" style={{ display: 'block' }}>
                    Sau scrie-ne
                  </span>
                  <span className="display" style={{ fontSize: 34, overflowWrap: 'anywhere' }}>
                    {site.email}
                  </span>
                </a>
              </div>
            </div>
            <LeadForm
              formName="Înscriere Casa Verde"
              title="Formular de înscriere"
              meta="~ 1 minut"
              submitLabel="Trimite formularul"
              consentText="Sunt de acord ca acest site să stocheze informațiile trimise, pentru a fi contactat."
              fields={[
                { type: 'text', name: 'nume', label: 'Nume', autoComplete: 'family-name', required: true },
                { type: 'text', name: 'prenume', label: 'Prenume', autoComplete: 'given-name', required: true },
                { type: 'select', name: 'judet', label: 'Județ', options: JUDETE, placeholder: 'Alege județul', required: true },
                { type: 'text', name: 'oras', label: 'Oraș / localitate', autoComplete: 'address-level2' },
                { type: 'tel', name: 'telefon', label: 'Telefon', autoComplete: 'tel', required: true },
                { type: 'email', name: 'email', label: 'E-mail', autoComplete: 'email' },
                { type: 'segmented', name: 'invertor', label: 'Tip invertor', options: ['Monofazic', 'Trifazic'], hint: 'Nu știi ce tip ai? Lasă-ne pe noi să verificăm.' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section bg-stone">
        <div className="container">
          <Label>Ce urmează</Label>
          <h2 className="display t-h2 mt-md">
            De la formular, la <span className="forest">panouri pe casă.</span>
          </h2>
          <div className="grid grid--4 mt-xl">
            {[
              ['01', 'Te sunăm', 'Discutăm consumul, acoperișul și eligibilitatea.'],
              ['02', 'Primești oferta', 'Dimensionată corect și conformă cu programul.'],
              ['03', 'Pregătim dosarul', 'Documentele pentru AFM și dosarul de prosumator.'],
              ['04', 'Montăm', 'Echipa noastră instalează și pune sistemul în funcțiune.'],
            ].map(([n, t, d], i) => (
              <div key={n} className={`card cut card--min ${i === 3 ? 'card--forest' : 'card--white'}`}>
                <span className={`mono ${i === 3 ? 'gold' : 'muted'}`}>{n}</span>
                <div className="display t-h4" style={{ marginTop: 'auto', paddingTop: 24 }}>
                  {t}
                </div>
                <p className="card__text">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="inset" style={{ paddingBlock: 12 }}>
        <Link href="/simulator-casa-verde-baterii-2026" className="media cut cut-lg" style={{ display: 'flex', alignItems: 'flex-end', minHeight: 'clamp(380px, 40vw, 560px)', color: '#fff' }}>
          <Image src={hala} alt="Sistem fotovoltaic montat de Public Solar pe o hală" fill sizes="100vw" placeholder="blur" />
          <div className="scrim" aria-hidden="true" />
          <div className="container head-row" style={{ position: 'relative', paddingBlock: 'clamp(24px, 4vw, 48px)' }}>
            <div className="display t-h2" style={{ maxWidth: 820 }}>
              Ai deja panouri? Află cât primești pentru <span className="gold">baterii.</span>
            </div>
            <span className="round-arrow round-arrow--gold" style={{ width: 72, height: 72 }}>
              <Arrow size={22} />
            </span>
          </div>
        </Link>
      </section>
    </>
  );
}
