"use client";

import { lazy, Suspense, useState, type ComponentType, type LazyExoticComponent } from "react";
import { MapPinned } from "lucide-react";

import { Button } from "@/components/ui/button";

function MapFallback() {
  return (
    <div className="flex h-full min-h-96 items-center justify-center bg-muted" role="status">
      <span className="text-sm font-medium text-muted-foreground">Karte wird geladen …</span>
    </div>
  );
}

export default function ServiceAreaMapLoader() {
  const [MapCanvas, setMapCanvas] = useState<LazyExoticComponent<ComponentType> | null>(null);

  const loadMap = () => {
    if (MapCanvas === null) {
      setMapCanvas(lazy(() => import("@/components/ServiceAreaMapCanvas")));
    }
  };

  return (
    <div className="relative min-h-[28rem] overflow-hidden rounded-2xl border bg-background shadow-sm lg:min-h-[32rem]">
      {MapCanvas ? (
        <Suspense fallback={<MapFallback />}>
          <MapCanvas />
        </Suspense>
      ) : (
        <div className="relative flex min-h-[28rem] items-center justify-center overflow-hidden bg-muted/70 p-6 lg:min-h-[32rem]">
          <svg
            viewBox="0 0 800 560"
            className="absolute inset-0 size-full text-border"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
          >
            <path d="M-40 80C130 155 230 22 390 94s259 23 470-56" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M-20 418c160-68 238-9 337-88s260-40 510-141" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M102-30c-8 152 80 222 50 349s28 184 110 283" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M604-38c-77 146-24 236-92 337s-39 169 16 305" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M-60 265c206-8 319 84 506 7s256 35 421 49" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>

          <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/60 bg-primary/10 shadow-[0_0_0_18px_color-mix(in_oklch,var(--primary)_6%,transparent)] sm:size-80" aria-hidden="true" />
          <div className="relative flex max-w-xs flex-col items-center gap-5 text-center">
            <span className="flex size-14 items-center justify-center rounded-full border bg-background text-primary shadow-sm">
              <MapPinned className="size-6" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold text-foreground">Gesamtes Münchner Stadtgebiet</p>
              <p className="text-sm leading-6 text-muted-foreground">Interaktive Karte erst bei Bedarf laden.</p>
            </div>
            <Button type="button" size="lg" className="h-11 px-4" onClick={loadMap}>
              Karte öffnen
              <MapPinned data-icon="inline-end" aria-hidden="true" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
