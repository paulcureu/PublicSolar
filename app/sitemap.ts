import type { MetadataRoute } from 'next';
import { posts } from '@/lib/posts';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '',
    '/programe',
    '/simulator-casa-verde-baterii-2026',
    '/inscriere-casa-verde',
    '/voucher-baterii',
    '/programe-pentru-imm',
    '/repowereu',
    '/proiecte',
    '/despre-noi',
    '/energie-solara',
    '/contact',
  ];
  const now = new Date();
  return [
    ...pages.map((p) => ({
      url: `${site.url}${p}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: p === '' ? 1 : p.includes('simulator') || p.includes('inscriere') ? 0.9 : 0.7,
    })),
    ...posts.map((p) => ({
      url: `${site.url}/proiecte/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
  ];
}
