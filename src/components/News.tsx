import Ticker from "react-ticker";
import Image from "next/image";
import { News as INews } from "../api/interfaces";
import { getAssetUrl } from "../api";

type Props = Omit<INews, "id">;

export const News: React.FC<Props> = ({ image, title, text }) => {
  return (
    <div className="overflow-hidden mb-6">
      <div className="w-full">
        <Ticker mode="chain" offset="run-in" direction="toLeft">
          {() => <span className="mr-4 whitespace-nowrap">{title}</span>}
        </Ticker>
      </div>
      <div className="h-72 w-full overflow-hidden relative my-4 bg-transparent">
        {image && (
          <Image
            src={getAssetUrl(image.id)}
            alt={`News header image for article: ${title}`}
            layout="fill"
            objectFit="contain"
            objectPosition="center center"
          />
        )}
      </div>
      {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
    </div>
  );
};
