import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const galleryItems = [
  {
    title: 'Diagnose',
    eyebrow: 'Moderne apparatuur',
    image: '/images/services/diagnostics.webp',
    alt: 'Monteur stelt een diagnose met professionele uitleesapparatuur',
    desktopLayout: 'lg:col-span-7 lg:row-span-2',
  },
  {
    title: 'Onderhoud',
    eyebrow: 'Preventieve zorg',
    image: '/images/services/maintenance.webp',
    alt: 'Monteur vervangt een oliefilter tijdens regulier onderhoud',
    desktopLayout: 'lg:col-span-3',
  },
  {
    title: 'Remmen & banden',
    eyebrow: 'Veilig remmen',
    image: '/images/services/brakes-tires.webp',
    alt: 'Remschijf en band worden zorgvuldig gecontroleerd',
    desktopLayout: 'lg:col-span-2',
  },
  {
    title: 'Motorreparatie',
    eyebrow: 'Precisiewerk',
    image: '/images/services/engine-repair.webp',
    alt: 'Monteur werkt nauwkeurig aan een moderne motor',
    desktopLayout: 'lg:col-span-2',
  },
  {
    title: 'Auto-elektronica',
    eyebrow: 'Moderne systemen',
    image: '/images/services/electrical.webp',
    alt: 'Accu en elektrisch systeem van een auto worden doorgemeten',
    desktopLayout: 'lg:col-span-3',
  },
];

function GalleryItem({
  item,
  index,
}: {
  item: (typeof galleryItems)[number];
  index: number;
}) {
  const featured = index === 0;

  return (
    <Link
      href="#booking"
      className={`group relative block min-h-96 snap-start overflow-hidden bg-panel lg:min-h-0 ${item.desktopLayout}`}
      aria-label={`Afspraak maken voor ${item.title}`}
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        sizes={
          featured
            ? '(max-width: 1024px) 82vw, 58vw'
            : '(max-width: 1024px) 82vw, 25vw'
        }
        className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/5 to-black/15 transition duration-500 group-hover:from-black/80" />
      <span className="absolute top-5 right-5 text-[9px] font-extrabold tracking-[.18em] text-white/55">
        0{index + 1} / 05
      </span>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
        <div>
          <p className="text-[9px] font-extrabold tracking-[.17em] text-brand uppercase">
            {item.eyebrow}
          </p>
          <h3 className={`${featured ? 'mt-2 text-3xl sm:text-4xl' : 'mt-1 text-lg'} font-bold text-white`}>
            {item.title}
          </h3>
        </div>
        <span className="grid size-10 shrink-0 place-items-center border border-white/25 text-white transition group-hover:border-brand group-hover:bg-brand">
          <ArrowUpRight size={17} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

export function WorkshopGallery() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="workshop-title">
      <div className="shell">
        <div className="mb-10 grid items-end gap-6 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-5">Onze werkplaats</p>
            <h2
              id="workshop-title"
              className="font-display text-[2.75rem] leading-[.95] font-extrabold tracking-[-.035em] uppercase sm:text-6xl"
            >
              Vakmanschap zit in de details.
            </h2>
          </div>
          <div>
            <p className="max-w-lg text-sm leading-7 text-zinc-500">
              Moderne apparatuur helpt ons verder kijken. Ervaring bepaalt wat
              we ermee doen—van de eerste meting tot de laatste controle.
            </p>
            <p className="mt-4 text-[9px] font-extrabold tracking-[.16em] text-zinc-400 uppercase lg:hidden">
              Veeg om meer te zien →
            </p>
          </div>
        </div>

        <div className="grid auto-cols-[82%] grid-flow-col gap-2 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:h-140 lg:auto-cols-auto lg:grid-flow-row lg:grid-cols-12 lg:grid-rows-2 lg:overflow-visible lg:pb-0">
          {galleryItems.map((item, index) => (
            <GalleryItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
