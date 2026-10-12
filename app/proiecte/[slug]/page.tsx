import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import norway from '@/assets/images/logo-innovation-norway.png';
import ueLogos from '@/assets/images/logo-ue-guvern-mysmis.png';
import { Download } from '@/components/icons';
import { Breadcrumbs, Btn } from '@/components/ui';
import { getPost, posts, type Block } from '@/lib/posts';
import { site } from '@/lib/site';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} ${post.titleAccent ?? ''}`.trim(),
    description: post.subtitle ?? post.excerpt,
    alternates: { canonical: `/proiecte/${post.slug}` },
    openGraph: { type: 'article', publishedTime: post.date },
  };
}

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case 'intro':
      return (
        <p key={i} className="article__intro">
          {b.text}
        </p>
      );
    case 'p':
      return <p key={i}>{b.text}</p>;
    case 'h2':
      return <h2 key={i}>{b.text}</h2>;
    case 'stats':
      return (
        <div key={i} className="article__stats">
          {b.items.map((s) => (
            <div key={s.label}>
              <div className="num">{s.value}</div>
              <div className="mono muted mt-xs" style={{ fontSize: 11 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      );
    case 'callout':
      return (
        <blockquote key={i} className="callout cut cut-sm">
          {b.text}
        </blockquote>
      );
    case 'link':
      return (
        <p key={i} style={{ marginTop: 22 }}>
          <a href={b.href} target="_blank" rel="noopener noreferrer">
            {b.text}
          </a>
        </p>
      );
    case 'docs':
      return (
        <div key={i} id="documente" style={{ borderTop: '1px solid var(--ink)' }}>
          {b.items.map((d) => (
            <a key={d.file + d.name} href={d.file} className="doc" download>
              <span className="doc__type">{d.type}</span>
              <span className="doc__name">{d.name}</span>
              <span className="doc__icon">
                <Download />
              </span>
            </a>
          ))}
        </div>
      );
  }
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const idx = posts.findIndex((p) => p.slug === post.slug);
  const older = posts[idx + 1];
  const hasDocs = post.body.some((b) => b.type === 'docs');

  return (
    <>
      {post.funding && (
        <div className="eu-strip">
          <div className="container eu-strip__inner">
            {post.funding === 'eu' ? (
              <Image src={ueLogos} alt="Cofinanțat de Uniunea Europeană, Guvernul României, MySMIS 2021" style={{ width: '100%', maxWidth: 520, height: 'auto' }} sizes="520px" />
            ) : (
              <Image src={norway} alt="Innovation Norway — EEA and Norway Grants" style={{ width: 180, height: 'auto' }} sizes="180px" />
            )}
          </div>
        </div>
      )}

      <section className="page-head">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Acasă', href: '/' }, { label: 'Proiecte', href: '/proiecte' }, { label: post.categoryLabel }]} />
          <div className="page-head__body" style={{ maxWidth: 1040 }}>
            <div className="tag-row" style={{ alignItems: 'center', gap: '10px 20px' }}>
              <span className="tag">{post.categoryLabel}</span>
              <time className="mono muted" dateTime={post.date}>
                {post.dateLabel}
              </time>
              <span className="mono muted">{post.readingMinutes} min</span>
            </div>
            <h1 className="display t-h1 mt-md">
              {post.title} {post.titleAccent && <span className="forest">{post.titleAccent}</span>}
            </h1>
            {post.subtitle && (
              <p className="lead mt-md" style={{ fontSize: 'clamp(18px, 1.8vw, 21px)', maxWidth: 820 }}>
                {post.subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 'clamp(40px, 5vw, 72px)' }}>
        <div className="container split" style={{ alignItems: 'flex-start', gap: 'clamp(40px, 6vw, 72px)' }}>
          <article className="article">
            {post.imageKind === 'photo' && (
              <div className="media cut" style={{ height: 'clamp(260px, 36vw, 460px)', marginBottom: 40 }}>
                <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 900px) 100vw, 760px" placeholder="blur" />
              </div>
            )}
            {post.body.map(renderBlock)}

            <div className="head-row mt-2xl" style={{ alignItems: 'flex-start' }}>
              {older ? (
                <Link href={`/proiecte/${older.slug}`} style={{ maxWidth: 320 }}>
                  <span className="mono muted" style={{ display: 'block' }}>
                    ← Anterior
                  </span>
                  <span style={{ fontWeight: 500, fontSize: 18, lineHeight: 1.35, color: 'var(--ink)' }}>
                    {older.title} {older.titleAccent}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              <Link href="/proiecte" style={{ maxWidth: 320, textAlign: 'right' }}>
                <span className="mono muted" style={{ display: 'block' }}>
                  Toate proiectele →
                </span>
                <span style={{ fontWeight: 500, fontSize: 18, lineHeight: 1.35, color: 'var(--ink)' }}>Proiecte &amp; noutăți</span>
              </Link>
            </div>
          </article>

          <aside className="aside" aria-label="Fișa proiectului">
            <div className="facts cut">
              <div className="mono gold">Fișa proiectului</div>
              <dl className="mt-md">
                {post.facts.map((f) => (
                  <div key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
              {hasDocs && (
                <div className="mt-md">
                  <Btn href="#documente" variant="gold" small block>
                    Vezi documentele
                  </Btn>
                </div>
              )}
            </div>
            <div className="card card--white cut cut-sm" style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--muted)' }}>
              <p>
                Întrebări despre proiect?{' '}
                <Link href="/contact" className="forest" style={{ fontWeight: 600, textDecoration: 'underline' }}>
                  Contactează echipa
                </Link>{' '}
                sau sună la{' '}
                <a href={site.phoneHref} style={{ fontWeight: 600, color: 'var(--ink)' }}>
                  {site.phoneShort}
                </a>
                .
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
