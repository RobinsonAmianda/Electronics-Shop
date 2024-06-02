import { FunctionComponent } from "react";
import NavbarElectronicsDesktop1 from "../components/NavbarElectronicsDesktop1";
import DropdownMenu from "../components/DropdownMenu";
import SubscriptionVideoFeed from "../components/SubscriptionVideoFeed";
import FooterElectronicsDektop1 from "../components/FooterElectronicsDektop1";
import styles from "./ElectronicsStoreLight.module.css";

const ElectronicsStoreLight: FunctionComponent = () => {
  return (
    <div className={styles.electronicsStoreLight}>
      <NavbarElectronicsDesktop1 />
      <main className={styles.department}>
        <DropdownMenu />
      </main>
      <SubscriptionVideoFeed />
      <FooterElectronicsDektop1 />
    </div>
  );
};

export default ElectronicsStoreLight;
