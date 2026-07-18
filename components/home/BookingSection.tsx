import Link from 'next/link';

import { BookingForm } from '@/components/home/BookingForm';
import { siteConfig } from '@/lib/siteConfig';

export function BookingSection() {
  return (
    <section id="booking" className="bg-brand py-20 text-white sm:py-24">
      <div className="shell grid items-center gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <div>
          <p className="eyebrow mb-5 text-white">Klaar wanneer u dat bent</p>
          <h2 className="display-title">We helpen u weer op weg.</h2>
          <p className="mt-6 text-sm leading-6 text-red-100">
            Deel enkele gegevens en ons serviceteam neemt contact op om uw
            afspraak te bevestigen.
          </p>
          <div className="mt-9">
            <span className="block text-[9px] tracking-[.14em] uppercase">
              Liever bellen?
            </span>
            <Link
              href={siteConfig.phone.href}
              className="text-2xl font-extrabold"
            >
              {siteConfig.phone.display}
            </Link>
          </div>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
