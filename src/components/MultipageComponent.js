import { useState } from "react";
import Button from "./Button";

export default function MultipageComponent({
  data,
  buttonLables,
  render,
  initialIndex = 0,
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-1">
        {buttonLables.map((label, index) => (
          <Button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`mr-4 ${index === currentIndex ? "bg-alpha" : ""}`}
          >
            {label}
          </Button>
        ))}
      </div>
      {render(data[currentIndex])}
    </div>
  );
}
