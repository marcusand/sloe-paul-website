export default function ColumnContainer({ className, children }) {
  return (
    <div className={`${className} content-container flex-1 mr-0 md:mb-0`}>{children}</div>
  );
}
