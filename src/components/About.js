import FullWidthContainer from "./Container/FullWidthContainer";

export default function About({ data }) {
  console.log(data);
  return (
    <div>
      <FullWidthContainer>
        <div
          className="h-full w-full"
          style={{
            background: `url(${data.portrait.permalink})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </FullWidthContainer>
    </div>
  );
}
