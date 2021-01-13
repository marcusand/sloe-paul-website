import Button from "./Button";

export default function Navigation({ pages, className, onItemClick }) {
  return (
    <div className={`${className} `}>
      {pages.map((page) => (
        <div key={page.id}>
          <a href={`#${page.slug}`} onClick={() => (onItemClick ? onItemClick() : null)}>
            <Button>{page.title}</Button>
          </a>
        </div>
      ))}
    </div>
  );
}
