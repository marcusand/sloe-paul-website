import Grid from "./Container/Grid";
import Header from "./Container/Header";
import Video from "./Video";

export default function Videos({ data }) {
  return (
    <div className="my-4" id="videos">
      <Header>{data.title}</Header>
      <Grid>
        {data.mount.map((video) => (
          <Video key={video.id} title={video.title} src={video.video} />
        ))}
      </Grid>
    </div>
  );
}
