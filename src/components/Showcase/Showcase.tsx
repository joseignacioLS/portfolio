"use client";

import { JSXElementConstructor, useState } from "react";

import EducationAndExperience from "../Pages/EducationAndExperience/EducationAndExperience";
import Projects from "../Pages/Projects/Projects";

import styles from "./Showcase.module.scss";
import Skills from "../Pages/Skills/Skills";

interface ISection {
  title: string;
  component: JSXElementConstructor<any>;
}
const sections: ISection[] = [
  {
    title: "Skills",
    component: Skills,
  },
  {
    title: "Timeline",
    component: EducationAndExperience,
  },
  {
    title: "Proyectos",
    component: Projects,
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
              className={`${selected ? styles.selected : ""}`}
              onClick={() => {
                handleChangeSection(s);
              }}
            >
              {s.title}
            </button>
          );
        })}
      </header>
      <selectedSection.component />
    </section>
  );
};

export default Showcase;
