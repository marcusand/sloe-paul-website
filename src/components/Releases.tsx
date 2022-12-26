import { Grid } from "./Container/Grid";
import Header from "./Container/Header";
import { Release } from "./Release";
import { Release as IRelease } from "../api/interfaces";

interface Props {
  data: IRelease[];
}

export const Releases: React.FC<Props> = ({ data }) => {
  return (
    <div className="my-4" id="releases">
      <Header>Releases</Header>
      <Grid>
        {data.map((release) => (
          <Release
            key={release.id}
            title={release.title}
            description={release.description}
            cover={release.cover}
          />
        ))}
      </Grid>
    </div>
  );
};
