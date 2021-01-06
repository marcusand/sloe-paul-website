import ColumnContainer from "./Container/ColumnContainer";
import ColumnLayout from "./Container/ColumnLayout";
import FullWidthContainer from "./Container/FullWidthContainer";
import LocalizedText from "./LocalizedText";

export default function About({ data }) {
  return (
    <div id="about">
      <FullWidthContainer padding={false}>
        <div
          className="h-full w-full"
          style={{
            background: `url(${data.portrait.permalink})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </FullWidthContainer>
      <ColumnLayout>
        <ColumnContainer className="md:mr-4 mb-4 md:mb-0">
          <LocalizedText textDe={data.about_text_de} textEn={data.about_text_en} />
        </ColumnContainer>
        <ColumnContainer></ColumnContainer>
      </ColumnLayout>
    </div>
  );
}
