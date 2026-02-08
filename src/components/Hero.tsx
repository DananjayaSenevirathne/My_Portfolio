import { ChevronDown } from "lucide-react";
import { useTilt } from "../hooks/useTilt";
import profileImg from "../assets/profile.png";

export function Hero() {
  const { tilt, onMouseMove, onMouseLeave } = useTilt(14);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 pt-24 md:pt-0 overflow-hidden">
      <div className="container-custom flex justify-center items-center">
        {/* Profile Photo - Now centered and main focus */}
        <div className="flex justify-center items-center w-full">
          <div
            className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] aspect-[4/5.7] relative group cursor-pointer perspective-1000 fade-in"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          >
            {/* Scoped Scanline/Glitch Effect Container - Tight Border */}
            <div
              className="relative w-full h-full border-2 border-cyber-black overflow-hidden transition-all duration-300 ease-out preserve-3d group-hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
              style={{
                transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
              }}
            >
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover object-center group-hover:grayscale-0 transition-all duration-700 scale-[1.05] group-hover:scale-[1.1]"
                draggable={false}
              />

              {/* Scanline Effect scoped to image */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 group-hover:opacity-50 transition-opacity">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] animate-scan" />
              </div>

              {/* Glitch Overlay on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-tr from-cyber-magenta via-transparent to-cyber-cyan" />
            </div>

            {/* Subtle glow on hover */}
            <div className="absolute -inset-0.5 bg-cyber-cyan/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-cyber-cyan opacity-30 hidden md:block">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
