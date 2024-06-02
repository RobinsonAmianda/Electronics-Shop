import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ProductCardElectronicsDesk1.module.css";

export type ProductCardElectronicsDesk1Type = {
  className?: string;
  image?: string;
  star?: string;
  txt?: string;
  title?: string;
  price?: string;
  sale?: string;

  /** Style props */
  txtMinWidth?: CSSProperties["minWidth"];
};

const ProductCardElectronicsDesk1: FunctionComponent<
  ProductCardElectronicsDesk1Type
> = ({ className = "", image, star, txt, title, price, sale, txtMinWidth }) => {
  const txtStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: txtMinWidth,
    };
  }, [txtMinWidth]);

  return (
    <div className={[styles.productCardElectronicsDesk, className].join(" ")}>
      <div className={styles.thumb}>
        <div className={styles.badge}>
          <div className={styles.label}>-17%</div>
        </div>
        <img className={styles.imageIcon} alt="" src={image} />
      </div>
      <div className={styles.body}>
        <div className={styles.titlerating}>
          <div className={styles.rating}>
            <div className={styles.stars}>
              <img className={styles.starFillIcon} alt="" src="/starfill.svg" />
              <img
                className={styles.starFillIcon1}
                alt=""
                src="/starfill.svg"
              />
              <img
                className={styles.starFillIcon2}
                alt=""
                src="/starfill.svg"
              />
              <img
                className={styles.starFillIcon3}
                alt=""
                src="/starfill.svg"
              />
              <img className={styles.starIcon} alt="" src={star} />
            </div>
            <div className={styles.txt} style={txtStyle}>
              {txt}
            </div>
          </div>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.pricebtn}>
          <div className={styles.price}>
            <b className={styles.price1}>{price}</b>
            <div className={styles.sale}>{sale}</div>
          </div>
          <div className={styles.secondaryButton}>
            <img className={styles.icon} alt="" src="/icon-151.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardElectronicsDesk1;
