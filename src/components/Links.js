import Button from "./Button";

export default function Links({ className, links }) {
  return (
    <ul className={`${className}`}>
      {links.map((link) => (
        <li key={link.id}>
          <a href={link.link} target="__blank">
            <Button>{link.title}</Button>
          </a>
        </li>
      ))}
    </ul>
  );
}
