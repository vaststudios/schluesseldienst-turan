const steps = [
  {
    number: "1",
    title: "Situation schildern",
    text: "Am Telefon klären wir Tür, Schloss und Einsatzort. Sie erhalten eine realistische Einschätzung zur Anfahrt.",
  },
  {
    number: "2",
    title: "Preis bestätigen",
    text: "Vor Arbeitsbeginn nennen und bestätigen wir den verbindlichen Preis für die besprochene Leistung.",
  },
  {
    number: "3",
    title: "Tür öffnen",
    text: "Wir wählen die möglichst schonende Methode und informieren Sie, falls besondere Risiken bestehen.",
  },
];

export default function Process() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-primary px-6 py-10 text-primary-foreground sm:px-10 sm:py-14 lg:px-14">
          <div className="max-w-3xl">
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Vom Anruf bis zur offenen Tür.
            </h2>
            <p className="mt-4 max-w-[58ch] text-pretty text-base leading-7 text-primary-foreground/72 sm:text-lg">
              Ein klarer Ablauf ohne Überraschungen bei Preis oder Vorgehen.
            </p>
          </div>
          <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-0">
            {steps.map((step, index) => (
              <li key={step.number} className="relative flex flex-col gap-4 md:px-7 md:first:pl-0 md:last:pr-0">
                {index > 0 && <span className="absolute inset-y-0 left-0 hidden w-px bg-primary-foreground/15 md:block" aria-hidden="true" />}
                <span className="text-4xl font-semibold tabular-nums text-primary-foreground/35">{step.number}</span>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-pretty text-sm leading-6 text-primary-foreground/72">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
