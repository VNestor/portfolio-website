import styled from "styled-components";
import { Link as NLink } from "react-router-dom";
import { Link as SLink } from "react-scroll";
import { FaBars } from "react-icons/fa";

export const NavHeader = styled.header``;

export const Nav = styled.nav`
  background: rgba(11, 25, 40, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  min-height: 10vh;
  width: 100%;
  z-index: 10;
`;

export const NavH1 = styled.h1`
  color: #a9c5e6;
  width: auto;
  margin: auto 5vh;
`;

export const NavMenu = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  right: 1rem;
  margin: auto;
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #a9c5e6;

  @media screen and (max-width: 850px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 70%);
    font-size: 3rem;
    cursor: pointer;
  }
`;

export const ScrollLink = styled(SLink)`
  color: #a9c5e6;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  cursor: pointer;
  height: 100%;

  &.active {
    color: #fae009;
    text-decoration: none;
  }

  a {
    color: inherit;
  }
`;

export const NavLink = styled(NLink)`
  color: #a9c5e6;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  cursor: pointer;
  height: 100%;

  &.active {
    color: #fae009;
    text-decoration: none;
  }

  a {
    color: inherit;
  }
`;

export const Resume = styled.button`
  border: 1px solid #a9c5e6;
  border-radius: 2px;
  padding: 1vh 1vw;
  color: #a9c5e6;
  background: #0b1928;
  margin-right: 5vh;
  line-height: 0;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #0b1928;
    background: #a9c5e6;
  }
`;

export const LinkTo = styled.div`
  color: #a9c5e6;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  cursor: pointer;
  height: 100%;

  &.active {
    color: #fae009;
    text-decoration: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
