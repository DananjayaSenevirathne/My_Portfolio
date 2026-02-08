import React from "react";
import { Award, ShieldCheck } from "lucide-react";

const certifications = [
  {
    name: "Python Learning Certificate (2025)",
    issuer: "Microsoft",
    date: "2024",
    icon: ShieldCheck,
    color: "text-yellow-500",
  },
  {
    name: "IBM Cybersecurity Analyst Professional Certificate",
    issuer: "IBM",
    date: "2024",
    icon: Award,
    color: "text-blue-500",
  },
  {
    name: "Diploma in IT Certificate",
    issuer: "SLIIT",
    date: "2023",
    icon: ShieldCheck,
    color: "text-red-500",
  },
];

export function Certifications() {
  return (
    <section className="py-20 relative bg-cyber-black/50">
      <div className="container-custom">
        <div className="flex items-center gap-4 mb-12 justify-center">
          <div className="h-px w-10 bg-gray-700" />
          <h2 className="text-2xl font-bold text-gray-400 tracking-widest uppercase">
            Credentials
          </h2>
          <div className="h-px w-10 bg-gray-700" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="group relative bg-cyber-gray border border-gray-800 p-6 hover:border-cyber-cyan transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-cyber-dark border border-gray-700 flex items-center justify-center group-hover:border-cyber-cyan group-hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300">
                  <cert.icon className={`w-8 h-8 ${cert.color}`} />
                </div>

                <div>
                  <h3 className="text-white font-bold mb-1 group-hover:text-cyber-cyan transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-mono">
                    {cert.issuer} // {cert.date}
                  </p>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-2 h-2 bg-gray-800 group-hover:bg-cyber-cyan transition-colors" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-gray-800 group-hover:bg-cyber-cyan transition-colors" />
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-gray-800 group-hover:bg-cyber-cyan transition-colors" />
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-gray-800 group-hover:bg-cyber-cyan transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
