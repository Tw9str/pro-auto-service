import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Phone } from 'lucide-react';

import { siteConfig } from '@/lib/siteConfig';

const trustItems = [
  'Ervaren monteurs',
  '24 maanden garantie',
  'Snel en persoonlijk geholpen',
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-190 items-center overflow-hidden bg-ink text-white lg:h-[92vh] lg:max-h-235"
    >
      <Image
        src="/images/hero-garage.png"
        alt="Monteur werkt aan een auto in een moderne werkplaats"
        fill
        preload
        sizes="100vw"
        className="object-cover object-[64%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,8,.97)_0%,rgba(5,6,8,.80)_34%,rgba(5,6,8,.17)_68%),linear-gradient(0deg,rgba(5,6,8,.67),transparent_38%)]" />
      <div className="shell relative z-10 pt-20 sm:pt-28">
        <p className="eyebrow mb-6">Vakmanschap voor elke kilometer</p>
        <h1 className="max-w-3xl font-display text-[3.15rem] leading-[0.88] font-extrabold tracking-tighter uppercase sm:text-7xl lg:text-[5.7rem]">
          Vakkundige service.
          <br />
          <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,.58)]">
            Zorgeloos onderweg.
          </span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
          Eerlijk advies, moderne diagnose en zorgvuldig onderhoud zodat uw auto
          veilig en betrouwbaar blijft rijden.
        </p>
        <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
          <Link className="button-primary" href="#booking">
            Afspraak maken <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            href={siteConfig.phone.href}
            className="flex items-center gap-3 font-bold"
          >
            <span className="grid size-10 place-items-center rounded-full border border-white/30">
              <Phone size={15} aria-hidden="true" />
            </span>
            <span>
              <small className="block text-[9px] tracking-[0.16em] text-zinc-500 uppercase">
                Bel met een serviceadviseur
              </small>
              {siteConfig.phone.display}
            </span>
          </Link>
        </div>
        <div className="mt-11 flex max-w-2xl flex-wrap gap-x-7 gap-y-3 text-xs text-zinc-400">
          {trustItems.map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="grid size-4.5 place-items-center rounded-full bg-brand/20 text-brand">
                <Check size={12} strokeWidth={3} aria-hidden="true" />
              </span>
              {item}
            </span>
          ))}
        </div>
      </div>
      <Link
        href="#services"
        aria-label="Ga naar onze diensten"
        className="absolute right-10 bottom-8 hidden h-12 w-8 rounded-full border border-white/30 lg:block"
      >
        <span className="absolute top-2.5 left-3.5 h-2.5 w-0.5 animate-[scroll-cue_1.7s_infinite] bg-white" />
      </Link>
    </section>
  );
}
