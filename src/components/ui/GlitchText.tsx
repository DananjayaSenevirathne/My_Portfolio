import React from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export function GlitchText({ text, className = "", as: Tag = "span" }: GlitchTextProps) {
  return (
    <Tag className={`glitch-wrapper relative inline-block ${className}`} data-text={text}>
      {text}
    </Tag>
  );
}
