import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import Benefits from "../components/Benefits";
import styles from "./SignUp.module.css";

const SignUp: FunctionComponent = () => {
  return (
    <div className={styles.signUp}>
      <div className={styles.signUpInner}>
        <FrameComponent1 />
      </div>
      <Benefits />
    </div>
  );
};

export default SignUp;
