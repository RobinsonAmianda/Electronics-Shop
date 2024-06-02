import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import styles from "./SignIn.module.css";

const SignIn: FunctionComponent = () => {
  return (
    <div className={styles.signIn}>
      <div className={styles.signInInner}>
        <FrameComponent />
      </div>
      <div className={styles.image}>
        <div className={styles.background} />
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/image1@2x.png"
        />
      </div>
    </div>
  );
};

export default SignIn;
