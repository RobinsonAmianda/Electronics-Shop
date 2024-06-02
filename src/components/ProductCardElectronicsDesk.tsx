import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ProductCardElectronicsDesk.module.css";

export type ProductCardElectronicsDeskType = {
  className?: string;
  label?: string;
  image?: string;
  starFill?: string;
  starFill1?: string;
  txt?: string;
  title?: string;
  price?: string;
  sale?: string;
  showSale?: boolean;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  priceMinWidth?: CSSProperties["minWidth"];
  saleFlex?: CSSProperties["flex"];
  saleWidth?: CSSProperties["width"];
};

const ProductCardElectronicsDesk: FunctionComponent<
  ProductCardElectronicsDeskType
> = ({
  className = "",
  label,
  image,
  starFill,
  starFill1,
  txt,
  title,
  price,
  sale,
  showSale,
  propBackgroundColor,
  propWidth,
  propHeight,
  priceMinWidth,
  saleFlex,
  saleWidth,
}) => {
  const badgeStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const price2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: priceMinWidth,
    };
  }, [propWidth, priceMinWidth]);

  const sale1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      flex: saleFlex,
      width: saleWidth,
    };
  }, [propHeight, saleFlex, saleWidth]);

  return (
    <div className={[styles.productCardElectronicsDesk, className].join(" ")}>
      <div className={styles.thumb}>
        <div className={styles.badge} style={badgeStyle}>
          <div className={styles.label}>{label}</div>
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
              <img className={styles.starFillIcon3} alt="" src={starFill} />
              <img className={styles.starFillIcon4} alt="" src={starFill1} />
            </div>
            <div className={styles.txt}>{txt}</div>
          </div>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.pricebtn}>
          <div className={styles.price}>
            <b className={styles.price1} style={price2Style}>
              {price}
            </b>
            {showSale && (
              <s className={styles.sale} style={sale1Style}>
                {sale}
              </s>
            )}
          </div>
          <div className={styles.secondaryButton}>
            <img className={styles.icon} alt="" src="/icon-151.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardElectronicsDesk;
