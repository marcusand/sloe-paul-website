export default function Hero({ children, className }) {
  return (
    <div
      className={`content-container mb-4 p-0 overflow-hidden ${className}`}
      style={{ height: "26rem" }}
    >
      {children}
    </div>
  );
}
