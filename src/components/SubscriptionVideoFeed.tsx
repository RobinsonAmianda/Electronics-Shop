import { FunctionComponent } from "react";
import VideoCard from "./VideoCard";
import styles from "./SubscriptionVideoFeed.module.css";

export type SubscriptionVideoFeedType = {
  className?: string;
};

const SubscriptionVideoFeed: FunctionComponent<SubscriptionVideoFeedType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.subscriptionVideoFeed, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.subscription}>
          <div className={styles.top}>
            <div className={styles.heading}>
              <h2 className={styles.title}>Sign up to our newsletter</h2>
              <p
                className={styles.txt}
              >{`Receive our latest updates about our products & promotions`}</p>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.input}>
                <input
                  className={styles.placeholder}
                  placeholder="Your email"
                  type="text"
                />
              </div>
              <button className={styles.primaryButton}>
                <div className={styles.label}>Subscribe</div>
              </button>
            </div>
          </div>
          <div className={styles.socialButtons}>
            <div className={styles.secondaryButton}>
              <img className={styles.icon} alt="" src="/icon-31.svg" />
            </div>
            <div className={styles.secondaryButton1}>
              <img className={styles.icon1} alt="" src="/icon-32.svg" />
            </div>
            <div className={styles.secondaryButton2}>
              <img className={styles.icon2} alt="" src="/icon-33.svg" />
            </div>
            <div className={styles.secondaryButton3}>
              <img className={styles.icon3} alt="" src="/icon-34.svg" />
            </div>
          </div>
        </div>
        <div className={styles.videoList}>
          <div className={styles.list}>
            <VideoCard
              image="/image-23@2x.png"
              time="6:16"
              title="5 New Cool Gadgets You Must See on Cartzilla - Cheap Budget"
            />
            <VideoCard
              image="/image-24@2x.png"
              time="10:20"
              title="5 Super Useful Gadgets on Cartzilla You Must Have in 2023"
              propMargin="0"
            />
            <VideoCard
              image="/image-25@2x.png"
              time="8:40"
              title="Top 5 New Amazing Gadgets on Cartzilla You Must See"
              propMargin="unset"
            />
          </div>
          <div className={styles.linkButton}>
            <a className={styles.regularText}>View all</a>
            <img className={styles.icon4} alt="" src="/icon-35.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionVideoFeed;
