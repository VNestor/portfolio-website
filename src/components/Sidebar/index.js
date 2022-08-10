import React from "react";
import PDF from "../../assets/Victor Nestor Website Resume.pdf";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarMenu,
  SidebarRouterLink,
  LinkTo,
  Resume,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarRouterLink to="about" onClick={toggle} smooth={true}>
          About
        </SidebarRouterLink>
        <SidebarRouterLink to="experience" onClick={toggle} smooth={true}>
          Experience
        </SidebarRouterLink>
        <SidebarRouterLink to="contact" onClick={toggle} smooth={true}>
          Contact
        </SidebarRouterLink>
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
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
