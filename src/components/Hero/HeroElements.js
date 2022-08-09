import styled from "styled-components";
import { ReactComponent as Transition } from "../../assets/hero_waves.svg";

export const HeroSection = styled.section`
  background: #0b1928;
  margin: 0 auto;
  height: 80vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  text-align: center;
  color: #a9c5e6;
  max-height: 100%;
  padding: 35vh calc((95vw - 500px) / 2);
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  letter-spacing: 1px;
  font-weight: bold;
`;

export const HeroH2 = styled.h2`
  color: #518bcd;
  font-size: clamp(1.5rem, 10vw, 3rem);
  letter-spacing: 1px;
  font-weight: bold;
`;

export const HeroP = styled.p`
  color: white;
  margin: 1rem auto;
`;

export const Social = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem auto;
  width: 10vw;

  a {
    color: inherit;
    text-decoration: none;
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
