import ContentContainer from "./Container/ContentContainer";

export default function Video({ title, src }) {
  return (
    <ContentContainer>
      <iframe src={src} className="w-full h-96"></iframe>
      <h2 className="my-1">{title}</h2>
    </ContentContainer>
  );
}
