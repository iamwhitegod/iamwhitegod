import styled from "styled-components";
import { devices } from "@/styles/breakpoints";

const FlexContainer = styled.div`
  grid-column: center-start / center-end;
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.align ? props.align : "flex-start")};
  ${(props) => props.direction && `flex-direction: ${props.direction}`};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
  position: relative;

  & > *:not(:last-child) {
    margin-bottom: 3.2rem;
  }

  & > .logo--inverted {
    margin-bottom: 0 !important;
  }

  & > *:not(:last-child) {
    margin-right: 3.2rem;

    @media only screen and (${devices.md}) {
      margin-right: 0;
    }
  }
`;

export default FlexContainer;
