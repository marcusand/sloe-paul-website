import api from "../lib/api";

export default function Index({ pagesData, links }) {
  return <div>hello world</div>;
}

export async function getStaticProps() {
  const data = await api.fetchJson("/api/content");
  const pagesData = data.data.pages;
  const links = data.data.links;

  return {
    props: {
      pagesData,
      links,
    },
    revalidate: 2,
  };
}
