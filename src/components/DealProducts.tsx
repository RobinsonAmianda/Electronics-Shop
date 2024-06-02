import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DealProducts.module.css";

export type DealProductsType = {
  className?: string;
  image?: string;
  starFill?: string;
  starFill1?: string;
  txt?: string;
  title?: string;
  price?: string;
  sale?: string;
  txt1?: string;
  icon?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propDebugCommit?: CSSProperties["debugCommit"];
  propDebugCommit1?: CSSProperties["debugCommit"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
  propLeft1?: CSSProperties["left"];
  priceMinWidth?: CSSProperties["minWidth"];
  txtMinWidth?: CSSProperties["minWidth"];
};

const DealProducts: FunctionComponent<DealProductsType> = ({
  className = "",
  image,
  starFill,
  starFill1,
  txt,
  title,
  price,
  sale,
  txt1,
  icon,
  propLeft,
  propWidth,
  propDebugCommit,
  propDebugCommit1,
  propWidth1,
  propWidth2,
  propLeft1,
  priceMinWidth,
  txtMinWidth,
}) => {
  const productCardElectronicsDeskStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const price3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      debugCommit: propDebugCommit,
      minWidth: priceMinWidth,
    };
  }, [propWidth, propDebugCommit, priceMinWidth]);

  const sale2Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const secondDealTitleStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const txt1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
      minWidth: txtMinWidth,
    };
  }, [propWidth2, txtMinWidth]);

  const secondaryButtonStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div className={[styles.dealProducts, className].join(" ")}>
      <div
        className={styles.productCardElectronicsDesk}
        style={productCardElectronicsDeskStyle}
      >
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
                <img
                  className={styles.starFillIcon}
                  alt=""
                  src="/starfill.svg"
                />
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
                <img className={styles.starFillIcon3} alt="" src={starFill} />
                <img className={styles.starFillIcon4} alt="" src={starFill1} />
              </div>
              <div className={styles.txt}>{txt}</div>
            </div>
            <div className={styles.title}>{title}</div>
          </div>
          <div className={styles.pricebtn}>
            <div className={styles.price}>
              <b className={styles.price1} style={price3Style}>
                {price}
              </b>
              <div className={styles.dealProgressFilled}>
                <s className={styles.sale} style={sale2Style}>
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
              <div className={styles.filledTrail} />
            </div>
            <div className={styles.txt1}>
              <div className={styles.txt2}>Available:</div>
              <div
                className={styles.secondDealTitle}
                style={secondDealTitleStyle}
              >
                <div className={styles.txt3} style={txt1Style}>
                  {txt1}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondaryButton1} style={secondaryButtonStyle}>
        <img className={styles.icon1} alt="" src={icon} />
      </div>
    </div>
  );
};

export default DealProducts;
