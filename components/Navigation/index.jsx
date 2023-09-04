import styled, { css } from "styled-components";
import { devices } from "@/styles/breakpoints";
import Link from "next/link";
import Logo from "../Logo";

const navLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

const icons = [
  { name: "linkedin-square", href: "https://linkedin.com/in/whitegodkingsley" },
  { name: "github", href: "https://github.com/iamwhitegod" },
  { name: "twitter", href: "https://twitter.com/iamwhitegod" },
  { name: "instagram-alt", href: "https://instagram.com/iamwhitegod" },
];

const flex = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const NavWrapper = styled.div`
  grid-column: 1 / 2;
  height: 100dvh;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (${devices.md}) {
    display: none;
  }
`;

const NavBar = styled.nav`
  ${flex}

  position: fixed;
  /* top: 0; */
  /* left: 2.4rem; */
`;

const NavList = styled.ul`
  ${flex}
  list-style: none;
  padding: 1.2rem;
  margin-top: 3.2rem;
`;

const NavItem = styled.li`
  writing-mode: vertical-lr;
  transform: rotate(-180deg);
  cursor: pointer;

  &:not(:first-child) {
    margin-top: 3.2rem;
  }

  a:link,
  a:visited {
    color: var(--clr-white);
  }
`;

const NavIcons = styled.div`
  ${flex}
  gap: 1.2rem;
  margin-top: 3.2rem;

  .icon {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const Navigation = () => {
  return (
    <NavWrapper>
      <NavBar>
        <Link href="/">
          <Logo />
        </Link>

        <NavList>
          {navLinks.map((navLink, index) => (
            <NavItem key={index}>
              <Link href={navLink.href}>{navLink.name}</Link>
            </NavItem>
          ))}
        </NavList>

        <NavIcons>
          {icons.map((icon, index) => (
            <Link key={index} href={{ pathname: icon.href }} target="_blank">
              <svg className="icon">
                <use xlinkHref={`/sprite.svg#bx_bxl-${icon.name}`}></use>
              </svg>
            </Link>
          ))}
        </NavIcons>
      </NavBar>
    </NavWrapper>
  );
};

export default Navigation;
