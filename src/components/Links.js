export default function Links({ className, links }) {
  return (
    <ul className={`${className} lowercase text-2xl`}>
      {links.map((link) => (
        <li key={link.id} className="float-left ml-4">
          <a href={link.url}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
}
