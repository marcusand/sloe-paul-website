import Header from "./Container/Header";
import { ContentContainer } from "./Container/ContentContainer";
import { MultiPageComponent } from "./MultiPageComponent";
import { Hero } from "./Container/Hero";
import { Grid } from "./Container/Grid";
import { useState } from "react";
import ShowList from "./ShowList";
import { Concert, LiveData } from "../api/interfaces";
import { isDateUpcoming } from "../lib/helpers";
import { getAssetUrl } from "../api";

interface Props {
  data: LiveData;
  concerts: Concert[];
}

export const Live: React.FC<Props> = ({
  data: { video, concerts_per_page, description_de, description_en },
  concerts,
}) => {
  const [videoMuted, setVideoMuted] = useState(true);
  const upcomingShows = concerts.filter(({ date }) => isDateUpcoming(new Date(date)));
  const pastShows = concerts.filter(({ date }) => !isDateUpcoming(new Date(date)));
  const perPage = concerts_per_page ?? 8;

  return (
    <div id="live" className="mb-4">
      <Header>Live</Header>
      <Hero>
        <video
          src={getAssetUrl(video.id)}
          className="min-h-full min-w-full opacity-90 z-20"
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
        <ContentContainer>
          <MultiPageComponent
            data={[upcomingShows, pastShows.reverse()]}
            buttonLabels={["upcoming shows", "past shows"]}
            render={(shows, index) => (
              <ShowList shows={shows} perPage={perPage} pastShows={index === 1} />
            )}
          />
        </ContentContainer>
        <ContentContainer>
          <MultiPageComponent
            data={[description_en || "", description_de || ""]}
            buttonLabels={["english", "deutsch"]}
            render={(currentData) => (
              <div dangerouslySetInnerHTML={{ __html: currentData }} />
            )}
          />
        </ContentContainer>
      </Grid>
    </div>
  );
};
