import { useEffect, useRef } from "react";

export interface IBird {
  id: string;
  y: number;
  width: number;
  direction: "left" | "right";
  speed: number;
}

interface Props {
  data: IBird;
  onAnimationEnded: (id: string) => void;
}

export const Bird: React.FC<Props> = ({
  data: { width, direction, speed, id, y },
  onAnimationEnded,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const start = useRef<number>();
  const offset = direction === "left" ? -200 : 200;

  const animate = (timestamp: number) => {
    if (!container.current) return;

    const windowWidth = window.innerWidth;

    if (!start.current) {
      start.current = timestamp;
    }

    const elapsed = timestamp - start.current;

    const move =
      direction === "left" ? speed * elapsed + offset : -(speed * elapsed - offset);

    container.current.style.transform = `translate(${move}px, ${y}px)`;

    if (Math.abs(move) < windowWidth) {
      window.requestAnimationFrame(animate);
    } else {
      onAnimationEnded(id);
    }
  };

  useEffect(() => {
    if (!container.current) return;
    window.requestAnimationFrame(animate);
  }, [container]);

  return (
    <div
      className={`absolute top-0 ${direction === "left" ? "left-0" : "right-0"} ${
        width < 100 ? "z-10" : "z-30"
      }`}
      ref={container}
      style={{ transform: `translateX(${offset}px)` }}
    >
      {/* eslint-disable-next-line */}
      <img
        src="animations/bird.gif"
        style={{
          width: `${width}px`,
          transform: `scaleX(${direction === "left" ? "-1" : "1"})`,
        }}
        alt="Bird"
      />
    </div>
  );
};
