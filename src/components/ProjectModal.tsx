import React, { useEffect } from "react";
import { X, ExternalLink, Github, Layers } from "lucide-react";

interface Project {
  // ... (keep interface as is)
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveLink: string;
  repoLink: string;
  details: {
    challenge: string;
    solution: string;
  };
}

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "8px"; // Prevent layout shift from scrollbar removal
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-8">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full h-full md:h-auto max-w-4xl bg-cyber-dark border-x md:border border-cyber-cyan shadow-[0_0_30px_rgba(0,255,255,0.2)] animate-in fade-in zoom-in duration-300 md:max-h-[90vh] overflow-y-auto overscroll-contain custom-scrollbar overflow-x-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-cyber-gray/50 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <Layers className="text-cyber-cyan w-5 h-5" />
            <span className="font-mono text-xs md:text-sm text-cyber-cyan">
              PROJECT_FILE: {project.id.toString().padStart(3, "0")}
            </span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-cyber-magenta transition-colors p-2">
            <X size={24} />
          </button>
        </div>

        <div className="p-4 md:p-8 space-y-8 overflow-x-hidden">
          <div className="relative aspect-video w-full overflow-hidden border border-gray-800 group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent opacity-60" />
            <h2 className="absolute bottom-4 left-4 text-2xl md:text-4xl font-bold text-white text-shadow-cyan">
              {project.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-cyber-cyan font-bold mb-2 text-base md:text-lg flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyber-cyan inline-block" />
                  MISSION_BRIEF
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{project.description}</p>
              </div>

              <div className="grid gap-4">
                <div className="bg-cyber-gray/30 p-4 border-l-2 border-cyber-magenta">
                  <h4 className="text-cyber-magenta font-bold mb-2">CHALLENGE</h4>
                  <p className="text-sm text-gray-400">{project.details.challenge}</p>
                </div>
                <div className="bg-cyber-gray/30 p-4 border-l-2 border-cyber-green">
                  <h4 className="text-cyber-green font-bold mb-2">SOLUTION</h4>
                  <p className="text-sm text-gray-400">{project.details.solution}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-white font-bold mb-3 border-b border-gray-800 pb-2">
                  TECH_STACK
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-cyber-gray border border-gray-700 text-xs text-cyber-cyan"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-cyber-cyan/10 border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black transition-all font-bold uppercase tracking-wider text-sm"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-transparent border border-gray-700 text-gray-400 hover:border-white hover:text-white transition-all font-bold uppercase tracking-wider text-sm"
                >
                  <Github size={16} /> Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
