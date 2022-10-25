import { ContentContainer } from "./Container/ContentContainer";
import MultipageComponent from "./MultipageComponent";
import { Grid } from "./Container/Grid";
import { Hero } from "./Container/Hero";
import { News } from "./News";
import Paginate from "./Paginate";
import { AboutData, News as INews } from "../api/interfaces";

interface Props {
  about: AboutData;
  news: INews[];
}

export const About: React.FC<Props> = ({
  about: { about_text_de, about_text_en },
  news,
}) => {
  return (
    <div id="about">
      <Hero className="h-hero flex flex-col md:flex-row">
        <div className="hero-title" style={{ fontSize: "9rem" }}>
          Sloe
        </div>
        <div
          className="h-full w-full xl:w-1/3 absolute xl:relative top-0 left-0 z-20 bg-center bg-no-repeat xl:bg-cover "
          style={{
            background: `url('/img/portrait600.png')`,
          }}
        ></div>
        <div className="hero-title" style={{ fontSize: "9rem" }}>
          Paul
        </div>
      </Hero>
      <Grid>
        <div className="order-2 md:order-1">
          <ContentContainer>
            <MultipageComponent
              data={[about_text_en, about_text_de]}
              buttonLables={["english", "deutsch"]}
              render={(currentData: string) => (
                <div dangerouslySetInnerHTML={{ __html: currentData }} />
              )}
            />
          </ContentContainer>
        </div>
        <div className="order-1">
          <ContentContainer>
            <h2 className="text-center italic underline">News</h2>
            <Paginate
              perPage={1}
              data={news}
              render={(newsData: INews[]) => {
                return newsData.map((news, index) => (
                  <div key={news.id}>
                    <News item={news} />
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
};
