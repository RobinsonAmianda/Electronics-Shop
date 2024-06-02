import { FunctionComponent } from "react";
import styles from "./IconText.module.css";

export type IconTextType = {
  className?: string;
  icon?: string;
  title?: string;
  txt?: string;
};

const IconText: FunctionComponent<IconTextType> = ({
  className = "",
  icon,
  title,
  txt,
}) => {
  return (
    <div className={[styles.iconText, className].join(" ")}>
      <img className={styles.icon} alt="" src={icon} />
      <div className={styles.txt}>
        <div className={styles.title}>{title}</div>
        <div className={styles.txt1}>{txt}</div>
      </div>
    </div>
  );
};

export default IconText;
