import React from "react";
import Head from "next/head";
import SectionHome from "../styles/pages/home/SectionHome";
import Ombre from "../styles/pages/home/Ombre";

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionHome>
        <Ombre>
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
          <div className="container_logo mt-2">
            <a
              href="https://www.linkedin.com/in/vincent-duguet/"
              className="mr-2"
            >
              <img
                src="/images/linkedin.png"
                alt="icon linkedin"
                className="logo_home"
              />
            </a>
            <a href="https://github.com/eikyuu">
              <img
                src="/images/github.png"
                alt="icon linkedin"
                className="logo_home"
              />
            </a>
          </div>
        </Ombre>
      </SectionHome>
    </React.Fragment>
  );
};

export default Home;
