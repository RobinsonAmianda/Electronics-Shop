import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ProductList.module.css";

export type ProductListType = {
  className?: string;
  image?: string;
  starFill?: string;
  star?: string;
  txt?: string;
  title?: string;
  price?: string;
  sale?: string;
  sale1?: boolean;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  priceMinWidth?: CSSProperties["minWidth"];
  saleFlex?: CSSProperties["flex"];
};

const ProductList: FunctionComponent<ProductListType> = ({
  className = "",
  image,
  starFill,
  star,
  txt,
  title,
  price,
  sale,
  sale1,
  propPadding,
  propWidth,
  propWidth1,
  propHeight,
  priceMinWidth,
  saleFlex,
}) => {
  const priceStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const price1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: priceMinWidth,
    };
  }, [propWidth, priceMinWidth]);

  const saleStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight,
      flex: saleFlex,
    };
  }, [propWidth1, propHeight, saleFlex]);

  return (
    <div className={[styles.productList, className].join(" ")}>
      <img className={styles.imageIcon} alt="" src={image} />
      <div className={styles.content}>
        <div className={styles.rating}>
          <div className={styles.stars}>
            <img className={styles.starFillIcon} alt="" src="/starfill.svg" />
            <img className={styles.starFillIcon1} alt="" src="/starfill.svg" />
            <img className={styles.starFillIcon2} alt="" src="/starfill.svg" />
            <img className={styles.starFillIcon3} alt="" src={starFill} />
            <img className={styles.starIcon} alt="" src={star} />
          </div>
          <div className={styles.txt}>{txt}</div>
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.price} style={priceStyle}>
          <b className={styles.price1} style={price1Style}>
            {price}
          </b>
          {!sale1 && (
            <div className={styles.sale} style={saleStyle}>
              {sale}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
