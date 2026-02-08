import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "BANKING_INTERNSHIP",
    company: "CDB",
    period: "2023",
    description:
      "Supported day-to-day banking operations and administrative tasks within a regulated financial environment",
    tech: ["Operations ", "Documentation", "Teamwork"],
  },
  {
    id: 2,
    role: "ATM_OPERATING",
    company: "Strick Technologies",
    period: "2023 - 2024",
    description:
      "Assisted with daily ATM operations, monitored availability, and reported technical/operational issues.",
    tech: ["Monitoring", "Issue Reporting", "Reliability"],
  },
  {
    id: 3,
    role: "ACCOUNTANT_ASSISTANT",
    company: "PREMARATHNA_HARDWARE",
    period: "2020 — 2023",
    description:
      "Handled day-to-day accounting and administrative tasks, maintained accurate records, supported invoices/receipts, and assisted with basic stock and payment tracking.",
    tech: ["Record Keeping", "Accounting", "Administration"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container-custom">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-1 w-10 bg-cyber-green" />
          <h2 className="text-3xl font-bold text-white tracking-wider">
            CAREER_TIMELINE
          </h2>
          <div className="h-1 flex-1 bg-gray-800" />
        </div>

        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 md:-translate-x-1/2 hidden md:block">
            <div className="absolute top-0 bottom-0 w-full bg-gradient-to-b from-cyber-cyan via-cyber-magenta to-cyber-cyan animate-pulse opacity-50" />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline dot - hidden on mobile */}
                <div className="absolute left-[-5px] md:left-1/2 top-0 w-3 h-3 bg-cyber-dark border border-cyber-cyan rounded-full md:-translate-x-1.5 z-10 shadow-[0_0_10px_#00ffff] hidden md:block">
                  <div className="absolute inset-0 bg-cyber-cyan animate-ping opacity-75 rounded-full" />
                </div>

                <div className="flex-1">
                  <div
                    className={`bg-cyber-gray/50 border border-gray-800 p-6 relative group hover:border-cyber-cyan transition-colors duration-300 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                      }`}
                  >
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyber-cyan transition-colors">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-mono text-cyber-magenta border border-cyber-magenta/30 px-2 py-1 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 mb-4 text-sm font-mono">
                      <Briefcase size={14} />
                      {exp.company}
                    </div>

                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs text-gray-500 group-hover:text-cyber-cyan transition-colors"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
