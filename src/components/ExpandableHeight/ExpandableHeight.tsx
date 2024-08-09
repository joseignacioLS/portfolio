import { ReactNode, useEffect, useState } from "react";
import styles from "./ExpandableHeight.module.scss";

interface IProps {
  id?: string;
  children: ReactNode;
  showToggleBtn?: boolean;
  showContentText?: string;
  hideContentText?: string;
  btnRight?: boolean;
  show?: boolean;
}

const ExpandableHeight = ({
  id = "",
  children,
  showToggleBtn = true,
  showContentText = "Mostrar más",
  hideContentText = "Ocultar",
  btnRight,
  show = false,
}: IProps) => {
  const [isExpanded, setIsExpanded] = useState(show);
  useEffect(() => {
    setIsExpanded(show);
  }, [show]);
  return (
    <div
      id={id}
      className={`${styles.wrapper} ${isExpanded ? styles.expanded : ""} ${
        btnRight ? styles.btnRight : ""
      } ${!showToggleBtn ? styles.noToggleBtn : ""}`}
    >
      <div>{children}</div>
      {showToggleBtn && (
        <button
          className={styles.toggleShowBtn}
          onClick={() => setIsExpanded((v) => !v)}
        >
          {isExpanded ? hideContentText : showContentText}
        </button>
      )}
    </div>
  );
};

export default ExpandableHeight;
