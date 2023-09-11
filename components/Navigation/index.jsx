import styled, { css } from "styled-components";
import { devices } from "@/styles/breakpoints";
import Link from "next/link";
import Logo from "../Logo";
import { useState } from "react";

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
    grid-column: 2 / -2;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
  }
`;

const NavBar = styled.nav`
  ${flex}
  position: fixed;

  @media only screen and (${devices.md}) {
    position: fixed;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 2.4rem;
  }

  .nav__logo {
    @media only screen and (${devices.md}) {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
      width: 4rem;
    }
  }

  .nav__menu {
    display: none;

    @media only screen and (${devices.md}) {
      display: block;
      grid-row: 1 / 2;
      justify-self: end;

      width: 2.4rem;
      height: 2.4rem;
    }
  }

  .nav__close {
    top: 0.8rem;
    right: 1.6rem;
    width: 2.4rem;
    height: 2.4rem;
    position: relative;
    z-index: 3;
  }

  .nav__open {
    display: block;
  }
`;

const NavInner = styled.div`
  @media only screen and (${devices.md}) {
    display: none;
    position: fixed;
    top: -1px;
    width: 100%;
    margin-left: -1px;
    background-color: var(--clr-gray-dark);
    padding: 4.8rem;
  }
`;

const NavList = styled.ul`
  ${flex}
  list-style: none;
  padding: 1.2rem;
  margin-top: 3.2rem;

  @media only screen and (${devices.md}) {
    margin-top: 0;
  }
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

  @media only screen and (${devices.md}) {
    writing-mode: initial;
    transform: rotate(0deg);
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

  @media only screen and (${devices.md}) {
    flex-direction: row;
    width: fit-content;
    margin-inline: auto;
  }
`;

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <NavWrapper>
      <NavBar>
        <Link href="/" className="nav__logo">
          <Logo />
        </Link>

        <NavInner className={`${openMenu ? "nav__open" : ""}`}>
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
        </NavInner>

        {!openMenu && (
          <img
            src="/ion_menu.svg"
            alt="mobile menu icon"
            className="nav__menu"
            onClick={() => setOpenMenu(true)}
          />
        )}

        {openMenu && (
          <img
            src="/ion_close.svg"
            alt="mobile close icon"
            className="nav__close"
            onClick={() => setOpenMenu(false)}
          />
        )}
      </NavBar>
    </NavWrapper>
  );
};

export default Navigation;
