
export function PerspectiveGrid() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-cyber-dark to-transparent z-10" />

      <div
        className="absolute inset-0 w-full h-[200%] -top-[50%]"
        style={{
          transform: "perspective(500px) rotateX(60deg)",
          background: `
            linear-gradient(transparent 0%, var(--cyber-dark) 100%),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(180deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          animation: "grid-move 20s linear infinite",
        }}
      />

      <style>{`
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 0 40px; }
        }
      `}</style>
    </div>
  );
}
