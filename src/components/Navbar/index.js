import React from "react";
import {
  NavHeader,
  Nav,
  NavH1,
  NavLink,
  NavMenu,
  Resume,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <NavHeader>
      <Nav>
        <NavH1>Victor Nestor</NavH1>
        <NavMenu>
          <NavLink to="about">About</NavLink>
          <NavLink to="experience">Experience</NavLink>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <Resume>Resume</Resume>
        </NavMenu>
      </Nav>
    </NavHeader>
  );
};

export default Navbar;
