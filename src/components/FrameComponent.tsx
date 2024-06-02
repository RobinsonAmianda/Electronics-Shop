import { FunctionComponent } from "react";
import Footer from "./Footer";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.logoParent, className].join(" ")}>
      <div className={styles.logo}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <div className={styles.brandName}>
          <img
            className={styles.cartzillaIcon}
            loading="lazy"
            alt=""
            src="/cartzilla.svg"
          />
        </div>
      </div>
      <form className={styles.frameParent}>
        <div className={styles.titleParent}>
          <h1 className={styles.title}>Welcome back</h1>
          <div className={styles.inputFields}>
            <div className={styles.accountLinks}>
              <div className={styles.doNotHave}>Do not have an account?</div>
              <u className={styles.createAnAccount}>Create an account</u>
            </div>
            <div className={styles.input}>
              <input
                className={styles.placeholder}
                placeholder="Email"
                type="text"
              />
            </div>
            <div className={styles.input1}>
              <input
                className={styles.placeholder1}
                placeholder="Password"
                type="text"
              />
              <div className={styles.icon}>
                <img className={styles.icon1} alt="" src="/icon2.svg" />
              </div>
            </div>
            <div className={styles.checkboxRowParent}>
              <div className={styles.checkboxRow}>
                <input className={styles.checkboxContainer} type="checkbox" />
                <div className={styles.label}>Remember for 30 days</div>
              </div>
              <div className={styles.termsLinkRow}>
                <div className={styles.link}>Forgot password?</div>
              </div>
            </div>
            <button className={styles.primaryButton}>
              <a className={styles.label1}>Sign in</a>
            </button>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.dividerWrapper}>
            <img
              className={styles.dividerIcon}
              loading="lazy"
              alt=""
              src="/divider.svg"
            />
          </div>
          <div className={styles.text}>or continue with</div>
          <div className={styles.dividerContainer}>
            <img
              className={styles.dividerIcon1}
              loading="lazy"
              alt=""
              src="/divider.svg"
            />
          </div>
        </div>
        <div className={styles.socialButtons}>
          <button className={styles.secondaryButton}>
            <div className={styles.socialIcons}>
              <img className={styles.icon2} alt="" src="/icon-17@2x.png" />
            </div>
            <div className={styles.label2}>Google</div>
          </button>
          <button className={styles.secondaryButton1}>
            <div className={styles.iconWrapper}>
              <img className={styles.icon3} alt="" src="/icon-21.svg" />
            </div>
            <div className={styles.label3}>Facebook</div>
          </button>
          <button className={styles.secondaryButton2}>
            <div className={styles.iconContainer}>
              <img className={styles.icon4} alt="" src="/icon-37.svg" />
            </div>
            <div className={styles.label4}>Apple</div>
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default FrameComponent;
