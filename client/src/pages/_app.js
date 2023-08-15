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
import { animateScroll as scroll } from "react-scroll";

function MyApp({ Component, pageProps }) {
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
      <Head>
        <link rel="shortcut icon" href="/img/00014_logo_vi.png" />
      </Head>
      {renderSections()}
    </>
  );
}

export default MyApp;
