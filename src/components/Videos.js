import HeaderContainer from "./Container/HeaderContainer";
import Video from "./Video";

export default function Videos({ data }) {
  console.log(data);
  return (
    <div className="my-4" id="videos">
      <HeaderContainer>Videos</HeaderContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.mount.map((video) => (
          <Video key={video.id} title={video.title} src={video.video} />
        ))}
      </div>
    </div>
  );
}
