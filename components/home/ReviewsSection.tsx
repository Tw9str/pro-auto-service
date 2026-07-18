import { Star } from 'lucide-react';

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-28">
      <div className="shell grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
        <div>
          <p className="eyebrow mb-5">Vertrouwd door automobilisten</p>
          <h2 className="display-title text-[2.6rem] sm:text-6xl">
            Onze reputatie rijdt mee met elke reparatie.
          </h2>
          <div className="mt-8 flex items-center gap-5">
            <strong className="text-5xl">4.9</strong>
            <div>
              <div className="flex gap-1 text-amber-500" aria-label="5 van 5 sterren">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={15} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-1 text-[10px] text-zinc-400">
                Gebaseerd op 340+ beoordelingen
              </p>
            </div>
          </div>
        </div>
        <blockquote className="relative border-l-[3px] border-brand bg-paper p-8 sm:p-12">
          <span
            className="absolute top-3 right-8 font-serif text-8xl leading-none text-zinc-200"
            aria-hidden="true"
          >
            “
          </span>
          <p className="relative font-serif text-xl leading-8 italic text-zinc-700 sm:text-2xl sm:leading-10">
            Pro Auto maakte het hele proces eenvoudig. Ik kreeg foto’s en een
            heldere uitleg voordat het werk begon. Mijn auto rijdt weer perfect
            en de eindfactuur kwam precies overeen met de prijsopgave.
          </p>
          <footer className="mt-8 flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-ink text-xs font-bold text-white">
              MV
            </span>
            <div>
              <strong className="block text-sm">Mark van D.</strong>
              <small className="text-xs text-zinc-400">
                Geverifieerde klant · 2 weken geleden
              </small>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
