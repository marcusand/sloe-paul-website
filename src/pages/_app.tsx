import "../styles/tailwind.css";
import { Layout } from "../components/Layout";
import { AppProps } from "next/app";
import { Data } from "../api";

interface CustomPageProps {
  data?: Data;
}

const CustomApp = ({ Component, pageProps }: AppProps<CustomPageProps>) => {
  if (pageProps.data === undefined) {
    return null;
  }

  return (
    <Layout generalData={pageProps.data.general}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default CustomApp;
