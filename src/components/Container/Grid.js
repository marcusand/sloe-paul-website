export default function Grid({ children }) {
  return <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">{children}</div>;
}
