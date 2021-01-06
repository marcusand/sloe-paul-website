import FullWidthContainer from "./Container/FullWidthContainer";
import HeaderContainer from "./Container/HeaderContainer";

export default function Releases({ data }) {
  return (
    <div className="my-4" id="releases">
      <HeaderContainer>Releases</HeaderContainer>
      {data.mount.map((release) => (
        <FullWidthContainer key={release.id}>{release.title}</FullWidthContainer>
      ))}
    </div>
  );
}
