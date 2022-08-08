import styled from "styled-components";

export const ExperienceSection = styled.section`
  background: #0b1928;
  color: #a9c5e6;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  padding: 2rem calc((95vw - 1000px) / 2);
`;

export const ExperienceWrapper = styled.div`
  display: block;
  text-align: left;
`;

export const ExperienceH1 = styled.h1`
  display: block;
  margin: 0 auto;
  border-bottom: 2px solid #a9c5e6;
  font-size: clamp(3rem, 2.5vw, 5rem);
  width: 18rem;
`;

export const ExperienceH2 = styled.h2``;

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
`;

export const ExperienceCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2);
  background: #a9c5e6;
  transition: 0.3s;
  width: 30vw;

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
`;

export const CardInfoContainer = styled.div`
  padding: 1rem;
`;
