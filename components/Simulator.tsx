'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Arrow, Check } from './icons';

type Preset = { id: string; label: string; total: number; nonElig: number; kwh: number; req: number };

const PRESETS: Preset[] = [
  { id: 'echilibrat', label: 'Echilibrat', total: 30000, nonElig: 0, kwh: 15, req: 15000 },
  { id: 'competitiv', label: 'Competitiv', total: 35000, nonElig: 0, kwh: 18, req: 15000 },
  { id: 'maxim', label: 'Scor maxim', total: 40000, nonElig: 0, kwh: 20, req: 15000 },
];

const CHECKS = [
  'Sunt persoană fizică și am calitatea de prosumator.',
  'La locul de implementare nu există deja un sistem de stocare.',
  'Nu se desfășoară activitate economică necontorizată separat la adresă.',
  'Nu am obligații restante la bugetul de stat sau la bugetele locale.',
  'Sistemul FV este racordat la rețea și bateria deservește exclusiv acest loc.',
  'Bateria este nouă, fără plumb, cu garanție ≥5 ani și ≥5.000 cicluri.',
  'Există invertor hibrid compatibil sau va fi instalat până la punerea în funcțiune.',
];

const MAX_AFM = 15000;
const COST_CAP_PER_KWH = 1500;

const lei = (n: number) => `${Math.round(n).toLocaleString('ro-RO')} lei`;
const dec = (n: number) => (Math.round(n * 10) / 10).toFixed(1).replace('.', ',');

