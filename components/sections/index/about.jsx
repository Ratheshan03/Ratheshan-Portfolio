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
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="About Me"
          preTitle="Synopsis"
          subTitle="With a diverse skill set that includes UI/UX design, full stack development, DevOps engineering, Data science and Cloud computing, I am a well-rounded digital professional."
        />
        <section className={about.content}>
          <div className={about.image}>
            <img src="/img/Rathe-sub.jpeg" alt="Rathe-main-photo" />
            {/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="Education and Qualifications"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fat", "graduation-cap"]}
              copy="● BSc. (Hons) Computer Science  [ Sep 2020 -  May 2024 ]"
              description="IIT Campus, Sri Lanka affiliated with the University of Westminster, London"
              copy2="● Primary and Secondary Education  [ Jan 2006 - Aug 2019 ] "
              description2="St.Anthony’s College, Kandy, Sri Lanka"
            />
            <BadgesBlock
              title="Key Softskills for Success"
              containerClass={about.container}
              list={methods}
              fullContainer="fullContainer"
              block="methods"
              icon="ear-listen"
              copy="In addition to my technical expertise, I also have strong leadership, time management, and multitasking skills honed through various experiences and chellenges. As a final year undergraduate transitioning into the industry, I am eager to apply these skills to real-world projects. Outside of work, I enjoy staying active through sports such as cricket and rugby. I am confident in my ability to bring passion and value to any project."
              //invertedColor="invertedColor"
              headerIcon={`${about.icon}`}
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}

const methods = [
  { key: "sun", name: "Leadership", type: "fad" },
  { key: "qrcode", name: "Multi Tasking", type: "fad" },
  { key: "users", name: "Team Player", type: "fad" },
  { key: "cubes", name: "Adaptability", type: "far" },
  { key: "clock", name: "Time Management", type: "fad" },
  { key: "key", name: "Critical Thinking", type: "fad" },
];
