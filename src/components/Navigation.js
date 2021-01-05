export default function Navigation({ pages, className, onItemClick }) {
  return (
    <ul className={`${className} lowercase text-2xl`}>
      {pages.map((page) => (
        <li key={page.id}>
          <a href={`#${page.slug}`} onClick={() => (onItemClick ? onItemClick() : null)}>
            {page.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
