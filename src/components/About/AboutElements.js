import styled from "styled-components";
import { ReactComponent as Transition } from "../../assets/about_waves.svg";

export const AboutSection = styled.section`
  background: #29598f;
  margin: 0 auto;
  overflow: hidden;
  color: #a9c5e6;
  text-align: center;
  padding: 10vh calc((95vw - 1000px) / 2);

  @media screen and (max-width: 850px) {
    padding: 12vh calc((95vw - 1000px) / 2);
  }
`;

export const AboutH1 = styled.h1`
  display: block;
  margin: 0 auto;
  font-size: clamp(3rem, 2.5vw, 5rem);
`;

export const AboutWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 2rem 2rem;
`;

export const AboutH2 = styled.h2`
  margin: 1rem 1rem;
  font-size: clamp(2rem, 2.5vw, 3rem);
`;

export const AboutH3 = styled.h3`
  margin: 1rem 2rem;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
`;

export const AboutUL = styled.ul`
  text-align: left;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justifying-content: flex-start;
  font-size: clamp(10px, 2.5vw, 15px);
  margin: 0 3rem;

  li {
    margin: 5px;
    background-color: #0b1928;
    padding: 0.5vh 0.5vw;
  }
`;

export const SVGWrapper = styled.div`
  svg {
    display: block;
    aspect-ratio: 1000/200;
    height: 100%;
    width: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export const StyledSVG = styled(Transition)``;
