"use client";

import type * as GeoJSON from "geojson";
import { MapPin } from "lucide-react";

import {
  Map,
  MapControls,
  MapGeoJSON,
  MapMarker,
  MarkerContent,
  MarkerLabel,
} from "@/components/ui/map";

const MUNICH_CENTER: [number, number] = [11.5755, 48.1374];
const SERVICE_RADIUS_KM = 20;

function createServiceAreaCircle(
  center: [number, number],
  radiusKm: number,
  points = 96,
): GeoJSON.FeatureCollection<GeoJSON.Polygon> {
  const [longitude, latitude] = center;
  const latitudeRadius = radiusKm / 110.574;
  const longitudeRadius = radiusKm / (111.32 * Math.cos((latitude * Math.PI) / 180));
  const coordinates: [number, number][] = Array.from({ length: points + 1 }, (_, index) => {
    const angle = (index / points) * Math.PI * 2;
    return [
      longitude + longitudeRadius * Math.cos(angle),
      latitude + latitudeRadius * Math.sin(angle),
    ];
  });

  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: { id: "munich-service-area" },
        geometry: { type: "Polygon", coordinates: [coordinates] },
      },
    ],
  };
}

const serviceArea = createServiceAreaCircle(MUNICH_CENTER, SERVICE_RADIUS_KM);
const mapStyles = {
  light: "https://tiles.openfreemap.org/styles/positron",
  dark: "https://tiles.openfreemap.org/styles/dark",
};

export default function ServiceAreaMapCanvas() {
  return (
    <div className="h-full min-h-[28rem] lg:min-h-[32rem]" aria-label="Interaktive Karte des Einsatzgebiets in München">
      <Map
        center={MUNICH_CENTER}
        zoom={9.25}
        minZoom={8.75}
        maxZoom={14}
        styles={mapStyles}
        cooperativeGestures
        dragRotate={false}
        pitchWithRotate={false}
        keyboard
      >
        <MapGeoJSON
          id="munich-service-area"
          data={serviceArea}
          promoteId="id"
          fillPaint={{
            "fill-color": "#1f4a7c",
            "fill-opacity": 0.2,
          }}
          linePaint={{
            "line-color": "#1f4a7c",
            "line-width": 3,
            "line-opacity": 0.92,
          }}
        />
        <MapMarker longitude={MUNICH_CENTER[0]} latitude={MUNICH_CENTER[1]}>
          <MarkerContent className="cursor-default">
            <span className="flex size-11 items-center justify-center rounded-full border-2 border-primary-foreground bg-primary text-primary-foreground shadow-lg">
              <MapPin className="size-5" aria-hidden="true" />
            </span>
          </MarkerContent>
          <MarkerLabel className="rounded-md border bg-background px-2 py-1 text-xs font-semibold shadow-sm">
            München
          </MarkerLabel>
        </MapMarker>
        <MapControls position="bottom-right" showZoom />
      </Map>
    </div>
  );
}
