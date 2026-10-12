import type { Metadata } from 'next';
import { Breadcrumbs, Btn, Label } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Cum funcționează energia solară — efectul fotovoltaic și radiația solară',
  description:
    'Ghid simplu: cum transformă panourile fotovoltaice lumina în curent, ce face invertorul și bateria, și ce înseamnă radiația solară directă și difuză.',
  alternates: { canonical: '/energie-solara' },
};

export default function EnergiePage() {
  return (
    <>
      <section className="page-head" style={{ position: 'relative', overflow: 'hidden' }}>
        <svg viewBox="0 0 200 200" fill="none" aria-hidden="true" className="sun-line" style={{ right: -200, top: -120, width: 'min(760px, 120vw)', height: 'auto' }}>
          <circle cx="100" cy="100" r="44" fill="var(--gold)" />
          <g stroke="var(--gold)" strokeWidth="1" strokeLinecap="round">
            <path d="M100 20v24M100 156v24M20 100h24M156 100h24M43 43l17 17M140 140l17 17M43 157l17-17M140 60l17-17" />
          </g>
        </svg>
        <div className="container" style={{ position: 'relative', paddingBottom: 'clamp(72px, 9vw, 120px)' }}>
          <Breadcrumbs items={[{ label: 'Acasă', href: '/' }, { label: 'Energie solară' }]} />
          <div className="page-head__body" style={{ maxWidth: 900 }}>
            <Label color="var(--forest)">Ghid · 6 min de citit</Label>
            <h1 className="display t-h1 mt-md">
              Cum devine lumina, <span className="forest">curent în priză.</span>
            </h1>
            <p className="lead mt-md">Tot ce trebuie să știi despre energia solară fotovoltaică și radiația solară, explicat simplu.</p>
          </div>
          <nav aria-label="Capitole" className="grid grid--3 mt-xl" style={{ gap: '0 32px' }}>
            {[
              ['#efect', '01', 'Efectul fotovoltaic'],
              ['#flux', '02', 'De la panou la priză'],
              ['#radiatie', '03', 'Radiația solară'],
            ].map(([h, n, t]) => (
              <a key={h} href={h} className="head-row" style={{ padding: '20px 0', borderTop: '1px solid var(--ink)', alignItems: 'baseline', gap: 12 }}>
                <span>
                  <span className="mono muted">{n}</span>
                  <span className="display" style={{ marginLeft: 18, fontSize: 32 }}>
                    {t}
                  </span>
                </span>
                <span aria-hidden="true">↓</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section id="efect" className="section bg-white border-top">
        <div className="container split">
          <div>
            <div className="mono muted">Capitolul 01</div>
            <h2 className="display t-h2 mt-md">
              Efectul <span className="forest">fotovoltaic</span>
            </h2>
          </div>
          <div className="grow-15 body-lg">
            <p style={{ fontSize: 'clamp(22px, 2.2vw, 26px)', lineHeight: 1.45, letterSpacing: '-0.015em', color: 'var(--ink)' }}>
              Celulele fotovoltaice convertesc lumina soarelui direct în energie electrică.
            </p>
            <p className="mt-md">
              Sunt fabricate din materiale semiconductoare, asemănătoare celor din cipurile electronice — aceleași celule care
              alimentau, cândva, calculatoarele de buzunar și ceasurile.
            </p>
            <p className="mt-md">
              Când lumina este absorbită de aceste materiale, energia ei pune electronii în mișcare. Fluxul dirijat de electroni
              care ia naștere este electricitate. Procesul se numește <strong>efect fotovoltaic</strong>, iar celulele se notează
              cu simbolul <strong>PV</strong>.
            </p>
            <div className="callout cut cut-sm" style={{ display: 'flex', gap: 18, background: 'var(--ivory)' }}>
              <span className="mono forest" style={{ paddingTop: 3 }}>
                Notă
              </span>
              <p style={{ color: 'var(--ink-2)' }}>
                Panourile fotovoltaice nu trebuie confundate cu alte sisteme de conversie a energiei solare, cum sunt panourile
                pentru apă caldă.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="flux" className="inset" style={{ paddingBlock: 12 }}>
        <div className="bg-forest cut cut-lg">
          <div className="container section">
            <div className="head-row">
              <div>
                <div className="mono on-forest">Capitolul 02</div>
                <h2 className="display t-h2 mt-md">
                  De la panou <span className="gold">la priză</span>
                </h2>
              </div>
              <p className="lead" style={{ maxWidth: 400 }}>
                Ce se întâmplă, pas cu pas, într-un sistem on-grid cu baterie.
              </p>
            </div>
            <div className="flow mt-xl">
              <div className="flow__step card--gold cut cut-sm">
                <span className="mono">01 · Soare</span>
                <div className="display t-h4" style={{ marginTop: 'auto' }}>
                  Lumină
                </div>
                <p style={{ marginTop: 8, fontSize: 14 }}>Radiație directă și difuză.</p>
              </div>
              <div className="flow__arrow" aria-hidden="true">
                →
              </div>
              <div className="flow__step card--ivory cut cut-sm" style={{ color: 'var(--ink)' }}>
                <span className="mono muted">02 · Panouri PV</span>
                <div className="display t-h4" style={{ marginTop: 'auto' }}>
                  Curent continuu
                </div>
                <p className="muted" style={{ marginTop: 8, fontSize: 14 }}>
                  Efectul fotovoltaic, în fiecare celulă.
                </p>
              </div>
              <div className="flow__arrow" aria-hidden="true">
                →
              </div>
              <div className="flow__step card--ivory cut cut-sm" style={{ color: 'var(--ink)' }}>
                <span className="mono muted">03 · Invertor</span>
                <div className="display t-h4" style={{ marginTop: 'auto' }}>
                  Curent alternativ
                </div>
                <p className="muted" style={{ marginTop: 8, fontSize: 14 }}>
                  Pentru aparatele din casă.
                </p>
              </div>
              <div className="flow__arrow" aria-hidden="true">
                →
              </div>
              <div className="flow__out">
                <div className="card--lime cut cut-sm">
                  <div className="mono" style={{ fontSize: 11 }}>
                    04A · Casa ta
                  </div>
                  <div style={{ marginTop: 4, fontWeight: 500 }}>Consumi întâi energia proprie</div>
                </div>
                <div className="cut cut-sm" style={{ background: 'var(--forest-2)' }}>
                  <div className="mono gold" style={{ fontSize: 11 }}>
                    04B · Baterie
                  </div>
                  <div style={{ marginTop: 4, fontWeight: 500 }}>Stochezi surplusul pentru seară</div>
                </div>
                <div className="cut cut-sm" style={{ border: '1px solid var(--forest-border)' }}>
                  <div className="mono on-forest" style={{ fontSize: 11 }}>
                    04C · Rețea
                  </div>
                  <div style={{ marginTop: 4, fontWeight: 500 }}>Ca prosumator, livrezi restul</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="radiatie" className="section">
        <div className="container">
          <div className="split">
            <div>
              <div className="mono muted">Capitolul 03</div>
              <h2 className="display t-h2 mt-md">
                Radiația <span className="forest">solară</span>
              </h2>
            </div>
            <p className="grow-15" style={{ fontSize: 'clamp(21px, 2.2vw, 26px)', lineHeight: 1.45, letterSpacing: '-0.015em' }}>
              Radiația electromagnetică emisă de Soare, pe întregul spectru. Trecând prin atmosferă, ea se împarte în trei.
            </p>
          </div>
          <div className="grid grid--3 mt-xl">
            <div className="card card--white cut card--min">
              <div style={{ width: 56, height: 56, borderRadius: '50%', border: '1px dashed var(--forest)' }} />
              <div className="display t-h4" style={{ marginTop: 'auto', paddingTop: 24 }}>
                Absorbită
              </div>
              <p className="card__text">O parte este absorbită de atmosferă și încălzește aerul.</p>
            </div>
            <div className="card card--white cut card--min">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--lime)' }} />
              <div className="display t-h4" style={{ marginTop: 'auto', paddingTop: 24 }}>
                Difuză
              </div>
              <p className="card__text">
                Împrăștiată de moleculele aerului, vapori și pulberi. Lungimile de undă mici se împrăștie cel mai mult — de aici
                albastrul cerului.
              </p>
            </div>
            <div className="card card--gold cut card--min">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--forest)' }} />
              <div className="display t-h4" style={{ marginTop: 'auto', paddingTop: 24 }}>
                Directă
              </div>
              <p className="card__text">
                Cea mai mare parte ajunge la sol. Intensitatea depinde de atmosferă și de poziția pe glob, cu variații zilnice și
                anuale.
              </p>
            </div>
          </div>
          <div className="grid grid--2 grid--loose mt-lg">
            <div className="step">
              <div style={{ fontWeight: 500, fontSize: 20 }}>Cum se măsoară</div>
              <p className="step__text">
                Intensitatea este cantitatea de radiație care cade pe o suprafață într-o perioadă de timp. Se determină cu
                pirheliometre și radiometre.
              </p>
            </div>
            <div className="step">
              <div style={{ fontWeight: 500, fontSize: 20 }}>Ce înseamnă pentru panourile tale</div>
              <p className="step__text">
                Orientarea și înclinarea acoperișului contează. Panourile produc și pe cer înnorat, din radiația difuză — doar
                mai puțin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="inset" style={{ paddingBottom: 12 }}>
        <div className="bg-stone cut cut-lg">
          <div className="container section--tight head-row">
            <h2 className="display t-h2" style={{ maxWidth: 780 }}>
              Află cât poate produce <span className="forest">acoperișul tău.</span>
            </h2>
            <div className="btn-row">
              <Btn href="/inscriere-casa-verde">Evaluare gratuită</Btn>
              <Btn href="/simulator-casa-verde-baterii-2026" variant="outline" icon={false}>
                Simulator Casa Verde
              </Btn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
