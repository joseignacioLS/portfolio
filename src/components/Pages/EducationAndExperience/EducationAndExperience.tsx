import { formatDateForCV } from "@/utils/datetime";
import styles from "./EducationAndExperience.module.scss";
import {
  educationAndExperienceItems,
  technologies,
} from "@/constants/profileData";
import ExpandableHeight from "@/components/ExpandableHeight/ExpandableHeight";
import { useRef, useState } from "react";

enum EModes {
  FULL = "full",
  EDUCATION = "education",
  EXPERIENCE = "experience",
}

const categoryToIcon = {
  [EModes.EDUCATION]: "book",
  [EModes.EXPERIENCE]: "case",
};

const EducationAndExperience = () => {
  const [mode, setMode] = useState(EModes.FULL);
  const cardListRef = useRef<HTMLDivElement>(null);

  const handleChangeFilter = (e: React.MouseEvent<HTMLElement>) => {
    const { filter } = e.currentTarget.dataset;
    if (!filter) return;
    if (filter === mode) return;
    cardListRef?.current?.scrollTo({ top: 0 });
    setMode(filter as EModes);
  };
  return (
    <section className={styles.educationAndExperience}>
      <div className={styles.filterWrapper}>
        <button
          data-filter={EModes.FULL}
          onClick={handleChangeFilter}
          className={`${mode === EModes.FULL ? styles.selected : ""}`}
        >
          Todo
        </button>
        <button
          data-filter={EModes.EXPERIENCE}
          onClick={handleChangeFilter}
          className={`${mode === EModes.EXPERIENCE ? styles.selected : ""}`}
        >
          Experiencia
        </button>
        <button
          data-filter={EModes.EDUCATION}
          onClick={handleChangeFilter}
          className={`${mode === EModes.EDUCATION ? styles.selected : ""}`}
        >
          Educación
        </button>
      </div>
      <div className={styles.cardList} ref={cardListRef}>
        {educationAndExperienceItems
          .sort((a, b) => {
            return a.startDate.getTime() - b.startDate.getTime() > 0 ? -1 : 1;
          })
          .map((item) => {
            const startDate = formatDateForCV(item.startDate);
            const endDate = item.endDate
              ? formatDateForCV(item.endDate)
              : "actualidad";
            const formattedDate =
              startDate !== endDate ? `${startDate} - ${endDate}` : startDate;
            return (
              <ExpandableHeight
                key={`${item.title} ${formattedDate}`}
                show={mode === EModes.FULL || mode === item.category}
                showToggleBtn={false}
              >
                <article
                  className={`${styles.entry} ${
                    item.category === "education" ? styles.education : ""
                  } ${item.category === "experience" ? styles.experience : ""}`}
                >
                  <div>
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.subtitle}>
                      <b>{item.position}</b> @ {item.entity}
                    </p>
                    <p className={styles.dates}>{formattedDate}</p>
                  </div>
                  <div className={styles.stack}>
                    {item.stack.map((stackItem) => {
                      const { name, icon } = technologies[stackItem] as {
                        name: string;
                        icon?: string;
                      };
                      return (
                        <span key={stackItem}>
                          {icon && <img src={icon} />}
                          {name}
                        </span>
                      );
                    })}
                  </div>

                  {item.description.length > 0 && (
                    <ExpandableHeight showContentText="+Info">
                      {item.description.map((descLine, i) => {
                        return (
                          <p key={i} className={styles.descriptionLine}>
                            {descLine}
                          </p>
                        );
                      })}
                    </ExpandableHeight>
                  )}
                </article>
              </ExpandableHeight>
            );
          })}
      </div>
    </section>
  );
};

export default EducationAndExperience;
