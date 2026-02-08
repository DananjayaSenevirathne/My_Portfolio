export function About() {
    return (
        <section id="about" className="py-1 relative">
            {/* Minimal placeholder for navbar navigation */}
        </section>
    );
}
{/* Decorative corners for the about block - user refined */ }
                    <div className="absolute -top-1 -left-4 w-10 h-12 border-l-2 border-t-2 border-cyber-cyan opacity-30 hidden lg:block" />

                    <div className="space-y-1">
                        <h1 className="text-[clamp(2.6rem,6vw,4rem)] font-bold tracking-tight min-h-[2.4em] md:min-h-[2em] leading-tight">
                            <span className="text-white text-shadow-cyan whitespace-pre-line">
                                {displayedText}
                            </span>
                            <span className="animate-blink text-cyber-magenta ml-1">_</span>
                        </h1>

                        <div className={`transition-all duration-500 ${isComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                            <div className="text-base md:text-2xl text-cyber-cyan font-bold tracking-wider mb-6 uppercase leading-tight mt-4">
                                <div>COMPUTER SCIENCE UNDERGRADUATE</div>
                                <div>FULL STACK PROJECT BUILDER</div>
                            </div>

                            <p className="max-w-2xl mx-auto md:mx-0 text-gray-400 leading-[1.8] mb-10 text-sm md:text-lg border-l-2 border-cyber-magenta pl-6 text-left">
                                Building secure, scalable, and user-focused web applications.
                                Experienced in team and individual projects using React.js, Spring Boot, and MySQL.
                                Currently seeking internship/junior opportunities.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
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
                </div >

    {/* Right Column: Profile Photo - Side by side as requested */ }
    < div className = "order-1 md:order-2 flex justify-center md:justify-end mt-8 md:mt-0" >
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
                </div >
            </div >
        </section >
    );
}
