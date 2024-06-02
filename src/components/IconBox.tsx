import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./IconBox.module.css";

export type IconBoxType = {
  className?: string;
  icon?: string;
  txt?: string;

  /** Style props */
  propMargin?: CSSProperties["margin"];
};

const IconBox: FunctionComponent<IconBoxType> = ({
  className = "",
  icon,
  txt,
  propMargin,
}) => {
  const txt3Style: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div className={[styles.iconBox, className].join(" ")}>
      <img className={styles.icon} loading="lazy" alt="" src={icon} />
      <div className={styles.text}>
        <div className={styles.txt} style={txt3Style}>
          {txt}
        </div>
      </div>
    </div>
  );
};

export default IconBox;
