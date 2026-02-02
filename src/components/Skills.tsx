import React from "react";
import {
  Code,
  Database,
  Server,
  Terminal,
  Layers,
  Globe,
  Box,
} from "lucide-react";

const skills = [
  { name: "React.js", icon: Code, level: 85 },
  { name: "Next.js", icon: Globe, level: 75 },
  { name: "JavaScript", icon: Terminal, level: 80 },
  { name: "Node.js", icon: Server, level: 75 },

  { name: "Java", icon: Layers, level: 80 },
  { name: "Spring Boot", icon: Server, level: 75 },

  { name: "MySQL", icon: Database, level: 75 },
  { name: "MongoDB", icon: Database, level: 70 },

  { name: "Python", icon: Layers, level: 70 },
  { name: "C#", icon: Box, level: 65 },

  { name: "HTML", icon: Code, level: 85 },
  { name: "CSS", icon: Code, level: 80 },
  
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-1 w-10 bg-cyber-cyan" />
          <h2 className="text-3xl font-bold text-white tracking-wider">
            SYSTEM_CAPABILITIES
          </h2>
          <div className="h-1 flex-1 bg-gray-800" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="group relative p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-cyber-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300 clip-path-hex" />
              <div className="relative bg-cyber-gray h-40 flex flex-col items-center justify-center gap-4 clip-path-hex border border-gray-800 group-hover:border-transparent transition-all duration-300 group-hover:scale-105">
                <skill.icon className="w-10 h-10 text-cyber-cyan group-hover:text-white transition-colors" />
                <span className="font-bold tracking-wider text-gray-300 group-hover:text-white text-center px-2">
                  {skill.name}
                </span>

                <div className="w-16 h-1 bg-gray-800 mt-2 overflow-hidden">
                  <div
                    className="h-full bg-cyber-magenta transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
