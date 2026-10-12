'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import logo from '@/assets/images/logo-public-solar.png';
import { isActive, nav, programLinks, site } from '@/lib/site';
import { Arrow, Close, Menu, Phone, RaysMini } from './icons';

export function Header() {
  const pathname = usePathname() ?? '/';
  const [open, setOpen] = useState(false);

  // Închide meniul la schimbarea paginii
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Blochează scroll-ul paginii cât timp meniul e deschis + Escape închide
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__left">
            <RaysMini />
            <span>INSTALATOR NAȚIONAL VALIDAT AFM</span>
            <span className="topbar__sep" style={{ color: 'var(--on-forest-2)' }}>
              /
            </span>
            <Link className="topbar__promo" href="/simulator-casa-verde-baterii-2026">
              CASA VERDE BATERII 2026 — CALCULEAZĂ FINANȚAREA ↗
            </Link>
          </div>
          <span className="topbar__right">ȘOS. BRĂILEI 6, BUZĂU · L–V 08:00–16:00</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container site-header__inner">
          <Link href="/" className="site-logo" aria-label="Public Solar energy — Acasă">
            <Image src={logo} alt="Public Solar energy — panouri fotovoltaice, montaj și consultanță" priority sizes="200px" />
          </Link>

          <nav aria-label="Principal" className="nav">
            {nav.map((item) => (
              <Link key={item.id} href={item.href} aria-current={isActive(item, pathname) ? 'page' : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <a className="header-phone" href={site.phoneHref}>
              {site.phoneShort}
            </a>
            <Link href="/contact" className="btn btn--forest btn--icon btn--sm header-cta">
              <span>Cere ofertă</span>
              <span className="btn__badge">
                <Arrow size={14} />
              </span>
            </Link>
            <a className="call-btn" href={site.phoneHref} aria-label={`Sună la ${site.phone}`}>
              <Phone />
            </a>
            <button
              type="button"
              className="menu-btn"
              aria-label="Deschide meniul"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div id="mobile-menu" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Meniu">
          <div className="container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
            <div className="mobile-menu__top">
              <Link href="/" className="mobile-menu__logo" aria-label="Acasă">
                <Image src={logo} alt="Public Solar energy" sizes="150px" />
              </Link>
              <button type="button" className="mobile-menu__close" aria-label="Închide meniul" onClick={() => setOpen(false)}>
                <Close />
              </button>
            </div>

            <nav aria-label="Meniu mobil" className="mobile-menu__nav">
              {nav.map((item) => (
                <div key={item.id}>
                  <Link href={item.href} aria-current={isActive(item, pathname) ? 'page' : undefined}>
                    {item.label}
                    <Arrow size={22} />
                  </Link>
                  {item.id === 'programe' && (
                    <div className="mobile-menu__sub">
                      {programLinks.map((p) => (
                        <Link key={p.href} href={p.href}>
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mobile-menu__foot">
              <a className="tel" href={site.phoneHref}>
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <span>
                {site.address} · {site.hours}
              </span>
              <Link href="/contact" className="btn btn--gold btn--icon btn--block">
                <span>Cere ofertă gratuită</span>
                <span className="btn__badge">
                  <Arrow />
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
