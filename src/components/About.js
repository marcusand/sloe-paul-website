import ColumnContainer from "./Container/ColumnContainer";
import ColumnLayout from "./Container/ColumnLayout";
import FullWidthContainer from "./Container/FullWidthContainer";

export default function About({ data }) {
  console.log(data);
  return (
    <div className="grid grid-cols-1 gap-4 text-2xl">
      <FullWidthContainer id="about">
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
        <ColumnContainer className="md:mr-4 uppercase">
          {data.about_text_de}
        </ColumnContainer>
        <ColumnContainer></ColumnContainer>
      </ColumnLayout>
    </div>
  );
}
