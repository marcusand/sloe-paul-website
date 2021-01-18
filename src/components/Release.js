import ContentContainer from "./Container/ContentContainer";

export default function Release({ title, description, image, link }) {
  return (
    <ContentContainer>
      <div className="w-full h-full flex flex-col md:flex-row">
        <div className="flex w-full md:w-1/2 justify-center items-center">
          <img src={image} className="" />
        </div>
        <div className="w-1/2 md:ml-4 md:px-4 mt-1 md:mt-0">
          <div className="text-2xl">{title}</div>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </ContentContainer>
  );
}
