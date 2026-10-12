import type { NextConfig } from 'next';

// Adresele vechi (WordPress) sunt redirecționate permanent către paginile noi,
// ca să nu se piardă link-urile din Google sau de pe rețelele sociale.
const oldUrls: Array<[string, string]> = [
  ['/fomular-inscriere-casa-verde', '/inscriere-casa-verde'],
  ['/voucer-baterii-2024', '/voucher-baterii'],
  ['/category/proiecte', '/proiecte'],
  ['/concurs-planuri-de-afaceri', '/proiecte/concurs-planuri-de-afaceri'],
  ['/programul-educatie-si-ocupare', '/proiecte/programul-educatie-si-ocupare'],
  ['/proiecte-norvegiene', '/proiecte/lansare-proiecte-norvegiene'],
  ['/finalizare-proiecte-norvegiene', '/proiecte/finalizare-proiecte-norvegiene'],
  ['/cum-functioneaza', '/energie-solara'],
  ['/radiatia-solara', '/energie-solara'],
  ['/energia-solara', '/energie-solara'],
  ['/about-us', '/despre-noi'],
];

const nextConfig: NextConfig = {
  async redirects() {
    return oldUrls.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
