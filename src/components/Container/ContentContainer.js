export default function ContentContainer({ children }) {
  return (
    <div className="content-container h-full flex flex-col p-4 relative">{children}</div>
  );
}
