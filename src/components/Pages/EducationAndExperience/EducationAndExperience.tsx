import { formatDateForCV } from "@/utils/datetime";
import styles from "./EducationAndExperience.module.scss";
import {
  educationAndExperienceItems,
  technologies,
} from "@/constants/profileData";
import ExpandableHeight from "@/components/ExpandableHeight/ExpandableHeight";

const EducationAndExperience = () => {
  return (
    <section className={styles.educationAndExperience}>
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
            <article
              key={item.title}
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
                  return (
                    <span key={stackItem}>
                      <img src={technologies[stackItem].icon} />
                      {technologies[stackItem].name}
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
          );
        })}
    </section>
  );
};

export default EducationAndExperience;
