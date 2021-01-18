export default function Header({ children }) {
  return (
    <div className="content-container bg-alpha opacity-90 flex justify-center items-center py-2 mb-4 uppercase">
      <div className="underline italic text-2xl">{children}</div>
    </div>
  );
}
