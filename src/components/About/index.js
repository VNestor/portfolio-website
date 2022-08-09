import React from "react";
import {
  AboutSection,
  AboutH1,
  AboutH2,
  AboutH3,
  AboutUL,
  AboutWrapper,
  SVGWrapper,
  StyledSVG,
} from "./AboutElements";
const About = () => {
  return (
    <>
      <AboutSection>
        <AboutH1>About.</AboutH1>
        <AboutWrapper>
          <AboutH2>Education</AboutH2>
          <AboutH3>Brooklyn College</AboutH3>
          <AboutUL>
            <li>Bachelors of Science - Computer Science</li>
          </AboutUL>
          <AboutH3>Relevant Coursework</AboutH3>
          <AboutUL>
            <li>Introduction to Programming Using Java</li>
            <li>Introduction to Modern Programming Techniques</li>
            <li>Data Structures</li>
            <li>Object-Oriented Programming</li>
            <li>Elementary Probability and Statistics</li>
            <li>Computers and Ethics</li>
            <li>Operating Systems</li>
            <li>Programming Paradigms in C++</li>
            <li>Design and Implementation of Large-Scale Web Applications</li>
            <li>Analysis of Algorithms</li>
          </AboutUL>
        </AboutWrapper>
        <AboutWrapper>
          <AboutH2>Skills</AboutH2>
          <AboutH3>Proficient</AboutH3>
          <AboutUL>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>npm</li>
            <li>HTML/CSS</li>
            <li>Python</li>
            <li>Java</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>SQL</li>
            <li>Bootstrap</li>
            <li>Styled Components</li>
          </AboutUL>
          <AboutH3>Exposure</AboutH3>
          <AboutUL>
            <li>TypeScript</li>
            <li>MySQL</li>
            <li>Django</li>
            <li>Express.js</li>
            <li>C++</li>
            <li>Netlify</li>
            <li>Heroku</li>
            <li>AWS</li>
            <li>Figma</li>
            <li>Swing</li>
            <li>Apache Derby</li>
          </AboutUL>
        </AboutWrapper>
      </AboutSection>
      <SVGWrapper>
        <StyledSVG />
      </SVGWrapper>
    </>
  );
};

export default About;
