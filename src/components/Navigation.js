import Button from "./Button";

export default function Navigation({ pages, className, onItemClick }) {
  return (
    <div className={`${className} `}>
      {pages.map((page) => (
        <div key={page.id}>
          <a
            href={page.external_url ? page.external_url : `#${page.slug}`}
            target={page.external_url ? "__blank" : ""}
            onClick={() => (onItemClick ? onItemClick() : null)}
          >
            <Button>{page.title}</Button>
          </a>
        </div>
      ))}
    </div>
  );
}
