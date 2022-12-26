import { useEffect, useRef, useState } from "react";
import { Bird, IBird } from "../Bird";
import { getRandomArbitrary } from "../../lib/helpers";

const MAX_BIRDS = 20;

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Hero: React.FC<Props> = ({ children, className = "" }) => {
  const [birds, setBirds] = useState<IBird[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutLoop = useRef<number>();

  const addBird = () => {
    if (birds.length > MAX_BIRDS || containerRef.current === null) return;
    if (!document.hasFocus()) return;

    const newBird: IBird = {
      id: String(Date.now()),
      width: getRandomArbitrary(50, 150),
      direction: Math.random() > 0.5 ? "left" : "right",
      speed: getRandomArbitrary(0.15, 0.5),
      y: Math.round(getRandomArbitrary(0, containerRef.current.offsetHeight * 0.8)),
    };

    setBirds((currentBirds) => [...currentBirds, newBird]);
  };

  const handleAnimationEnded = (id: string) => {
    setBirds((currentBirds) => {
      const index = currentBirds.findIndex((bird) => bird.id === id);

      return [
        ...currentBirds.slice(0, index),
        ...currentBirds.slice(index + 1, currentBirds.length + 1),
      ];
    });
  };

  const addBirdAfterRandomTimeout = () => {
    return window.setTimeout(() => {
      addBird();
      timeoutLoop.current = addBirdAfterRandomTimeout();
    }, Math.random() * 30000);
  };

  useEffect(() => {
    timeoutLoop.current = addBirdAfterRandomTimeout();

    return () => {
      if (timeoutLoop.current) window.clearTimeout(timeoutLoop.current);
    };
  }, []);

  return (
    <div
      className={`content-container relative md:h-hero mb-4 p-0 overflow-hidden bg-transparent ${className}`}
      ref={containerRef}
      onClick={() => addBird()}
    >
      {children}
      {birds.map((bird) => (
        <Bird key={bird.id} data={bird} onAnimationEnded={handleAnimationEnded} />
      ))}
    </div>
  );
};
