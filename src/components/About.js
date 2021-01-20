import ContentContainer from "./Container/ContentContainer";
import MultipageComponent from "./MultipageComponent";
import Grid from "./Container/Grid";
import Hero from "./Container/Hero";
import News from "./News";
import Paginate from "./Paginate";

export default function About({ data }) {
  return (
    <div id="about">
      <Hero className="h-hero flex flex-col md:flex-row">
        <div
          className="h-full w-full md:w-1/2 xl:w-1/3 flex justify-center items-center opacity-60 uppercase"
          style={{ fontSize: "9rem" }}
        >
          Sloe
        </div>
        <div
          className="h-full w-full xl:w-1/3 absolute xl:relative top-0 left-0 z-20 bg-center bg-no-repeat xl:bg-cover "
          style={{
            background: `url('/img/portrait600.png')`,
          }}
        ></div>
        <div
          className="h-full w-full md:w-1/2 xl:w-1/3 flex justify-center items-center opacity-60 uppercase"
          style={{ fontSize: "9rem" }}
        >
          Paul
        </div>
      </Hero>
      <Grid>
        <div className="order-2 xl:order-1">
          <ContentContainer>
            <MultipageComponent
              data={[data.about_text_en, data.about_text_de]}
              buttonLables={["english", "deutsch"]}
              render={(currentData) => (
                <div dangerouslySetInnerHTML={{ __html: currentData }} />
              )}
            />
          </ContentContainer>
        </div>
        <div className="order-1">
          <ContentContainer>
            <div className="text-2xl text-center italic underline uppercase">News</div>
            <Paginate
              perPage={data.per_page}
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
        </div>
      </Grid>
    </div>
  );
}
