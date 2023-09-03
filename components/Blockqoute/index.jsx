import styled from "styled-components";
import { devices } from "@/styles/breakpoints";

const Blockquote = styled.blockquote`
  max-width: 85rem;
  padding: 3.2rem 0.8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  flex-grow: 1;

  border-radius: 0.4rem;
  border: 1.3px solid var(--clr-gray-light);
  background: var(--clr-gray-dark);

  p {
    max-width: 69.4rem;
    margin-inline: auto;

    @media only screen and (${devices.sm}) {
      font-size: 1.6rem;
      line-height: 2.5rem;
    }
  }

  @media only screen and (${devices.md}) {
    padding: 3.2rem 1.6rem;
  }
`;

export default Blockquote;
