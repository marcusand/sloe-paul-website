import "../styles/tailwind.css";
import Layout from "../components/Layout";

export default function CustomApp({ Component, pageProps }) {
  return (
    <Layout pagesData={pageProps.pagesData} links={pageProps.links}>
      <Component {...pageProps} />
    </Layout>
  );
}
