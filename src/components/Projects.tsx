import React, { useState } from "react";
import { useTilt } from "../hooks/useTilt";
import { ProjectModal } from "./ProjectModal";
import { ArrowRight } from "lucide-react";
import workzupImg from "../assets/workzup.png";
import portfolioImg from "../assets/portfolio.png";
import thesilentseaImg from "../assets/thesilentsea.png";

const projects = [
{
  id: 1,
  title: "WorkzUp",
  description:
    "Job matching web platform connecting job seekers with verified employers for part-time and short-term opportunities. Includes secure authentication, job posting, and application management workflows.",
  image: workzupImg,
tech: ["HTML", "Css", "Js"],
  liveLink: "https://www.workzup.com.lk/home.html", // put real link if you have
  repoLink: "https://github.com/AdhishaSamarasinghe/Workzup.com.lk.git", // put GitHub link if you have
  details: {
    challenge:
      "Designing a smooth job posting and application flow while keeping user data protected.",
    solution:
      "Built structured forms and validation, implemented secure authentication.",
  },
},


  {
    id: 2,
    title: "My Portfolio",
    description:
      "Responsive portfolio website to showcase skills, academic projects, and personal info with smooth navigation and clean structure",
    image:
      portfolioImg,
    tech: ["Next.js", "Tailwind","TypeScript"],
    liveLink: "#",
    repoLink: "#",
    details: {
      challenge: "Making the portfolio fully responsive across mobile, tablet, and desktop while keeping the cyber UI readable.",
      solution: "Used a mobile-first layout with flexible grids, consistent spacing, and scalable typography. Added reusable UI sections to keep the design consistent and easy to maintain.",
    },
  },
  {
    id: 3,
    title: "The Silent Sea",
    description:
      "The Silent Sea is an awareness web platform designed to educate users about marine life protection and encourage real action. It includes key sections like volunteering, feedback collection, a team page, sitemap navigation, and user profiles to create a structured and engaging experience.",
    image:
      thesilentseaImg,
    tech: ["HTML", "Css", "Js", ],
    liveLink: "#",
    repoLink: "#",
    details: {
      challenge: "Designing a multi-page website with many sections (Volunteer, Feedback, Table, Profile, Site Map) while keeping navigation simple and the UI readable over a heavy hero background image.",
      solution: "Built a clear navigation structure with consistent page layouts and reusable components. Improved readability with a hero overlay, strong typography and spacing, and consistent section headings. Organized data pages like Table with structured UI so users can move between sections easily.",
    },
  },
];

function ProjectCard({
  project,
  onClick,
}: {
  project: (typeof projects)[number];
  onClick: () => void;
}) {
  const { tilt, onMouseMove, onMouseLeave } = useTilt(15);

  return (
    <div
      className="relative group cursor-pointer perspective-1000"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div
        className="relative h-96 w-full bg-cyber-gray border border-gray-800 transition-transform duration-100 ease-out preserve-3d"
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        }}
      >
        <div className="h-48 overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-cyber-dark/50 group-hover:bg-transparent transition-colors duration-300" />
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-cyber-cyan transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-xs text-cyber-magenta border border-cyber-magenta/30 px-2 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyber-cyan transition-colors duration-300 pointer-events-none" />

        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity" />

        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-tr from-transparent via-white to-transparent"
          style={{ transform: `translate(${tilt.shineX}%, ${tilt.shineY}%)` }}
        />

        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="flex items-center gap-2 text-cyber-cyan font-bold text-sm">
            ACCESS_FILE <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-1 w-10 bg-cyber-magenta" />
          <h2 className="text-3xl font-bold text-white tracking-wider">
            PROJECT_DATABASE
          </h2>
          <div className="h-1 flex-1 bg-gray-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
