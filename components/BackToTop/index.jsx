import styled from "styled-components";
import Text from "../Text";
import Link from "next/link";
import { devices } from "@/styles/breakpoints";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  p {
    @media only screen and (${devices.md}) {
      display: none;
    }
  }
`;

const BackToTop = () => {
  return (
    <Link href={"#"}>
      <Wrapper>
        <Text>Back to Top</Text>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5.00006 14.9999L12.0001 7.99988L19.0001 14.9999"
            stroke="#BCBCBC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Wrapper>
    </Link>
  );
};
export default BackToTop;
