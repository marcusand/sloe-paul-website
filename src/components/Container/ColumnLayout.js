export default function ColumnLayout({ children }) {
  return <div className="flex flex-col md:flex-row">{children}</div>;
}
