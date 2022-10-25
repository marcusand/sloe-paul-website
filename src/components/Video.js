import { ContentContainer } from "./Container/ContentContainer";

export default function Video({ title, src }) {
  return (
    <ContentContainer>
      <iframe src={src} className="w-full h-96"></iframe>
      <h2 className="mt-2 mb-0">{title}</h2>
    </ContentContainer>
  );
}
