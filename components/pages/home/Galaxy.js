import React from "react";
import Ombre from "../../../styles/pages/home/Ombre";
import Section from "../../../styles/pages/home/Section";

const Galaxy = (props) => {
  return (
    <Section className="test" image="/images/fond-etoile-planete-mobile.png">
      <Ombre>
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
