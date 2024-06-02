import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./VideoCard.module.css";

export type VideoCardType = {
  className?: string;
  image?: string;
  time?: string;
  title?: string;

  /** Style props */
  propMargin?: CSSProperties["margin"];
};

const VideoCard: FunctionComponent<VideoCardType> = ({
  className = "",
  image,
  time,
  title,
  propMargin,
}) => {
  const titleStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div className={[styles.videoCard, className].join(" ")}>
      <img className={styles.imageIcon} alt="" src={image} />
      <div className={styles.text}>
        <div className={styles.time}>{time}</div>
        <p className={styles.title} style={titleStyle}>
          {title}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
