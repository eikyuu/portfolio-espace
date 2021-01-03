import styled from "styled-components";
import breakpoints from "../../helpers/breakpoints";

const DownloadButton = styled.a`
  border-radius: 4px;
  border: 5px solid #ffffff;
  padding: 12px 45px;
  font-weight: 600;
  @media (min-width: ${breakpoints.small}) {
    font-size: 25px;
  }
`;

export default DownloadButton;
