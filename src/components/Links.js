export default function Links({ className, links }) {
  return (
    <ul className={`${className} lowercase text-2xl`}>
      {links.map((link) => (
        <li key={link.id}>
          <a href={link.link} target="__blank">
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
