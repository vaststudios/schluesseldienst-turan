import Image from "next/image";
import { DoorOpen, KeyRound, ShieldCheck } from "lucide-react";

import { cn } from "@/lib/utils";

const services = [
  {
    icon: DoorOpen,
    title: "Zugefallene Türen öffnen",
    text: "Wir prüfen zuerst die schonendste Öffnungsmethode und erklären das Vorgehen, bevor wir beginnen.",
    image: "/assets/services/tueroeffnung-semih.webp",
    imageAlt: "Semih Turan prüft eine moderne Wohnungstür",
    imagePosition: "object-[66%_center]",
    featured: true,
  },
  {
    icon: KeyRound,
    title: "Schlösser austauschen",
    text: "Defekte oder verlorene Schließzylinder ersetzen wir passend zur vorhandenen Tür.",
    image: "/assets/services/schlosswechsel.jpg",
    imageAlt: "Neu eingesetzter Schließzylinder mit Schutzbeschlag",
    imagePosition: "object-center",
  },
  {
    icon: ShieldCheck,
    title: "Sicherheit nachrüsten",
    text: "Für Schutzbeschläge und zusätzliche Sicherungen erhalten Sie eine konkrete Empfehlung vor Ort.",
    image: "/assets/services/sicherheit.jpg",
    imageAlt: "Moderner Schutzbeschlag an einer Wohnungstür",
    imagePosition: "object-[62%_center]",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="scroll-mt-24 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-3xl flex-col gap-4">
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
            Hilfe, wenn es darauf ankommt.
          </h2>
          <p className="max-w-[62ch] text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Vom akuten Notfall bis zur geplanten Nachrüstung: Sie erfahren vorab, was sinnvoll ist und was es kostet.
          </p>
        </div>

        <div className="mt-10 grid grid-flow-dense grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-2">
          {services.map(({ icon: Icon, title, text, image, imageAlt, imagePosition, featured }) => (
            <article
              key={title}
              className={cn(
                "group relative isolate flex min-h-80 overflow-hidden rounded-2xl border border-border/60 bg-brand-primary-dark text-primary-foreground shadow-sm shadow-primary/5",
                featured
                  ? "md:col-span-7 md:row-span-2 md:min-h-[32rem]"
                  : "md:col-span-5 md:min-h-62",
              )}
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes={featured ? "(min-width: 1280px) 700px, (min-width: 768px) 58vw, calc(100vw - 2rem)" : "(min-width: 1280px) 500px, (min-width: 768px) 40vw, calc(100vw - 2rem)"}
                className={cn("z-0 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]", imagePosition)}
              />
              <span className="absolute inset-0 z-10 bg-brand-primary-dark/12 transition-colors duration-500 group-hover:bg-brand-primary-dark/20" aria-hidden="true" />
              <span className="absolute inset-0 z-10 bg-gradient-to-t from-brand-primary-dark via-brand-primary-dark/72 via-[42%] to-transparent to-[78%]" aria-hidden="true" />

              <div className={cn("relative z-20 flex w-full flex-col justify-between p-7 md:p-8", featured && "md:p-10")}>
                <span className="flex size-12 items-center justify-center rounded-lg border border-primary-foreground/15 bg-brand-primary-dark/45 text-primary-foreground shadow-sm backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-0.5">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <div className="mt-24 flex flex-col gap-3">
                  <h3 className={cn("text-balance font-semibold tracking-[-0.025em]", featured ? "max-w-[14ch] text-3xl sm:text-5xl" : "max-w-[18ch] text-2xl")}>
                  {title}
                  </h3>
                  <p className={cn("max-w-[48ch] text-pretty text-primary-foreground/75", featured ? "text-base leading-7" : "text-sm leading-6")}>
                    {text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
