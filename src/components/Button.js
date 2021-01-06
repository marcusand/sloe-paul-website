export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`border-white border-2 px-1 lowercase hover:cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
