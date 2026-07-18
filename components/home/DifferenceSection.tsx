import Link from 'next/link';
import {
  ArrowRight,
  CalendarCheck,
  ClipboardCheck,
  ShieldCheck,
} from 'lucide-react';

const differences = [
  {
    icon: ClipboardCheck,
    title: 'Digitale voertuiginspectie',
    text: 'Bekijk foto’s en opmerkingen van de monteur voordat u werk goedkeurt.',
  },
  {
    icon: CalendarCheck,
    title: 'Heldere prijsopgave vooraf',
    text: 'U kent de werkzaamheden en kosten voordat de reparatie begint.',
  },
  {
    icon: ShieldCheck,
    title: 'Goede onderdelen, beschermd werk',
    text: 'Kwaliteitsonderdelen en 24 maanden garantie op uitgevoerd werk.',
  },
];

export function DifferenceSection() {
  return (
    <section id="why-us" className="bg-paper py-20 sm:py-28">
      <div className="shell">
        <div className="grid items-end gap-7 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-5">Het verschil van Pro Auto</p>
            <h2 className="display-title">
              Duidelijke uitleg.
              <br />
              Goed werk. Elke keer.
            </h2>
          </div>
          <p className="text-sm leading-7 text-zinc-600">
            Goede autoservice begint met vertrouwen. Daarom laten we zien wat we
            vinden, leggen we uit wat nu belangrijk is en adviseren we alleen wat
            uw auto echt nodig heeft.
          </p>
        </div>
        <div className="mt-12 grid border-t border-l sm:grid-cols-3">
            {differences.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="border-r border-b bg-white p-7">
                  <div className="flex items-center justify-between">
                    <Icon className="text-brand" size={23} aria-hidden="true" />
                    <span className="text-xs font-bold text-zinc-300">0{index + 1}</span>
                  </div>
                  <div className="mt-7">
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-zinc-500">
                      {item.text}
                    </p>
                  </div>
                </article>
              );
            })}
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className="text-xs text-zinc-500">Al 15 jaar betrokken bij automobilisten in de regio.</p>
          <Link
            className="inline-flex items-center gap-3 text-[10px] font-extrabold tracking-[.12em] uppercase"
            href="#booking"
          >
            Maak kennis met onze werkplaats
            <ArrowRight className="text-brand" size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
