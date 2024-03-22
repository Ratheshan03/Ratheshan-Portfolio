// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 *
 * @returns {jsx} <Technical />
 */
export default function Technical() {
  return (
    <Section classProp={`${about.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Technical"
          preTitle="Hardskills"
          subTitle="As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages."
        />
        <section className={`${about.content} ${about.container}`}>
          <div className={about.copy}>
            <BadgesBlock
              title="Frontend Web and Mobile"
              copy="My frontend digital assets"
              list={fronttech}
              block="software"
              fullContainer="fullContainer"
              icon="grid-2-plus"
              containerClass={about.container}
              headerIcon={about.icon}
            />
            <BadgesBlock
              title="Backend and Database"
              copy="My Backend and databse digital assets"
              list={backtech}
              block="tech"
              fullContainer="fullContainer"
              icon="laptop-code"
              containerClass={about.container}
              headerIcon={about.icon}
            />
            <BadgesBlock
              title="Designing, Development, and Managing Tools"
              copy="This is just some of the software I have used over that time."
              list={software}
              block="software"
              fullContainer="fullContainer"
              icon="code"
              containerClass={about.container}
              headerIcon={about.icon}
            />
            <BadgesBlock
              title="Other Tools and Technologies"
              copy="This is just some of the other tools that I have used over that time."
              list={OtherTools}
              block="software"
              fullContainer="fullContainer"
              icon="hammer"
              containerClass={about.container}
              headerIcon={about.icon}
            />
          </div>
          <div className={`${about.image} ${about.technicalSvg}`}>
            <Image
              src="/img/dataism-24.svg"
              width={477}
              height={1111}
              alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b"
            />
          </div>
        </section>
      </Container>
      {/* <SectionGridBg gridSize={4}/> */}
    </Section>
  );
}

const fronttech = [
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "react", name: "React Native", type: "devicon" },
  { key: "kotlin", name: "Kotlin", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "tailwindcss", name: "Tailwind", type: "devicon" },
  { key: "bootstrap", name: "Bootstrap", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "flutter", name: "Flutter", type: "devicon" },
];

const backtech = [
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "flask", name: "Flask", type: "devicon" },
  { key: "dotnetcore", name: ".Net", type: "devicon" },
  { key: "jquery", name: "jQuery", type: "devicon" },
  { key: "laravel", name: "Laravel", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "firestore", name: "Firestore", type: "devicon" },
  { key: "azure", name: "AzureDB", type: "devicon" },
  { key: "influxdb", name: "InfluxDB", type: "devicon" },
  { key: "sqlite", name: "SQLite", type: "devicon" },
];

const software = [
  { key: "figma", name: "Figma", type: "devicon" },
  { key: "vscode", name: "VSCode", type: "devicon" },
  { key: "androidstudio", name: "Android Studio", type: "devicon" },
  { key: "intellij", name: "IntelliJ Idea", type: "devicon" },
  { key: "mailbox", name: "Postman", type: "fas" },
  { key: "docker", name: "Docker", type: "devicon" },
  { key: "jira", name: "Jira", type: "devicon" },
  { key: "github", name: "Github", type: "devicon" },
  { key: "computer-mouse", name: "Click Up", type: "fas" },
  { key: "canva", name: "Canva", type: "devicon" },
  { key: "grafana", name: "Grafana", type: "devicon" },
];

const OtherTools = [
  { key: "graphql", name: "GraphQL", type: "devicon" },
  { key: "jenkins", name: "Jenkins", type: "devicon" },
  { key: "pytorch", name: "PyTorch", type: "devicon" },
  { key: "googlecloud", name: "GCP", type: "devicon" },
  { key: "gitlab", name: "GitLab", type: "devicon" },
  { key: "express", name: "Express", type: "devicon" },
  { key: "fastapi", name: "FastAPI", type: "devicon" },
  { key: "sanity", name: "Sanity", type: "devicon" },
];
