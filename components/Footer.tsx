import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/logo-public-solar.png';
import { site } from '@/lib/site';
import { RaysBig } from './icons';
import { Btn, Label } from './ui';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <RaysBig className="site-footer__rays" strokeWidth={5} />

      <div className="container site-footer__cta">
        <div className="head-row">
          <div style={{ maxWidth: 820 }}>
            <Label light>Hai să începem</Label>
            <h2 className="display t-h2 mt-md" style={{ color: 'var(--ivory)' }}>
              Gata să-ți produci <span className="gold">propria</span> energie?
            </h2>
          </div>
          <div className="btn-row">
            <Btn href="/simulator-casa-verde-baterii-2026" variant="gold">
              Calculează finanțarea
            </Btn>
            <Btn href={site.phoneHref} variant="outline-forest" icon={false}>
              {site.phoneShort}
            </Btn>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="site-footer__cols">
          <div className="site-footer__col">
            <div className="site-footer__logo">
              <Image src={logo} alt="Public Solar energy" sizes="188px" />
            </div>
            <p style={{ color: 'var(--on-forest)', maxWidth: 280, lineHeight: 1.6 }}>
              {site.company} — soluții profesionale în domeniul energiei, din 2004.
            </p>
          </div>
          <div className="site-footer__col">
            <span className="site-footer__heading">PROGRAME</span>
            <Link href="/simulator-casa-verde-baterii-2026">Simulator Casa Verde Baterii</Link>
            <Link href="/inscriere-casa-verde">Înscriere Casa Verde</Link>
            <Link href="/voucher-baterii">Voucher baterii</Link>
            <Link href="/programe-pentru-imm">Programe pentru IMM</Link>
            <Link href="/repowereu">RePowerEU</Link>
          </div>
          <div className="site-footer__col">
            <span className="site-footer__heading">COMPANIE</span>
            <Link href="/despre-noi">Despre noi</Link>
            <Link href="/proiecte">Proiecte &amp; noutăți</Link>
            <Link href="/energie-solara">Ghid energie solară</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="site-footer__col">
            <span className="site-footer__heading">CONTACT</span>
            <span>{site.address}</span>
            <a href={site.phoneHref} style={{ color: 'var(--gold)' }}>
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <div className="socials">
              <a href={site.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href={site.youtube} target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
              <a href={site.tiktok} target="_blank" rel="noopener noreferrer">
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container" aria-hidden="true" style={{ overflow: 'hidden' }}>
        <div className="site-footer__word">
          Public Solar<span className="gold">.</span>
        </div>
      </div>

      <div className="container">
        <div className="site-footer__bottom">
          <span>
            © {year} PUBLIC CREATION S.R.L. · CUI [CUI] · [NR. REG. COM.]
          </span>
          <nav aria-label="Legal">
            <Link href="/contact">CONFIDENȚIALITATE</Link>
            <Link href="/contact">TERMENI</Link>
            <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer">
              ANPC
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
