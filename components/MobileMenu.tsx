"use client";

import Link from "next/link";
import { Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { label: "Preise", href: "/#preise" },
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Einsatzgebiet", href: "/#einsatzgebiet" },
  { label: "Philosophie", href: "/#ueber-uns" },
  { label: "Ratgeber", href: "/ratgeber" },
  { label: "Fragen", href: "/#fragen" },
];

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon-lg" className="size-12 rounded-full" aria-label="Menü öffnen">
          <Menu aria-hidden="true" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[min(88vw,24rem)] gap-0 p-0">
        <SheetHeader className="border-b px-6 pb-6 pt-7">
          <SheetTitle className="text-xl font-semibold tracking-[-0.025em]">Navigation</SheetTitle>
          <SheetDescription>Schlüsseldienst Turan · München</SheetDescription>
        </SheetHeader>

        <nav aria-label="Mobile Hauptnavigation" className="flex flex-col px-3 py-3">
          {navigation.map((item, index) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className="group flex min-h-14 items-center justify-between rounded-lg px-3 text-lg font-semibold tracking-[-0.02em] text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {item.label}
                <span className="text-xs font-medium tabular-nums text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            </SheetClose>
          ))}
        </nav>

        <SheetFooter className="border-t p-4">
          <Button asChild size="lg" variant="call" className="h-14 w-full justify-between gap-4 rounded-xl py-2 pl-5 pr-2 text-base">
            <a href="tel:+4915565906604">
              <span className="flex flex-col items-start gap-0.5 leading-none">
                <span className="font-semibold">Jetzt anrufen</span>
                <span className="text-[11px] font-medium text-primary-foreground/65">24/7 erreichbar</span>
              </span>
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary-foreground text-primary shadow-sm">
                <Phone data-icon="inline-end" aria-hidden="true" />
              </span>
            </a>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
