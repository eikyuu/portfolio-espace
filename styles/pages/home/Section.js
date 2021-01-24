import styled from "styled-components";
import breakpoints from "../../helpers/breakpoints";

const Section = styled.section`
  height: 100vh;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;
  background-position: center;

  @media (min-width: ${breakpoints.large}) {
    justify-content: flex-end;
  }
`;

export default Section;
