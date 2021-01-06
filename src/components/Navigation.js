import Button from "./Button";

export default function Navigation({ pages, className, onItemClick }) {
  return (
    <ul className={`${className} `}>
      {pages.map((page) => (
        <li key={page.id}>
          <a href={`#${page.slug}`} onClick={() => (onItemClick ? onItemClick() : null)}>
            <Button>{page.title}</Button>
          </a>
        </li>
      ))}
    </ul>
  );
}
