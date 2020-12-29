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
        <CardOmbre>
          <h1 className="titleWhite mt-2">
            DÉVELOPPEUR WEB HTML & CSS REACT - SYMFONY
          </h1>
          <a
            style={{ textDecoration: "none", color: "white" }}
            download="CV Vincent duguet"
            className="home_button"
          >
            TÉLÉCHARGER CV
          </a>
        </CardOmbre>
      </SectionHome>
    </React.Fragment>
  );
};

export default Home;
