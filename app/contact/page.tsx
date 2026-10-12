import type { Metadata } from 'next';
import Image from 'next/image';
import sediu from '@/assets/images/sediu-buzau.jpg';
import { LeadForm } from '@/components/LeadForm';
import { Breadcrumbs, Label } from '@/components/ui';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Sună la ${site.phone}, scrie la ${site.email} sau vino la sediul din ${site.address}. Luni–Vineri, 08:00–16:00.`,
  alternates: { canonical: '/contact' },
};

const cards = [
  { label: 'Telefon', value: site.phone, href: site.phoneHref, action: 'Sună acum ↗' },
  { label: 'E-mail', value: site.email, href: `mailto:${site.email}`, action: 'Scrie-ne ↗' },
  { label: 'Adresă', value: 'Șos. Brăilei 6, Buzău', href: site.mapsHref, action: 'Deschide harta ↗' },
  { label: 'Program', value: 'L–V, 08:00–16:00', note: 'Sâmbătă–duminică închis' },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Acasă', href: '/' }, { label: 'Contact' }]} />
          <div className="split split--end page-head__body">
            <div className="grow-15">
              <Label>Contact</Label>
              <h1 className="display t-h1 mt-md">
                Hai să vorbim despre <span className="forest">energia ta.</span>
              </h1>
            </div>
            <p className="lead">Ai întrebări? Intră în legătură cu un specialist în sisteme fotovoltaice.</p>
          </div>
          <div className="grid grid--4 mt-2xl" style={{ gap: '0 32px' }}>
            {cards.map((c) => {
              const inner = (
                <>
                  <span className="mono muted">{c.label}</span>
                  <span className="display" style={{ fontSize: 'clamp(30px, 2.6vw, 36px)', lineHeight: 1, overflowWrap: 'anywhere' }}>
                    {c.value}
                  </span>
                  {c.action ? (
                    <span className="forest" style={{ fontSize: 14, fontWeight: 500 }}>
                      {c.action}
                    </span>
                  ) : (
                    <span className="muted" style={{ fontSize: 14 }}>
                      {c.note}
                    </span>
                  )}
                </>
              );
              const style = { display: 'flex', flexDirection: 'column' as const, gap: 14, padding: '22px 0', borderTop: '1px solid var(--ink)' };
              return c.href ? (
                <a key={c.label} href={c.href} style={style} {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  {inner}
                </a>
              ) : (
                <div key={c.label} style={style}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 'clamp(40px, 5vw, 64px)' }}>
        <div className="container split split--stretch split--tight">
          <LeadForm
            formName="Contact"
            className="grow-15"
            title="Scrie-ne"
            meta="Răspundem în aceeași zi"
            submitLabel="Trimite mesajul"
            consentText="Sunt de acord cu prelucrarea datelor pentru a primi un răspuns."
            fields={[
              { type: 'chips', name: 'subiect_discutie', label: 'Despre ce vrei să vorbim?', options: ['Ofertă sistem fotovoltaic', 'Casa Verde', 'Baterii / voucher', 'Firmă / IMM', 'Altceva'] },
              { type: 'text', name: 'nume', label: 'Nume', autoComplete: 'family-name', required: true },
              { type: 'text', name: 'prenume', label: 'Prenume', autoComplete: 'given-name' },
              { type: 'email', name: 'email', label: 'E-mail', autoComplete: 'email', required: true },
              { type: 'tel', name: 'telefon', label: 'Telefon', autoComplete: 'tel' },
              { type: 'textarea', name: 'mesaj', label: 'Mesaj', full: true, required: true },
            ]}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="media cut" style={{ height: 320 }}>
              <Image src={sediu} alt="Sediul Public Solar Energy din Buzău" fill sizes="(max-width: 900px) 100vw, 40vw" placeholder="blur" />
            </div>
            <div className="map cut">
              <div className="map__road" aria-hidden="true" style={{ left: '-10%', top: '46%', width: '120%', height: 18, transform: 'rotate(-14deg)' }} />
              <div className="map__road" aria-hidden="true" style={{ left: '58%', top: '-10%', width: 14, height: '120%', transform: 'rotate(8deg)' }} />
              <div className="map__pin" aria-hidden="true">
                <span />
              </div>
              <div className="map__card cut cut-sm">
                <div>
                  <div className="display" style={{ fontSize: 26, lineHeight: 1 }}>
                    {site.company}
                  </div>
                  <div className="muted" style={{ marginTop: 4, fontSize: 14 }}>
                    {site.addressFull}
                  </div>
                </div>
                <a href={site.mapsHref} target="_blank" rel="noopener noreferrer" className="btn btn--forest btn--sm">
                  Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
