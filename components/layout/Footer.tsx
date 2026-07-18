import Link from 'next/link';

import { Logo } from '@/components/brand/Logo';
import { siteConfig } from '@/lib/siteConfig';

export function Footer() {
  return (
    <footer id="contact" className="bg-ink pt-16 pb-6 text-zinc-400">
      <div className="shell grid grid-cols-2 gap-10 md:grid-cols-[1.6fr_1fr_1fr_1.1fr]">
        <div className="col-span-2 md:col-span-1">
          <Link href="#top" aria-label="Terug naar boven">
            <Logo className="h-13 w-auto" />
          </Link>
          <p className="mt-4 max-w-52 text-xs">{siteConfig.description}</p>
        </div>
        <div>
          <h2 className="mb-4 text-[10px] font-bold tracking-[.15em] text-white uppercase">
            Bezoek
          </h2>
          <address className="text-xs leading-5 not-italic">
            {siteConfig.address.map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </address>
        </div>
        <div>
          <h2 className="mb-4 text-[10px] font-bold tracking-[.15em] text-white uppercase">
            Openingstijden
          </h2>
          <p className="text-xs leading-5">
            {siteConfig.hours.map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-[10px] font-bold tracking-[.15em] text-white uppercase">
            Contact
          </h2>
          <Link
            className="block text-xs text-white"
            href={siteConfig.phone.href}
          >
            {siteConfig.phone.display}
          </Link>
          <Link
            className="mt-2 block break-all text-xs text-white"
            href={siteConfig.email.href}
          >
            {siteConfig.email.display}
          </Link>
        </div>
      </div>
      <div className="shell mt-12 flex flex-col justify-between gap-2 border-t border-zinc-800 pt-5 text-[9px] tracking-widest text-zinc-600 uppercase sm:flex-row">
        <span>
          © {new Date().getFullYear()} {siteConfig.name}. Alle rechten voorbehouden.
        </span>
        <span>Voor automobilisten die meer verwachten.</span>
      </div>
    </footer>
  );
}
