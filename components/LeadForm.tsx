'use client';

import { useState, type FormEvent, type ReactNode } from 'react';
import { site } from '@/lib/site';
import { Arrow } from './icons';

type Base = { name: string; label: string; full?: boolean; required?: boolean };
export type Field =
  | (Base & { type: 'text' | 'email' | 'tel'; autoComplete?: string })
  | (Base & { type: 'textarea' })
  | (Base & { type: 'select'; options: string[]; placeholder?: string })
  | (Base & { type: 'segmented'; options: string[]; hint?: string })
  | (Base & { type: 'chips'; options: string[] });

type Note = { field: string; value: string; content: ReactNode };
type Status = 'idle' | 'sending' | 'ok' | 'error' | 'not_configured';

export function LeadForm({
  formName,
  fields,
  title,
  meta,
  submitLabel = 'Trimite cererea',
  tone = 'white',
  consentText = 'Sunt de acord ca datele mele să fie folosite pentru a fi contactat cu o ofertă.',
  notes = [],
  className = '',
}: {
  formName: string;
  fields: Field[];
  title?: string;
  meta?: string;
  submitLabel?: string;
  tone?: 'white' | 'stone';
  consentText?: string;
  notes?: Note[];
  className?: string;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [choices, setChoices] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    for (const f of fields) {
      if (f.type === 'segmented' || f.type === 'chips') init[f.name] = f.options[0];
    }
    return init;
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload: Record<string, string> = { formular: formName };
    new FormData(form).forEach((v, k) => {
      payload[k] = String(v);
    });
    setStatus('sending');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus('ok');
        form.reset();
        return;
      }
      setStatus(res.status === 503 ? 'not_configured' : 'error');
    } catch {
      setStatus('error');
    }
  }

  const id = (name: string) => `${formName.replace(/\W+/g, '-').toLowerCase()}-${name}`;

  return (
    <form className={`form cut${tone === 'stone' ? ' form--stone' : ''} ${className}`.trim()} onSubmit={onSubmit} noValidate={false}>
      {(title || meta) && (
        <div className="full form__head">
          {title && <h2 className="display t-h5" style={{ fontSize: 'clamp(34px, 3.4vw, 46px)' }}>{title}</h2>}
          {meta && <span className="mono muted">{meta}</span>}
        </div>
      )}

      {fields.map((f) => {
        const cls = f.full ? 'full' : undefined;
        if (f.type === 'segmented' || f.type === 'chips') {
          const note = notes.find((n) => n.field === f.name && n.value === choices[f.name]);
          return (
            <fieldset key={f.name} className={`fieldset full`}>
              <legend>{f.label}</legend>
              <div
                className={f.type === 'segmented' ? 'segmented' : 'chips'}
                style={f.type === 'segmented' ? ({ ['--n' as string]: f.options.length } as React.CSSProperties) : undefined}
              >
                {f.options.map((opt) => (
                  <label key={opt}>
                    <input
                      type="radio"
                      name={f.name}
                      value={opt}
                      checked={choices[f.name] === opt}
                      onChange={() => setChoices((c) => ({ ...c, [f.name]: opt }))}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
              {f.type === 'segmented' && f.hint && <p className="hint">{f.hint}</p>}
              {note && <p className="note">{note.content}</p>}
            </fieldset>
          );
        }
        if (f.type === 'textarea') {
          return (
            <label key={f.name} className={`field ${cls ?? ''}`} htmlFor={id(f.name)}>
              {f.label}
              <textarea id={id(f.name)} name={f.name} className="input" rows={4} required={f.required} maxLength={4000} />
            </label>
          );
        }
        if (f.type === 'select') {
          return (
            <label key={f.name} className={`field ${cls ?? ''}`} htmlFor={id(f.name)}>
              {f.label}
              <select id={id(f.name)} name={f.name} className="input" required={f.required} defaultValue="">
                <option value="" disabled>
                  {f.placeholder ?? 'Alege'}
                </option>
                {f.options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
          );
        }
        return (
          <label key={f.name} className={`field ${cls ?? ''}`} htmlFor={id(f.name)}>
            {f.label}
            <input
              id={id(f.name)}
              name={f.name}
              type={f.type}
              className="input"
              autoComplete={f.autoComplete}
              required={f.required}
              maxLength={200}
              inputMode={f.type === 'tel' ? 'tel' : undefined}
            />
          </label>
        );
      })}

      {/* Capcană anti-spam: câmp invizibil pentru oameni */}
      <div className="hp" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="consent full">
        <input type="checkbox" name="acord" value="da" required />
        <span>{consentText}</span>
      </label>

      {status === 'ok' && (
        <p className="full form-status form-status--ok" role="status">
          Mulțumim! Am primit cererea ta și te contactăm în cel mai scurt timp.
        </p>
      )}
      {(status === 'error' || status === 'not_configured') && (
        <p className="full form-status form-status--error" role="alert">
          Nu am putut trimite formularul acum. Sună-ne la <a href={site.phoneHref}>{site.phone}</a> sau scrie la{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}

      <button type="submit" className="btn btn--forest btn--icon full" disabled={status === 'sending'}>
        <span>{status === 'sending' ? 'Se trimite…' : submitLabel}</span>
        <span className="btn__badge">
          <Arrow />
        </span>
      </button>
    </form>
  );
}
