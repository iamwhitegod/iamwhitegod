import styled from "styled-components";
import { devices } from "@/styles/breakpoints";

const GridContainer = styled.main`
  display: grid;
  grid-template-columns:
    [margin-left-start] minmax(min-content, 11.3rem)
    [margin-left-end center-start] repeat(8, 1fr)
    [center-end margin-right-start]minmax(min-content, 11.3rem)
    [margin-right-end];
  grid-gap: 2.4rem;
  max-width: 144rem;
  margin-inline: auto;
  position: relative;

  @media only screen and (${devices.lg}) {
    grid-template-columns:
      [margin-left-start] minmax(min-content, 6.4rem)
      [margin-left-end center-start] repeat(8, 1fr)
      [center-end margin-right-start]minmax(min-content, 6.4rem)
      [margin-right-end];
  }

  @media only screen and (${devices.md}) {
    grid-template-columns:
      [margin-left-start] minmax(min-content, 3.2rem)
      [margin-left-end center-start] repeat(8, 1fr)
      [center-end margin-right-start]minmax(min-content, 3.2rem)
      [margin-right-end];
    grid-gap: 1.6rem;
  }

  @media only screen and (${devices.sm}) {
    grid-template-columns:
      [margin-left-start] minmax(min-content, 1.6rem)
      [margin-left-end center-start] repeat(8, 1fr)
      [center-end margin-right-start]minmax(min-content, 1.6rem)
      [margin-right-end];
    grid-gap: 0.4rem;
  }
`;

export default GridContainer;
