import Button from "./Button";

export default function Links({ className, links }) {
  return (
    <div className={`${className}`}>
      {links.map((link) => (
        <div key={link.id}>
          <a href={link.link} target="__blank">
            <Button>{link.title}</Button>
          </a>
        </div>
      ))}
    </div>
  );
}
