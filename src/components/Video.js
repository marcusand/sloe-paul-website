import ContentContainer from "./Container/ContentContainer";

export default function Video({ title, src }) {
  return (
    <ContentContainer>
      <iframe src={src} className="w-full h-96"></iframe>
      <div className="text-2xl mt-1">{title}</div>
    </ContentContainer>
  );
}
