"use client";

import { JSXElementConstructor, useState } from "react";

import EducationAndExperience from "../Pages/EducationAndExperience/EducationAndExperience";
import Projects from "../Pages/Projects/Projects";

import styles from "./Showcase.module.scss";
import AboutMe from "../Pages/AboutMe/AboutMe";

interface ISection {
  title: string;
  component: JSXElementConstructor<any>;
  icon: string;
}
const sections: ISection[] = [
  {
    title: "Sobre Mí",
    component: AboutMe,
    icon: "profile-round-1342-svgrepo-com.svg",
  },
  {
    title: "Timeline",
    component: EducationAndExperience,
    icon: "square-cv-svgrepo-com.svg",
  },
  {
    title: "Proyectos",
    component: Projects,
    icon: "cards-bold-svgrepo-com.svg",
  },
];

const Showcase = () => {
  const [selectedSection, setSelectedSection] = useState(sections[1]);
  const handleChangeSection = (newSection: ISection) => {
    setSelectedSection(newSection);
  };
  return (
    <section className={styles.showcase}>
      <header className={styles.header}>
        {sections.map((s) => {
          const selected = s.title === selectedSection.title;
          return (
            <button
              key={s.title}
              className={`${styles.tab} ${selected ? styles.selected : ""}`}
              onClick={() => {
                handleChangeSection(s);
              }}
            >
              <img src={`/icons/${s.icon}`} alt={s.title} />
            </button>
          );
        })}
      </header>
      <selectedSection.component />
    </section>
  );
};

export default Showcase;
