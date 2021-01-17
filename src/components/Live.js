import Header from "./Container/Header";
import ContentContainer from "./Container/ContentContainer";
import Hero from "./Container/Hero";
import Grid from "./Container/Grid";
import MultipageComponent from "./MultipageComponent";
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
          <MultipageComponent
            data={[data.description_de, data.description_en]}
            buttonLables={["deutsch", "english"]}
            render={(currentData) => (
              <div dangerouslySetInnerHTML={{ __html: currentData }} />
            )}
          />
        </ContentContainer>
      </Grid>
    </div>
  );
}
