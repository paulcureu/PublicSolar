import type { Metadata } from 'next';
import Link from 'next/link';
import { IconBattery, IconBolt, IconMoon, IconShield, SunLine } from '@/components/icons';
import { LeadForm } from '@/components/LeadForm';
import { Breadcrumbs, Btn, Label } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Voucher baterii 5.000 € — RePowerEU pentru prosumatori',
  description:
    'Prin RePowerEU sunt finanțate vouchere de 5.000 € pentru instalarea de baterii la prosumatori. Înscrie-te și un consultant Public Solar te contactează.',
  alternates: { canonical: '/voucher-baterii' },
};

export default function VoucherPage() {
  return (
    <>
      <section className="page-head section" style={{ paddingTop: 40 }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Acasă', href: '/' }, { label: 'Programe', href: '/programe' }, { label: 'Voucher baterii' }]} />
          <div className="split split--stretch page-head__body" style={{ gap: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 40, paddingRight: 24 }}>
              <div>
                <div className="tag-row">
                  <span className="tag">RePowerEU</span>
                  <span className="tag">Sesiunea 2024 · [status actual]</span>
                </div>
                <h1 className="display t-h1 mt-md">
                  Ai panouri? Hai să-ți punem și <span className="forest">baterii.</span>
                </h1>
              </div>
              <div>
                <p className="lead">
                  Prin programul RePowerEU sunt finanțate vouchere de 5.000 € pentru instalarea de baterii la actualii
                  prosumatori. Completează formularul și un consultant te contactează.
                </p>
                <div className="btn-row mt-lg">
                  <Btn href="#inscriere">Înscrie-te în program</Btn>
                  <Btn href="/simulator-casa-verde-baterii-2026" variant="outline" icon={false}>
                    Vezi Casa Verde Baterii
                  </Btn>
                </div>
              </div>
            </div>
            <div className="card card--forest cut cut-lg" style={{ position: 'relative', overflow: 'hidden', minHeight: 'clamp(420px, 44vw, 600px)', justifyContent: 'space-between', gap: 32 }}>
              <SunLine className="sun-line" style={{ right: -140, top: -140, width: 420, height: 420 }} />
              <div className="head-row mono on-forest" style={{ position: 'relative', gap: 8 }}>
                <span>Voucher pentru baterii</span>
                <span>Prosumatori</span>
              </div>
              <div style={{ position: 'relative' }}>
                <div className="display gold" style={{ fontSize: 'clamp(120px, 17vw, 260px)', lineHeight: 0.85 }}>
                  5.000€
                </div>
                <p className="mt-md" style={{ fontSize: 20, lineHeight: 1.4, maxWidth: 340 }}>
                  pentru prosumatorii care vor să-și stocheze propria energie.
                </p>
              </div>
              <div className="head-row" style={{ position: 'relative', paddingTop: 20, borderTop: '1px solid var(--forest-line)', alignItems: 'center' }}>
                <span style={{ fontWeight: 500, fontSize: 18 }}>Instalăm gratuit bateriile</span>
                <IconBattery size={28} className="gold" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white border-y">
        <div className="container">
          <Label>De ce baterii</Label>
          <h2 className="display t-h2 mt-md" style={{ maxWidth: 960 }}>
            Soarele apune la 8. Casa ta merge mai departe <span className="forest">pe energia ta.</span>
          </h2>
          <div className="grid grid--3 grid--loose mt-2xl">
            {[
              { Icon: IconMoon, t: 'Folosești seara ce produci ziua', d: 'Surplusul de la prânz rămâne în baterie, nu pleacă în rețea.' },
              { Icon: IconBolt, t: 'Curent și la pene', d: 'Cu invertor hibrid, consumatorii importanți rămân alimentați.' },
              { Icon: IconShield, t: 'Mai multă independență', d: 'Depinzi mai puțin de prețul energiei din rețea.' },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="step">
                <Icon className="forest" />
                <div className="step__title">{t}</div>
                <p className="step__text">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inscriere" className="section">
        <div className="container split">
          <div>
            <Label>Înscriere</Label>
            <h2 className="display t-h2 mt-md">
              Completează și te <span className="forest">contactăm.</span>
            </h2>
            <p className="lead mt-md">Un consultant îți explică programul și pașii următori.</p>
          </div>
          <LeadForm
            formName="Voucher baterii"
            className="grow-15"
            submitLabel="Trimite formularul"
            fields={[
              { type: 'text', name: 'nume', label: 'Nume', autoComplete: 'family-name', required: true },
              { type: 'text', name: 'prenume', label: 'Prenume', autoComplete: 'given-name', required: true },
              { type: 'text', name: 'judet', label: 'Județ', autoComplete: 'address-level1' },
              { type: 'text', name: 'oras', label: 'Oraș', autoComplete: 'address-level2' },
              { type: 'tel', name: 'telefon', label: 'Telefon', autoComplete: 'tel', required: true },
              { type: 'email', name: 'email', label: 'E-mail', autoComplete: 'email' },
              { type: 'segmented', name: 'prosumator', label: 'Ești prosumator?', options: ['Da', 'Nu'] },
            ]}
            notes={[
              {
                field: 'prosumator',
                value: 'Nu',
                content: (
                  <>
                    Voucherul este pentru prosumatori. Încă nu ai panouri? <Link href="/inscriere-casa-verde">Înscrie-te la Casa Verde</Link>.
                  </>
                ),
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
