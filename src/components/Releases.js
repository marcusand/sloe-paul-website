import Grid from "./Container/Grid";
import Header from "./Container/Header";
import Release from "./Release";

export default function Releases({ data }) {
  return (
    <div className="my-4" id="releases">
      <Header>{data.title}</Header>
      <Grid>
        {data.mount.map((release) => (
          <Release
            key={release.id}
            id={release.id}
            title={release.title}
            description={release.description}
            image={release.image.permalink}
            link={release.link}
          />
        ))}
      </Grid>
    </div>
  );
}
