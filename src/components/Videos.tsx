import { Grid } from "./Container/Grid";
import Header from "./Container/Header";
import { Video } from "./Video";
import { Video as IVideo } from "../api/interfaces";

interface Props {
  data: IVideo[];
}

export const Videos: React.FC<Props> = ({ data }) => {
  return (
    <div className="my-4" id="videos">
      <Header>Videos</Header>
      <Grid>
        {data.map((video) => (
          <Video key={video.id} title={video.title} video={video.video} />
        ))}
      </Grid>
    </div>
  );
};
