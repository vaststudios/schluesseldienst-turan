import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Clock3, MapPinned, Phone, ReceiptText, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative isolate mx-auto grid max-w-7xl items-center gap-10 overflow-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8 xl:grid-cols-[minmax(0,1.55fr)_minmax(20rem,0.75fr)] xl:gap-12 xl:py-12">
      <div className="dot-grid-fade pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="hero-enter flex min-w-0 max-w-5xl flex-col items-start gap-6">
        <Badge variant="outline" className="h-7 rounded-full border-primary/20 bg-primary/5 px-3 text-primary">
          Türöffnung ab 89 € inkl. Anfahrt
        </Badge>
        <h1 className="min-w-0 text-balance text-[clamp(2.45rem,11vw,4.25rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-foreground">
          <span className="block">Schlüsseldienst München.</span>
          <span className="block">24/7 erreichbar.</span>
        </h1>
        <p className="max-w-[58ch] text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
          Wir öffnen zugefallene Türen möglichst schonend. Den Preis bestätigen wir vor Arbeitsbeginn.
        </p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button asChild size="lg" variant="call" className="hidden h-14 gap-4 rounded-full py-2 pl-6 pr-2 text-base sm:inline-flex">
            <a href="tel:+4915565906604">
              Jetzt anrufen
              <span className="flex size-10 items-center justify-center rounded-full bg-primary-foreground text-primary shadow-sm transition-transform duration-300 group-hover/button:rotate-6">
                <Phone data-icon="inline-end" aria-hidden="true" />
              </span>
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-13 rounded-md px-6 text-base">
            <Link href="#preise">
              Festpreise ansehen
              <ArrowDown data-icon="inline-end" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="hero-image-enter w-full xl:justify-self-stretch">
        <figure className="image-outline relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted sm:aspect-[16/11] xl:aspect-[4/3]">
          <Image
            src="/assets/service-image-semih.webp"
            alt="Semih Turan bei einer Türöffnung an einer Wohnungstür"
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1279px) 34rem, 27rem"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary via-primary/90 to-transparent px-5 pb-5 pt-16 text-primary-foreground sm:px-6">
            <p className="text-sm font-semibold">Direkt in München</p>
            <p className="mt-1 text-sm text-primary-foreground/75">Ein Ansprechpartner vom Anruf bis zur offenen Tür.</p>
          </div>
        </figure>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <article className="group flex min-h-32 flex-col justify-between rounded-xl border bg-primary p-4 text-primary-foreground shadow-sm transition-transform duration-300 hover:-translate-y-0.5 sm:p-5">
            <Clock3 className="size-5 text-primary-foreground/70" aria-hidden="true" />
            <div className="flex flex-col gap-0.5">
              <p className="text-2xl font-semibold tracking-[-0.03em]">24/7</p>
              <p className="text-xs leading-5 text-primary-foreground/70">Telefonisch erreichbar</p>
            </div>
          </article>

          <article className="group flex min-h-32 flex-col justify-between rounded-xl border bg-background p-4 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 sm:p-5">
            <ReceiptText className="size-5 text-primary" aria-hidden="true" />
            <div className="flex flex-col gap-0.5">
              <p className="text-2xl font-semibold tracking-[-0.03em] text-foreground">ab 89 €</p>
              <p className="text-xs leading-5 text-muted-foreground">Anfahrt inklusive</p>
            </div>
          </article>

          <article className="group flex min-h-28 items-center gap-4 rounded-xl border bg-background p-4 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 sm:p-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-primary">
              <MapPinned className="size-5" aria-hidden="true" />
            </span>
            <div className="flex min-w-0 flex-col gap-0.5">
              <p className="font-semibold text-foreground">Ganz München</p>
              <p className="text-xs leading-5 text-muted-foreground">Alle Stadtteile</p>
            </div>
          </article>

          <article className="group flex min-h-28 items-center gap-4 rounded-xl border bg-background p-4 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 sm:p-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-primary">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </span>
            <div className="flex min-w-0 flex-col gap-0.5">
              <p className="font-semibold text-foreground">Preis vorher</p>
              <p className="text-xs leading-5 text-muted-foreground">Vor Arbeitsbeginn</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
