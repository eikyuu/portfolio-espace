import styled from "styled-components";
import breakpoints from "../helpers/breakpoints";

const TitleWhite = styled.h1`
  color: white;
  font-size: 25px;
  font-family: bell mt;

  @media (min-width: ${breakpoints.small}) {
    font-size: 30px;
  }
`;

export default TitleWhite;
