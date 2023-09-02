import styled, { css } from "styled-components";

const Button = styled.button`
  font: inherit;

  font-size: 16px;

  font-weight: 400;
  line-height: 24px;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 4.5rem;
  border-radius: 2px;
  color: var(--clr-white);
  cursor: pointer;
  transition: all 0.3s;

  ${(props) =>
    props.variant === "primary" &&
    css`
      border: 1px solid var(--clr-gray-light);
      background: var(--clr-gray);
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      border: 1px solid var(--clr-gray-light);
      background: var(--clr-gray-light);
    `}

    &:hover {
    transform: scale(0.9);
  }
`;

export default Button;
