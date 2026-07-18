import Link from 'next/link';
import {
  ArrowRight,
  BatteryCharging,
  CircleGauge,
  Cog,
  Disc3,
  Wrench,
} from 'lucide-react';

const services = [
  {
    icon: CircleGauge,
    title: 'Diagnose',
    text: 'Moderne apparatuur vindt de oorzaak, niet alleen het symptoom.',
    link: 'Plan diagnose',
    featured: true,
  },
  {
    icon: Wrench,
    title: 'Onderhoud',
    text: 'Merkgericht onderhoud dat de levensduur verlengt en problemen voorkomt.',
    link: 'Bekijk onderhoud',
  },
  {
    icon: Disc3,
    title: 'Remmen & Banden',
    text: 'Betrouwbaar remmen, goede grip en veilig rijgedrag in elk seizoen.',
    link: 'Bekijk mogelijkheden',
  },
  {
    icon: Cog,
    title: 'Motorreparatie',
    text: 'Zorgvuldige reparaties voor betrouwbare prestaties en een langere levensduur.',
    link: 'Motorservice',
  },
  {
    icon: BatteryCharging,
    title: 'Auto-elektronica',
    text: 'Vakkundige controle van accu, laadsysteem en elektronische storingen.',
    link: 'Elektronische diagnose',
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const Icon = service.icon;

  return (
    <article
      className={`group relative min-h-85 border-r border-b p-8 transition hover:z-10 hover:-translate-y-1 hover:shadow-2xl ${service.featured ? 'border-brand bg-brand text-white' : 'bg-white'}`}
    >
      <span
        className={`grid size-14 place-items-center rounded-sm ${service.featured ? 'bg-white/15' : 'bg-zinc-100'}`}
      >
        <Icon size={29} strokeWidth={1.6} aria-hidden="true" />
      </span>
      <div className="mt-5 flex items-end justify-between">
        <h3 className="text-2xl font-bold">{service.title}</h3>
        <span
          className={`font-serif italic ${service.featured ? 'text-red-200' : 'text-zinc-400'}`}
        >
          0{index + 1}
        </span>
      </div>
      <p
        className={`mt-3 text-sm leading-6 ${service.featured ? 'text-red-100' : 'text-zinc-500'}`}
      >
        {service.text}
      </p>
      <Link
        className="absolute bottom-8 flex items-center gap-2 text-[10px] font-extrabold tracking-widest uppercase"
        href="#booking"
      >
        {service.link}
        <ArrowRight
          className={service.featured ? '' : 'text-brand'}
          size={14}
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="shell">
        <div className="mb-12 grid items-end gap-7 lg:grid-cols-[1.35fr_.65fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-5">Alles wat uw auto nodig heeft</p>
            <h2 className="display-title">Service zonder compromissen.</h2>
          </div>
          <p className="text-sm leading-7 text-zinc-500">
            Van regulier onderhoud tot complexe reparaties: onze monteurs leveren
            zorgvuldig werk en houden u duidelijk op de hoogte.
          </p>
        </div>
        <div className="grid overflow-hidden border-t border-l sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
          <article className="flex min-h-85 flex-col justify-center border-r border-b bg-panel p-8 text-white">
            <p className="eyebrow mb-4">Niet zeker wat er nodig is?</p>
            <h3 className="text-3xl font-bold">Overleg met onze serviceadviseur.</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Vertel ons wat u merkt. Wij helpen u de juiste vervolgstap te bepalen.
            </p>
            <Link
              className="mt-7 inline-flex w-fit border border-white/50 px-5 py-3 text-[10px] font-extrabold tracking-widest uppercase transition hover:bg-white hover:text-ink"
              href="tel:+31850142788"
            >
              Bel 085 - 014 27 88
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
