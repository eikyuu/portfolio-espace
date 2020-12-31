import styled from "styled-components";
import breakpoints from "../../helpers/breakpoints";

const Ombre = styled.div`
  display: flex;
  flex-direction: column;
  height: 95vh;
  width: 90vw;
  margin: 0 auto;
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  align-items: center;
  overflow: hidden;

  .titleWhite {
    text-align: center;
    line-height: 45px;
  }

  .container_logo {
    display: flex;
    img {
      height: 60px;
      margin-bottom: 4px;
    }
  }

  .link_about {
    text-decoration: underline !important;
    font-weight: 600;
  }

  .img_astronaute {
    height: 100%;
    width: 100%;
  }

  .container_multi {
    display: flex;
    align-items: center;
    height: 100%;
    .multi_verse {
      height: 37rem;
    }
  }

  @media (min-width: ${breakpoints.small}) {
    .titleWhite {
      text-align: center;
      line-height: 45px;
    }
  }
  @media (min-width: ${breakpoints.large}) {
    .img_astronaute {
      height: 37rem;
      width: 100%;
    }
  }
`;

export default Ombre;
