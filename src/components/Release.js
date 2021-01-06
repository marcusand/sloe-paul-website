export default function Release({ id, title, description, image, link }) {
  return (
    <div key={id} className="content-container">
      <div className="w-full h-full flex">
        <div className="flex w-1/2 justify-center items-center">
          <img src={image} className="" />
        </div>
        <div className="w-1/2 ml-4 px-4">
          <div className="text-2xl">{title}</div>
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <a href={link} target="__blank" className="underline">
            buy
          </a>
        </div>
      </div>
    </div>
  );
}
