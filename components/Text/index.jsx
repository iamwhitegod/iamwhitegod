import styled from "styled-components";

const Text = styled.p`
  color: ${(props) => (props.color ? props.color : "var(--clr-gray-text)")};

  font-size: ${(props) => (props.size ? props.size : "1.6rem")};
  font-style: normal;
  font-weight: ${(props) => (props.weight === "light" ? 300 : 400)};
  line-height: ${(props) =>
    props.lineHeight ? props.lineHeight : "2.4rem"}; /* 150% */
  ${(props) => props.width && `max-width: ${props.width}`}
`;

export default Text;
