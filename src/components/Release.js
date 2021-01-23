import Image from "next/image";
import ContentContainer from "./Container/ContentContainer";

export default function Release({ title, description, image }) {
  return (
    <ContentContainer>
      <div className="w-full h-full flex flex-col xl:flex-row">
        <div className="flex w-full xl:w-1/2 justify-center items-center">
          <Image
            src={image}
            width={500}
            height={500}
            alt={`Cover of the album ${title}`}
          />
        </div>
        <div className="w-full xl:w-1/2 xl:ml-4 xl:px-4 mt-2 xl:mt-0">
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </ContentContainer>
  );
}
