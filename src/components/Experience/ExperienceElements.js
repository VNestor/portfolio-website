import styled from "styled-components";
import { ReactComponent as Transition } from "../../assets/experience_waves.svg";

export const ExperienceSection = styled.section`
  background: #0b1928;
  color: #a9c5e6;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  padding: 10vh calc((95vw - 2000px) / 2);

  @media screen and (max-width: 850px) {
    display: block;
    margin: auto;
    justify-items: start;
    justify-content: center;
  }
`;

export const ExperienceWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 2vh;

  @media screen and (max-width: 850px) {
    text-align: center;
    display: flex;
    margin: auto;
    flex-direction: column;
    width: 50vw;
  }
`;

export const ExperienceH1 = styled.h1`
  display: block;
  margin: 0 auto;
  font-size: clamp(3rem, 2.5vw, 5rem);
`;

export const ExperienceH2 = styled.h2`
  text-align: left;
  margin: 5vh;
  font-size: clamp(2rem, 2.5vw, 3rem);
`;

export const ExperienceH3 = styled.h3`
  color: #0b1928;
`;

export const ExperienceUL = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justifying-content: flex-start;
  font-size: clamp(10px, 2.5vw, 15px);
  margin: auto;

  li {
    margin: 5px;
    background-color: #0b1928;
    padding: 0.5vh 0.5vw;
  }

  @media screen and (max-width: 850px) {
    display: block;
    justify-items: start;
    justify-content: center;
  }
`;

export const ExperienceCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2);
  background: #a9c5e6;
  transition: 0.3s;
  width: 25vw;
  margin: 1.5rem 1rem;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(255, 255, 255, 0.2);
  }

  p {
    color: #0b1928;
    line-height: 1.5rem;
  }

  img {
    width: 100%;
  }

  @media screen and (max-width: 850px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-items: start;
    justify-content: center;
    width: 100%;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justifying-content: flex-start;

  @media screen and (max-width: 850px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-items: start;
    justify-content: center;
    width: 100%;
  }
`;

export const CardInfoContainer = styled.div`
  padding: 1.5rem;

  a {
    padding-right: 0.5rem;
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
