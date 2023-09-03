import styled, { css } from "styled-components";
import { devices } from "@/styles/breakpoints";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 12rem;
      font-weight: 700;
      line-height: 12.8rem; /* 106.667% */
      letter-spacing: -1.2px;

      @media only screen and ${devices.lg} {
        font-size: 11rem;
        line-height: normal;
      }

      @media only screen and ${devices.md} {
        font-size: 9.6rem;
      }

      @media only screen and ${devices.sm} {
        font-size: 6rem;
        line-height: 7.2rem;
      }

      span {
        display: block;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 4.8rem;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.48px;

      @media only screen and ${devices.md} {
        font-size: 4rem;
        line-height: 4.8rem;
      }
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 600;
      line-height: 3.2rem /* 133.333% */;

      @media only screen and ${devices.sm} {
        font-size: 1.8rem;
        line-height: 2.8rem;
      }
    `}

  color: var(--clr-white);

  &.heading--main {
    font-size: 12rem;
    font-weight: 700;
    line-height: 12.8rem; /* 106.667% */
    letter-spacing: -1.2px;
  }
`;

export default Heading;
