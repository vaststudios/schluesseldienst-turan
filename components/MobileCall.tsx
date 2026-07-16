import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function MobileCall() {
  return (
    <div className="mobile-call-dock">
      <Button asChild size="lg" variant="call" className="h-14 gap-4 rounded-full py-2 pl-6 pr-2 text-base">
        <a href="tel:+4915565906604" aria-label="Schlüsseldienst Turan jetzt anrufen">
          <span className="flex flex-col items-start gap-0.5 leading-none">
            <span className="font-semibold">Jetzt anrufen</span>
            <span className="text-[11px] font-medium text-primary-foreground/65">24/7 erreichbar</span>
          </span>
          <span className="flex size-10 items-center justify-center rounded-full bg-primary-foreground text-primary shadow-sm transition-transform duration-300 group-hover/button:rotate-6">
            <Phone data-icon="inline-end" aria-hidden="true" />
          </span>
        </a>
      </Button>
    </div>
  );
}
