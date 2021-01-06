import ColumnContainer from "./Container/ColumnContainer";
import ColumnLayout from "./Container/ColumnLayout";
import FullWidthContainer from "./Container/FullWidthContainer";
import LocalizedText from "./LocalizedText";

export default function About({ data }) {
  console.log(data);
  return (
    <div className="grid grid-cols-1 gap-4" id="about">
      <FullWidthContainer>
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
        <ColumnContainer className="md:mr-4 uppercase mb-4 md:mb-0">
          <LocalizedText textDe={data.about_text_de} textEn={data.about_text_en} />
        </ColumnContainer>
        <ColumnContainer></ColumnContainer>
      </ColumnLayout>
    </div>
  );
}
