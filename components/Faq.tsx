'use client';

import { useId, useState } from 'react';

export type QA = { q: string; a: string };

export function Faq({ items }: { items: QA[] }) {
  const [open, setOpen] = useState(0);
  const uid = useId();
  return (
    <div className="faq">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className="faq__item">
            <button
              type="button"
              className="faq__q"
              aria-expanded={isOpen}
              aria-controls={`${uid}-${i}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              {it.q}
              <span className="faq__sign" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div id={`${uid}-${i}`} hidden={!isOpen}>
              <p className="faq__a">{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
