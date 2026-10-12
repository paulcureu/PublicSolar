import type { Metadata } from 'next';
import { Simulator } from '@/components/Simulator';
import { Breadcrumbs, Label } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Simulator Casa Verde Baterii 2026 — calculează finanțarea AFM',
  description:
    'Calculează în 30 de secunde finanțarea AFM (până la 15.000 lei), contribuția proprie și punctajul pentru Casa Verde Baterii 2026.',
  alternates: { canonical: '/simulator-casa-verde-baterii-2026' },
};

const facts = [
  ['Finanțare maximă', '15.000 lei'],
  ['Capacitate minimă', '10 kWh'],
  ['Plafon cost eligibil', '1.500 lei/kWh'],
  ['Punctaj maxim', '100 puncte'],
];

const formula = [
  ['Cheltuieli eligibile', 'ofertă totală − sume neeligibile'],
  ['Finanțare AFM', 'min(suma solicitată, 15.000, 75% × ofertă, cheltuieli eligibile, 1.500 × kWh)'],
  ['Contribuție proprie', 'ofertă totală − finanțare AFM (minim 25%)'],
  ['Punctaj', 'min(50, 30 × contribuție ÷ AFM) + min(50, kWh × 2,5). Puterea FV nu se punctează.'],
];

export default function SimulatorPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Acasă', href: '/' }, { label: 'Programe', href: '/programe' }, { label: 'Simulator' }]} />
          <div className="split split--end page-head__body">
            <div className="grow-15">
              <Label>Simulator Casa Verde Baterii 2026</Label>
              <h1 className="display t-h1 mt-md">
                Cât primești pentru <span className="forest">baterii.</span>
              </h1>
            </div>
            <p className="lead">
              Estimează finanțarea AFM, contribuția proprie și punctajul proiectului. Mută valorile — rezultatul se
              actualizează instant.
            </p>
          </div>
          <div className="grid grid--4 grid--stats mt-xl">
            {facts.map(([l, v]) => (
              <div key={l} className="stat" style={{ paddingBottom: 16 }}>
                <div className="mono muted">{l}</div>
                <div className="display mt-xs" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 'clamp(40px, 5vw, 64px)' }}>
        <div className="container">
          <Simulator />
        </div>
      </section>

      <section className="section bg-stone">
        <div className="container split">
          <div>
            <Label>Transparent</Label>
            <h2 className="display t-h3 mt-md">
              Cum se <span className="forest">calculează.</span>
            </h2>
            <p className="lead mt-md">Model orientativ, conform ghidului de finanțare Casa Verde Baterii 2026.</p>
          </div>
          <div className="grow-15">
            {formula.map(([t, f]) => (
              <div key={t} className="formula">
                <span>{t}</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
