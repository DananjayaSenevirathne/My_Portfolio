import { useMemo } from "react";
import { useTypewriter } from "../hooks/useTypewriter";
import { NeonButton } from "./ui/NeonButton";
import { GlitchText } from "./ui/GlitchText";
import { ChevronDown } from "lucide-react";
import { useTilt } from "../hooks/useTilt";
import profileImg from "../assets/profile.png";

export function Hero() {
  const { tilt, onMouseMove, onMouseLeave } = useTilt(14);

  const nameText = useMemo(() => "DDANANJAYA\nSENEVIRATHNE", []);
  const { displayedText, isComplete } = useTypewriter(nameText, 50, 200);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative z-10 px-4 pt-24">
      <div className="max-w-4xl w-full text-center space-y-8 relative">
        {/* Decorative corners */}
        <div className="absolute top-24 left-6 md:left-10 w-20 h-20 border-l-2 border-t-2 border-cyber-cyan opacity-50 hidden md:block" />
        <div className="absolute bottom-20 right-6 md:right-10 w-20 h-20 border-r-2 border-b-2 border-cyber-magenta opacity-50 hidden md:block" />

        <p className="text-cyber-cyan tracking-[0.2em] text-sm md:text-base animate-pulse fade-up">
          SYSTEM_INITIALIZED...
        </p>

        {/* Avatar Card (tilt + hover like projects) */}
        <div
          className="mx-auto mt-2 mb-2 w-56 h-56 md:w-90 md:h-88 lg:w-82 lg:h-80 relative group cursor-pointer perspective-1000 fade-up fade-up-delay-1"
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          {/* gradient halo */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyber-cyan to-cyber-magenta opacity-25 blur-md group-hover:opacity-60 transition-opacity duration-300" />

          <div
            className="relative w-full h-full rounded-2xl border border-gray-800 bg-cyber-gray/20 overflow-hidden transition-transform duration-100 ease-out preserve-3d group-hover:border-cyber-cyan"
            style={{
              transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            }}
          >
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 scale-[1.03] group-hover:scale-[1.08]"
              draggable={false}
            />

            {/* scan overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-tr from-transparent via-white to-transparent" />

            {/* corner accents like project cards */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight min-h-[1.2em]">
          <span className="text-white text-shadow-cyan whitespace-pre-line">
            {displayedText}
          </span>
          <span className="animate-blink text-cyber-magenta">_</span>
        </h1>

        {/* Rest appears after typing */}
        <div className={`transition-opacity duration-700 ${isComplete ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-xl md:text-3xl text-gray-400 mb-6 font-light fade-up fade-up-delay-2">
            <GlitchText text="COMPUTER SCIENCE UNDERGRADUATE" />
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed mb-10 text-sm md:text-base border-l-2 border-cyber-magenta pl-4 text-left md:text-center md:border-l-0 md:pl-0 fade-up fade-up-delay-3">
            Building secure, scalable, and user-focused web applications.
            Experienced in individual + team projects using React.js, Spring Boot, and MySQL.
            Currently seeking internship / junior opportunities to contribute and grow fast.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <NeonButton variant="cyan" onClick={scrollToProjects}>
              View Projects
            </NeonButton>
            <NeonButton variant="magenta" onClick={scrollToContact}>
              Contact Me
            </NeonButton>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-cyber-cyan opacity-50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
