import { useEffect, useRef, useState } from "react";
import helpers from "../../lib/helpers";
import Bird from "../Bird";

export default function Hero({ children, className }) {
  const [birdsData, setBirdsData] = useState([]);
  const birdsRef = useRef([]);
  const containerRef = useRef();

  const randomTimeout = () => Math.random() * 30000;

  const addBird = () => {
    const birdsCopy = Object.assign([], birdsRef.current);
    const newBird = {
      index: Date.now(),
      width: helpers.getRandomArbitrary(90, 300),
      fromLeft: Math.random() > 0.5,
      speed: helpers.getRandomArbitrary(0.1, 0.5),
      y: Math.round(
        helpers.getRandomArbitrary(0, containerRef.current.offsetHeight * 0.9),
      ),
    };

    birdsCopy.push(newBird);
    birdsRef.current = birdsCopy;
    setBirdsData(birdsRef.current);
    setTimeout(addBird, randomTimeout());
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
    setTimeout(addBird, randomTimeout());
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
