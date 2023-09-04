import { devices } from "@/styles/breakpoints";
import styled from "styled-components";

const Section = styled.section`
  grid-column: 3 / 9;
  min-height: 100dvh;
  padding: 5.9vh 0 7vh;

  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: transform 0.5s ease;

  @media only screen and (${devices.md}) {
    grid-column: 2 / -2;

    min-height: 50dvh;
    padding: 0;
  }
`;

export default Section;
