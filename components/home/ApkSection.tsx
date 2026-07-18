import Link from 'next/link';
import { ArrowRight, CarFront, Leaf, Lightbulb, ShieldCheck } from 'lucide-react';

const inspectionPoints = [
  {
    icon: ShieldCheck,
    title: 'Veiligheid',
    text: 'Controle van onder meer remmen, banden en wielophanging.',
  },
  {
    icon: Lightbulb,
    title: 'Zicht & verlichting',
    text: 'Verlichting, ruiten, spiegels en zicht rondom de auto.',
  },
  {
    icon: Leaf,
    title: 'Milieu',
    text: 'Controle op de wettelijke milieu- en uitstoot­eisen.',
  },
];

export function ApkSection() {
  return (
    <section id="apk" className="overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div className="shell grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
        <div className="relative min-h-96 overflow-hidden border border-white/10 bg-panel p-8 sm:p-12">
          <span
            className="absolute -right-5 -bottom-12 font-display text-[14rem] leading-none font-extrabold tracking-tighter text-white/3 sm:text-[18rem]"
            aria-hidden="true"
          >
            APK
          </span>
          <div className="relative z-10 flex h-full flex-col justify-between">
            <span className="grid size-16 place-items-center rounded-sm bg-brand text-white shadow-xl shadow-brand/20">
              <CarFront size={30} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <div className="mt-24">
              <p className="text-[10px] font-extrabold tracking-[.18em] text-zinc-500 uppercase">
                Goed om te weten
              </p>
              <p className="mt-3 max-w-md text-lg leading-7 text-zinc-200">
                Laat u de auto binnen twee maanden vóór de vervaldatum keuren,
                dan blijft de oorspronkelijke APK-datum behouden.
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-5">APK-keuring</p>
          <h2 className="display-title">
            Veilig de weg op.
            <br />
            Op tijd gekeurd.
          </h2>
          <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-400">
            Laat uw auto zorgvuldig controleren op de wettelijke veiligheids- en
            milieueisen. U krijgt heldere uitleg over de uitkomst en weet precies
            waar u aan toe bent.
          </p>

          <div className="mt-8 grid gap-px bg-white/10 sm:grid-cols-3">
            {inspectionPoints.map((point) => {
              const Icon = point.icon;

              return (
                <article key={point.title} className="bg-ink p-5">
                  <Icon className="text-brand" size={21} aria-hidden="true" />
                  <h3 className="mt-4 text-sm font-bold">{point.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">
                    {point.text}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
            <Link className="button-primary" href="#booking">
              Plan uw APK <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <p className="max-w-xs text-[10px] leading-5 text-zinc-500">
              Let op: een APK is een wettelijke keuring en geen onderhoudsbeurt.
              Combineer beide voor extra zekerheid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
