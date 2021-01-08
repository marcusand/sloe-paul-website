export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`border-current border-2 px-1 uppercase hover:cursor-pointer hover:bg-alpha ${className}`}
    >
      {children}
    </button>
  );
}
