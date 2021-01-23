import ContentContainer from "./Container/ContentContainer";
import Header from "./Container/Header";

export default function Imprint({ data }) {
  return (
    <div id="imprint">
      <Header>{data.title}</Header>
      <ContentContainer>
        <div className="w-full h-full flex flex-col md:flex-row justify-between">
          <div
            dangerouslySetInnerHTML={{ __html: data.text_left }}
            className="md:w-1/2 "
          />
          <div
            dangerouslySetInnerHTML={{ __html: data.text_right }}
            className="md:mt-0 md:ml-12 md:w-1/2 mt-6"
          />
        </div>
      </ContentContainer>
    </div>
  );
}
