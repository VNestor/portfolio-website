import React from "react";
import {
  NavHeader,
  Nav,
  NavH1,
  ScrollLink,
  NavMenu,
  Resume,
  LinkTo,
  Bars,
} from "./NavbarElements";
import PDF from "../../assets/Victor Nestor Website Resume.pdf";

const Navbar = ({ toggle }) => {
  return (
    <NavHeader>
      <Nav>
        <NavH1>Victor Nestor</NavH1>
        <NavMenu>
          <ScrollLink to="about" smooth={true}>
            About
          </ScrollLink>
          <ScrollLink to="experience" smooth={true}>
            Experience
          </ScrollLink>
          <ScrollLink to="contact" smooth={true}>
            Contact
          </ScrollLink>
          <LinkTo>
            <a
              href="https://vnestor.github.io/personal-blog/"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </LinkTo>
          <a href={PDF} target="_blank" rel="noreferrer">
            <Resume>Resume</Resume>
          </a>
        </NavMenu>

        <Bars onClick={toggle} />
      </Nav>
    </NavHeader>
  );
};

export default Navbar;
