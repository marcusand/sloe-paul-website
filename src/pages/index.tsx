import { useRouter } from "next/router";
import Head from "next/head";
import { About } from "../components/About";
import { Imprint } from "../components/Imprint";
import { Live } from "../components/Live";
import { Releases } from "../components/Releases";
import { Videos } from "../components/Videos";
import { getData, Data } from "../api/index";

interface Props {
  data: Data;
}

const Index: React.FC<Props> = ({ data }) => {
  const router = useRouter();
  const { meta_title, meta_description, meta_author, meta_domain, meta_keywords } =
    data.general;
  const baseUrl = `https://${meta_domain}`;
  const currentUrl = `${baseUrl}${router.asPath}`;

  return (
    <div className="text-lg">
      <Head>
        <title>{meta_title}</title>
        <meta property="og:title" content={meta_title} key="title" />
        <meta name="keywords" content={meta_keywords?.join(", ")} />
        <meta name="description" content={meta_description} />
        <meta name="author" content={meta_author} />
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
        <meta property="twitter:domain" content={meta_domain} />
        <meta property="twitter:url" content={baseUrl} />
        <meta name="twitter:title" content={meta_title} />
        <meta name="twitter:description" content={meta_description} />
        <meta name="twitter:image" content={`${baseUrl}/icon/header.jpg`} />

        {/* Open Graph */}
        <meta property="og:title" content={meta_title} key="ogtitle" />
        <meta property="og:url" content={currentUrl} key="ogurl" />
        <meta property="og:image" content={`${baseUrl}/icon/header.jpg`} key="ogimage" />
        <meta property="og:site_name" content={meta_title} key="ogsitename" />
        <meta property="og:description" content={meta_description} key="ogdesc" />

        <link rel="preload" href="/fonts/G2Erika.ttf" as="font" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="/fonts/ERIKALatin1-Regular.ttf"
          as="font"
          crossOrigin="anonymous"
        />
      </Head>
      <About data={data.about} news={data.news} />
      <Releases data={data.releases} />
      <Videos data={data.videos} />
      <Live data={data.live} concerts={data.concerts} />
      <Imprint data={data.imprint} />
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
