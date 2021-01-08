import Header from "./Container/Header";
import ContentContainer from "./Container/ContentContainer";
import Hero from "./Container/Hero";
import Grid from "./Container/Grid";
import LocalizedText from "./LocalizedText";
import { useState } from "react";

export default function Live({ data }) {
  const [videoMuted, setVideoMuted] = useState(true);

  return (
    <div id="live">
      <Header>{data.title}</Header>
      <Hero>
        <video
          src={data.video.permalink}
          className="min-h-full min-w-full opacity-90"
          autoPlay
          loop
          muted={videoMuted}
          controls={false}
        ></video>
        <div
          className="absolute top-0 right-0 mr-2 text-white cursor-pointer"
          onClick={() => setVideoMuted(!videoMuted)}
        >
          {videoMuted ? "unmute" : "mute"}
        </div>
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
