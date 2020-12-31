import styled from "styled-components";
import breakpoints from "../helpers/breakpoints";

const TextWhite = styled.p`
  color: white;
  font-size: 20px;
  font-family: bell mt;

  @media (min-width: ${breakpoints.small}) {
    font-size: 25px;
  }
`;

export default TextWhite;
