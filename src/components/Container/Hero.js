import { useCallback, useEffect, useRef, useState } from "react";
import helpers from "../../lib/helpers";
import Bird from "../Bird";

const MAX_BIRDS = 20;

export default function Hero({ children, className }) {
  const windowHasFocus = useRef(true);
  const [birdsData, setBirdsData] = useState([]);
  const birdsRef = useRef([]);
  const containerRef = useRef();

  const randomTimeout = () => Math.random() * 30000;

  const addBird = (startTimeout = true) => {
    if (birdsRef.current.length > MAX_BIRDS || !windowHasFocus.current) return;

    const birdsCopy = Object.assign([], birdsRef.current);
    const newBird = {
      index: Date.now(),
      width: helpers.getRandomArbitrary(50, 150),
      fromLeft: Math.random() > 0.5,
      speed: helpers.getRandomArbitrary(0.15, 0.5),
      y: Math.round(
        helpers.getRandomArbitrary(0, containerRef.current.offsetHeight * 0.8),
      ),
    };

    birdsCopy.push(newBird);
    birdsRef.current = birdsCopy;
    setBirdsData(birdsRef.current);
    if (startTimeout) setTimeout(addBird, randomTimeout());
  };

  const handleAnimationEnded = (index) => {
    const arrayIndex = birdsRef.current.findIndex((element) => element.index === index);
    const newData = [
      ...birdsRef.current.slice(0, arrayIndex),
      ...birdsRef.current.slice(arrayIndex + 1, birdsRef.current.length + 1),
    ];

    birdsRef.current = newData;
  };

  useEffect(() => {
    addBird();

    containerRef.current.addEventListener("click", () => {
      addBird(false);
    });

    window.addEventListener("blur", () => {
      windowHasFocus.current = false;
    });
    window.addEventListener("focus", () => {
      windowHasFocus.current = true;
      addBird();
    });
  }, []);

  useEffect(() => {
    setBirdsData(birdsRef.current);
  }, [birdsRef.current]);

  return (
    <div
      className={`content-container relative md:h-hero mb-4 p-0 overflow-hidden bg-transparent ${className}`}
      ref={containerRef}
    >
      {children}
      {birdsData.map(({ index, width, speed, fromLeft, y }) => (
        <Bird
          key={index}
          index={index}
          width={width}
          speed={speed}
          fromLeft={fromLeft}
          y={y}
          onAnimationEnded={handleAnimationEnded}
        />
      ))}
    </div>
  );
}
