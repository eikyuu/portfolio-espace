import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`;

export default Section;
