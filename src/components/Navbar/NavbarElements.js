import styled from "styled-components";
import { Link as NLink } from "react-router-dom";

export const NavHeader = styled.header``;

export const Nav = styled.nav`
  background: rgba(11, 25, 40, 0.8);
  font-size: clamp(1rem, 1vw, 1.5rem);
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  top: 0;
  min-height: 10vh;
  width: 100%;
  z-index: 10;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const NavH1 = styled.h1`
  color: #a9c5e6;
  width: auto;
  margin: auto 5vh;
`;

export const NavMenu = styled.ul`
  display: flex;
  flex: 1 1 40rem;
  justify-content: space-between;
  margin-right: 5vh;
  align-items: center;
  list-style: none;
`;

export const NavLink = styled(NLink)`
  color: #a9c5e6;

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
  border-radius: 5px;
  padding: 1vh 1vw;
  color: #a9c5e6;
  background: #0b1928;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #0b1928;
    background: #a9c5e6;
  }
`;
