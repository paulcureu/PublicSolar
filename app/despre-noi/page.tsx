import type { Metadata } from 'next';
import Image from 'next/image';
import echipa from '@/assets/images/echipa-solarmount.jpg';
import sediu from '@/assets/images/sediu-buzau.jpg';
import { IconAntenna, IconCar, IconFactory, IconHouse, IconShip, SunLine } from '@/components/icons';
import { Breadcrumbs, Btn, Label } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Despre noi — Public Creation S.R.L., din 2004',
  description:
    'Public Solar (Public Creation S.R.L.) — din 2004 în Buzău, instalații electrice și sisteme fotovoltaice. Instalator național validat AFM, 949 de sisteme prin RePowerEU.',
  alternates: { canonical: '/despre-noi' },
};

const timeline = [
  { year: '2004', title: 'Înființarea Public Creation S.R.L.', text: 'Pornim în Buzău ca firmă de lucrări de instalații electrice.' },
  { year: '[AN]', title: 'Instalator validat AFM', text: 'Intrăm în programele Casa Verde pentru persoane fizice.' },
  { year: '[AN]', title: 'RePowerEU: 949 de sisteme', text: '949 de sisteme fotovoltaice și 949 de sisteme de stocare pentru persoane vulnerabile.' },
  { year: 'Sept. 2024', title: 'Lansare SolarMount Capacity Initiative', text: 'Studiu de fezabilitate cu Synesis Partners și Noveltex Oslo AS, finanțat de Innovation Norway.' },
  { year: 'Oct. 2024', title: 'Antreprenoriat social în Sud-Est', text: 'Proiect prin Programul Educație și Ocupare, cu Asociația Euroacademia și Fundația EMMA.' },
  { year: 'Mai 2025', title: 'Concurs de planuri de afaceri', text: '21 de afaceri sociale finanțate, minim 136 de locuri de muncă noi.' },
];

const domains = [
  { Icon: IconHouse, t: 'Rezidențial' },
  { Icon: IconFactory, t: 'Industrial' },
  { Icon: IconCar, t: 'Auto' },
  { Icon: IconShip, t: 'Maritim' },
  { Icon: IconAntenna, t: 'Comunicații' },
];

export default function DesprePage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Acasă', href: '/' }, { label: 'Despre noi' }]} />
          <div className="page-head__body">
            <Label>Despre noi · Public Creation S.R.L.</Label>
            <h1 className="display t-hero mt-md">
              Soluții în energie.
              <br />
              <span className="forest">Din 2004.</span>
            </h1>
            <div className="split split--end mt-lg">
              <p className="lead" style={{ fontSize: 'clamp(18px, 1.6vw, 20px)' }}>
                Am pornit în Buzău ca firmă de instalații electrice. Astăzi proiectăm, furnizăm și instalăm sisteme fotovoltaice
                pentru case și companii din toată țara.
              </p>
              <div style={{ flexGrow: 0 }}>
                <Btn href="/contact">Vino să ne cunoști</Btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 'clamp(40px, 5vw, 72px)' }}>
        <div className="container split split--tight split--stretch">
          <div className="media cut grow-2" style={{ minHeight: 'clamp(320px, 42vw, 600px)' }}>
            <Image src={sediu} alt="Sediul Public Solar Energy din Buzău" fill sizes="(max-width: 900px) 100vw, 66vw" placeholder="blur" />
          </div>
          <div className="card card--forest cut" style={{ position: 'relative', overflow: 'hidden', justifyContent: 'space-between', gap: 40, minHeight: 'clamp(320px, 42vw, 600px)' }}>
            <SunLine className="sun-line" style={{ right: -130, top: -130, width: 360, height: 360 }} />
            <div className="mono on-forest" style={{ position: 'relative' }}>
              Credo-ul nostru
            </div>
            <blockquote className="big-quote" style={{ position: 'relative' }}>
              „Credem că panourile fotovoltaice reprezintă soluția energetică pentru un <span className="gold">viitor durabil.</span>”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid--4 grid--stats">
          {[
            ['Experiență', <>22<small> ani</small></>, 'de instalații electrice'],
            ['Un singur proiect', '949', 'sisteme fotovoltaice cu baterii'],
            ['Acreditare', 'AFM', 'instalator național validat'],
            ['Finanțări', '3', 'proiecte cu fonduri UE și Granturi SEE'],
          ].map(([l, v, n]) => (
            <div key={l as string} className="stat">
              <div className="mono muted">{l}</div>
              <div className="stat__value">{v}</div>
              <div className="stat__note">{n}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white border-y">
        <div className="container split">
          <div>
            <Label>(01) Domenii</Label>
            <h2 className="display t-h2 mt-md">
              De la casa ta, la <span className="forest">industrie.</span>
            </h2>
            <p className="lead mt-md" style={{ maxWidth: 420 }}>
              Sistemele rezidențiale sunt o mare parte din proiectele noastre, dar răspundem oricărei cerințe de economisire,
              compensare sau distribuție a energiei.
            </p>
          </div>
          <div className="grow-15" style={{ borderTop: '1px solid var(--ink)' }}>
            {domains.map(({ Icon, t }, i) => (
              <div key={t} className="list-row">
                <span className="mono muted">0{i + 1}</span>
                <span className="list-row__title">{t}</span>
                <Icon className="forest" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <Label>(02) Parcurs</Label>
            <h2 className="display t-h2 mt-md">
              22 de ani, <span className="forest">în repere.</span>
            </h2>
            <div className="media cut mt-lg" style={{ height: 340 }}>
              <Image src={echipa} alt="Întâlnire cu partenerii din proiectul SolarMount Capacity Initiative" fill sizes="(max-width: 900px) 100vw, 40vw" placeholder="blur" />
            </div>
            <p className="mono muted mt-xs" style={{ fontSize: 11.5 }}>
              Întâlnire cu partenerii SolarMount, 2025
            </p>
          </div>
          <ol className="timeline grow-15" style={{ borderTop: '1px solid var(--ink)' }}>
            {timeline.map((t) => (
              <li key={t.title}>
                <span className="timeline__year">{t.year.toUpperCase()}</span>
                <div className="timeline__body">
                  <div className="row__title">{t.title}</div>
                  <div className="row__text">{t.text}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="inset">
        <div className="bg-forest cut cut-lg">
          <div className="container section">
            <Label light>(03) De ce noi</Label>
            <h2 className="display t-h2 mt-md" style={{ maxWidth: 1000 }}>
              Electricieni înainte de toate. <span className="gold">De aceea instalațiile noastre țin.</span>
            </h2>
            <div className="grid grid--4 grid--loose mt-2xl">
              {[
                ['Validați AFM', 'Instalator național validat pentru programele Casa Verde.'],
                ['Echipă proprie', 'De la proiectare la montaj și mentenanță.'],
                ['Scară mare', '949 de sisteme livrate într-un singur program RePowerEU.'],
                ['Parteneri internaționali', 'Proiecte cu fonduri europene și Granturi SEE și Norvegiene.'],
              ].map(([t, d]) => (
                <div key={t} className="step">
                  <div className="step__title" style={{ marginTop: 0 }}>
                    {t}
                  </div>
                  <p className="step__text on-forest">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container head-row">
          <div>
            <h2 className="display t-h2">
              Vino să ne cunoști <span className="forest">în Buzău.</span>
            </h2>
            <p className="mono muted mt-sm" style={{ fontSize: 13 }}>
              Șos. Brăilei nr. 6 · Luni–Vineri, 08:00–16:00
            </p>
          </div>
          <Btn href="/contact">Contact și hartă</Btn>
        </div>
      </section>
    </>
  );
}
