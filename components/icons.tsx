import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base(size: number, props: SVGProps<SVGSVGElement>) {
  return {
    width: size,
    height: size,
    fill: 'none',
    stroke: 'currentColor',
    'aria-hidden': true,
    focusable: false,
    ...props,
  } as const;
}

export function Arrow({ size = 15, ...p }: IconProps) {
  return (
    <svg {...base(size, p)} viewBox="0 0 16 16" strokeWidth={1.8}>
      <path d="M4 12L12 4M6 4h6v6" />
    </svg>
  );
}

export function Download({ size = 14, ...p }: IconProps) {
  return (
    <svg {...base(size, p)} viewBox="0 0 16 16" strokeWidth={1.6}>
      <path d="M8 2v9M4 7l4 4 4-4M3 14h10" />
    </svg>
  );
}

export function Check({ size = 14, ...p }: IconProps) {
  return (
    <svg {...base(size, p)} viewBox="0 0 18 18" strokeWidth={2.4}>
      <path d="M4 9.5l3.2 3L14 5.5" />
    </svg>
  );
}

export function Phone({ size = 18, ...p }: IconProps) {
  return (
    <svg {...base(size, p)} viewBox="0 0 20 20" strokeWidth={1.7}>
      <path d="M4 2.5h3l1.5 4-2 1.3a10 10 0 005.7 5.7l1.3-2 4 1.5v3a1.5 1.5 0 01-1.6 1.5C8.7 17 3 11.3 2.5 4.1A1.5 1.5 0 014 2.5z" />
    </svg>
  );
}

export function Menu({ size = 18, ...p }: IconProps) {
  return (
    <svg {...base(size, p)} viewBox="0 0 20 20" strokeWidth={1.8}>
      <path d="M3 7h14M3 13h14" />
    </svg>
  );
}

export function Close({ size = 18, ...p }: IconProps) {
  return (
    <svg {...base(size, p)} viewBox="0 0 20 20" strokeWidth={1.8}>
      <path d="M5 5l10 10M15 5L5 15" />
    </svg>
  );
}

/** Razele mici din logo — folosite lângă etichete. */
export function RaysMini({ color = 'var(--gold)' }: { color?: string }) {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
      <g stroke={color} strokeWidth={2.2} strokeLinecap="round">
        <path d="M2 12l6-3M3 4l6 3M10 1l1.5 6" />
      </g>
    </svg>
  );
}

/** Razele mari din logo — element grafic decorativ. */
export function RaysBig({ className, strokeWidth = 6 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} viewBox="0 0 150 150" fill="none" aria-hidden="true">
      <g stroke="var(--gold)" strokeWidth={strokeWidth} strokeLinecap="round">
        <path d="M18 120L64 92" />
        <path d="M30 76l50-6" />
        <path d="M54 36l38 26" />
        <path d="M98 16l10 44" />
        <path d="M138 34l-18 36" />
      </g>
    </svg>
  );
}

/** Soare liniar (cerc + raze fine). */
export function SunLine({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <circle cx="100" cy="100" r="44" stroke="var(--gold)" strokeWidth="1" />
      <g stroke="var(--gold)" strokeWidth="1" strokeLinecap="round">
        <path d="M100 20v24M100 156v24M20 100h24M156 100h24M43 43l17 17M140 140l17 17M43 157l17-17M140 60l17-17" />
      </g>
    </svg>
  );
}

