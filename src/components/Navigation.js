export default function Navigation({ pages, className }) {
  return (
    <ul className={`${className} lowercase text-2xl`}>
      {pages.map((page) => (
        <li key={page.id} className="float-left mr-4">
          <a href={`#${page.slug}`}>{page.title}</a>
        </li>
      ))}
    </ul>
  );
}
