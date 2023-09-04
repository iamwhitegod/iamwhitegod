import { devices } from "@/styles/breakpoints";
import styled from "styled-components";

const Footer = styled.footer`
  grid-column: 3 / 9;
  padding: 5vh 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (${devices.md}) {
    grid-column: 2 / -2;
  }

  .copyright {
    @media only screen and (${devices.md}) {
      width: 80%;
    }
  }
`;

export default Footer;
