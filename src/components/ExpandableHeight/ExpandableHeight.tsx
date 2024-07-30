import { ReactNode, useState } from "react";
import styles from "./ExpandableHeight.module.scss";

interface IProps {
  children: ReactNode;
  showContentText?: string;
  hideContentText?: string;
  btnRight?: boolean;
}

const ExpandableHeight = ({
  children,
  showContentText = "Mostrar más",
  hideContentText = "Ocultar",
  btnRight,
}: IProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      className={`${styles.wrapper} ${isExpanded ? styles.expanded : ""} ${
        btnRight ? styles.btnRight : ""
      }`}
    >
      <div>{children}</div>
      <button
        className={styles.toggleShowBtn}
        onClick={() => setIsExpanded((v) => !v)}
      >
        {isExpanded ? hideContentText : showContentText}
      </button>
    </div>
  );
};

export default ExpandableHeight;
