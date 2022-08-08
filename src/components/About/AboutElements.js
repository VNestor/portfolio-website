import styled from "styled-components";

export const AboutSection = styled.section`
  background: #29598f;
  margin: 0 auto;
  height: 90vh;
  overflow: hidden;
  color: #a9c5e6;
  text-align: center;
  padding: 2rem calc((95vw - 1000px) / 2);
`;

export const AboutWrapper = styled.div`
  display: block;
  text-align: left;
`;

export const AboutH1 = styled.h1`
  display: block;
  margin: 0 auto;
  border-bottom: 2px solid #a9c5e6;
  font-size: clamp(3rem, 2.5vw, 5rem);
  width: 15vw;
`;

export const AboutH2 = styled.h2``;

export const AboutH3 = styled.h3``;

export const AboutUL = styled.ul`
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
