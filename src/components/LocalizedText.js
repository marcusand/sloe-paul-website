import { useState } from "react";
import Button from "./Button";

export default function LocalizedText({ textDe, textEn }) {
  const [isGerman, setIsGerman] = useState(true);

  return (
    <div>
      <div>
        <Button
          onClick={() => setIsGerman(true)}
          className={`mr-4 ${isGerman ? "bg-alpha" : ""}`}
        >
          deutsch
        </Button>
        <Button
          onClick={() => setIsGerman(false)}
          className={`${isGerman ? "" : "bg-alpha"}`}
        >
          english
        </Button>
      </div>
      <div dangerouslySetInnerHTML={{ __html: isGerman ? textDe : textEn }}></div>
    </div>
  );
}
