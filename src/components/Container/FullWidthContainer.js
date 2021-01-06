export default function FullWidthContainer({ children }) {
  return (
    <div className="content-container p-0" style={{ height: "26rem" }}>
      {children}
    </div>
  );
}
