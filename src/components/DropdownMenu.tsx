import { FunctionComponent } from "react";
import IconText from "./IconText";
import ProductList from "./ProductList";
import ProductCardElectronicsDesk from "./ProductCardElectronicsDesk";
import ProductCardElectronicsDesk1 from "./ProductCardElectronicsDesk1";
import DealProducts from "./DealProducts";
import ProductCardElectronicsDesk2 from "./ProductCardElectronicsDesk2";
import styles from "./DropdownMenu.module.css";

export type DropdownMenuType = {
  className?: string;
};

const DropdownMenu: FunctionComponent<DropdownMenuType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.dropdownMenu, className].join(" ")}>
      <div className={styles.dropdownContainer}>
        <div className={styles.dropdownWrapper}>
          <div className={styles.dropdownList}>
            <div className={styles.dropdown}>
              <div className={styles.items}>
                <div className={styles.item}>
                  <img
                    className={styles.computerIcon}
                    alt=""
                    src="/computer.svg"
                  />
                  <div className={styles.txt}>{`Computers & Accessories`}</div>
                  <img
                    className={styles.iconright}
                    alt=""
                    src="/iconright-2.svg"
                  />
                </div>
                <div className={styles.item1}>
                  <input className={styles.smartphone2} type="checkbox" />
                  <div className={styles.txt1}>{`Smartphones & Tablets`}</div>
                  <img
                    className={styles.iconright1}
                    alt=""
                    src="/iconright-2.svg"
                  />
                </div>
                <div className={styles.item2}>
                  <img
                    className={styles.monitor2Icon}
                    alt=""
                    src="/monitor2.svg"
                  />
                  <div className={styles.txt2}>{`TV, Video & Audio`}</div>
                  <img
                    className={styles.iconright2}
                    alt=""
                    src="/iconright-2.svg"
                  />
                </div>
                <div className={styles.item3}>
                  <img
                    className={styles.speaker2Icon}
                    alt=""
                    src="/speaker2.svg"
                  />
                  <div className={styles.txt3}>{`Speakers & Home Music`}</div>
                  <img
                    className={styles.iconright3}
                    alt=""
                    src="/iconright-2.svg"
                  />
                </div>
                <div className={styles.item4}>
                  <img
                    className={styles.camera2Icon}
                    alt=""
                    src="/camera2.svg"
                  />
                  <div className={styles.txt4}>{`Cameras, Photo & Video`}</div>
                  <img
                    className={styles.iconright4}
                    alt=""
                    src="/iconright-2.svg"
                  />
                </div>
                <div className={styles.item5}>
                  <img
                    className={styles.printer2Icon}
                    alt=""
                    src="/printer2.svg"
                  />
                  <div className={styles.txt5}>{`Printers & Ink`}</div>
                  <img
                    className={styles.iconright5}
                    alt=""
                    src="/iconright-2.svg"
                  />
                </div>
                <div className={styles.item6}>
                  <img
                    className={styles.battery2Icon}
                    alt=""
                    src="/battery2.svg"
                  />
                  <div className={styles.txt6}>Charging Stations</div>
                  <img
                    className={styles.iconright6}
                    alt=""
                    src="/iconright-2.svg"
                  />
                </div>
                <div className={styles.item7}>
                  <img
                    className={styles.headphones2Icon}
                    alt=""
                    src="/headphones2.svg"
                  />
                  <div className={styles.txt7}>Headphones</div>
                  <img
                    className={styles.iconright7}
                    alt=""
                    src="/iconright-2.svg"
                  />
                </div>
                <div className={styles.item8}>
                  <img className={styles.watch2Icon} alt="" src="/watch2.svg" />
                  <div className={styles.txt8}>Wearable Electronics</div>
                  <img
                    className={styles.iconright8}
                    alt=""
                    src="/iconright-2.svg"
                  />
                </div>
                <div className={styles.item9}>
                  <img
                    className={styles.powerbankIcon}
                    alt=""
                    src="/powerbank.svg"
                  />
                  <div className={styles.txt9}>Powerbanks</div>
                  <img
                    className={styles.iconright9}
                    alt=""
                    src="/iconright-2.svg"
                  />
                </div>
                <div className={styles.item10}>
                  <img
                    className={styles.hardDrive2Icon}
                    alt=""
                    src="/harddrive2.svg"
                  />
                  <div className={styles.txt10}>HDD/SSD Data Storage</div>
                  <img
                    className={styles.iconright10}
                    alt=""
                    src="/iconright-2.svg"
                  />
                </div>
                <div className={styles.item11}>
                  <img className={styles.gameIcon} alt="" src="/game.svg" />
                  <div className={styles.txt11}>Video Games</div>
                  <img
                    className={styles.iconright11}
                    alt=""
                    src="/iconright-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.carouselWithProgress}>
              <div className={styles.heroContent}>
                <div className={styles.content}>
                  <div className={styles.heading}>
                    <div
                      className={styles.subtitle}
                    >{`Feel the real quality sound `}</div>
                    <h1 className={styles.title}>Headphones ProMax</h1>
                  </div>
                  <button className={styles.primaryButton}>
                    <button className={styles.label}>Shop now</button>
                    <div className={styles.actionIcon}>
                      <img className={styles.icon} alt="" src="/icon-8.svg" />
                    </div>
                  </button>
                </div>
              </div>
              <div className={styles.slider}>
                <div className={styles.progress}>
                  <div className={styles.trail} />
                  <div className={styles.filledTrail} />
                </div>
              </div>
              <img
                className={styles.imageIcon}
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
            </div>
          </div>
          <div className={styles.benefits}>
            <IconText
              icon="/icon-9.svg"
              title={`Free Shipping & Returns`}
              txt="For all orders over $199.00"
            />
            <IconText
              icon="/icon-10.svg"
              title="Secure Payment"
              txt="We ensure secure payment"
            />
            <IconText
              icon="/icon-11.svg"
              title="Money Back Guarantee"
              txt="Returning money 30 days"
            />
            <IconText
              icon="/icon-12.svg"
              title="24/7 Customer Support"
              txt="Friendly customer support"
            />
          </div>
          <div className={styles.banner}>
            <h1 className={styles.title1}>New arrivals</h1>
            <div className={styles.bannerContent}>
              <div className={styles.banner1}>
                <img
                  className={styles.backgroundIcon}
                  alt=""
                  src="/background@2x.png"
                />
                <div className={styles.macbookParent}>
                  <h1 className={styles.macbook}>MacBook</h1>
                  <img
                    className={styles.imageIcon1}
                    alt=""
                    src="/image-1@2x.png"
                  />
                </div>
                <div className={styles.bannerDescription}>
                  <div className={styles.descriptionContent}>
                    <div className={styles.beProAnywhere}>Be Pro Anywhere</div>
                    <div className={styles.bannerAction}>
                      <button className={styles.primaryButton1}>
                        <div className={styles.label1}>From $1,199</div>
                        <div className={styles.buttonIconContainer}>
                          <img
                            className={styles.icon1}
                            alt=""
                            src="/icon-13.svg"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.products}>
                <div className={styles.productContainer}>
                  <div className={styles.list}>
                    <ProductList
                      image="/image-2@2x.png"
                      starFill="/starfill.svg"
                      star="/star.svg"
                      txt="45"
                      title="Smart Watch Series 7, White"
                      price="$449.00"
                      sale="$956.00"
                      sale1={false}
                    />
                    <ProductList
                      image="/image-3@2x.png"
                      starFill="/starfill.svg"
                      star="/star-1.svg"
                      txt="123"
                      title="VRB01 Virtual Reality Glasses"
                      price="$340.99"
                      sale="$956.00"
                      sale1={false}
                      propPadding="unset"
                      propWidth="unset"
                      propWidth1="199px"
                      propHeight="22px"
                      priceMinWidth="84px"
                      saleFlex="unset"
                    />
                    <ProductList
                      image="/image-4@2x.png"
                      starFill="/starfill.svg"
                      star="/star-1.svg"
                      txt="34"
                      title="Wireless Bluetooth Headphones Sony "
                      price="$357.00"
                      sale="$956.00"
                      sale1={false}
                      propPadding="unset"
                      propWidth="unset"
                      propWidth1="199px"
                      propHeight="22px"
                      priceMinWidth="80px"
                      saleFlex="unset"
                    />
                    <ProductList
                      image="/image-5@2x.png"
                      starFill="/starfill.svg"
                      star="/star.svg"
                      txt="8"
                      title="Laptop Apple MacBook Pro 13 M2"
                      price="$1,200.00"
                      sale="$956.00"
                      sale1={false}
                      propPadding="unset"
                      propWidth="unset"
                      propWidth1="199px"
                      propHeight="22px"
                      priceMinWidth="99px"
                      saleFlex="unset"
                    />
                  </div>
                  <div className={styles.list1}>
                    <ProductList
                      image="/image-6@2x.png"
                      starFill="/star-4.svg"
                      star="/star-1.svg"
                      txt="126"
                      title="Tablet Apple iPad Air M1"
                      price="$540.00"
                      sale="$956.00"
                      sale1={false}
                      propPadding="unset"
                      propWidth="unset"
                      propWidth1="199px"
                      propHeight="22px"
                      priceMinWidth="84px"
                      saleFlex="unset"
                    />
                    <ProductList
                      image="/image-7@2x.png"
                      starFill="/starfill.svg"
                      star="/star.svg"
                      txt="340"
                      title="Headphones Apple AirPods 2 Pro"
                      price="$209.99"
                      sale="$356.00"
                      sale1
                      propPadding="unset"
                      propWidth="unset"
                      propWidth1="unset"
                      propHeight="unset"
                      priceMinWidth="83px"
                      saleFlex="1"
                    />
                    <ProductList
                      image="/image-8@2x.png"
                      starFill="/starfill.svg"
                      star="/star-1.svg"
                      txt="29"
                      title="Power Bank PBS 10000 mAh Black"
                      price="$49.99"
                      sale="$956.00"
                      sale1={false}
                      propPadding="unset"
                      propWidth="unset"
                      propWidth1="199px"
                      propHeight="22px"
                      priceMinWidth="71px"
                      saleFlex="unset"
                    />
                    <ProductList
                      image="/image-9@2x.png"
                      starFill="/starfill.svg"
                      star="/star.svg"
                      txt="12"
                      title="Apple iPhone 14 128GB White"
                      price="$899.00"
                      sale="$956.00"
                      sale1
                      propPadding="unset"
                      propWidth="unset"
                      propWidth1="unset"
                      propHeight="unset"
                      priceMinWidth="84px"
                      saleFlex="1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.topParent}>
            <div className={styles.top}>
              <div className={styles.inner}>
                <h1 className={styles.title2}>Trending products</h1>
                <div className={styles.linkButton}>
                  <a className={styles.regularText}>View all</a>
                  <img className={styles.icon2} alt="" src="/icon-14.svg" />
                </div>
              </div>
              <img className={styles.dividerIcon} alt="" src="/divider.svg" />
            </div>
            <div className={styles.productCardContainer}>
              <ProductCardElectronicsDesk
                label="-21%"
                image="/image-10@2x.png"
                starFill="/starfill.svg"
                starFill1="/starfill.svg"
                txt="(14)"
                title="VRB01 Virtual Reality Glasses"
                price="$340.99"
                sale="$430.00"
                showSale
              />
              <ProductCardElectronicsDesk1
                image="/image-11@2x.png"
                star="/star-9.svg"
                txt="(142)"
                title="Apple iPhone 14 128GB White"
                price="$899.00"
                sale="$960.00"
              />
              <ProductCardElectronicsDesk1
                image="/image-12@2x.png"
                star="/starfill.svg"
                txt="(64)"
                title="Smart Watch Series 7, White"
                price="$429.00"
                sale="$960.00"
                txtMinWidth="17px"
              />
              <ProductCardElectronicsDesk
                label="New"
                image="/image-13@2x.png"
                starFill="/star-9.svg"
                starFill1="/star-9.svg"
                txt="(51)"
                title="Laptop Apple MacBook Pro 13 M2"
                price="$1,200.00"
                sale="$960.00"
                showSale={false}
                propBackgroundColor="#2f6ed5"
                propWidth="unset"
                propHeight="21px"
                priceMinWidth="99px"
                saleFlex="unset"
                saleWidth="127px"
              />
              <ProductCardElectronicsDesk1
                image="/image-14@2x.png"
                star="/starfill.svg"
                txt="(12)"
                title="Tablet Apple iPad Air M1"
                price="$540.00"
                sale="$430.00"
                txtMinWidth="15px"
              />
              <ProductCardElectronicsDesk1
                image="/image-15@2x.png"
                star="/star-9.svg"
                txt="(78)"
                title="Headphones Apple AirPods 2 Pro"
                price="$224.00"
                sale="$960.00"
                txtMinWidth="16px"
              />
              <ProductCardElectronicsDesk1
                image="/image-16@2x.png"
                star="/starfill.svg"
                txt="(48)"
                title="Tablet Apple iPad Pro M1"
                price="$640.00"
                sale="$960.00"
                txtMinWidth="17px"
              />
              <ProductCardElectronicsDesk1
                image="/image-17@2x.png"
                star="/star-9.svg"
                txt="(136)"
                title="Wireless Bluetooth Headphones Sony "
                price="$299.00"
                sale="$960.00"
                txtMinWidth="21px"
              />
            </div>
          </div>
          <div className={styles.backgroundParent}>
            <img
              className={styles.backgroundIcon1}
              alt=""
              src="/background-1@2x.png"
            />
            <img className={styles.imageIcon2} alt="" src="/image-18@2x.png" />
            <div className={styles.bannerContent1}>
              <div className={styles.contentWrapper}>
                <img
                  className={styles.shapeDividerIcon}
                  alt=""
                  src="/banner-shape.svg"
                />
                <div className={styles.innerWrapper}>
                  <img className={styles.groupIcon} alt="" src="/group.svg" />
                </div>
              </div>
            </div>
            <div className={styles.saleAnnouncement}>
              <h1 className={styles.seasonalWeeklySale}>
                seasonal weekly sale 2024
              </h1>
              <div className={styles.offerDetails}>
                <div className={styles.useCodeSaleContainer}>
                  <span className={styles.useCode}>{`Use code  `}</span>
                  <span className={styles.sale2024}>Sale 2024</span>
                  <span className={styles.toGetBest}> to get best offer</span>
                </div>
                <div className={styles.shape} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dealContainerParent}>
        <div className={styles.dealContainer}>
          <div className={styles.header}>
            <div className={styles.inner1}>
              <div className={styles.titleAndCountdown}>
                <h1 className={styles.title3}>Special offers for you</h1>
                <div className={styles.countdown}>
                  <div className={styles.countdown1}>
                    <div className={styles.d}>12d</div>
                  </div>
                  <div className={styles.countdownItem}>:</div>
                  <div className={styles.countdown2}>
                    <div className={styles.d1}>10h</div>
                  </div>
                  <div className={styles.countdownItem1}>:</div>
                  <div className={styles.countdown3}>
                    <div className={styles.d2}>12m</div>
                  </div>
                </div>
              </div>
              <div className={styles.linkButton1}>
                <a className={styles.regularText1}>View all</a>
                <img className={styles.icon3} alt="" src="/icon-14.svg" />
              </div>
            </div>
            <img className={styles.dividerIcon1} alt="" src="/divider.svg" />
          </div>
        </div>
        <div className={styles.dealProductsParent}>
          <DealProducts
            image="/image-19@2x.png"
            starFill="/starfill.svg"
            starFill1="/starfill.svg"
            txt="(14)"
            title="Xiaomi Wireless Buds Pro"
            price="$129.99"
            sale="$156.00"
            txt1="112"
            icon="/icon-25.svg"
          />
          <ProductCardElectronicsDesk2
            image="/image-12@2x.png"
            starFill="/starfill.svg"
            txt="(142)"
            title="Smart Watch Series 7, White"
            price="$429.00"
            sale="$486.00"
            txt1="45"
          />
          <ProductCardElectronicsDesk2
            image="/image-21@2x.png"
            starFill="/star-9.svg"
            txt="(64)"
            title="VRB01 Camera Nikon Max"
            price="$652.00"
            sale="$785.00"
            txt1="13"
            propTextDecoration="unset"
            propDebugCommit="unset"
            propDebugCommit1="unset"
            propWidth="68px"
          />
          <DealProducts
            image="/image-22@2x.png"
            starFill="/star-9.svg"
            starFill1="/star-9.svg"
            txt="(51)"
            title="Apple iPhone 14 128GB Blue"
            price="$899.00"
            sale="$967.00"
            txt1="7"
            icon="/icon-29.svg"
            propLeft="0px"
            propWidth="unset"
            propDebugCommit="unset"
            propDebugCommit1="unset"
            propWidth1="unset"
            propWidth2="unset"
            propLeft1="286px"
            priceMinWidth="84px"
            txtMinWidth="9px"
          />
        </div>
      </div>
      <div className={styles.dropdownMenuInner}>
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <img
              className={styles.appleIcon}
              loading="lazy"
              alt=""
              src="/apple.svg"
            />
          </div>
          <img className={styles.logoIcon} alt="" src="/logo-1.svg" />
          <img className={styles.logoIcon1} alt="" src="/logo-2.svg" />
          <img className={styles.logoIcon2} alt="" src="/logo-3.svg" />
          <img className={styles.logoIcon3} alt="" src="/logo-4.svg" />
          <textarea
            className={styles.logo1}
            placeholder="All brands"
            rows={6}
            cols={10}
          />
        </div>
      </div>
    </section>
  );
};

export default DropdownMenu;
