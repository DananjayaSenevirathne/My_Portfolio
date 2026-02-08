import React from "react";

export function ScanlineOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      <div className="w-full h-2 bg-white/5 absolute animate-scanline shadow-[0_0_10px_rgba(255,255,255,0.2)]" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
          backgroundSize: "100% 2px, 3px 100%",
          pointerEvents: "none",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
}
