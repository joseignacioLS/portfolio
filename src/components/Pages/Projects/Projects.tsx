import { educationAndExperienceItems } from "@/constants/profileData";
import styles from "./Projects.module.scss";
import { ReactNode, useState } from "react";

const baseYear = Math.min(
  ...educationAndExperienceItems.map((entry) =>
    entry.startDate.getUTCFullYear()
  )
);

const minTime = new Date(`${baseYear + 8}-01-01`).getTime();
const totalTime = new Date().getTime() - minTime;

const years = Array.from(new Array(new Date().getUTCFullYear() - baseYear + 1))
  .map((_, index) => {
    return new Date().getUTCFullYear() - index;
  })
  .filter((_, i, arr) => {
    return i % Math.floor(arr.length / 10) === 0;
  });

const tagWidth = 200;
const factor = 4;

const Projects = () => {
  const [dragging, setDragging] = useState(false);

  const handleDrag = (event: React.MouseEvent) => {
    // scroll section horizontally on drag
    if (dragging) {
      const diffX = event.movementX;
      const diffY = event.movementY;
      const projects = event.currentTarget;
      if (!projects) return;
      projects.scrollLeft -= diffX;
      projects.scrollTop -= diffY;
    }
  };
  return (
    <section className={styles.projects}>
      <div
        className={styles.scrollWrapper}
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
        <div
          className={`${styles.year} ${styles.now}`}
          style={{
            left: `0px`,
          }}
          data-year={new Date().getUTCMonth() >= 5 ? "Now" : ""}
        ></div>
        {years.map((year) => {
          const timeDistance =
            new Date().getTime() - new Date(year + "/01/01").getTime();
          return (
            <div
              key={year}
              className={styles.year}
              style={{
                left: `${factor * 100 * (timeDistance / totalTime)}px`,
              }}
              data-year={year}
            ></div>
          );
        })}
        {
          educationAndExperienceItems
            .sort((a, b) => {
              const aEndDate = (a.endDate || new Date()).getTime();
              const bEndDate = (b.endDate || new Date()).getTime();
              return bEndDate - aEndDate;
            })
            .reduce(
              (acc: { items: ReactNode[]; rows: number[] }, item) => {
                const startDate = item.startDate.getTime();
                const endDate = (item.endDate || new Date()).getTime();
                const timeSinceFinish = new Date().getTime() - endDate;
                const duration = endDate - startDate;

                const startPosition =
                  factor * 100 * (timeSinceFinish / totalTime);
                let row = acc.rows.length;
                for (let i = 0; i < acc.rows.length; i++) {
                  if (startPosition >= acc.rows[i]) {
                    row = i;
                    break;
                  }
                }
                const width = factor * 100 * (duration / totalTime);
                const endPosition = startPosition + width + tagWidth;
                acc.rows[row] = endPosition;
                return {
                  rows: [...acc.rows],
                  items: [
                    ...acc.items,
                    <div
                      key={`${item.title}-${startDate}`}
                      className={styles.timeline}
                      style={{
                        top: `${100 + row * 70}px`,
                        paddingLeft: `${
                          factor * 100 * (timeSinceFinish / totalTime)
                        }px`,
                      }}
                    >
                      <div
                        className={styles.line}
                        style={{
                          width: `${factor * 100 * (duration / totalTime)}px`,
                        }}
                      ></div>
                      <div
                        className={styles.tag}
                        style={{ width: `${tagWidth}px` }}
                      >
                        <p>{item.title}</p>
                        <p className={styles.entity}>@ {item.entity}</p>
                      </div>
                    </div>,
                  ],
                };
              },
              { rows: [0], items: [] }
            ).items
        }
      </div>
    </section>
  );
};

export default Projects;
