export default function FullWidthContainer({ children, id }) {
  return (
    <div className="content-container h-96 p-0" id={id}>
      {children}
    </div>
  );
}
