import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  age: number;
}

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      pointsRef.current.push({ x: e.clientX, y: e.clientY, age: 0 });
    };

    window.addEventListener("resize", updateSize);
    window.addEventListener("mousemove", handleMouseMove);
    updateSize();

    let raf = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const next: Point[] = [];
      for (const p of pointsRef.current) {
        const age = p.age + 1;
        if (age <= 20) {
          const opacity = 1 - age / 20;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 255, 255, ${opacity})`;
          ctx.fill();
          next.push({ ...p, age });
        }
      }
      pointsRef.current = next;

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" />;
}
