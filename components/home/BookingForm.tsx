'use client';

import { SubmitEvent, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function BookingForm() {
  const [message, setMessage] = useState('');

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get('name') ?? '').trim().split(' ')[0];

    setMessage(
      `Uw gegevens zijn nog niet verzonden${firstName ? `, ${firstName}` : ''}. Koppel een boekingsprovider om online aanvragen te ontvangen, of bel ons voor een afspraak.`,
    );
  }

  const fieldClass =
    'mt-2 w-full border-0 border-b border-zinc-300 bg-transparent px-0 py-3 text-sm font-normal tracking-normal text-zinc-900 normal-case outline-none transition focus:border-brand';
  const labelClass =
    'text-[10px] font-extrabold tracking-[0.13em] text-zinc-800 uppercase';

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 text-ink shadow-2xl shadow-black/20 sm:p-10"
    >
      <div className="grid gap-x-6 sm:grid-cols-2">
        <label className={labelClass}>
          Volledige naam
          <input
            className={fieldClass}
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Uw naam"
            required
          />
        </label>
        <label className={labelClass}>
          Telefoonnummer
          <input
            className={fieldClass}
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="06 12345678"
            required
          />
        </label>
      </div>
      <div className="mt-6 grid gap-x-6 sm:grid-cols-2">
        <label className={labelClass}>
          Auto
          <input
            className={fieldClass}
            type="text"
            name="vehicle"
            placeholder="Bouwjaar, merk en model"
            required
          />
        </label>
        <label className={labelClass}>
          Gewenste dienst
          <select className={fieldClass} name="service" required defaultValue="">
            <option value="" disabled>
              Kies een dienst
            </option>
            <option>Diagnose</option>
            <option>APK-keuring</option>
            <option>Onderhoud</option>
            <option>Remmen & Banden</option>
            <option>Motorreparatie</option>
            <option>Auto-elektronica</option>
            <option>Anders</option>
          </select>
        </label>
      </div>
      <label className={`${labelClass} mt-6 block`}>
        Waarmee kunnen we helpen?
        <textarea
          className={`${fieldClass} resize-y`}
          name="details"
          rows={3}
          placeholder="Beschrijf wat uw auto nodig heeft of wat u opmerkt"
        />
      </label>
      <div className="mt-6 flex flex-col items-stretch justify-between gap-5 sm:flex-row sm:items-center">
        <p className="max-w-56 text-[9px] leading-relaxed text-zinc-400 normal-case">
          Door te verzenden stemt u ermee in dat wij contact opnemen over uw aanvraag.
        </p>
        <button className="button-primary" type="submit">
          Afspraak aanvragen <ArrowRight size={15} aria-hidden="true" />
        </button>
      </div>
      <p
        role="status"
        aria-live="polite"
        className="mt-4 text-xs font-semibold text-emerald-700"
      >
        {message}
      </p>
    </form>
  );
}
