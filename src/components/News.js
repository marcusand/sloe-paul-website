import Ticker from "react-ticker";
import Image from "next/image";

export default function News({ title, text, image, index }) {
  return (
    <div className="overflow-hidden mb-6">
      <div className="w-full">
        <Ticker mode="chain" direction={index % 2 === 0 ? "toLeft" : "toRight"}>
          {() => <span className="mr-4">{title}</span>}
        </Ticker>
      </div>
      <div className="h-72 w-full overflow-hidden relative my-4 bg-transparent">
        <Image
          src={image}
          alt={`News header image for article: ${title}`}
          layout="fill"
          objectFit="scale-down"
          objectPosition="center center"
          sizes="(min-width: 1200px) 25vw, 100vw"
          quality={50}
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}
