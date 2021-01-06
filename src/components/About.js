import ContentContainer from "./Container/ContentContainer";
import LocalizedText from "./LocalizedText";
import Grid from "./Container/Grid";
import Hero from "./Container/Hero";

export default function About({ data }) {
  return (
    <div id="about">
      <Hero>
        <div
          className="h-full w-full"
          style={{
            background: `url(${data.portrait.permalink})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </Hero>
      <Grid>
        <ContentContainer>
          <LocalizedText textDe={data.about_text_de} textEn={data.about_text_en} />
        </ContentContainer>
        <ContentContainer></ContentContainer>
      </Grid>
    </div>
  );
}
