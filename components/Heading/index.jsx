import styled from "styled-components";
import css from "styled-jsx/css";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 12rem;
      font-weight: 700;
      line-height: 12.8rem; /* 106.667% */
      letter-spacing: -1.2px;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 4.8rem;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.48px;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 600;
      line-height: 3.2rem /* 133.333% */;
    `}

  color: var(--clr-white);
`;

export default Heading;
