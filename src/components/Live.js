import moment from "moment";
import Header from "./Container/Header";
import { ContentContainer } from "./Container/ContentContainer";
import { MultiPageComponent } from "./MultiPageComponent";
import Hero from "./Container/Hero";
import { Grid } from "./Container/Grid";
import { useState } from "react";
import ShowList from "./ShowList";

export default function Live({ data }) {
  const showIsUpcoming = (show) => {
    return moment(show.concert_date).isAfter(moment());
  };

  const [videoMuted, setVideoMuted] = useState(true);
  const showsData = data.mount ? data.mount : [];
  const [upcomingShows] = useState(showsData.filter(showIsUpcoming));
  const [pastShows] = useState(showsData.filter((show) => !showIsUpcoming(show)));

  return (
    <div id="live" className="mb-4">
      <Header>{data.title}</Header>
      <Hero>
        <video
          src={data.video.permalink}
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
              <ShowList shows={shows} perPage={data.per_page} pastShows={index === 1} />
            )}
          />
        </ContentContainer>
        <ContentContainer>
          <MultiPageComponent
            data={[data.description_en, data.description_de]}
            buttonLabels={["english", "deutsch"]}
            render={(currentData) => (
              <div dangerouslySetInnerHTML={{ __html: currentData }} />
            )}
          />
        </ContentContainer>
      </Grid>
    </div>
  );
}
