import type { Metadata } from 'next';
import { Btn, Label } from '@/components/ui';

export const metadata: Metadata = { title: 'Pagina nu a fost găsită' };

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <Label>Eroare 404</Label>
        <h1 className="display t-hero mt-md">
          Pagina asta <span className="forest">a ieșit din rețea.</span>
        </h1>
        <p className="lead mt-md">Pagina căutată nu există sau a fost mutată. Te ducem înapoi într-un loc însorit.</p>
        <div className="btn-row mt-lg">
          <Btn href="/">Înapoi la pagina principală</Btn>
          <Btn href="/contact" variant="outline" icon={false}>
            Contact
          </Btn>
        </div>
      </div>
    </section>
  );
}
