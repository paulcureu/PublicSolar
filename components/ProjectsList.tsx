'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { caseStudy, categories, posts, type Category } from '@/lib/posts';
import { Arrow } from './icons';

type Item = {
  key: string;
  category: Category;
  categoryLabel: string;
  dateLabel: string;
  title: string;
  excerpt: string;
  image: (typeof posts)[number]['image'];
  imageAlt: string;
  logos: boolean;
  href: string;
};

const items: Item[] = [
  ...posts.map((p) => ({
    key: p.slug,
    category: p.category,
    categoryLabel: p.categoryLabel,
    dateLabel: p.dateLabel,
    title: `${p.title} ${p.titleAccent ?? ''}`.trim(),
    excerpt: p.excerpt,
    image: p.image,
    imageAlt: p.imageAlt,
    logos: p.imageKind === 'logos',
    href: `/proiecte/${p.slug}`,
  })),
  {
    key: 'repowereu',
    category: caseStudy.category,
    categoryLabel: caseStudy.categoryLabel,
    dateLabel: caseStudy.dateLabel,
    title: caseStudy.title,
    excerpt: caseStudy.excerpt,
    image: caseStudy.image,
    imageAlt: caseStudy.imageAlt,
    logos: false,
    href: caseStudy.href,
  },
];

export function ProjectsList() {
  const [cat, setCat] = useState<'toate' | Category>('toate');
  const featured = items[0];
  const list = cat === 'toate' ? items.slice(1) : items.filter((i) => i.category === cat);

  return (
    <>
      <div className="filter mt-xl" role="group" aria-label="Filtrează după categorie">
        {categories.map((c) => {
          const n = c.id === 'toate' ? items.length : items.filter((i) => i.category === c.id).length;
          return (
            <button key={c.id} type="button" aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>
              {c.label}
              <span className="count">{n}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-xl">
        {cat === 'toate' && (
          <Link href={featured.href} className="featured cut cut-lg" style={{ marginBottom: 24 }}>
            <div className="featured__media">
              <div>
                <Image src={featured.image} alt={featured.imageAlt} style={{ width: '100%', maxWidth: 520, height: 'auto' }} sizes="(max-width: 700px) 90vw, 520px" />
                <span className="mono muted">Cod MySMIS 308377</span>
              </div>
            </div>
            <div className="featured__body">
              <div className="tag-row" style={{ alignItems: 'center' }}>
                <span className="tag tag--gold">Recomandat</span>
                <span className="mono on-forest">
                  {featured.dateLabel} · {featured.categoryLabel}
                </span>
              </div>
              <div>
                <p className="display t-h3">
                  Concurs de planuri de afaceri — <span className="gold">antreprenoriat social</span> în Sud-Est
                </p>
                <p className="mt-md on-forest" style={{ fontSize: 17, lineHeight: 1.6 }}>
                  21 de planuri de afaceri inovative vor fi finanțate prin schema de minimis, cu minim 136 de locuri de muncă
                  noi.
                </p>
              </div>
              <span className="head-row" style={{ alignItems: 'center', paddingTop: 20, borderTop: '1px solid var(--forest-line)' }}>
                <span style={{ fontWeight: 500 }}>Citește anunțul și documentele</span>
                <span className="btn__badge">
                  <Arrow />
                </span>
              </span>
            </div>
          </Link>
        )}

        <div className="grid grid--3 grid--loose">
          {list.map((p) => (
            <Link key={p.key} href={p.href} className="pcard">
              {p.logos ? (
                <div className="pcard__media pcard__media--logos cut">
                  <Image src={p.image} alt={p.imageAlt} style={{ width: '100%', height: 'auto' }} sizes="(max-width: 640px) 90vw, 400px" />
                </div>
              ) : (
                <div className="pcard__media media cut">
                  <Image src={p.image} alt={p.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1040px) 50vw, 420px" />
                </div>
              )}
              <div className="pcard__meta">
                <span>{p.categoryLabel}</span>
                <span>{p.dateLabel}</span>
              </div>
              <p className="pcard__title">{p.title}</p>
              <p className="muted" style={{ fontSize: 16, lineHeight: 1.55 }}>
                {p.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
