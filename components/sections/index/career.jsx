// Core packages
import Image from "next/image";

import Badges from "../../utils/badge.list.util";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Career scss
import career from "../../../styles/sections/index/career.module.scss";

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experience"
          preTitle="Career"
          subTitle="I love to manage, design, and develop consumer and digital products in web and mobile platforms utlizing cloud and devops infrastructure. "
        />
        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>IFS R&D Internationals Pvt (Ltd)</h3>
                <h4>Full time - Software engineering Intern</h4>
                <h4>July 2022 - June 2023</h4>
                <h5>Colombo, Sri Lanka</h5>
              </span>
              <p>
                IFS R&D International is a leading global company at the
                forefront of software innovation. With a focus on reliability,
                efficiency, and scalability, ensuring the seamless delivery of
                cutting-edge solutions to clients around the globe.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Software Engineering Intern</h3>

                  <h4>July 2024 - June 2023 · 1 yr</h4>
                  <p>Team Site Reliability Engineering (SRE)</p>
                </span>
                <p>
                  Led automation efforts and administered central environments
                  for 800+ developers, troubleshooting Kubernetes and Jenkins
                  issues with the IFS Aurena application. Orchestrated R&D
                  communications and managed Oracle DB administration tasks.
                  Collaborated on cloud web projects utilizing React.js and
                  Node.js frameworks within Azure cloud infrastructures.
                  Revamped B&D Dashboards, managed Grafana Monitoring Server,
                  and designed Cloud Self Service Portal.
                </p>
                {/* <p>Some key projects complete during this time 👇</p>
                <ul className={career.list}>
                  <li>
                    Product attribute and settings automated testing
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Eradicated critical
                      data input errors
                    </span>
                  </li>
                  <li>
                    Inventory management reporting and automation
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Decreased
                      purchasing labour by ~80%
                    </span>
                  </li>
                  <li>
                    Sales management plugin with AJAX shopping cart integration
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Increased AOV by
                      8.3%
                    </span>
                  </li>
                  <li>
                    Bespoke ID verification software and WooCommerce integration
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Decreased Credit
                      Card fraud by 98%
                    </span>
                  </li>
                </ul> */}
                <Badges
                  list={fullStack}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Freelancing</h3>
                <h4>Part time - Hobby and Personal Interests</h4>
                <h4>Jan 2021 - Present · 4+ yrs</h4>
                <h5>Colombo / Kandy, Sri Lanka</h5>
              </span>
              <p>I am a passionate web application developer 🚀</p>
              <p>
                Designing and building website for different services and use
                cases.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
        </section>
      </Container>
    </Section>
  );
}

const fullStack = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
  { key: "java", name: "JAVA", type: "devicon" },
  { key: "azure", name: "azure", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "tailwind", name: "Tailwind", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "kubernetes", name: "Kubernetes", type: "devicon" },
  { key: "jenkins", name: "Jenkins", type: "devicon" },
  { key: "grafana", name: "Grafana", type: "devicon" },
];

const stack = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "php", name: "PHP", type: "devicon" },
  { key: "wordpress", name: "WordPress", type: "devicon" },
  { key: "woocommerce", name: "WooCommerce", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
];
