import Link from 'next/link';
import { Menu, Phone, X } from 'lucide-react';

import { siteConfig } from '@/lib/siteConfig';
import { Logo } from '@/components/brand/Logo';

function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  return siteConfig.navigation.map((item) => (
    <Link
      key={item.href}
      className={
        mobile
          ? 'border-b border-white/10 py-3 transition hover:text-brand'
          : 'transition hover:text-brand'
      }
      href={item.href}
    >
      {item.label}
    </Link>
  ));
}

function MobileNavigation() {
  return (
    <details className="group relative lg:hidden">
      <summary
        className="grid size-11 cursor-pointer list-none place-items-center rounded-sm transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand [&::-webkit-details-marker]:hidden"
        aria-label="Navigatie openen of sluiten"
      >
        <Menu className="group-open:hidden" aria-hidden="true" />
        <X className="hidden group-open:block" aria-hidden="true" />
      </summary>
      <div className="absolute top-14 right-0 flex w-72 flex-col rounded-sm border border-white/10 bg-ink p-6 text-lg font-bold shadow-2xl">
        <NavigationLinks mobile />
        <Link className="button-primary mt-6" href="#booking">
          Afspraak maken
        </Link>
        <Link
          className="mt-5 flex items-center gap-3 text-sm text-zinc-400"
          href={siteConfig.phone.href}
        >
          <Phone size={17} aria-hidden="true" />
          {siteConfig.phone.display}
        </Link>
      </div>
    </details>
  );
}

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="hidden h-8 bg-black/60 text-[10px] tracking-[0.14em] text-zinc-400 uppercase backdrop-blur-sm sm:block">
        <div className="shell flex h-full items-center justify-between">
          <p className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10" />
            Nu ruimte voor nieuwe afspraken
          </p>
          <div className="flex gap-8">
            <Link className="text-white" href={siteConfig.phone.href}>
              {siteConfig.phone.display}
            </Link>
            <span>Ma–vr 08:00–18:00 · Za 08:00–15:00</span>
          </div>
        </div>
      </div>
      <nav
        className="shell flex h-20 items-center justify-between"
        aria-label="Primary navigation"
      >
        <Link href="#top" aria-label="Pro Auto Service home">
          <Logo className="h-13 w-auto" />
        </Link>
        <div className="hidden items-center gap-8 text-sm font-semibold lg:flex">
          <NavigationLinks />
          <Link className="button-primary min-h-11 px-5" href="#booking">
            Afspraak maken
          </Link>
        </div>
        <MobileNavigation />
      </nav>
    </header>
  );
}
