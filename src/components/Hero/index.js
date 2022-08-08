import React from "react";
import {
  HeroSection,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
} from "./HeroElements";

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroH1>Hi, I&apos;m Victor</HeroH1>
        <HeroH2>Software Engineer</HeroH2>
        <HeroP>
          I am a full-stack software engineer in NYC. I build static sites using
          React, desktop applications with Java, and fun applications using
          Python!
        </HeroP>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
