import React, { useEffect } from "react";
import MidSect from "../components/homepage/MidSect";
import TopSection from "../components/homepage/TopSection";
import BottomSect from "../components/homepage/BottomSect";

import Head from "next/head";

import { Parallax, ParallaxLayer } from "@reactspring/parallax";
const pagetitle = () => "Develo<peer/>";

const HomePage = () => {
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>{pagetitle}</title>
      </Head>

      <TopSection />

      <MidSect />
        
      <BottomSect />

    </>
  );
};

export default HomePage;
