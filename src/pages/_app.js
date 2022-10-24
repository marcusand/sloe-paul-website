import "../styles/tailwind.css";
import { Layout } from "../components/Layout";

export default function CustomApp({ Component, pageProps }) {
  return (
    <Layout generalData={pageProps.data.general}>
      <Component {...pageProps} />
    </Layout>
  );
}
