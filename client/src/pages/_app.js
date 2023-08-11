import "./globals.css";
import Headers from "../controller/header";
import Head from "next/head";
import Contact from "../controller/contact";
import Footer from "../controller/Footer";
import Services from "../controller/services";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/00014_logo_vi.png" />
      </Head>
      <Headers />
      <Contact />
      <Component {...pageProps} />
      <Services />
      <Footer />
    </>
  );
}

export default MyApp;
