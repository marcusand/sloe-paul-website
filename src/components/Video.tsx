import { ContentContainer } from "./Container/ContentContainer";
import { Video as IVideo } from "../api/interfaces";
import { getYoutubeEmbedUrl } from "../api";

type Props = Omit<IVideo, "id">;

export const Video: React.FC<Props> = ({ title, video }) => {
  return (
    <ContentContainer>
      <iframe src={getYoutubeEmbedUrl(video)} className="w-full h-96"></iframe>
      <h2 className="mt-2 mb-0">{title}</h2>
    </ContentContainer>
  );
};
