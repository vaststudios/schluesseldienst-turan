import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-primary px-4 pb-24 pt-14 text-primary-foreground sm:px-6 sm:pb-8 sm:pt-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-primary-foreground/15 pb-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="flex max-w-md flex-col items-start gap-5">
            <div className="flex items-center gap-3">
              <Image src="/assets/logo.svg" alt="" width={56} height={56} className="size-14 brightness-0 invert" />
              <span className="text-base font-semibold">Schlüsseldienst Turan</span>
            </div>
            <p className="text-pretty text-2xl font-semibold tracking-[-0.02em]">Direkte Hilfe in München – telefonisch rund um die Uhr.</p>
            <Button asChild variant="secondary" size="lg" className="h-12 rounded-md px-5">
              <a href="tel:+4915565906604"><Phone data-icon="inline-start" aria-hidden="true" />Jetzt anrufen</a>
            </Button>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Kontakt</h2>
            <div className="mt-4 flex flex-col text-sm text-primary-foreground/75">
              <a className="flex min-h-11 items-center hover:text-primary-foreground" href="tel:+4915565906604">0155 659 066 04</a>
              <a className="flex min-h-11 items-center break-all hover:text-primary-foreground" href="mailto:info@schluesseldienst-turan.de">info@schluesseldienst-turan.de</a>
              <address className="mt-3 not-italic leading-6">Bavariastraße 14d<br />80336 München</address>
            </div>
          </div>

          <nav aria-label="Weitere Seiten">
            <h2 className="text-sm font-semibold">Mehr</h2>
            <div className="mt-4 flex flex-col text-sm text-primary-foreground/75">
              <Link className="flex min-h-11 items-center hover:text-primary-foreground" href="/ratgeber">Ratgeber</Link>
              <Link className="flex min-h-11 items-center hover:text-primary-foreground" href="/impressum">Impressum</Link>
              <Link className="flex min-h-11 items-center hover:text-primary-foreground" href="/datenschutz">Datenschutz</Link>
              <Link className="flex min-h-11 items-center hover:text-primary-foreground" href="/agb">AGB</Link>
            </div>
          </nav>
        </div>
        <p className="pt-6 text-xs text-primary-foreground/70">© {new Date().getFullYear()} Schlüsseldienst Turan. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
