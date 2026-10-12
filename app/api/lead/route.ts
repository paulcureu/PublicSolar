import { NextResponse } from 'next/server';

// Primește cererile din formularele site-ului și le trimite pe e-mail prin Resend.
// Configurare: RESEND_API_KEY, LEAD_TO_EMAIL și (opțional) LEAD_FROM_EMAIL în Vercel.

const LABELS: Record<string, string> = {
  formular: 'Formular',
  nume: 'Nume',
  prenume: 'Prenume',
  nume_complet: 'Nume complet',
  telefon: 'Telefon',
  email: 'E-mail',
  judet: 'Județ',
  oras: 'Oraș / localitate',
  invertor: 'Tip invertor',
  prosumator: 'Este prosumator',
  firma: 'Denumire firmă',
  cod_fiscal: 'Cod fiscal',
  localitate: 'Localitate',
  subiect: 'Subiect',
  subiect_discutie: 'Despre ce vrea să vorbească',
  mesaj: 'Mesaj',
  acord: 'Acord prelucrare date',
};

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ ok: false, error: 'invalid_body' }, { status: 400 });
  }

  const data: Record<string, string> = {};
  for (const [k, v] of Object.entries(body as Record<string, unknown>)) {
    if (typeof v === 'string' && k.length <= 40) data[k] = v.slice(0, 4000).trim();
  }

  // Capcana anti-spam: dacă e completat, ignorăm în tăcere.
  if (data.website) return NextResponse.json({ ok: true });

  const hasContact = Boolean(data.telefon || data.email);
  if (!hasContact || data.acord !== 'da') {
    return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL || 'Public Solar <onboarding@resend.dev>';
  if (!key || !to) {
    console.warn('[lead] Formular primit, dar trimiterea pe e-mail nu e configurată (RESEND_API_KEY / LEAD_TO_EMAIL).', data);
    return NextResponse.json({ ok: false, error: 'not_configured' }, { status: 503 });
  }

  const lines = Object.entries(data)
    .filter(([k]) => k !== 'website')
    .map(([k, v]) => `${LABELS[k] ?? k}: ${v || '—'}`);
  const text = `Cerere nouă de pe site-ul Public Solar\n\n${lines.join('\n')}\n`;
  const replyTo = data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ? data.email : undefined;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: to.split(',').map((s) => s.trim()),
      subject: `Cerere nouă — ${data.formular ?? 'site'}`,
      text,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!res.ok) {
    console.error('[lead] Resend a răspuns cu eroare', res.status, await res.text().catch(() => ''));
    return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
