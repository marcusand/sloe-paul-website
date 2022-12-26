import { useRouter } from "next/router";
import Head from "next/head";
import { About } from "../components/About";
// import Imprint from "../components/Imprint";
// import Live from "../components/Live";
import { Releases } from "../components/Releases";
import { Videos } from "../components/Videos";
import { getData, Data } from "../api/index";

interface Props {
  data: Data;
}

const Index: React.FC<Props> = ({ data }) => {
  const router = useRouter();
  const baseUrl = "https://sloepaul.net";
  const currentUrl = `${baseUrl}${router.asPath}`;

  console.log(data.about);

  return (
    <div className="text-lg">
      <Head>
        <title>Sloe Paul</title>
        <meta property="og:title" content="Sloe Paul" key="title" />
        <meta
          name="keywords"
          content="Sloe Paul, Stuttgart, Schorndorf, Berlin, Leipzig, Band, Music, Recording, Album, Concert, Live, Release, Pop, Lo-fi"
        />
        <meta name="description" content="Homepage of Sloe Paul" />
        <meta name="author" content="Marcus Schreiter" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
        <link rel="manifest" href="/icon/site.webmanifest" />
        <link rel="mask-icon" href="/icon/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/icon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#fab1c0" />
        <meta name="msapplication-config" content="/icon/browserconfig.xml" />
        <meta name="theme-color" content="#fab1c0" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="sloepaul.net" />
        <meta property="twitter:url" content={baseUrl} />
        <meta name="twitter:title" content="Sloe Paul" />
        <meta name="twitter:description" content="Homepage of Sloe Paul" />
        <meta name="twitter:image" content={`${baseUrl}/icon/header.jpg`} />

        {/* Open Graph */}
        <meta property="og:title" content="Sloe Paul" key="ogtitle" />
        <meta property="og:url" content={currentUrl} key="ogurl" />
        <meta property="og:image" content={`${baseUrl}/icon/header.jpg`} key="ogimage" />
        <meta property="og:site_name" content="Sloe Paul" key="ogsitename" />
        <meta property="og:description" content="Homepage of Sloe Paul" key="ogdesc" />

        <link rel="preload" href="/fonts/G2Erika.ttf" as="font" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="/fonts/ERIKALatin1-Regular.ttf"
          as="font"
          crossOrigin="anonymous"
        />
      </Head>
      <About about={data.about} news={data.news} />
      <Releases data={data.releases} />
      <Videos data={data.videos} />
      {/* <Live data={pagesData[3]} /> */}
      {/* <Imprint data={pagesData[4]} /> */}
    </div>
  );
};

export default Index;

export async function getStaticProps() {
  const data = await getData();

  return {
    props: {
      data,
    },
    revalidate: 2,
  };
}
