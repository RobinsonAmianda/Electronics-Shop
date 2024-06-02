import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <div className={styles.linkButton}>
        <u className={styles.regularText}>Need help?</u>
        <img className={styles.icon} alt="" src="/icon3.svg" />
      </div>
      <div className={styles.copyright}>
        <span>{`© All rights reserved. Made by `}</span>
        <span className={styles.createxStudio}>Createx Studio</span>
      </div>
    </div>
  );
};

export default Footer;
