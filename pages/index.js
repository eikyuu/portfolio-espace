import React from "react";
import Head from "next/head";

import SectionHome from "../styles/pages/home/SectionHome";
import CardOmbre from "../styles/pages/home/CardOmbre";

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionHome>
        <CardOmbre></CardOmbre>
      </SectionHome>
    </React.Fragment>
  );
};

export default Home;
