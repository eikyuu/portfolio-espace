import styled from "styled-components";

const OmbreHome = styled.div`
  display: flex;
  flex-direction: column;
  height: 95vh;
  width: 90vw;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.3);
  border: 0.1px solid white;
  align-items: center;

  .home_button {
    border-radius: 4px;
    border: 1px solid #ffffff;
    padding: 12px 50px;
    font-weight: 600;
  }

  h1 {
    text-align: center;
    line-height: 45px;
  }

  .container_logo {
    display: flex;
  }

  img {
    height: 45px;
    margin-bottom: 4px;
  }
`;

export default OmbreHome;
