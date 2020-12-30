import React from "react";
import Ombre from "../../../styles/pages/home/Ombre";
import SectionHome from "../../../styles/pages/home/SectionHome";

const Home = () => {
  return (
    <SectionHome>
      <Ombre>
        <h1 className="titleWhite mt-3">
          DÉVELOPPEUR WEB HTML & CSS <br /> REACT - SYMFONY
        </h1>
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
          className="link_about textWhite mt-3"
          href=""
        >
          A PROPOS
        </a>
        <img
          src="/images/astronaute.png"
          alt="icon linkedin"
          className="img_astronaute mt-2"
        />
      </Ombre>
    </SectionHome>
  );
};

export default Home;
