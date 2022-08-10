import styled from "styled-components";
import { Link as SLink } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: rgba(11, 25, 40, 0.9);
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};

  @media screen and (max-width: 850px) {
    width: 100%;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #a9c5e6; ;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-coloumns: 1fr;
  grid-template-rows: repeat(5, 75px);
  text-align: center;
  @media screen and (max-width) : {
    grid-template-rows: repeat(5, 55px);
  }
`;

export const SidebarRouterLink = styled(SLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #a9c5e6;
  cursor: pointer;
  &:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarRoute = styled.button`
  background: #e1651f;
  white-space: nowrap;
  border-radius: 48px;
  padding: 1.5rem 2rem;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  a {
    color: inherit;
    text-decoration: none;
  }
  &:hover {
    transition: 0.2s ease-in-out;
    background: #ffc500;
    color: #000;
  }
`;

export const LinkTo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #a9c5e6;
  cursor: pointer;

  &:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Resume = styled.button`
  display: relative;
  justify-content: center;
  white-space: nowrap;
  border: 1px solid #a9c5e6;
  border-radius: 2px;
  margin-top: 1rem;
  padding: 1.5rem 2rem;
  color: #a9c5e6;
  background: #0b1928;
  line-height: 1rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #0b1928;
    background: #a9c5e6;
  }
`;
