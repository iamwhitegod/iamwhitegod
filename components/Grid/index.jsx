import styled from "styled-components";

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
`;

export default GridContainer;
