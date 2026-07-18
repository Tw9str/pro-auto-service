import { CalendarCheck, CarFront, ClipboardCheck } from 'lucide-react';

const steps = [
  {
    icon: CalendarCheck,
    title: 'Plan',
    text: 'Maak online of telefonisch een afspraak en vertel wat er speelt.',
  },
  {
    icon: ClipboardCheck,
    title: 'Beslis',
    text: 'Bekijk onze bevindingen en een duidelijke, gespecificeerde prijsopgave.',
  },
  {
    icon: CarFront,
    title: 'Rijd',
    text: 'Haal uw auto met vertrouwen op, zorgvuldig gecontroleerd en gerepareerd.',
  },
];

export function ProcessSection() {
  return (
    <section className="bg-[#101216] py-20 text-white sm:py-24">
      <div className="shell">
        <div className="text-center">
          <p className="mx-auto mb-5 w-fit text-[11px] font-extrabold tracking-[.2em] text-brand uppercase">
            Eenvoudig van begin tot eind
          </p>
          <h2 className="display-title">Goede service in drie stappen.</h2>
        </div>
        <ol className="relative mt-14 grid gap-12 md:grid-cols-3 md:gap-0 before:absolute before:top-6 before:right-[17%] before:left-[17%] before:hidden before:h-px before:bg-zinc-700 md:before:block">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="relative text-center md:px-12">
                <span className="relative z-10 mx-auto grid size-12 place-items-center rounded-full border border-zinc-600 bg-[#101216] text-brand">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-xs leading-5 text-zinc-500">{step.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
