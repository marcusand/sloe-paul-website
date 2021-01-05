export default function Links({ className, links }) {
  console.log(links);
  return (
    <ul className={`${className} lowercase text-2xl`}>
      {links.map((link) => (
        <li key={link.id}>
          <a href={link.link}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
}
