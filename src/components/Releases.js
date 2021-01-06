import FullWidthContainer from "./Container/FullWidthContainer";

export default function Releases({ data }) {
  return (
    <div className="my-4">
      {data.mount.map((release) => (
        <FullWidthContainer key={release.id}>{release.title}</FullWidthContainer>
      ))}
    </div>
  );
}
