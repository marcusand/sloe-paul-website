import moment from "moment";
import Header from "./Container/Header";
import ContentContainer from "./Container/ContentContainer";
import Hero from "./Container/Hero";
import Grid from "./Container/Grid";
import MultipageComponent from "./MultipageComponent";
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
        <ContentContainer>
          <MultipageComponent
            data={[upcomingShows, pastShows.reverse()]}
            buttonLables={["upcoming shows", "past shows"]}
            render={(shows) => <ShowList shows={shows} />}
          />
        </ContentContainer>
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
