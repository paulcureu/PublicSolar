import type { Metadata } from 'next';
import Image from 'next/image';
import norway from '@/assets/images/logo-innovation-norway.png';
import ueLogos from '@/assets/images/logo-ue-guvern-mysmis.png';
import { ProjectsList } from '@/components/ProjectsList';
import { Breadcrumbs, Label } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Proiecte și noutăți — fonduri europene și Granturi SEE',
  description:
    'Proiectele Public Creation S.R.L. finanțate din fonduri europene și Granturile SEE și Norvegiene: RePowerEU, SolarMount, antreprenoriat social în Sud-Est.',
  alternates: { canonical: '/proiecte' },
};

export default function ProiectePage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Acasă', href: '/' }, { label: 'Proiecte' }]} />
          <div className="split split--end page-head__body">
            <div className="grow-15">
              <Label>Proiecte &amp; noutăți</Label>
              <h1 className="display t-h1 mt-md">
                Dincolo de <span className="forest">acoperișuri.</span>
              </h1>
            </div>
            <p className="lead">Proiectele finanțate din fonduri europene și granturi internaționale derulate de Public Creation S.R.L.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <ProjectsList />
        </div>
      </section>

      <section className="section--tight bg-white border-top">
        <div className="container split split--center">
          <div>
            <Label>Finanțatori</Label>
            <h2 className="display t-h4 mt-md" style={{ fontSize: 'clamp(38px, 4vw, 56px)' }}>
              Cu sprijinul Uniunii Europene și al <span className="forest">Granturilor SEE și Norvegiene.</span>
            </h2>
          </div>
          <div className="funders">
            <div className="cut cut-sm" style={{ flex: '2 1 320px' }}>
              <Image src={ueLogos} alt="Cofinanțat de Uniunea Europeană, Guvernul României, MySMIS 2021" style={{ width: '100%', height: 'auto' }} sizes="520px" />
            </div>
            <div className="cut cut-sm" style={{ flex: '1 1 160px' }}>
              <Image src={norway} alt="Innovation Norway" style={{ width: '100%', maxWidth: 200, height: 'auto' }} sizes="200px" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
