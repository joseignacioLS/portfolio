import { educationAndExperienceItems } from "@/constants/profileData";
import styles from "./Projects.module.scss";
import { useState } from "react";

const baseYear = 2009;
const minTime = new Date(`${baseYear + 8}-01-01`).getTime();
const totalTime = new Date().getTime() - minTime;
const years = Array.from(
  new Array(new Date().getUTCFullYear() - baseYear + 1)
).map((_, index) => {
  return new Date().getUTCFullYear() - index;
});

const Projects = () => {
  const [dragging, setDragging] = useState(false);

  const handleDrag = (event: React.MouseEvent) => {
    // scroll section horizontally on drag
    if (dragging) {
      const diff = event.movementX;
      const projects = event.currentTarget;
      if (!projects) return;
      projects.scrollLeft -= diff;
    }
  };
  return (
    <section
      className={styles.projects}
      onMouseDown={(e) => {
        e.stopPropagation();
        setDragging(true);
      }}
      onMouseUp={(e) => {
        e.stopPropagation();
        setDragging(false);
      }}
      onMouseLeave={(e) => {
        e.stopPropagation();
        setDragging(false);
      }}
      onMouseMove={handleDrag}
    >
      {years.map((year) => {
        const timeDistance =
          new Date().getTime() - new Date(year + "/01/01").getTime();
        return (
          <div
            key={year}
            className={styles.year}
            style={{
              left: `${100 * (timeDistance / totalTime)}%`,
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
              key={`${item.title}-${startDate}`}
              className={styles.timeline}
              style={{
                paddingLeft: `${100 * (timeSinceFinish / totalTime)}%`,
              }}
            >
              <div
                className={styles.line}
                style={{
                  width: `${100 * (duration / totalTime)}%`,
                }}
              ></div>
              <div className={styles.tag}>
                <p>{item.title}</p>
                <p>@ {item.entity}</p>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Projects;
