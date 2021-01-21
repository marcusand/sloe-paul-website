import ContentContainer from "./Container/ContentContainer";
import Header from "./Container/Header";

export default function Imprint({ data }) {
  return (
    <div id="imprint">
      <Header>{data.title}</Header>
      <ContentContainer>
        <div className="w-full h-full flex flex-col xl:flex-row justify-between">
          <div
            dangerouslySetInnerHTML={{ __html: data.text_left }}
            className="xl:w-1/2"
          />
          <div
            dangerouslySetInnerHTML={{ __html: data.text_right }}
            className="xl:mt-0 xl:w-1/2 xl:ml-12 mt-6"
          />
        </div>
      </ContentContainer>
    </div>
  );
}
