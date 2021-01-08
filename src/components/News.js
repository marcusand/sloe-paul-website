import ShowMoreText from "react-show-more-text";
import Ticker from "react-ticker";

export default function News({ title, text, image, index }) {
  return (
    <div className="overflow-hidden mb-6">
      <div className="w-full">
        <Ticker mode="chain" direction={index % 2 === 0 ? "toLeft" : "toRight"}>
          {() => <span className="mr-4">{title}</span>}
        </Ticker>
      </div>
      <div
        className="h-64 flex justify-center my-4 bg-contain bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <ShowMoreText anchorClass="underline">
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </ShowMoreText>
    </div>
  );
}
