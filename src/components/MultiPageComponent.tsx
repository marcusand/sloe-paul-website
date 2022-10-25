import { useState } from "react";
import { Button } from "./Button";

interface Props<T> {
  data: T[];
  buttonLabels: string[];
  render: (item: T, index: number) => void;
  initialIndex?: number;
}

export const MultiPageComponent = <T,>({
  data,
  buttonLabels,
  render,
  initialIndex = 0,
}: Props<T>) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  return (
    <div className="w-full h-full flex flex-col ">
      <>
        <div className="mb-1">
          {buttonLabels.map((label, index) => (
            <Button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`mr-4 ${index === currentIndex ? "bg-alpha" : ""}`}
            >
              {label}
            </Button>
          ))}
        </div>
        {render(data[currentIndex], currentIndex)}
      </>
    </div>
  );
};
