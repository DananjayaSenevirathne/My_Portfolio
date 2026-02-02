import { useCallback, useState, type MouseEvent } from "react";

interface TiltValues {
  rotateX: number;
  rotateY: number;
  shineX: number;
  shineY: number;
}

export function useTilt(intensity: number = 10) {
  const [tilt, setTilt] = useState<TiltValues>({
    rotateX: 0,
    rotateY: 0,
    shineX: 50,
    shineY: 50,
  });

  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const centerX = width / 2;
      const centerY = height / 2;

      const rotateX = ((y - centerY) / centerY) * -intensity;
      const rotateY = ((x - centerX) / centerX) * intensity;

      setTilt({
        rotateX,
        rotateY,
        shineX: (x / width) * 100,
        shineY: (y / height) * 100,
      });
    },
    [intensity]
  );

  const onMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0, shineX: 50, shineY: 50 });
  }, []);

  return { tilt, onMouseMove, onMouseLeave };
}
