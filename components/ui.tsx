import Link from 'next/link';
import type { ReactNode } from 'react';
import { Arrow, RaysMini } from './icons';

export function Label({ children, light = false, color }: { children: ReactNode; light?: boolean; color?: string }) {
  return (
    <div className={`label${light ? ' label--light' : ''}`}>
      <RaysMini color={color} />
      {children}
    </div>
  );
}

type Variant = 'forest' | 'gold' | 'ivory' | 'outline' | 'outline-light' | 'outline-forest';

export function Btn({
  href,
  children,
  variant = 'forest',
  icon,
  small = false,
  block = false,
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: boolean;
  small?: boolean;
  block?: boolean;
  className?: string;
}) {
  const withIcon = icon ?? (variant === 'forest' || variant === 'gold' || variant === 'ivory');
  const cls = `btn btn--${variant}${withIcon ? ' btn--icon' : ''}${small ? ' btn--sm' : ''}${block ? ' btn--block' : ''} ${className}`.trim();
  const inner = (
    <>
      <span>{children}</span>
      {withIcon && (
        <span className="btn__badge">
          <Arrow />
        </span>
      )}
    </>
  );
  if (href.startsWith('/') || href.startsWith('#')) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {inner}
    </a>
  );
}

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, tone }: { items: Crumb[]; tone?: 'light' | 'photo' }) {
  return (
    <nav aria-label="Breadcrumb" className={`crumbs${tone ? ` crumbs--${tone}` : ''}`}>
      {items.map((c, i) => (
        <span key={c.label} style={{ display: 'contents' }}>
          {i > 0 && <span aria-hidden="true">/</span>}
          {c.href ? (
            <Link href={c.href}>{c.label}</Link>
          ) : (
            <span aria-current="page">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
