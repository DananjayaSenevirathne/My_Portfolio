import { useEffect, useState } from "react";
import { useTypewriter } from "../hooks/useTypewriter";

interface SplashScreenProps {
    onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
    const [isFading, setIsFading] = useState(false);
    const { displayedText, isComplete } = useTypewriter("SYSTEM_INITIALIZED...", 50, 500);

    useEffect(() => {
        if (isComplete) {
            const timer = setTimeout(() => {
                setIsFading(true);
                setTimeout(onComplete, 800); // Match fade transition duration
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isComplete, onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cyber-dark transition-all duration-800 ease-in-out ${isFading ? "opacity-0 blur-xl scale-110" : "opacity-100 blur-0 scale-100"
                }`}
        >
            {/* Background Grid (subtle) */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: "radial-gradient(#00ffff 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                }}
            />

            <div className="relative z-10 flex flex-col items-center space-y-6">
                {/* Logo */}
                <div className="text-cyber-cyan font-bold text-6xl tracking-tighter animate-pulse scale-up-logo">
                    DS<span className="animate-blink">_</span>
                </div>

                {/* Typewriter Text */}
                <div className="text-cyber-cyan font-mono text-lg tracking-[0.2em] min-h-[1.5em] flex items-center">
                    {displayedText}
                    {!isComplete && <span className="w-2 h-5 bg-cyber-cyan ml-1 animate-blink" />}
                </div>
            </div>
        </div>
    );
}
