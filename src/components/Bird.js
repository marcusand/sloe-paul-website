import { useEffect, useRef } from "react";

export default function Bird({ width, fromLeft, speed, index, y, onAnimationEnded }) {
  const container = useRef();
  const start = useRef();
  const offset = fromLeft ? -200 : 200;

  const animate = (timestamp) => {
    if (!container.current) return;

    const windowWidth = window.innerWidth;

    if (!start.current) {
      start.current = timestamp;
    }

    const elapsed = timestamp - start.current;

    const move = fromLeft ? speed * elapsed + offset : -(speed * elapsed - offset);

    container.current.style.transform = `translate(${move}px, ${y}px)`;

    if (Math.abs(move) < windowWidth) {
      window.requestAnimationFrame(animate);
    } else {
      onAnimationEnded(index);
    }
  };

  useEffect(() => {
    if (!container.current) return;
    window.requestAnimationFrame(animate);
  }, [container]);

  return (
    <div
      className={`absolute top-0 ${fromLeft ? "left-0" : "right-0"} ${
        width < 100 ? "z-10" : "z-30"
      }`}
      ref={container}
      style={{ transform: `translateX(${offset}px)` }}
    >
      <img
        src="animations/bird.gif"
        style={{ width: `${width}px`, transform: `scaleX(${fromLeft ? "-1" : "1"})` }}
        alt="Bird"
      />
    </div>
  );
}
