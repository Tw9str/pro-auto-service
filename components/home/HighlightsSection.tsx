const highlights = [
  { value: '15+', label: 'Jaar ervaring' },
  { value: '4,9/5', label: 'Klantwaardering' },
  { value: '12k+', label: 'Auto’s onderhouden' },
  { value: '24 mnd', label: 'Garantie op werk' },
];

export function HighlightsSection() {
  return (
    <section className="bg-[#0c0e11] text-white" aria-label="Onze resultaten">
      <div className="shell grid grid-cols-2 py-7 lg:grid-cols-4 lg:py-9">
        {highlights.map((item, index) => (
          <div
            key={item.label}
            className={`flex flex-col gap-2 border-zinc-800 px-4 py-3 sm:flex-row sm:items-center sm:gap-4 lg:border-r lg:px-8 lg:py-0 ${index === 0 ? 'lg:pl-0' : ''} ${index === highlights.length - 1 ? 'lg:border-0' : ''}`}
          >
            <strong className="text-2xl sm:text-3xl">{item.value}</strong>
            <span className="text-[9px] leading-4 tracking-[0.12em] text-zinc-500 uppercase">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
