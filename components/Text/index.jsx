import styled from "styled-components";
import { devices } from "@/styles/breakpoints";

const Text = styled.p`
  color: ${(props) => (props.color ? props.color : "var(--clr-gray-text)")};

  font-size: ${(props) => (props.size ? props.size : "1.6rem")};
  font-style: normal;
  font-weight: ${(props) => (props.weight === "light" ? 300 : 400)};
  line-height: ${(props) => (props.lineheight ? props.lineheight : "2.4rem")};
  ${(props) => props.width && `max-width: ${props.width}`};

  @media only screen and (${devices.md}) {
    font-size: 1.6rem;
  }
`;

export default Text;
