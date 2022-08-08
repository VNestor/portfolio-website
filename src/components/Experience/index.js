import React from "react";
import {
  ExperienceSection,
  ExperienceH1,
  ExperienceH2,
  ExperienceH3,
  ExperienceUL,
  ExperienceWrapper,
  ExperienceCard,
  CardInfoContainer,
} from "./ExperienceElements";
import fruces from "../../assets/fruces.png";
const Experience = () => {
  const profesionalWork = {
    id: 1,
    name: "Fruces Juice Bar",
    description:
      "Developed company website; increasing online presence, site traffic, and reach to other platforms.",
    techStack: [
      "React",
      "JavaScript",
      "Node.js",
      "Styled Components",
      "Netlify",
      "Google Places API",
      "React Icons",
    ],
  };

  const projects = [
    {
      id: 1,
      name: "AWS Bookstore",
      description:
        "Full-stack web store that allows users to view, purchase, and add their favorite books to the catalog.",
      techStack: [
        "React",
        "JavaScript",
        "Node.js",
        "Styled Components",
        "AWS",
        "Amplify",
        "AppSync",
        "Lambda",
        "Cognito",
        "DynamoDB",
        "S3",
        "Stripe API",
        "React Icons",
      ],
    },
    {
      id: 2,
      name: "Spoofy Music Application",
      description:
        "Spotify clone that allows a user to find, listen, like, and sing along to a song from their favorite artists.",
      techStack: [
        "React",
        "JavaScript",
        "Node.js",
        "Express.js",
        "Bootstrap",
        "Styled Components",
        "Netlify",
        "Heroku",
        "CORS",
        "Spotify API",
      ],
    },
    {
      id: 3,
      name: "Database Application",
      description:
        "Desktop CRUD application that mimics the enrollment process of a new/transferring student into a database.",
      techStack: ["Java", "SQL", "Swing", "Derby", "Netbeans"],
    },
    {
      id: 4,
      name: "Stock Market Web Application",
      description:
        "Stock market web application to view quick market stats, financial news, and track any stock of your choice.",
      techStack: [
        "React",
        "JavaScipt",
        "Node.js",
        "Bootstrap",
        "Stock News API",
        "IEX Cloud API",
      ],
    },
  ];
  return (
    <ExperienceSection>
      <ExperienceH1>Experience</ExperienceH1>
      <ExperienceWrapper>
        <ExperienceH2>Professional</ExperienceH2>
        <ExperienceCard>
          <img src={fruces} alt="Capture of Fruces Website." />
          <CardInfoContainer>
            <ExperienceH3>Fruces Juice Bar</ExperienceH3>
            <p>
              Developed company website; increasing online presence, site
              traffic, and reach to other platforms.
            </p>
            <ExperienceH3>Tech Stack:</ExperienceH3>
            <ExperienceUL>
              <li>React</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>Styled Components</li>
              <li>Netlify</li>
              <li>Google Places API</li>
              <li>React Icons</li>
            </ExperienceUL>
          </CardInfoContainer>
        </ExperienceCard>
        <ExperienceH2>Projects</ExperienceH2>
        {Object.keys(projects).map((key, index) => {
          return (
            <ExperienceCard key={index}>
              <CardInfoContainer>
                <ExperienceH3>{projects[index].name}</ExperienceH3>
                <p>{projects[index].description}</p>
                <ExperienceH3>Tech Stack:</ExperienceH3>
                <ExperienceUL>
                  {projects[index].techStack.map((tech) => (
                    <li>{tech}</li>
                  ))}
                </ExperienceUL>
              </CardInfoContainer>
            </ExperienceCard>
          );
        })}
      </ExperienceWrapper>
    </ExperienceSection>
  );
};

export default Experience;
