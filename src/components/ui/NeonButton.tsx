
interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "cyan" | "magenta";
  children: React.ReactNode;
}

export function NeonButton({
  variant = "cyan",
  children,
  className = "",
  ...props
}: NeonButtonProps) {
  const colorClass =
    variant === "cyan"
      ? "border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10"
      : "border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta/10";

  const shadowClass =
    variant === "cyan" ? "hover:shadow-neon-cyan" : "hover:shadow-neon-magenta";

  const overlayClass =
    variant === "cyan" ? "bg-cyber-cyan" : "bg-cyber-magenta";

  return (
    <button
      className={`
        relative px-8 py-3 bg-transparent border-2 font-bold uppercase tracking-widest transition-all duration-300
        ${colorClass}
        ${shadowClass}
        clip-path-slant
        group
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div
        className={`absolute inset-0 w-full h-full ${overlayClass} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />
    </button>
  );
}
