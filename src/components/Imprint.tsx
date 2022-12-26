import { ImprintData } from "../api/interfaces";
import { ContentContainer } from "./Container/ContentContainer";
import Header from "./Container/Header";

interface Props {
  data: ImprintData;
}

export const Imprint: React.FC<Props> = ({ data: { text_left, text_right } }) => {
  return (
    <div id="imprint">
      <Header>Imprint</Header>
      <ContentContainer>
        <div className="w-full h-full flex flex-col md:flex-row justify-between">
          <div
            dangerouslySetInnerHTML={{ __html: text_left || "" }}
            className="md:w-1/2 "
          />
          <div
            dangerouslySetInnerHTML={{ __html: text_right || "" }}
            className="md:mt-0 md:ml-12 md:w-1/2 mt-6"
          />
        </div>
      </ContentContainer>
    </div>
  );
};