export function IconPanel({ size = 44, ...p }: IconProps) {
  return (
    <svg {...base(size, p)} viewBox="0 0 40 40" strokeWidth={1.4}>
      <path d="M5 26l6-14h18l6 14H5z" />
      <path d="M14 12l-2 14M20 12v14M26 12l2 14M8 19h24" />
      <path d="M20 26v8M14 34h12" />
    </svg>
  );
}
export function IconBattery({ size = 44, ...p }: IconProps) {
  return (
    <svg {...base(size, p)} viewBox="0 0 40 40" strokeWidth={1.4}>
      <rect x="9" y="8" width="22" height="28" rx="4" />
      <path d="M16 4h8" />
      <path d="M21 14l-5 8h8l-5 8" />
    </svg>
  );
}
export function IconDoc({ size = 44, ...p }: IconProps) {
  return (
    <svg {...base(size, p)} viewBox="0 0 40 40" strokeWidth={1.4}>
      <path d="M10 4h14l8 8v24H10z" />
      <path d="M24 4v8h8" />
      <path d="M15 21h12M15 27h12M15 15h5" />
    </svg>
  );
}
export function IconFactory({ size = 44, ...p }: IconProps) {
  return (
    <svg {...base(size, p)} viewBox="0 0 40 40" strokeWidth={1.4}>
      <path d="M4 34V16l9 5v-5l9 5v-5l9 5V8h5v26z" />
    </svg>
  );
}
export function IconOffice({ size = 44, ...p }: IconProps) {
  return (
    <svg {...base(size, p)} viewBox="0 0 40 40" strokeWidth={1.4}>
      <rect x="8" y="4" width="24" height="32" rx="2" />
      <path d="M14 11h4M22 11h4M14 18h4M22 18h4M14 25h4M22 25h4M18 36v-5h4v5" />
    </svg>
  );
}
export function IconBarn({ size = 44, ...p }: IconProps) {
  return (
    <svg {...base(size, p)} viewBox="0 0 40 40" strokeWidth={1.4}>
      <path d="M6 34V18L20 8l14 10v16z" />
      <path d="M14 34V24h12v10" />
    </svg>
  );
}
export function IconHouse({ size = 36, ...p }: IconProps) {
  return (
    <svg {...base(size, p)} viewBox="0 0 40 40" strokeWidth={1.4}>
      <path d="M6 20L20 8l14 12" />
      <path d="M10 17v17h20V17" />
      <path d="M17 34v-9h6v9" />
    </svg>
  );
}
export function IconCar({ size = 36, ...p }: IconProps) {
  return (
    <svg {...base(size, p)} viewBox="0 0 40 40" strokeWidth={1.4}>
      <path d="M6 26v-6l4-8h20l4 8v6z" />
      <circle cx="12" cy="28" r="3" />
      <circle cx="28" cy="28" r="3" />
      <path d="M10 20h20" />
    </svg>
  );
}
export function IconShip({ size = 36, ...p }: IconProps) {
  return (
    <svg {...base(size, p)} viewBox="0 0 40 40" strokeWidth={1.4}>
      <path d="M6 28l3 6h22l3-6z" />
      <path d="M20 6v22M20 8l10 14H20" />
    </svg>
  );
}
export function IconAntenna({ size = 36, ...p }: IconProps) {
  return (
    <svg {...base(size, p)} viewBox="0 0 40 40" strokeWidth={1.4}>
      <path d="M20 18v18M14 36h12" />
      <circle cx="20" cy="15" r="3" />
      <path d="M13 21a9 9 0 010-12M27 9a9 9 0 010 12M9 25a14 14 0 010-20M31 5a14 14 0 010 20" />
    </svg>
  );
}
export function IconMoon({ size = 36, ...p }: IconProps) {
  return (
    <svg {...base(size, p)} viewBox="0 0 40 40" strokeWidth={1.5}>
      <path d="M28 24a10 10 0 01-12-12 10 10 0 1012 12z" />
    </svg>
  );
}
export function IconBolt({ size = 36, ...p }: IconProps) {
  return (
    <svg {...base(size, p)} viewBox="0 0 40 40" strokeWidth={1.5}>
      <path d="M22 4L8 22h11l-2 14 15-19H21l1-13z" />
    </svg>
  );
}
export function IconShield({ size = 36, ...p }: IconProps) {
  return (
    <svg {...base(size, p)} viewBox="0 0 40 40" strokeWidth={1.5}>
      <path d="M20 4l13 5v10c0 9-6 14-13 17-7-3-13-8-13-17V9l13-5z" />
      <path d="M14 20l4 4 8-8" />
    </svg>
  );
}
