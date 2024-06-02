import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
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
        <div className={styles.cartzillaWrapper}>
          <img
            className={styles.cartzillaIcon}
            loading="lazy"
            alt=""
            src="/cartzilla.svg"
          />
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.titleParent}>
          <h1 className={styles.title}>Create an account</h1>
          <div className={styles.iAlreadyHaveAnAccountParent}>
            <div className={styles.iAlreadyHave}>I already have an account</div>
            <Link className={styles.signIn} to="/sign-in">
              Sign in
            </Link>
          </div>
        </div>
        <div className={styles.input}>
          <input
            className={styles.placeholder}
            placeholder="Email"
            type="text"
          />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.inputParent}>
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
            <div className={styles.helperText}>
              Passwords must be at least 8 characters.
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <input className={styles.frameInput} type="checkbox" />
              <div className={styles.label}>Save the password</div>
            </div>
            <div className={styles.checkboxParent}>
              <input className={styles.checkbox} type="checkbox" />
              <p className={styles.label1}>
                I would like to receive personalized commercial offers from
                Cartzilla by email.
              </p>
            </div>
          </div>
        </div>
        <button className={styles.primaryButton}>
          <div className={styles.label2}>Create an account</div>
        </button>
        <div className={styles.frameParent1}>
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
            <div className={styles.iconWrapper}>
              <img className={styles.icon2} alt="" src="/icon-18@2x.png" />
            </div>
            <div className={styles.label3}>Google</div>
          </button>
          <button className={styles.secondaryButton1}>
            <div className={styles.iconContainer}>
              <img className={styles.icon3} alt="" src="/icon-21.svg" />
            </div>
            <div className={styles.label4}>Facebook</div>
          </button>
          <button className={styles.secondaryButton2}>
            <div className={styles.iconFrame}>
              <img className={styles.icon4} alt="" src="/icon-37.svg" />
            </div>
            <div className={styles.label5}>Apple</div>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FrameComponent1;
