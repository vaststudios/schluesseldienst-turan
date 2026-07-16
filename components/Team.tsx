import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const principles = [
  "Vorgehen und Preis werden vor Arbeitsbeginn erklärt",
  "Schonende Öffnungsmethode, wenn technisch möglich",
  "Direkter Ansprechpartner statt anonymer Vermittlung",
];

export default function Team() {
  return (
    <section id="ueber-uns" className="scroll-mt-24 bg-team py-14 text-team-foreground sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 text-center sm:px-6 lg:gap-14 lg:px-8">
        <figure className="flex w-full max-w-[26rem] flex-col items-center">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-team-foreground/15 bg-team-foreground/5 shadow-xl shadow-team-foreground/5">
            <Image
              src="/assets/semih.jpeg"
              alt="Semih Turan, Inhaber des Schlüsseldiensts Turan"
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) calc(100vw - 2rem), 26rem"
            />
          </div>
          <figcaption className="mt-4 text-sm text-team-muted">Semih Turan, Inhaber und direkter Ansprechpartner</figcaption>
        </figure>

        <div className="flex w-full max-w-4xl flex-col items-center gap-6">
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-team-foreground sm:text-5xl">
            Persönliche Hilfe braucht ein Gesicht.
          </h2>
          <p className="max-w-2xl text-pretty text-base leading-7 text-team-muted sm:text-lg">
            Semih Turan begleitet Ihren Auftrag vom ersten Telefonat bis zur abgeschlossenen Arbeit. Sie wissen, wer kommt und was als Nächstes passiert.
          </p>
          <ul className="mt-2 grid w-full gap-3 md:grid-cols-3">
            {principles.map((principle) => (
              <li key={principle} className="flex min-h-36 flex-col items-center justify-center gap-3 rounded-xl border border-team-foreground/15 bg-team-foreground/5 p-5 text-sm leading-6 text-team-foreground sm:text-base">
                <CheckCircle2 className="size-6 shrink-0" aria-hidden="true" />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
