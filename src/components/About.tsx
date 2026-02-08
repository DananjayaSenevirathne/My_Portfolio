import { useTypewriter } from "../hooks/useTypewriter";

export function About() {
    const nameText = "DANANJAYA\nSENEVIRATHNE";
    const { displayedText, isComplete } = useTypewriter(nameText, 50, 200);

    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto space-y-8 relative">
                    {/* Decorative corners for the about block */}
                    <div className="absolute -top-10 -left-6 w-12 h-12 border-l-2 border-t-2 border-cyber-cyan opacity-30 hidden lg:block" />

                    <div className="space-y-4">
                        <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold tracking-tight min-h-[2.4em] md:min-h-[2em]">
                            <span className="text-white text-shadow-cyan whitespace-pre-line leading-[1.1]">
                                {displayedText}
                            </span>
                            <span className="animate-blink text-cyber-magenta">_</span>
                        </h1>

                        <div className={`transition-all duration-700 ${isComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                            <div className="text-base md:text-2xl text-cyber-cyan font-bold tracking-wider mb-6 uppercase leading-tight">
                                <div>COMPUTER SCIENCE UNDERGRADUATE</div>
                                <div>FULL STACK PROJECT BUILDER</div>
                            </div>

                            <p className="max-w-2xl text-gray-400 leading-[1.8] mb-10 text-sm md:text-lg border-l-2 border-cyber-magenta pl-6 text-left">
                                Building secure, scalable, and user-focused web applications.
                                Experienced in team and individual projects using React.js, Spring Boot, and MySQL.
                                Currently seeking internship/junior opportunities.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                <button
                                    onClick={scrollToProjects}
                                    className="w-full sm:w-auto px-10 py-4 text-sm font-bold tracking-[0.2em] border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.2)]"
                                >
                                    VIEW_PROJECTS
                                </button>
                                <button
                                    onClick={scrollToContact}
                                    className="w-full sm:w-auto px-10 py-4 text-sm font-bold tracking-[0.2em] border-2 border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta/10 transition-all duration-300 shadow-[0_0_15px_rgba(255,0,255,0.2)]"
                                >
                                    CONTACT_ME
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
