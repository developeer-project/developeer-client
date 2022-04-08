import React, { useEffect } from "react";
import Head from "next/head";
import Flip from "react-reveal";

import MidSect from "../components/homepage/MidSect";
import TopSection from "../components/homepage/TopSection";
import BottomSect from "../components/homepage/BottomSect";
import QuoteSection from "../components/homepage/QuoteSection";

const pageTitle = () => "Develo<peer/>";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <TopSection />
      <Flip bottom>
        <MidSect />
      </Flip>
      <QuoteSection />
      <BottomSect />
    </>
  );
};

export default HomePage;
