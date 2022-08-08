import styled from "styled-components";

export const HeroSection = styled.section`
  background: #0b1928;
  background-position: center;
  background-size: cover;
  height: 100vh;
`;

export const HeroContent = styled.div`
  text-align: center;
  color: #a9c5e6;
  max-height: 100%;
  padding: 40vh calc((95vw - 500px) / 2);
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
`;
