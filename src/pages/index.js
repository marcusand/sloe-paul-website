import About from "../components/About";
import api from "../lib/api";

export default function Index({ pagesData, links }) {
  return (
    <div className="grid grid-cols-1 gap-4 text-2xl uppercase">
      <About data={pagesData[0]} />
    </div>
  );
}

export async function getStaticProps() {
  const data = await api.fetchJson("/api/content");

  let pagesData = data.data.pages;
  let links = data.data.links;

  pagesData = pagesData.sort((a, b) => a.order - b.order);
  links = links.sort((a, b) => a.order - b.order);

  return {
    props: {
      pagesData,
      links,
    },
    revalidate: 2,
  };
}
