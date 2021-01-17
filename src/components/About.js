import ReactPaginate from "react-paginate";
import ContentContainer from "./Container/ContentContainer";
import LocalizedText from "./LocalizedText";
import Grid from "./Container/Grid";
import Hero from "./Container/Hero";
import News from "./News";
import { useState } from "react";

export default function About({ data }) {
  const perPage = 2;
  const [newsData, setNewsData] = useState(
    data.mount ? data.mount.slice(0, perPage) : [],
  );

  const handlePageClick = ({ selected }) => {
    setNewsData(data.mount.slice(selected * perPage, selected * perPage + perPage));
  };

  return (
    <div id="about">
      <Hero className="h-hero">
        <div
          className="h-full w-full bg-repeat-x"
          style={{
            background: `url('/img/portrait600.png')`,
            backgroundPosition: "center",
          }}
        ></div>
      </Hero>
      <Grid>
        <ContentContainer>
          <LocalizedText textDe={data.about_text_de} textEn={data.about_text_en} />
        </ContentContainer>
        <ContentContainer>
          <div className="text-2xl text-center">News</div>
          {newsData.map((news, index) => (
            <div key={news.id}>
              <News
                title={news.title}
                text={news.text}
                image={news.image ? news.image.permalink : null}
                index={index}
              />
              {index + 1 !== data.mount.length ? (
                <div className="text-center mb-6">---</div>
              ) : null}
            </div>
          ))}
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(data.mount.length / perPage)}
            marginPagesDisplayed={5}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </ContentContainer>
      </Grid>
    </div>
  );
}
