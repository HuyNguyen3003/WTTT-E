// pages/_app.js
import React from "react";
import "./globals.css";
import Headers from "../controller/header";
import Head from "next/head";
import Contact from "../controller/contact";
import Footer from "../controller/Footer";
import Services from "../controller/services";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

import { useEffect } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Set type store lúc mới vào web lần đâu
    if (typeof window !== "undefined") {
      const storedCount = localStorage.getItem("count");
      if (!storedCount) {
        localStorage.setItem("count", `[{"id":"-1"}]`);
      }
    }
  }, []);
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.6 },
  };

  const sections = [
    { name: "parallax-section", content: <Headers /> },
    { name: "services-section", content: <Contact /> },
    { name: "main-content", content: <Component {...pageProps} /> },
    { name: "services-section", content: <Services /> },
    { name: "services-section", content: <Footer /> },
  ];

  const renderSections = () => {
    return sections.map((section, index) => (
      <Element key={index} name={section.name}>
        <div className={`${section.name} ${index !== 0 ? "mt-12" : ""}`}>
          <motion.div {...fadeIn}>{section.content}</motion.div>
        </div>
      </Element>
    ));
  };

  return (
    <>
      <Provider store={store}>
        <Head>
          <link rel="shortcut icon" href="/img/00014_logo_vi.png" />
        </Head>
        {renderSections()}
      </Provider>
    </>
  );
}

export default MyApp;
