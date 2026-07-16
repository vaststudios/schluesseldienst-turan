import { ImageResponse } from "next/og";

export const alt = "Schlüsseldienst Turan – direkte Hilfe in München";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#17345b", color: "#f9f8f4", padding: "76px 84px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 30, fontWeight: 650 }}>
        <div style={{ width: 22, height: 22, borderRadius: 4, background: "#f9f8f4" }} />
        Schlüsseldienst Turan
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ maxWidth: 920, fontSize: 76, lineHeight: 1.02, letterSpacing: "-0.045em", fontWeight: 650 }}>Direkte Hilfe in München.</div>
        <div style={{ fontSize: 32, color: "#cbd6e5" }}>24/7 erreichbar · Türöffnung ab 89 € inklusive Anfahrt</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 25, color: "#cbd6e5" }}>
        <span>Preisbestätigung vor Arbeitsbeginn</span>
        <span>0155 659 066 04</span>
      </div>
    </div>,
    size,
  );
}
