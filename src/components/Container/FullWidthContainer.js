export default function FullWidthContainer({ children, className, padding = true }) {
  return (
    <div
      className={`content-container mb-4 ${className} ${padding ? "p-4" : "p-0"}`}
      style={{ height: "26rem" }}
    >
      {children}
    </div>
  );
}
