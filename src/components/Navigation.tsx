import { Button } from "./Button";

interface Props {
  className: string;
  shopLink?: string;
  onItemClick?: () => void;
}

interface Page {
  id: number;
  external: boolean;
  slug?: string;
  url?: string;
  title: string;
}

export const Navigation: React.FC<Props> = ({ shopLink, className, onItemClick }) => {
  const pages: Page[] = [
    {
      id: 1,
      external: false,
      slug: "about",
      title: "About",
    },
    {
      id: 2,
      external: false,
      slug: "releases",
      title: "Releases",
    },
    {
      id: 3,
      external: false,
      slug: "videos",
      title: "Videos",
    },
    {
      id: 4,
      external: false,
      slug: "live",
      title: "Live",
    },
    {
      id: 5,
      external: false,
      slug: "imprint",
      title: "Imprint",
    },
  ];

  if (shopLink !== undefined) {
    pages.push({
      id: 6,
      external: true,
      url: shopLink,
      title: "Shop",
    });
  }

  return (
    <div className={`${className} `}>
      {pages.map((page) => (
        <div key={page.id}>
          <a
            href={page.external ? page.url : `#${page.slug}`}
            target={page.external ? "__blank" : ""}
            rel={page.external ? "noopener" : ""}
            onClick={() => (onItemClick ? onItemClick() : null)}
          >
            <Button>{page.title}</Button>
          </a>
        </div>
      ))}
    </div>
  );
};
