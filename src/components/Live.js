import Header from "./Container/Header";
import ContentContainer from "./Container/ContentContainer";
import Hero from "./Container/Hero";
import Grid from "./Container/Grid";
import LocalizedText from "./LocalizedText";

export default function Live({ data }) {
  return (
    <div id="live">
      <Header>{data.title}</Header>
      <Hero>
        <video
          src={data.video.permalink}
          className="min-h-full min-w-full opacity-90"
          autoPlay
          loop
          controls={false}
        ></video>
      </Hero>
      <Grid>
        <ContentContainer>Live:</ContentContainer>
        <ContentContainer>
          <LocalizedText textDe={data.description_de} textEn={data.description_en} />
        </ContentContainer>
      </Grid>
    </div>
  );
}
