import styled from "styled-components";

const FlexContainer = styled.div`
  grid-column: center-start / center-end;
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.align ? props.align : "flex-start")};
  ${(props) => props.direction && `flex-direction: ${props.direction}`};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};

  & > *:not(:last-child) {
    margin-bottom: 3.2rem;
  }

  & > *:not(:last-child) {
    margin-right: 3.2rem;
  }
`;

export default FlexContainer;
