import { educationAndExperienceItems } from "@/constants/profileData";
import styles from "./Projects.module.scss";
import { useEffect, useState } from "react";

const minTime = Math.min(
  ...educationAndExperienceItems.map((item) => item.startDate.getTime())
);

const totalTime = new Date().getTime() - minTime;
const years = Array.from(new Array(new Date().getUTCFullYear() - 2009 + 1)).map(
  (_, index) => {
    return new Date().getUTCFullYear() - index;
  }
);

const Projects = () => {
  const [isMobile, setIsMobile] = useState(100);
  useEffect(() => {
    const checkResolution = () => {
      const width = window.innerWidth;
      setIsMobile(100 * (width < 700 ? (width - 144) / width : 1));
    };
    checkResolution();
    window.addEventListener("resize", checkResolution);
    return () => window.removeEventListener("resize", checkResolution);
  }, []);
  console.log(isMobile);
  return (
    <section className={styles.projects}>
      {years.map((year) => {
        const timeDistance =
          new Date().getTime() - new Date(year + "/01/01").getTime();
        return (
          <div
            key={year}
            className={styles.year}
            style={{
              left: `${isMobile * (timeDistance / totalTime)}%`,
            }}
            data-year={year}
          ></div>
        );
      })}
      {educationAndExperienceItems
        .sort((a, b) => {
          const aEndDate = (a.endDate || new Date()).getTime();
          const bEndDate = (b.endDate || new Date()).getTime();
          return bEndDate - aEndDate;
        })
        .map((item) => {
          const startDate = item.startDate.getTime();
          const endDate = (item.endDate || new Date()).getTime();
          const timeSinceFinish = new Date().getTime() - endDate;
          const duration = endDate - startDate;
          return (
            <div
              className={styles.timeline}
              key={`${item.title}-${startDate}`}
              style={{
                marginLeft: `${100 * (timeSinceFinish / totalTime)}%`,
                width: `${100 * (duration / totalTime)}%`,
              }}
            >
              <span className={styles.tag}>
                {item.title} @ {item.entity}
              </span>
            </div>
          );
        })}
    </section>
  );
};

export default Projects;
