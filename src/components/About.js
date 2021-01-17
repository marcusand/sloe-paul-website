import ContentContainer from "./Container/ContentContainer";
import MultipageComponent from "./MultipageComponent";
import Grid from "./Container/Grid";
import Hero from "./Container/Hero";
import News from "./News";
import Paginate from "./Paginate";

export default function About({ data }) {
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
          <MultipageComponent
            data={[data.about_text_de, data.about_text_en]}
            buttonLables={["deutsch", "english"]}
            render={(currentData) => (
              <div dangerouslySetInnerHTML={{ __html: currentData }} />
            )}
          />
        </ContentContainer>
        <ContentContainer>
          <div className="text-2xl text-center italic underline">News</div>
          <Paginate
            perPage={2}
            data={data.mount ? data.mount : []}
            render={(newsData) => {
              return newsData.map((news, index) => (
                <div key={news.id}>
                  <News
                    title={news.title}
                    text={news.text}
                    image={news.image ? news.image.permalink : null}
                    index={index}
                  />
                  {index + 1 !== newsData.length ? (
                    <div className="text-center mb-6">---</div>
                  ) : null}
                </div>
              ));
            }}
          />
        </ContentContainer>
      </Grid>
    </div>
  );
}
