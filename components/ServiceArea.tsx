import { ArrowUpRight, MapPinned, Phone } from "lucide-react";

import ServiceAreaMapLoader from "@/components/ServiceAreaMapLoader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ServiceArea() {
  return (
    <section id="einsatzgebiet" className="scroll-mt-24 bg-muted/35 py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16 lg:px-8">
        <div className="flex max-w-xl flex-col items-start gap-6">
          <Badge variant="outline" className="gap-2 bg-background/80">
            <MapPinned aria-hidden="true" />
            Einsatzgebiet München
          </Badge>

          <div className="flex flex-col gap-4">
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
              In ganz München für Sie unterwegs.
            </h2>
            <p className="max-w-[56ch] text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              Unser Einsatzgebiet umfasst ganz München sowie Haar, Höhenkirchen-Siegertsbrunn und Sauerlach. Den Anfahrtsweg und den Preis bestätigen wir direkt am Telefon.
            </p>
          </div>

          <dl className="grid w-full grid-cols-2 gap-px overflow-hidden rounded-xl border bg-border">
            <div className="flex flex-col gap-1 bg-background p-4 sm:p-5">
              <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">Abdeckung</dt>
              <dd className="text-base font-semibold text-foreground sm:text-lg">München + Umland</dd>
            </div>
            <div className="flex flex-col gap-1 bg-background p-4 sm:p-5">
              <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">Erreichbar</dt>
              <dd className="text-base font-semibold text-foreground sm:text-lg">Rund um die Uhr</dd>
            </div>
          </dl>

          <Button asChild size="lg" className="h-11 px-4">
            <a href="tel:+4915565906604">
              <Phone data-icon="inline-start" aria-hidden="true" />
              Einsatz anfragen
              <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
            </a>
          </Button>
        </div>

        <ServiceAreaMapLoader />
      </div>
    </section>
  );
}
