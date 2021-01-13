export default function Hero({ children, className }) {
  return (
    <div
      className={`content-container relative md:h-hero mb-4 p-0 overflow-hidden bg-transparent ${className}`}
    >
      {children}
    </div>
  );
}
