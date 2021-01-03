import React from "react";
import Ombre from "../../../styles/pages/home/Ombre";
import Section from "../../../styles/pages/home/Section";
import TitleWhite from "../../../styles/global/TitleWhite";

const Galaxy = ({ isMobile }) => {
  console.log(isMobile);
  return (
    <Section image="/images/fond-etoile-planete-mobile.png">
      <Ombre
        border={isMobile ? "0.1px solid rgba(115, 115, 115, 0.3)" : "none"}
        backgroundColor={isMobile ? "rgba(0, 0, 0, 0.3)" : "none"}
        marginTop={"10px"}
      >
        <TitleWhite className="mt-2">Galaxy Isyade</TitleWhite>
        <div className="container_multi">
          <img
            src="/images/multi-verse.png"
            alt="multi_verse"
            className="multi_verse"
          />
          <span className="link_planete"></span>
        </div>
      </Ombre>
    </Section>
  );
};

export default Galaxy;
