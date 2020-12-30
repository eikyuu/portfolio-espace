import React from "react";
import TextWhite from "../../../styles/global/TextWhite";
import TitleWhite from "../../../styles/global/TitleWhite";
import Ombre from "../../../styles/pages/home/Ombre";
import Section from "../../../styles/pages/home/Section";

const Home = () => {
  return (
    <Section className="test" image="/images/fond-etoile-mobile.png">
      <Ombre>
        <TitleWhite className="titleWhite mt-3">
          DÉVELOPPEUR WEB HTML & CSS <br /> REACT - SYMFONY
        </TitleWhite>
        <a
          style={{ textDecoration: "none", color: "white" }}
          download="CV Vincent duguet"
          className="home_button textWhite mt-3 mb-3"
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
        <a
          style={{ textDecoration: "none", color: "white" }}
          className="link_about mt-3"
          href=""
        >
          <TextWhite>A PROPOS</TextWhite>
        </a>
        <img
          src="/images/astronaute.png"
          alt="icon linkedin"
          className="img_astronaute mt-2"
        />
      </Ombre>
    </Section>
  );
};

export default Home;
