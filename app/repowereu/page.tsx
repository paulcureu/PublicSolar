import type { Metadata } from 'next';
import Image from 'next/image';
import acoperis from '@/assets/images/acoperis-panouri.jpg';
import { SunLine } from '@/components/icons';
import { Breadcrumbs, Btn, Label } from '@/components/ui';

export const metadata: Metadata = {
  title: 'RePowerEU — 949 de sisteme fotovoltaice cu baterii',
  description:
    'Studiu de caz: Public Creation S.R.L. a instalat 949 de sisteme fotovoltaice și 949 de sisteme de stocare LiFePO4 pentru persoane vulnerabile, prin RePowerEU.',
  alternates: { canonical: '/repowereu' },
};

export default function RePowerEUPage() {
  return (
    <>
      <section className="inset">
        <div className="bg-forest cut cut-lg" style={{ position: 'relative', overflow: 'hidden' }}>
          <SunLine className="sun-line" style={{ right: -220, top: -200, width: 720, height: 720 }} />
          <div className="container" style={{ position: 'relative', paddingBlock: '36px clamp(48px, 6vw, 72px)' }}>
            <Breadcrumbs tone="light" items={[{ label: 'Acasă', href: '/' }, { label: 'Proiecte', href: '/proiecte' }, { label: 'RePowerEU' }]} />
            <div style={{ marginTop: 'clamp(48px, 6vw, 72px)' }}>
              <Label light>Studiu de caz · RePowerEU</Label>
              <h1 className="display t-h1 mt-md" style={{ maxWidth: 1100 }}>
                949 de case. 949 de baterii. <span className="gold">O singură echipă.</span>
              </h1>
              <p className="lead mt-md" style={{ maxWidth: 680 }}>
                Public Creation S.R.L. a instalat și pus în funcțiune 949 de sisteme fotovoltaice și 949 de sisteme de stocare
                pentru persoane vulnerabile, conform cererii de finanțare.
              </p>
            </div>
            <div className="grid grid--4 grid--stats mt-2xl">
              {[
                ['Sisteme fotovoltaice', <span key="a" className="gold">949</span>],
                ['Sisteme de stocare', '949'],
                ['Putere / beneficiar', <span key="b">≥3<small> kW</small></span>],
                ['Reducere GES', <span key="c">2.316<small> tCO₂</small></span>],
              ].map(([l, v]) => (
                <div key={l as string} className="stat">
                  <div className="mono on-forest">{l}</div>
                  <div className="stat__value">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <figure>
            <div className="media cut" style={{ height: 'clamp(320px, 44vw, 620px)' }}>
              <Image src={acoperis} alt="Panouri fotovoltaice pe acoperiș, la apus" fill sizes="(max-width: 1320px) 100vw, 1240px" placeholder="blur" />
            </div>
            <figcaption className="head-row mono muted mt-sm" style={{ fontSize: 11.5, gap: 8 }}>
              <span>Imagine ilustrativă</span>
              <span>[Înlocuiți cu fotografii din proiect]</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <Label>(01) Investiția</Label>
            <h2 className="display t-h3 mt-md">
              Același standard, la <span className="forest">fiecare beneficiar.</span>
            </h2>
            <p className="lead mt-md">
              Investiția a constat în instalarea și punerea în funcțiune, pentru fiecare beneficiar final, a unui sistem
              fotovoltaic cu o putere instalată de minim 3 kW și a unui sistem de stocare în baterii de tip LiFePO4 de 5 kW.
            </p>
          </div>
          <div className="panel cut">
            <div className="mono muted">Pachet per beneficiar</div>
            <div className="mt-md" style={{ borderTop: '1px solid var(--ink)' }}>
              {[
                ['Sistem fotovoltaic', 'minim 3 kW'],
                ['Stocare în baterii', 'LiFePO4 · 5 kW'],
                ['Instalare și punere în funcțiune', 'Public Creation'],
                ['Beneficiari', 'persoane vulnerabile'],
              ].map(([k, v]) => (
                <div key={k} className="kv">
                  <span>{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-stone">
        <div className="container">
          <Label>(02) Rezultate obținute</Label>
          <h2 className="display t-h2 mt-md">
            Ce a <span className="forest">schimbat.</span>
          </h2>
          <div className="grid grid--4 mt-xl">
            {[
              'Mai puțină energie din surse convenționale în locuințele unifamiliale, prin panouri și stocare.',
              '949 de sisteme fotovoltaice și 949 de sisteme de stocare instalate și puse în funcțiune.',
              'Emisiile de gaze cu efect de seră reduse cu 2.316,61 tCO₂.',
              '949 de persoane vulnerabile sprijinite cu energie din surse regenerabile.',
            ].map((t, i) => (
              <div key={t} className={`card cut card--min ${i === 3 ? 'card--gold' : 'card--white'}`}>
                <span className={`mono ${i === 3 ? '' : 'muted'}`}>0{i + 1}</span>
                <p style={{ marginTop: 'auto', paddingTop: 24, fontSize: 19, lineHeight: 1.5 }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container head-row">
          <h2 className="display t-h2" style={{ maxWidth: 860 }}>
            Aceeași echipă poate monta și <span className="forest">sistemul casei tale.</span>
          </h2>
          <div className="btn-row">
            <Btn href="/inscriere-casa-verde">Cere ofertă</Btn>
            <Btn href="/proiecte" variant="outline" icon={false}>
              Alte proiecte
            </Btn>
          </div>
        </div>
      </section>
    </>
  );
}