export function Simulator() {
  const [scenario, setScenario] = useState('maxim');
  const [total, setTotal] = useState(40000);
  const [nonElig, setNonElig] = useState(0);
  const [kwh, setKwh] = useState(20);
  const [req, setReq] = useState(15000);
  const [checks, setChecks] = useState<boolean[]>(CHECKS.map(() => true));

  const r = useMemo(() => {
    const nonE = Math.min(nonElig, total);
    const eligible = Math.max(0, total - nonE);
    const afm = Math.max(0, Math.min(req, MAX_AFM, 0.75 * total, eligible, COST_CAP_PER_KWH * kwh));
    const contrib = total - afm;
    const pct = total > 0 ? (contrib / total) * 100 : 0;
    const costKwh = kwh > 0 ? eligible / kwh : 0;
    const sContrib = afm > 0 ? Math.min(50, 30 * (contrib / afm)) : 0;
    const sCap = Math.min(50, kwh * 2.5);
    const ok = checks.every(Boolean) && kwh >= 10 && afm > 0;
    return { nonE, eligible, afm, contrib, pct, costKwh, sContrib, sCap, score: sContrib + sCap, ok };
  }, [total, nonElig, kwh, req, checks]);

  const custom = (fn: () => void) => {
    setScenario('');
    fn();
  };

  const pick = (p: Preset) => {
    setScenario(p.id);
    setTotal(p.total);
    setNonElig(p.nonElig);
    setKwh(p.kwh);
    setReq(p.req);
  };

  return (
    <div className="sim">
      <div className="sim__inputs">
        <div className="panel cut">
          <div className="head-row" style={{ alignItems: 'baseline' }}>
            <h2 className="display t-h5" style={{ fontSize: 'clamp(34px, 3.4vw, 42px)' }}>
              Datele proiectului
            </h2>
            <span className="mono muted">Alege un scenariu</span>
          </div>
          <div className="pills mt-md" role="group" aria-label="Scenarii">
            {PRESETS.map((p) => (
              <button key={p.id} type="button" aria-pressed={scenario === p.id} onClick={() => pick(p)}>
                {p.label}
              </button>
            ))}
          </div>

          <div className="mt-lg">
            <div className="slider">
              <div className="slider__head">
                <label htmlFor="sim-total">Valoarea totală a ofertei</label>
                <span className="slider__value">{lei(total)}</span>
              </div>
              <input
                id="sim-total"
                type="range"
                min={15000}
                max={120000}
                step={500}
                value={total}
                onChange={(e) => custom(() => setTotal(Number(e.target.value)))}
              />
              <div className="slider__scale">
                <span>15.000</span>
                <span>120.000 LEI</span>
              </div>
              <p className="slider__help">Echipamente și lucrări, plus eventualele sume neeligibile.</p>
            </div>

            <div className="slider">
              <div className="slider__head">
                <label htmlFor="sim-nonelig">Din care, sume neeligibile</label>
                <span className="slider__value">{lei(r.nonE)}</span>
              </div>
              <input
                id="sim-nonelig"
                type="range"
                min={0}
                max={40000}
                step={500}
                value={nonElig}
                onChange={(e) => custom(() => setNonElig(Number(e.target.value)))}
              />
              <div className="slider__scale">
                <span>0</span>
                <span>40.000 LEI</span>
              </div>
              <p className="slider__help">Ex. extinderi sau lucrări care nu se decontează.</p>
            </div>

            <div className="slider">
              <div className="slider__head">
                <label htmlFor="sim-kwh">Capacitatea bateriei</label>
                <span className="slider__value">{kwh} kWh</span>
              </div>
              <input
                id="sim-kwh"
                type="range"
                min={10}
                max={60}
                step={1}
                value={kwh}
                onChange={(e) => custom(() => setKwh(Number(e.target.value)))}
              />
              <div className="slider__scale">
                <span>10 KWH (MINIM)</span>
                <span>60 KWH</span>
              </div>
              <p className="slider__help">Punctajul crește până la 20 kWh (50 p); peste, nu mai aduce puncte.</p>
            </div>

            <div className="slider slider--boxed cut cut-sm">
              <div className="slider__head">
                <label htmlFor="sim-req">Cât soliciți de la AFM</label>
                <span className="slider__value forest">{lei(req)}</span>
              </div>
              <input
                id="sim-req"
                type="range"
                min={0}
                max={MAX_AFM}
                step={250}
                value={req}
                onChange={(e) => custom(() => setReq(Number(e.target.value)))}
              />
              <div className="slider__scale">
                <span>0</span>
                <span>PLAFON 15.000 LEI</span>
              </div>
              <p className="slider__help">Ceri mai puțin de la AFM ⇒ contribuția ta crește ⇒ punctaj mai mare.</p>
            </div>
          </div>
        </div>

        <div className="panel cut">
          <h2 className="display t-h5" style={{ fontSize: 'clamp(34px, 3.4vw, 42px)' }}>
            Verificare de <span className="forest">eligibilitate</span>
          </h2>
          <p className="slider__help" style={{ fontSize: 15 }}>
            Bifează doar ce este real și demonstrabil prin documente.
          </p>
          <div className="mt-md">
            {CHECKS.map((text, i) => (
              <label key={text} className="check">
                <input
                  type="checkbox"
                  checked={checks[i]}
                  onChange={() => setChecks((c) => c.map((v, j) => (j === i ? !v : v)))}
                />
                <span>{text}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <aside className="sim__result cut" aria-label="Rezultatul simulării" aria-live="polite">
        <div className="head-row" style={{ alignItems: 'center', gap: 12 }}>
          <span className="mono on-forest">Rezultat</span>
          {r.ok ? (
            <span className="badge badge--ok">
              <Check size={13} /> Eligibil preliminar
            </span>
          ) : (
            <span className="badge badge--warn">De verificat</span>
          )}
        </div>
        <p className="mt-lg on-forest" style={{ fontSize: 15 }}>
          Finanțare AFM estimată
        </p>
        <div className="result__big">{lei(r.afm)}</div>
        <p className="mono on-forest mt-xs" style={{ fontSize: 11.5 }}>
          Plafon disponibil: 15.000 lei
        </p>

        <div className="mt-lg">
          <div className="result__row">
            <span>Contribuție proprie</span>
            <span>{lei(r.contrib)}</span>
          </div>
          <div className="result__row">
            <span>Procent contribuție</span>
            <span>{dec(r.pct)}%</span>
          </div>
          <div className="result__row">
            <span>Cheltuieli eligibile</span>
            <span>{lei(r.eligible)}</span>
          </div>
          <div className="result__row" style={{ borderBottom: '1px solid var(--forest-line)' }}>
            <span>Cost eligibil / kWh</span>
            <span>{lei(r.costKwh)}</span>
          </div>
        </div>

        <div className="mt-lg">
          <div className="head-row" style={{ alignItems: 'baseline', gap: 8 }}>
            <span className="on-forest" style={{ fontSize: 15 }}>
              Punctaj estimat
            </span>
            <span style={{ fontWeight: 500, fontSize: 44, letterSpacing: '-0.045em' }}>
              {dec(r.score)}
              <span className="on-forest" style={{ fontSize: 18 }}>
                {' '}
                / 100
              </span>
            </span>
          </div>
          <div className="mt-sm">
            <div className="head-row mono on-forest" style={{ fontSize: 11.5, gap: 8 }}>
              <span>Contribuție</span>
              <span>{dec(r.sContrib)} / 50</span>
            </div>
            <div className="bar">
              <span style={{ width: `${r.sContrib * 2}%`, background: 'var(--lime)' }} />
            </div>
          </div>
          <div className="mt-sm">
            <div className="head-row mono on-forest" style={{ fontSize: 11.5, gap: 8 }}>
              <span>Capacitate</span>
              <span>{dec(r.sCap)} / 50</span>
            </div>
            <div className="bar">
              <span style={{ width: `${r.sCap * 2}%`, background: 'var(--gold)' }} />
            </div>
          </div>
        </div>

        <Link href="/inscriere-casa-verde" className="btn btn--gold btn--icon btn--block mt-lg">
          <span>Cere ofertă pe baza simulării</span>
          <span className="btn__badge">
            <Arrow />
          </span>
        </Link>
        <p className="mt-sm on-forest" style={{ fontSize: 12.5, lineHeight: 1.55 }}>
          Rezultat orientativ. Eligibilitatea și punctajul final sunt stabilite de AFM pe baza documentelor depuse și
          verificate.
        </p>
      </aside>
    </div>
  );
}
