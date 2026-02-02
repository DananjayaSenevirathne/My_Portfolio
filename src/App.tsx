import React, { useEffect, useState } from "react";
import { PerspectiveGrid } from "./components/PerspectiveGrid";
import { ScanlineOverlay } from "./components/ScanlineOverlay";
import { CursorTrail } from "./components/CursorTrail";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-cyber-dark text-white font-mono selection:bg-cyber-cyan selection:text-black ">
      {/* Background Effects */}
      <PerspectiveGrid />
      <ScanlineOverlay />
      <CursorTrail />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 mix-blend-difference">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-cyber-cyan font-bold text-xl tracking-tighter">
              DS<span className="animate-blink">_</span>
            </div>

            <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest">
              {["SKILLS", "PROJECTS", "EXPERIENCE", "CONTACT"].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    document.getElementById(item.toLowerCase())?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-cyber-cyan transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-cyan group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>
          </div>
        </nav>

        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />

        {/* Footer */}
        <footer className="py-8 text-center text-gray-600 text-xs font-mono border-t border-gray-900 relative z-10 bg-cyber-black">
          <p>SYSTEM_STATUS: ONLINE // © 2026 DANANJAYA SENEVIRATHNE</p>
        </footer>
      </div>
    </main>
  );
}
