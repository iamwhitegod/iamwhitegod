import styled from "styled-components";
import { devices } from "@/styles/breakpoints";

const Header = styled.header`
  grid-column: 3 / 9;
  max-width: 85rem;
  padding: 2.4rem 4.8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.8rem;

  border-radius: 0.4rem;
  border: 1.3px solid var(--clr-gray-light);

  @media only screen and (${devices.md}) {
    grid-column: center-start / center-end;
  }

  @media only screen and (${devices.sm}) {
    padding: 1.6rem;
  }
`;

export default Header;
