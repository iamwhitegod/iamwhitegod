import styled, { css } from "styled-components";
import { devices } from "@/styles/breakpoints";

const card = css`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`;

const truncate = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;
`;

const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
  object-position: center;

  border-radius: 0.4rem;
  border: 1.3px solid var(--clr-gray-light);
`;

const Card = styled.div`
  ${card}
  max-width: 41.2rem;
  gap: ${(props) => (props.gap ? props.gap : "2.4rem")};
  cursor: pointer;

  @media only screen and (${devices.md}) {
    gap: 0.8rem;
  }

  .card {
    &__content {
      ${card}
      gap: 1.2rem;
      align-self: stretch;

      @media only screen and (${devices.md}) {
        gap: 0.6rem;
      }
    }

    &__details {
      ${card}
      gap: 0.4rem;

      @media only screen and (${devices.md}) {
        gap: 0;
      }
    }

    &__title {
      ${truncate}
      -webkit-line-clamp: 2;
    }

    &__published {
      display: flex;
      align-items: flex-start;
      gap: 1.6rem;

      @media only screen and (${devices.md}) {
        gap: 0.8rem;
      }

      span {
        @media only screen and (${devices.md}) {
          font-size: 1.4rem !important;
        }
      }
    }

    &__summary {
      ${truncate}
      -webkit-line-clamp: 5;
    }
  }
`;

export { Card, Image };
