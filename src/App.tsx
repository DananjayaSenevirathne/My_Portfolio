import { useEffect, useState } from "react";
import { PerspectiveGrid } from "./components/PerspectiveGrid";
import { ScanlineOverlay } from "./components/ScanlineOverlay";
import { CursorTrail } from "./components/CursorTrail";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Certifications } from "./components/Certifications";
import { Navbar } from "./components/Navbar";
import { SplashScreen } from "./components/SplashScreen";
import { Contact } from "./components/Contact";

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    const timer = window.setTimeout(() => {
      if (!hasSeenSplash) {
        setShowSplash(true);
      }
      setMounted(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem("hasSeenSplash", "true");
    setShowSplash(false);
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-cyber-dark text-white font-mono selection:bg-cyber-cyan selection:text-black ">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {/* Background Effects */}
      <PerspectiveGrid />
      <ScanlineOverlay />
      <CursorTrail />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="page-shell">
          <div className="page">
            <Hero />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />

            {/* Footer */}
            <footer className="py-8 text-center text-gray-600 text-xs font-mono border-t border-gray-900 bg-cyber-black">
              <p>SYSTEM_STATUS: ONLINE // © 2026 DANANJAYA SENEVIRATHNE</p>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
