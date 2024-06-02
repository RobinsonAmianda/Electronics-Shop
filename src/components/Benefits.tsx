import { FunctionComponent } from "react";
import IconBox from "./IconBox";
import styles from "./Benefits.module.css";

export type BenefitsType = {
  className?: string;
};

const Benefits: FunctionComponent<BenefitsType> = ({ className = "" }) => {
  return (
    <div className={[styles.benefits, className].join(" ")}>
      <div className={styles.background} />
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>{`Cartzilla account benefits `}</h3>
      </div>
      <div className={styles.iconBoxes}>
        <div className={styles.row}>
          <IconBox
            icon="/icon-41.svg"
            txt="Subscribe to your favorite products"
          />
          <IconBox
            icon="/icon-51.svg"
            txt="View and manage your orders and wishlist"
            propMargin="unset"
          />
        </div>
        <div className={styles.row1}>
          <IconBox
            icon="/icon-6.svg"
            txt="Earn rewards for future purchases"
            propMargin="unset"
          />
          <IconBox
            icon="/icon-7.svg"
            txt="Receive exclusive offers and discounts"
            propMargin="unset"
          />
        </div>
        <div className={styles.row2}>
          <IconBox
            icon="/icon-81.svg"
            txt="Create multiple wishlists"
            propMargin="unset"
          />
          <IconBox
            icon="/icon-91.svg"
            txt="Pay for purchases by installments"
            propMargin="0"
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
