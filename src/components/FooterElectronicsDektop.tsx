import { FunctionComponent } from "react";
import styles from "./FooterElectronicsDektop.module.css";

export type FooterElectronicsDektopType = {
  className?: string;
};

const FooterElectronicsDektop: FunctionComponent<
  FooterElectronicsDektopType
> = ({ className = "" }) => {
  return (
    <footer className={[styles.footerElectronicsDektop, className].join(" ")}>
      <div className={styles.top}>
        <div className={styles.side}>
          <img className={styles.logoIcon} alt="" src="/logo-5.svg" />
          <div className={styles.contactUs}>
            <div className={styles.title}>Got question? Contact us 24/7</div>
            <div className={styles.secondaryButton}>
              <div className={styles.label}>Help and consultation</div>
              <img className={styles.icon} alt="" src="/icon-36.svg" />
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <b className={styles.title1}>Company</b>
          <div className={styles.links}>
            <div className={styles.txt}>About company</div>
            <div className={styles.txt1}>Our team</div>
            <div className={styles.txt2}>Careers</div>
            <div className={styles.txt3}>Contact us</div>
            <div className={styles.txt4}>News</div>
          </div>
        </div>
        <div className={styles.menu1}>
          <b className={styles.title2}>Account</b>
          <div className={styles.links1}>
            <div className={styles.txt5}>Your account</div>
            <div className={styles.txt6}>{`Shipping rates & policies`}</div>
            <div className={styles.txt7}>{`Refunds & replacements`}</div>
            <div className={styles.txt8}>Delivery info</div>
            <div className={styles.txt9}>Order tracking</div>
            <div className={styles.txt10}>{`Taxes & fees`}</div>
          </div>
        </div>
        <div className={styles.menu2}>
          <b className={styles.title3}>Customer service</b>
          <div className={styles.links2}>
            <div className={styles.txt11}>Payment methods</div>
            <div className={styles.txt12}>Money back guarantee</div>
            <div className={styles.txt13}>Product returns</div>
            <div className={styles.txt14}>Support center</div>
            <div className={styles.txt15}>Shipping</div>
            <div className={styles.txt16}>Term and conditions</div>
          </div>
        </div>
      </div>
      <div className={styles.categories}>
        <div className={styles.row1}>
          <div className={styles.txt17}>{`Computers `}</div>
          <div className={styles.txt18}>/</div>
          <div className={styles.txt19}>Smartphones</div>
          <div className={styles.txt20}>/</div>
          <div className={styles.txt21}>TV, Video</div>
          <div className={styles.txt22}>/</div>
          <div className={styles.txt23}>{`Speakers `}</div>
          <div className={styles.txt24}>/</div>
          <div className={styles.txt25}>Cameras</div>
          <div className={styles.txt26}>/</div>
          <div className={styles.txt27}>{`Printers `}</div>
          <div className={styles.txt28}>/</div>
          <div className={styles.txt29}>Video Games</div>
          <div className={styles.txt30}>/</div>
          <div className={styles.txt31}>Headphones</div>
          <div className={styles.txt32}>/</div>
          <div className={styles.txt33}>{`Wearable `}</div>
          <div className={styles.txt34}>/</div>
          <div className={styles.txt35}>HDD/SSD</div>
          <div className={styles.txt36}>/</div>
          <div className={styles.txt37}>Smart Home</div>
          <div className={styles.txt38}>/</div>
          <div className={styles.txt39}>Apple Devices</div>
          <div className={styles.txt40}>/</div>
          <div className={styles.txt41}>Tablets</div>
        </div>
        <div className={styles.row2}>
          <div className={styles.txt42}>Monitors</div>
          <div className={styles.txt43}>/</div>
          <div className={styles.txt44}>{`Scanners `}</div>
          <div className={styles.txt45}>/</div>
          <div className={styles.txt46}>{`Servers `}</div>
          <div className={styles.txt47}>/</div>
          <div className={styles.txt48}>Heating and Cooling</div>
          <div className={styles.txt49}>/</div>
          <div className={styles.txt50}>E-readers</div>
          <div className={styles.txt51}>/</div>
          <div className={styles.txt52}>Data Storage</div>
          <div className={styles.txt53}>/</div>
          <div className={styles.txt54}>{`Networking `}</div>
          <div className={styles.txt55}>/</div>
          <div className={styles.txt56}>{`Power Strips `}</div>
          <div className={styles.txt57}>/</div>
          <div className={styles.txt58}>Plugs and Outlets</div>
          <div className={styles.txt59}>/</div>
          <div className={styles.txt60}>Detectors and Sensors</div>
          <div className={styles.txt61}>/</div>
          <div className={styles.txt62}>Accessories</div>
        </div>
      </div>
      <div className={styles.bottom}>
        <img className={styles.dividerIcon} alt="" src="/divider-2.svg" />
        <div className={styles.copyrightPaymentMethods}>
          <div className={styles.txtWrapper}>
            <div className={styles.txt63}>
              <span>{`© All rights reserved. Made by `}</span>
              <span className={styles.createxStudio}>Createx Studio</span>
            </div>
          </div>
          <div className={styles.paymentMethods}>
            <img
              className={styles.paymentMethodIcon}
              loading="lazy"
              alt=""
              src="/payment-method@2x.png"
            />
            <img
              className={styles.paymentMethodIcon1}
              alt=""
              src="/payment-method-1@2x.png"
            />
            <img
              className={styles.paymentMethodIcon2}
              alt=""
              src="/payment-method-2.svg"
            />
            <img
              className={styles.paymentMethodIcon3}
              alt=""
              src="/payment-method-3@2x.png"
            />
            <img
              className={styles.paymentMethodIcon4}
              alt=""
              src="/payment-method-4@2x.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterElectronicsDektop;
