import About from "../components/About";
import Imprint from "../components/Imprint";
import Live from "../components/Live";
import Releases from "../components/Releases";
import Videos from "../components/Videos";
import api from "../lib/api";

export default function Index({ pagesData }) {
  return (
    <div className="text-lg">
      <About data={pagesData[0]} />
      <Releases data={pagesData[1]} />
      <Videos data={pagesData[2]} />
      <Live data={pagesData[3]} />
      <Imprint data={pagesData[4]} />
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
