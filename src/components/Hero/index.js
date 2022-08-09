import React from "react";
import {
  HeroSection,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
  Social,
  SVGWrapper,
  StyledSVG,
} from "./HeroElements";
import Typewriter from "typewriter-effect";
import { GrLinkedin, GrGithub } from "react-icons/gr";

const Hero = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroH1>
            <Typewriter
              onInit={(Typewriter) => {
                Typewriter.typeString("Hi, I'm Victor!").start();
              }}
            />
          </HeroH1>

          <HeroH2>Software Engineer</HeroH2>

          <HeroP>
            I am a full-stack software engineer in NYC. I build static sites
            using React, desktop applications with Java, and fun applications
            using Python!
          </HeroP>
          <Social>
            <a
              href="https://www.linkedin.com/in/vnestor/"
              target="_blank"
              rel="noreferrer"
            >
              <GrLinkedin size={45} />
            </a>
            <a
              href="https://github.com/VNestor"
              target="_blank"
              rel="noreferrer"
            >
              <GrGithub size={45} />
            </a>
          </Social>
        </HeroContent>
      </HeroSection>
      <SVGWrapper>
        <StyledSVG />
      </SVGWrapper>
    </>
  );
};

export default Hero;
