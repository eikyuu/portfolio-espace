import styled from "styled-components";

const Ombre = styled.div`
  display: flex;
  flex-direction: column;
  height: 95vh;
  width: 90vw;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.3);
  border: 0.1px solid white;
  align-items: center;
  overflow: hidden;

  .titleWhite {
    text-align: center;
    line-height: 45px;
  }

  .home_button {
    border-radius: 4px;
    border: 5px solid #ffffff;
    padding: 12px 45px;
    font-weight: 600;
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
    height: 16rem;
  }
`;

export default Ombre;
