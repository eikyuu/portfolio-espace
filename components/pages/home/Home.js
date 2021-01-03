import React from "react";
import TextWhite from "../../../styles/global/TextWhite";
import TitleWhite from "../../../styles/global/TitleWhite";
import DownloadButton from "../../../styles/pages/home/DownloadButton";
import Ombre from "../../../styles/pages/home/Ombre";
import Section from "../../../styles/pages/home/Section";

const Home = ({ isMobile }) => {
  return (
    <Section
      image={
        isMobile ? "/images/fond-etoile-mobile.png" : "/images/fond-etoile.png"
      }
      justifyContent={isMobile ? "center" : "flex-end"}
    >
      <Ombre
        border={
          isMobile
            ? "0.1px solid rgba(115, 115, 115, 0.3)"
            : "0.1px solid rgba(115, 115, 115, 0.3)"
        }
        backgroundColor={isMobile ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.3)"}
        width={isMobile ? "90vw" : "50rem"}
        marginTop={"-40px"}
      >
        <TitleWhite className="titleWhite mt-3">
          DÉVELOPPEUR WEB HTML & CSS <br /> REACT - SYMFONY
        </TitleWhite>
        <DownloadButton
          style={{ textDecoration: "none", color: "white" }}
          download="CV Vincent duguet"
          className="home_button textWhite mt-3 mb-3"
        >
          TÉLÉCHARGER CV
        </DownloadButton>
        <div className="container_logo mt-2">
          <a
            href="https://www.linkedin.com/in/vincent-duguet/"
            className="mr-2"
          >
            <img src="/images/linkedin.png" alt="icon linkedin" />
          </a>
          <a href="https://github.com/eikyuu">
            <img src="/images/github.png" alt="icon linkedin" />
          </a>
        </div>
        <a
          style={{ textDecoration: "none", color: "white" }}
          className="link_about mt-3"
          href=""
        >
          <TextWhite>A PROPOS</TextWhite>
        </a>
        {/* <img
          src="/images/astronaute.png"
          alt="icon linkedin"
          className="img_astronaute mt-2"
        /> */}
      </Ombre>
    </Section>
  );
};

export default Home;
