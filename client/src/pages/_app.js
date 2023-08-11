import "./globals.css";
import Headers from "../controller/header";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/00014_logo_vi.png" />
      </Head>
      <Headers />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
