import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    // Handle scroll for navbar styling
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Special check for bottom of the page to highlight CONTACT
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                setActiveSection("contact");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle body overflow and ESC key
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };

        window.addEventListener("keydown", handleEscape);
        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen]);

    // Intersection Observer for active section highlighting
    useEffect(() => {
        const sections = ["home", "about", "skills", "projects", "experience", "contact"];
        const observerOptions = {
            root: null,
            rootMargin: "-40% 0px -40% 0px", // Decision made in the middle of viewport
            threshold: 0.15,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { name: "HOME", id: "home" },
        { name: "SKILLS", id: "skills" },
        { name: "PROJECTS", id: "projects" },
        { name: "EXPERIENCE", id: "experience" },
        { name: "CONTACT", id: "contact" },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            setIsOpen(false);
            setActiveSection(id); // Immediate highlight on click
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 w-full z-[9999] pointer-events-auto transition-all duration-300 ${scrolled ? "bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-cyan/20 py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container-custom flex justify-between items-center px-4 sm:px-8 max-w-[1100px] mx-auto">
                {/* Logo */}
                <div
                    className="text-cyber-cyan font-bold text-2xl tracking-tighter cursor-pointer group"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setIsOpen(false);
                        setActiveSection("home");
                    }}
                >
                    DS<span className="animate-blink group-hover:text-cyber-magenta transition-colors">_</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`transition-all duration-300 relative group ${activeSection === link.id
                                ? "text-cyber-cyan text-shadow-cyan"
                                : "hover:text-cyber-cyan text-gray-400 font-medium"
                                }`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyber-cyan transition-all duration-300 ${activeSection === link.id
                                ? "w-full shadow-[0_0_8px_var(--cyber-cyan)]"
                                : "w-0 group-hover:w-full"
                                }`} />
                        </button>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-cyber-cyan p-2 z-50 transition-transform active:scale-90"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Backdrop Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[998] md:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setIsOpen(false)}
            />

            {/* Centered Menu Panel */}
            <div
                className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(92vw,420px)] max-h-[80vh] bg-[#12161d] border border-gray-800 rounded-xl z-[999] md:hidden transition-all duration-300 shadow-2xl flex flex-col p-8 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col space-y-2 text-center">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`py-4 text-lg font-bold tracking-[0.1em] transition-all rounded-lg border border-transparent ${activeSection === link.id
                                ? "text-cyber-cyan bg-cyber-cyan/5 border-cyber-cyan/10 text-shadow-cyan"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-800 text-center">
                    <p className="text-[10px] font-mono text-gray-600 tracking-[0.2em] uppercase">
                        Terminal_Access // Secured
                    </p>
                </div>
            </div>
        </nav>
    );
}
