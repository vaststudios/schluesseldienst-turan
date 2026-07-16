import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

import MobileMenu from "@/components/MobileMenu";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1680px] items-center justify-between px-4 sm:h-24 sm:px-6 lg:h-[104px] lg:px-8">
        <Link
          href="/"
          aria-label="Schlüsseldienst Turan, Startseite"
          className="flex size-16 shrink-0 items-center justify-center rounded-full transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 sm:size-20"
        >
          <Image
            src="/assets/logo.svg"
            alt="Schlüsseldienst Turan"
            width={80}
            height={80}
            className="size-full object-contain"
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3 lg:gap-5">
          <nav aria-label="Hauptnavigation" className="hidden items-center gap-2 sm:gap-3 lg:flex lg:gap-5">
            <div className="flex items-center gap-1 xl:gap-2">
              <Link className="nav-link px-2 text-sm font-semibold text-foreground xl:px-3 xl:text-base" href="/#leistungen">
                Leistungen
              </Link>
              <Link className="nav-link px-2 text-sm font-semibold text-foreground xl:px-3 xl:text-base" href="/#ueber-uns">
                Philosophie
              </Link>
              <Link className="nav-link px-2 text-sm font-semibold text-foreground xl:px-3 xl:text-base" href="/ratgeber">
                Ratgeber
              </Link>
              <Link className="nav-link px-2 text-sm font-semibold text-foreground xl:px-3 xl:text-base" href="/#fragen">
                Fragen
              </Link>
            </div>
            <ThemeToggle />
            <Button asChild size="lg" variant="call" className="h-12 gap-3 rounded-full py-1.5 pl-5 pr-1.5 font-semibold sm:h-14 sm:gap-4 sm:pl-6 sm:pr-2 sm:text-base">
              <a href="tel:+4915565906604">
                Jetzt anrufen
                <span className="flex size-9 items-center justify-center rounded-full bg-primary-foreground text-primary shadow-sm transition-transform duration-300 group-hover/button:rotate-6 sm:size-10">
                  <Phone data-icon="inline-end" aria-hidden="true" />
                </span>
              </a>
            </Button>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
