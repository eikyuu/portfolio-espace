import React from "react";
import Ombre from "../../../styles/pages/home/Ombre";
import Section from "../../../styles/pages/home/Section";
import TitleWhite from "../../../styles/global/TitleWhite";

const Galaxy = ({ isMobile }) => {
  console.log(isMobile);
  return (
    <Section
      image={
        isMobile ? "/images/fond-etoile-mobile.png" : "/images/fond-galaxy.png"
      }
    >
      <Ombre
        border={isMobile ? "0.1px solid rgba(115, 115, 115, 0.3)" : "none"}
        backgroundColor={isMobile ? "rgba(0, 0, 0, 0.3)" : "none"}
        marginTop={"10px"}
      >
        <TitleWhite className="mt-5">Galaxy Isyade</TitleWhite>
        <div className="container_multi">
          <span className="link_planete"></span>
        </div>
      </Ombre>
    </Section>
  );
};

export default Galaxy;
