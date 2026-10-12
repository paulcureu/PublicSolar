# Public Solar — site Next.js

Site-ul Public Solar (Public Creation S.R.L.), construit cu **Next.js 16 (App Router) + TypeScript**.
Responsive pe telefon, tabletă și desktop. Toate paginile sunt generate static (foarte rapide), iar formularele trimit cererile pe e-mail.

## Pagini

| Pagină | Adresă |
| --- | --- |
| Acasă | `/` |
| Programe (ansamblu) | `/programe` |
| Simulator Casa Verde Baterii 2026 (calcul funcțional) | `/simulator-casa-verde-baterii-2026` |
| Înscriere Casa Verde (formular) | `/inscriere-casa-verde` |
| Voucher baterii (formular) | `/voucher-baterii` |
| Programe pentru IMM (formular) | `/programe-pentru-imm` |
| RePowerEU — studiu de caz | `/repowereu` |
| Proiecte & noutăți (cu filtre) | `/proiecte` |
| Articole proiecte | `/proiecte/[slug]` |
| Despre noi | `/despre-noi` |
| Ghid energie solară | `/energie-solara` |
| Contact (formular) | `/contact` |

Adresele vechi de pe WordPress (ex. `/fomular-inscriere-casa-verde`, `/voucer-baterii-2024`, `/cum-functioneaza`) sunt **redirecționate automat** către paginile noi — vezi `next.config.ts`.

## Rulare locală

Ai nevoie de Node.js 20 sau mai nou.

```bash
npm install
npm run dev
```

Site-ul pornește la http://localhost:3000.

## Deploy pe Vercel

1. Intră pe https://vercel.com/new și importă repository-ul `PublicSolar` de pe GitHub.
2. Vercel detectează automat Next.js — nu trebuie schimbat nimic la build.
3. **Environment Variables** (pentru ca formularele să trimită e-mailuri):
   - `RESEND_API_KEY` — cheia din contul https://resend.com (gratuit pentru volum mic)
   - `LEAD_TO_EMAIL` — adresa care primește cererile (ex. `publicsolar@yahoo.com`; poți pune mai multe, separate prin virgulă)
   - `LEAD_FROM_EMAIL` — expeditorul; după ce verifici domeniul în Resend, ex. `Public Solar <site@publicsolar.ro>`
   - `NEXT_PUBLIC_SITE_URL` — `https://www.publicsolar.ro`
4. Apasă **Deploy**. La fiecare `git push` pe `main`, Vercel republică automat.
5. **Domeniul**: Vercel → Project → Settings → Domains → adaugă `publicsolar.ro` și `www.publicsolar.ro`, apoi setează înregistrările DNS indicate de Vercel la furnizorul domeniului.

> Fără variabilele Resend, formularele afișează vizitatorului un mesaj cu telefonul și e-mailul firmei, iar cererea apare doar în log-urile Vercel.

## De completat înainte de lansare

- `public/docs/` — copiază documentele PDF/XLSX/RAR ale proiectelor (lista exactă e în `public/docs/CITESTE-MA.txt`).
- Footer (`components/Footer.tsx`): **CUI** și **Nr. Reg. Com.**
- `lib/site.ts`: link-urile reale de **Facebook** și **TikTok**.
- `app/despre-noi/page.tsx`: anii marcați `[AN]` din parcursul firmei.
- `app/voucher-baterii/page.tsx`: statusul actual al sesiunii (`[status actual]`).
- `app/repowereu/page.tsx`: fotografii reale din proiectul RePowerEU (acum e o imagine ilustrativă).
- Paginile de **Politica de confidențialitate** și **Termeni** (link-urile din footer duc momentan la Contact).

## Structură

```
app/                 pagini (App Router), stiluri globale, API formular
  api/lead/route.ts  primește formularele și trimite e-mail prin Resend
components/          Header (cu meniu mobil), Footer, Simulator, LeadForm, Faq, ProjectsList, iconițe
lib/                 date: contact firmă, navigație, proiecte/articole
assets/images/       fotografii și logo-uri (optimizate automat de Next.js)
public/docs/         documente descărcabile ale proiectelor
```

## Design

- Culori: verde pădure `#0E3B26`, auriu solar `#E9B949`, fildeș `#F6F4EE`, lime `#A7D16B`
- Fonturi: **Bebas Neue** (titluri), **Geist** (text), **Geist Mono** (etichete) — încărcate prin `next/font`
- Motive grafice din logo: colțuri tăiate oblic (clasa `.cut`) și razele aurii
