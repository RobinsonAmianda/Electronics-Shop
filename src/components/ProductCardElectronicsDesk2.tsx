import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ProductCardElectronicsDesk2.module.css";

export type ProductCardElectronicsDesk2Type = {
  className?: string;
  image?: string;
  starFill?: string;
  txt?: string;
  title?: string;
  price?: string;
  sale?: string;
  txt1?: string;

  /** Style props */
  propTextDecoration?: CSSProperties["textDecoration"];
  propDebugCommit?: CSSProperties["debugCommit"];
  propDebugCommit1?: CSSProperties["debugCommit"];
  propWidth?: CSSProperties["width"];
};

const ProductCardElectronicsDesk2: FunctionComponent<
  ProductCardElectronicsDesk2Type
> = ({
  className = "",
  image,
  starFill,
  txt,
  title,
  price,
  sale,
  txt1,
  propTextDecoration,
  propDebugCommit,
  propDebugCommit1,
  propWidth,
}) => {
  const txt2Style: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const price4Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const sale3Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const filledTrailStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

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
              <img className={styles.starFillIcon4} alt="" src={starFill} />
            </div>
            <a className={styles.txt} style={txt2Style}>
              {txt}
            </a>
          </div>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.pricebtn}>
          <div className={styles.price}>
            <b className={styles.price1} style={price4Style}>
              {price}
            </b>
            <div className={styles.saleWrapper}>
              <s className={styles.sale} style={sale3Style}>
                {sale}
              </s>
            </div>
          </div>
          <div className={styles.secondaryButton}>
            <img className={styles.icon} alt="" src="/icon-151.svg" />
          </div>
        </div>
        <div className={styles.progress}>
          <div className={styles.progress1}>
            <div className={styles.trail} />
            <div className={styles.filledTrail} style={filledTrailStyle} />
          </div>
          <div className={styles.txt1}>
            <div className={styles.txt2}>Available:</div>
            <div className={styles.txtWrapper}>
              <div className={styles.txt3}>{txt1}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardElectronicsDesk2;
