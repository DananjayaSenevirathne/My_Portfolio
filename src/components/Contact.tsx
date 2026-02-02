import React, { useState } from "react";

import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  GithubIcon,
} from "lucide-react";
import { NeonButton } from "./ui/NeonButton";

const links = {
  github: "https://github.com/DananjayaSenevirathne",
  linkedin: "https://www.linkedin.com/in/dananjaya-senevirathne-5351a7360",
  instagram: "https://www.instagram.com/",
  whatsapp: "https://wa.me/94769417133",
};

type FormState = "idle" | "submitting" | "success" | "error";

function SocialIconButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        w-12 h-12 flex items-center justify-center
        border border-gray-700 bg-cyber-black/40
        hover:border-cyber-cyan hover:shadow-neon-cyan
        transition-all duration-300
      "
    >
      {children}
    </a>
  );
}

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("submitting");

    try {
      if (!endpoint) throw new Error("Missing VITE_FORMSPREE_ENDPOINT");

      // ✅ REAL EMAIL SEND via Formspree
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New Portfolio Message from ${name}`,
          source: "Portfolio Contact Form",
        }),
      });

      if (!res.ok) {
        // Formspree returns JSON, but ok check is enough
        throw new Error("Formspree request failed");
      }

      setFormState("success");
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => setFormState("idle"), 2500);
    } catch (err) {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 2500);
    }
  }

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-cyber-gray/30 border border-gray-800 p-8 md:p-12 relative overflow-hidden">
          {/* Background Grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#00ffff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-shadow-magenta">
                INITIATE_COMMUNICATION
              </h2>
              <p className="text-gray-400 font-mono">
                Ready to collaborate? Transmit your data below.
              </p>

              {/* Social icons */}
              <div className="mt-6 flex justify-center gap-4">
                <SocialIconButton href={links.github} label="GitHub">
                  <GithubIcon className="w-5 h-5 text-gray-300 hover:text-cyber-cyan transition-colors" />
                </SocialIconButton>

                <SocialIconButton href={links.linkedin} label="LinkedIn">
                  <Linkedin className="w-5 h-5 text-gray-300 hover:text-cyber-cyan transition-colors" />
                </SocialIconButton>

                <SocialIconButton href={links.instagram} label="Instagram">
                  <Instagram className="w-5 h-5 text-gray-300 hover:text-cyber-cyan transition-colors" />
                </SocialIconButton>

                <SocialIconButton href={links.whatsapp} label="WhatsApp">
                  <MessageCircle className="w-5 h-5 text-gray-300 hover:text-cyber-cyan transition-colors" />
                </SocialIconButton>
              </div>

              {/* tiny dev hint if endpoint missing */}
              {!endpoint && (
                <p className="mt-4 text-xs text-cyber-magenta font-mono">
                  ERROR: Missing VITE_FORMSPREE_ENDPOINT in .env
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
              <div className="group">
                <label className="block text-cyber-cyan text-xs font-bold mb-2 tracking-widest uppercase">
                  Identity
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-cyber-black/50 border-b-2 border-gray-700 text-white p-3 focus:outline-none focus:border-cyber-cyan transition-colors placeholder-gray-700 font-mono"
                  placeholder="ENTER_NAME"
                />
              </div>

              <div className="group">
                <label className="block text-cyber-cyan text-xs font-bold mb-2 tracking-widest uppercase">
                  Frequency
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-cyber-black/50 border-b-2 border-gray-700 text-white p-3 focus:outline-none focus:border-cyber-cyan transition-colors placeholder-gray-700 font-mono"
                  placeholder="ENTER_EMAIL"
                />
              </div>

              <div className="group">
                <label className="block text-cyber-cyan text-xs font-bold mb-2 tracking-widest uppercase">
                  Transmission
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-cyber-black/50 border-b-2 border-gray-700 text-white p-3 focus:outline-none focus:border-cyber-cyan transition-colors placeholder-gray-700 font-mono resize-none"
                  placeholder="ENTER_MESSAGE_DATA..."
                />
              </div>

              <div className="pt-4 flex justify-center">
                <NeonButton
                  variant="magenta"
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full md:w-auto min-w-[200px] flex items-center justify-center gap-2"
                >
                  {formState === "idle" && (
                    <>
                      SEND_TRANSMISSION <Send size={18} />
                    </>
                  )}
                  {formState === "submitting" && (
                    <>
                      PROCESSING <Loader2 size={18} className="animate-spin" />
                    </>
                  )}
                  {formState === "success" && (
                    <>
                      SENT_SUCCESSFULLY <CheckCircle size={18} />
                    </>
                  )}
                  {formState === "error" && (
                    <>
                      ERROR_RETRY <AlertCircle size={18} />
                    </>
                  )}
                </NeonButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
