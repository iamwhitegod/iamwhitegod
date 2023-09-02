import styled from "styled-components";

const Text = styled.p`
  color: ${(props) => (props.color ? props.color : "var(--clr-white)")};

  font-size: ${(props) => (props.size ? props.size : "1.6rem")};
  font-style: normal;
  font-weight: ${(props) => (props.weight === "light" ? 300 : 400)};
  line-height: ${(props) => (props.size ? props.size : "2.4rem")}; /* 150% */
`;

export default Text;
