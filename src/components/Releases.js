import HeaderContainer from "./Container/HeaderContainer";
import Release from "./Release";

export default function Releases({ data }) {
  console.log(data);
  return (
    <div className="my-4" id="releases">
      <HeaderContainer>Releases</HeaderContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      </div>
    </div>
  );
}
