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
  CardWrapper,
  SVGWrapper,
  StyledSVG,
} from "./ExperienceElements";
import fruces from "../../assets/fruces.png";
import spoofy from "../../assets/spoofy.png";
import stock_market from "../../assets/stock_market_app.png";
import db_app from "../../assets/database_app.gif";
import aws_store from "../../assets/aws_store.png";
import { GoLinkExternal, GoMarkGithub } from "react-icons/go";

const Experience = () => {
  const work = [
    {
      id: 1,
      name: "Fruces Juice Bar",
      img: fruces,
      alt: "Capture of Fruces website.",
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
      url: "https://www.fruces.com/",
    },
  ];

  const projects = [
    {
      id: 1,
      name: "AWS Bookstore",
      img: aws_store,
      alt: "Capture of AWS Bookstore website.",
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
      github: "https://github.com/VNestor/aws-store",
      url: "http://awsstore-20220802224614-hostingbucket-prod.s3-website-us-east-1.amazonaws.com/",
    },
    {
      id: 2,
      name: "Spoofy Music Application",
      img: spoofy,
      alt: "Capture of Spoofy website.",
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
      github: "https://github.com/VNestor/spoofy",
      url: "https://clinquant-kringle-12f3b9.netlify.app/",
    },
    {
      id: 3,
      name: "Database Application",
      img: db_app,
      alt: "Capture of database application.",
      description:
        "Desktop CRUD application that mimics the enrollment process of a new/transferring student into a database.",
      techStack: ["Java", "SQL", "Swing", "Derby", "Netbeans"],
      github: "https://github.com/VNestor/StudentDatabase",
      url: "",
    },
    {
      id: 4,
      name: "Stock Market Web Application",
      alt: "Capture of stock market website.",
      img: stock_market,
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
      github: "https://github.com/VNestor/VNestor.github.io",
      url: "",
    },
  ];
  return (
    <>
      <ExperienceSection id="experience">
        <ExperienceH1>Experience.</ExperienceH1>
        <ExperienceH2>Professional</ExperienceH2>
        <ExperienceWrapper>
          <CardWrapper>
            {Object.keys(work).map((key, index) => {
              return (
                <ExperienceCard key={index}>
                  <img src={work[index].img} alt={work[index].alt} />
                  <CardInfoContainer>
                    <ExperienceH3>{work[index].name}</ExperienceH3>
                    <p>{work[index].description}</p>
                    <ExperienceH3>Tech Stack:</ExperienceH3>
                    <ExperienceUL>
                      {work[index].techStack.map((tech) => (
                        <li>{tech}</li>
                      ))}
                    </ExperienceUL>
                    <br />
                    <a href={work[index].url} target="_blank" rel="noreferrer">
                      <GoLinkExternal color="#0b1928" size={30} />
                    </a>
                  </CardInfoContainer>
                </ExperienceCard>
              );
            })}
          </CardWrapper>
        </ExperienceWrapper>
        <ExperienceH2>Projects</ExperienceH2>
        <ExperienceWrapper>
          <CardWrapper>
            {Object.keys(projects).map((key, index) => {
              return (
                <ExperienceCard key={index}>
                  <img src={projects[index].img} alt={projects[index].alt} />
                  <CardInfoContainer>
                    <ExperienceH3>{projects[index].name}</ExperienceH3>
                    <p>{projects[index].description}</p>
                    <ExperienceH3>Tech Stack:</ExperienceH3>
                    <ExperienceUL>
                      {projects[index].techStack.map((tech) => (
                        <li>{tech}</li>
                      ))}
                    </ExperienceUL>
                    <br />
                    <a
                      href={projects[index].github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GoMarkGithub color="#0b1928" size={30} />
                    </a>
                    {projects[index].url ? (
                      <a
                        href={projects[index].url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GoLinkExternal color="#0b1928" size={30} />
                      </a>
                    ) : (
                      <div />
                    )}
                  </CardInfoContainer>
                </ExperienceCard>
              );
            })}
          </CardWrapper>
        </ExperienceWrapper>
      </ExperienceSection>
      <SVGWrapper>
        <StyledSVG />
      </SVGWrapper>
    </>
  );
};

export default Experience;
