export default function Video({ title, src }) {
  return (
    <div className="content-container">
      <iframe src={src} className="w-full h-96"></iframe>
      <div className="text-2xl">{title}</div>
    </div>
  );
}
