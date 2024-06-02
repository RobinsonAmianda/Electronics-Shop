import { FunctionComponent } from "react";
import NavbarElectronicsDesktop from "../components/NavbarElectronicsDesktop";
import FooterElectronicsDektop from "../components/FooterElectronicsDektop";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <NavbarElectronicsDesktop />
      <main className={styles.electronicsDropdown}>
        <section className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.dropdownParent}>
                <div className={styles.dropdown}>
                  <div className={styles.items}>
                    <div className={styles.item}>
                      <img
                        className={styles.computerIcon}
                        alt=""
                        src="/computer.svg"
                      />
                      <div
                        className={styles.txt}
                      >{`Computers & Accessories`}</div>
                      <img
                        className={styles.iconright}
                        alt=""
                        src="/iconright-2.svg"
                      />
                    </div>
                    <div className={styles.item1}>
                      <input className={styles.smartphone2} type="checkbox" />
                      <div
                        className={styles.txt1}
                      >{`Smartphones & Tablets`}</div>
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
                      <div
                        className={styles.txt3}
                      >{`Speakers & Home Music`}</div>
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
                      <div
                        className={styles.txt4}
                      >{`Cameras, Photo & Video`}</div>
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
                      <img
                        className={styles.watch2Icon}
                        alt=""
                        src="/watch2.svg"
                      />
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
                  <div className={styles.contentWrapper}>
                    <div className={styles.content}>
                      <div className={styles.heading}>
                        <div
                          className={styles.subtitle}
                        >{`Feel the real quality sound `}</div>
                        <h1 className={styles.title}>Headphones ProMax</h1>
                      </div>
                      <button className={styles.primaryButton}>
                        <div className={styles.label}>Shop now</div>
                        <div className={styles.carouselButtonIcon}>
                          <img
                            className={styles.icon}
                            alt=""
                            src="/icon-8.svg"
                          />
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
                <div className={styles.iconText}>
                  <img className={styles.icon1} alt="" src="/icon-9.svg" />
                  <div className={styles.txt12}>
                    <div
                      className={styles.title1}
                    >{`Free Shipping & Returns`}</div>
                    <div className={styles.txt13}>
                      For all orders over $199.00
                    </div>
                  </div>
                </div>
                <div className={styles.iconText1}>
                  <img className={styles.icon2} alt="" src="/icon-10.svg" />
                  <div className={styles.txt14}>
                    <b className={styles.title2}>Secure Payment</b>
                    <div className={styles.txt15}>We ensure secure payment</div>
                  </div>
                </div>
                <div className={styles.iconText2}>
                  <img className={styles.icon3} alt="" src="/icon-11.svg" />
                  <div className={styles.txt16}>
                    <div className={styles.title3}>Money Back Guarantee</div>
                    <div className={styles.txt17}>Returning money 30 days</div>
                  </div>
                </div>
                <div className={styles.iconText3}>
                  <img className={styles.icon4} alt="" src="/icon-12.svg" />
                  <div className={styles.txt18}>
                    <div className={styles.title4}>24/7 Customer Support</div>
                    <div className={styles.txt19}>
                      Friendly customer support
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.macbookBanner}>
                <h1 className={styles.title5}>New arrivals</h1>
                <div className={styles.bannerContent}>
                  <div className={styles.banner}>
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
                    <div className={styles.bannerInner}>
                      <div className={styles.beProAnywhereParent}>
                        <div className={styles.beProAnywhere}>
                          Be Pro Anywhere
                        </div>
                        <div className={styles.bannerButton}>
                          <div className={styles.primaryButton1}>
                            <div className={styles.label1}>From $1,199</div>
                            <div className={styles.iconWrapper}>
                              <img
                                className={styles.icon5}
                                alt=""
                                src="/icon-13.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productSlider}>
                    <div className={styles.listParent}>
                      <div className={styles.list}>
                        <div className={styles.productList}>
                          <img
                            className={styles.imageIcon2}
                            alt=""
                            src="/image-2@2x.png"
                          />
                          <div className={styles.content1}>
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
                                <img
                                  className={styles.starFillIcon3}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starIcon}
                                  alt=""
                                  src="/star.svg"
                                />
                              </div>
                              <div className={styles.txt20}>45</div>
                            </div>
                            <div className={styles.title6}>
                              Smart Watch Series 7, White
                            </div>
                            <div className={styles.price}>
                              <b className={styles.price1}>$449.00</b>
                              <div className={styles.sale}>$956.00</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.productList1}>
                          <img
                            className={styles.imageIcon3}
                            alt=""
                            src="/image-3@2x.png"
                          />
                          <div className={styles.content2}>
                            <div className={styles.rating1}>
                              <div className={styles.stars1}>
                                <img
                                  className={styles.starFillIcon4}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starFillIcon5}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starFillIcon6}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starFillIcon7}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starIcon1}
                                  alt=""
                                  src="/star-1.svg"
                                />
                              </div>
                              <div className={styles.txt21}>123</div>
                            </div>
                            <div className={styles.title7}>
                              VRB01 Virtual Reality Glasses
                            </div>
                            <div className={styles.price2}>
                              <b className={styles.price3}>$340.99</b>
                              <div className={styles.sale1}>$956.00</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.productList2}>
                          <img
                            className={styles.imageIcon4}
                            alt=""
                            src="/image-4@2x.png"
                          />
                          <div className={styles.content3}>
                            <div className={styles.rating2}>
                              <div className={styles.stars2}>
                                <img
                                  className={styles.starFillIcon8}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starFillIcon9}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starFillIcon10}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starFillIcon11}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starIcon2}
                                  alt=""
                                  src="/star-1.svg"
                                />
                              </div>
                              <div className={styles.txt22}>34</div>
                            </div>
                            <div
                              className={styles.title8}
                            >{`Wireless Bluetooth Headphones Sony `}</div>
                            <div className={styles.price4}>
                              <b className={styles.price5}>$357.00</b>
                              <div className={styles.sale2}>$956.00</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.productList3}>
                          <img
                            className={styles.imageIcon5}
                            alt=""
                            src="/image-5@2x.png"
                          />
                          <div className={styles.content4}>
                            <div className={styles.rating3}>
                              <div className={styles.stars3}>
                                <img
                                  className={styles.starFillIcon12}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starFillIcon13}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starFillIcon14}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starFillIcon15}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starIcon3}
                                  alt=""
                                  src="/star.svg"
                                />
                              </div>
                              <div className={styles.txt23}>8</div>
                            </div>
                            <div className={styles.title9}>
                              Laptop Apple MacBook Pro 13 M2
                            </div>
                            <div className={styles.price6}>
                              <b className={styles.price7}>$1,200.00</b>
                              <div className={styles.sale3}>$956.00</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.list1}>
                        <div className={styles.productList4}>
                          <img
                            className={styles.imageIcon6}
                            alt=""
                            src="/image-6@2x.png"
                          />
                          <div className={styles.content5}>
                            <div className={styles.rating4}>
                              <div className={styles.stars4}>
                                <img
                                  className={styles.starFillIcon16}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starFillIcon17}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starFillIcon18}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starIcon4}
                                  alt=""
                                  src="/star-4.svg"
                                />
                                <img
                                  className={styles.starIcon5}
                                  alt=""
                                  src="/star-1.svg"
                                />
                              </div>
                              <div className={styles.txt24}>126</div>
                            </div>
                            <div className={styles.title10}>
                              Tablet Apple iPad Air M1
                            </div>
                            <div className={styles.price8}>
                              <b className={styles.price9}>$540.00</b>
                              <div className={styles.sale4}>$956.00</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.productList5}>
                          <img
                            className={styles.imageIcon7}
                            alt=""
                            src="/image-7@2x.png"
                          />
                          <div className={styles.content6}>
                            <div className={styles.rating5}>
                              <div className={styles.stars5}>
                                <img
                                  className={styles.starFillIcon19}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starFillIcon20}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starFillIcon21}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starFillIcon22}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starIcon6}
                                  alt=""
                                  src="/star.svg"
                                />
                              </div>
                              <div className={styles.txt25}>340</div>
                            </div>
                            <div className={styles.title11}>
                              Headphones Apple AirPods 2 Pro
                            </div>
                            <div className={styles.price10}>
                              <b className={styles.price11}>$209.99</b>
                              <s className={styles.sale5}>$356.00</s>
                            </div>
                          </div>
                        </div>
                        <div className={styles.productList6}>
                          <img
                            className={styles.imageIcon8}
                            alt=""
                            src="/image-8@2x.png"
                          />
                          <div className={styles.content7}>
                            <div className={styles.rating6}>
                              <div className={styles.stars6}>
                                <img
                                  className={styles.starFillIcon23}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starFillIcon24}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starFillIcon25}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starFillIcon26}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starIcon7}
                                  alt=""
                                  src="/star-1.svg"
                                />
                              </div>
                              <div className={styles.txt26}>29</div>
                            </div>
                            <div className={styles.title12}>
                              Power Bank PBS 10000 mAh Black
                            </div>
                            <div className={styles.price12}>
                              <b className={styles.price13}>$49.99</b>
                              <div className={styles.sale6}>$956.00</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.productList7}>
                          <img
                            className={styles.imageIcon9}
                            alt=""
                            src="/image-9@2x.png"
                          />
                          <div className={styles.content8}>
                            <div className={styles.rating7}>
                              <div className={styles.stars7}>
                                <img
                                  className={styles.starFillIcon27}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starFillIcon28}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starFillIcon29}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starFillIcon30}
                                  alt=""
                                  src="/starfill.svg"
                                />
                                <img
                                  className={styles.starIcon8}
                                  alt=""
                                  src="/star.svg"
                                />
                              </div>
                              <div className={styles.txt27}>12</div>
                            </div>
                            <div className={styles.title13}>
                              Apple iPhone 14 128GB White
                            </div>
                            <div className={styles.price14}>
                              <b className={styles.price15}>$899.00</b>
                              <s className={styles.sale7}>$956.00</s>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.topProducts}>
                <div className={styles.top}>
                  <div className={styles.inner}>
                    <h1 className={styles.title14}>Trending products</h1>
                    <div className={styles.linkButton}>
                      <a className={styles.regularText}>View all</a>
                      <img className={styles.icon6} alt="" src="/icon-14.svg" />
                    </div>
                  </div>
                  <img
                    className={styles.dividerIcon}
                    alt=""
                    src="/divider.svg"
                  />
                </div>
                <div className={styles.productCards}>
                  <div className={styles.productCardElectronicsDesk}>
                    <div className={styles.thumb}>
                      <div className={styles.badge}>
                        <div className={styles.label2}>-21%</div>
                      </div>
                      <img
                        className={styles.imageIcon10}
                        alt=""
                        src="/image-10@2x.png"
                      />
                    </div>
                    <div className={styles.body}>
                      <div className={styles.titlerating}>
                        <div className={styles.rating8}>
                          <div className={styles.stars8}>
                            <img
                              className={styles.starFillIcon31}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon32}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon33}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon34}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon35}
                              alt=""
                              src="/starfill.svg"
                            />
                          </div>
                          <div className={styles.txt28}>(14)</div>
                        </div>
                        <div className={styles.title15}>
                          VRB01 Virtual Reality Glasses
                        </div>
                      </div>
                      <div className={styles.pricebtn}>
                        <div className={styles.price16}>
                          <b className={styles.price17}>$340.99</b>
                          <s className={styles.sale8}>$430.00</s>
                        </div>
                        <div className={styles.secondaryButton}>
                          <img
                            className={styles.icon7}
                            alt=""
                            src="/icon-15.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productCardElectronicsDesk1}>
                    <div className={styles.thumb1}>
                      <div className={styles.badge1}>
                        <div className={styles.label3}>-17%</div>
                      </div>
                      <img
                        className={styles.imageIcon11}
                        alt=""
                        src="/image-11@2x.png"
                      />
                    </div>
                    <div className={styles.body1}>
                      <div className={styles.titlerating1}>
                        <div className={styles.rating9}>
                          <div className={styles.stars9}>
                            <img
                              className={styles.starFillIcon36}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon37}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon38}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon39}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starIcon9}
                              alt=""
                              src="/star-9.svg"
                            />
                          </div>
                          <div className={styles.txt29}>(142)</div>
                        </div>
                        <div className={styles.title16}>
                          Apple iPhone 14 128GB White
                        </div>
                      </div>
                      <div className={styles.pricebtn1}>
                        <div className={styles.price18}>
                          <b className={styles.price19}>$899.00</b>
                          <div className={styles.sale9}>$960.00</div>
                        </div>
                        <div className={styles.secondaryButton1}>
                          <img
                            className={styles.icon8}
                            alt=""
                            src="/icon-15.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productCardElectronicsDesk2}>
                    <div className={styles.thumb2}>
                      <div className={styles.badge2}>
                        <div className={styles.label4}>-17%</div>
                      </div>
                      <img
                        className={styles.imageIcon12}
                        alt=""
                        src="/image-12@2x.png"
                      />
                    </div>
                    <div className={styles.body2}>
                      <div className={styles.titlerating2}>
                        <div className={styles.rating10}>
                          <div className={styles.stars10}>
                            <img
                              className={styles.starFillIcon40}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon41}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon42}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon43}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon44}
                              alt=""
                              src="/starfill.svg"
                            />
                          </div>
                          <div className={styles.txt30}>(64)</div>
                        </div>
                        <div className={styles.title17}>
                          Smart Watch Series 7, White
                        </div>
                      </div>
                      <div className={styles.pricebtn2}>
                        <div className={styles.price20}>
                          <b className={styles.price21}>$429.00</b>
                          <div className={styles.sale10}>$960.00</div>
                        </div>
                        <div className={styles.secondaryButton2}>
                          <img
                            className={styles.icon9}
                            alt=""
                            src="/icon-15.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productCardElectronicsDesk3}>
                    <div className={styles.thumb3}>
                      <div className={styles.badge3}>
                        <div className={styles.label5}>New</div>
                      </div>
                      <img
                        className={styles.imageIcon13}
                        alt=""
                        src="/image-13@2x.png"
                      />
                    </div>
                    <div className={styles.body3}>
                      <div className={styles.titlerating3}>
                        <div className={styles.rating11}>
                          <div className={styles.stars11}>
                            <img
                              className={styles.starFillIcon45}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon46}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon47}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starIcon10}
                              alt=""
                              src="/star-9.svg"
                            />
                            <img
                              className={styles.starIcon11}
                              alt=""
                              src="/star-9.svg"
                            />
                          </div>
                          <div className={styles.txt31}>(51)</div>
                        </div>
                        <div className={styles.title18}>
                          Laptop Apple MacBook Pro 13 M2
                        </div>
                      </div>
                      <div className={styles.pricebtn3}>
                        <div className={styles.price22}>
                          <b className={styles.price23}>$1,200.00</b>
                          <div className={styles.sale11}>$960.00</div>
                        </div>
                        <div className={styles.secondaryButton3}>
                          <img
                            className={styles.icon10}
                            alt=""
                            src="/icon-15.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productCardElectronicsDesk4}>
                    <div className={styles.thumb4}>
                      <div className={styles.badge4}>
                        <div className={styles.label6}>-17%</div>
                      </div>
                      <img
                        className={styles.imageIcon14}
                        alt=""
                        src="/image-14@2x.png"
                      />
                    </div>
                    <div className={styles.body4}>
                      <div className={styles.titlerating4}>
                        <div className={styles.rating12}>
                          <div className={styles.stars12}>
                            <img
                              className={styles.starFillIcon48}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon49}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon50}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon51}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon52}
                              alt=""
                              src="/starfill.svg"
                            />
                          </div>
                          <div className={styles.txt32}>(12)</div>
                        </div>
                        <div className={styles.title19}>
                          Tablet Apple iPad Air M1
                        </div>
                      </div>
                      <div className={styles.pricebtn4}>
                        <div className={styles.price24}>
                          <b className={styles.price25}>$540.00</b>
                          <div className={styles.sale12}>$430.00</div>
                        </div>
                        <div className={styles.secondaryButton4}>
                          <img
                            className={styles.icon11}
                            alt=""
                            src="/icon-15.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productCardElectronicsDesk5}>
                    <div className={styles.thumb5}>
                      <div className={styles.badge5}>
                        <div className={styles.label7}>-17%</div>
                      </div>
                      <img
                        className={styles.imageIcon15}
                        alt=""
                        src="/image-15@2x.png"
                      />
                    </div>
                    <div className={styles.body5}>
                      <div className={styles.titlerating5}>
                        <div className={styles.rating13}>
                          <div className={styles.stars13}>
                            <img
                              className={styles.starFillIcon53}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon54}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon55}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon56}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starIcon12}
                              alt=""
                              src="/star-9.svg"
                            />
                          </div>
                          <div className={styles.txt33}>(78)</div>
                        </div>
                        <div className={styles.title20}>
                          Headphones Apple AirPods 2 Pro
                        </div>
                      </div>
                      <div className={styles.pricebtn5}>
                        <div className={styles.price26}>
                          <b className={styles.price27}>$224.00</b>
                          <div className={styles.sale13}>$960.00</div>
                        </div>
                        <div className={styles.secondaryButton5}>
                          <img
                            className={styles.icon12}
                            alt=""
                            src="/icon-15.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productCardElectronicsDesk6}>
                    <div className={styles.thumb6}>
                      <div className={styles.badge6}>
                        <div className={styles.label8}>-17%</div>
                      </div>
                      <img
                        className={styles.imageIcon16}
                        alt=""
                        src="/image-16@2x.png"
                      />
                    </div>
                    <div className={styles.body6}>
                      <div className={styles.titlerating6}>
                        <div className={styles.rating14}>
                          <div className={styles.stars14}>
                            <img
                              className={styles.starFillIcon57}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon58}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon59}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon60}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon61}
                              alt=""
                              src="/starfill.svg"
                            />
                          </div>
                          <div className={styles.txt34}>(48)</div>
                        </div>
                        <div className={styles.title21}>
                          Tablet Apple iPad Pro M1
                        </div>
                      </div>
                      <div className={styles.pricebtn6}>
                        <div className={styles.price28}>
                          <b className={styles.price29}>$640.00</b>
                          <div className={styles.sale14}>$960.00</div>
                        </div>
                        <div className={styles.secondaryButton6}>
                          <img
                            className={styles.icon13}
                            alt=""
                            src="/icon-15.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productCardElectronicsDesk7}>
                    <div className={styles.thumb7}>
                      <div className={styles.badge7}>
                        <div className={styles.label9}>-17%</div>
                      </div>
                      <img
                        className={styles.imageIcon17}
                        alt=""
                        src="/image-17@2x.png"
                      />
                    </div>
                    <div className={styles.body7}>
                      <div className={styles.titlerating7}>
                        <div className={styles.rating15}>
                          <div className={styles.stars15}>
                            <img
                              className={styles.starFillIcon62}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon63}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon64}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starFillIcon65}
                              alt=""
                              src="/starfill.svg"
                            />
                            <img
                              className={styles.starIcon13}
                              alt=""
                              src="/star-9.svg"
                            />
                          </div>
                          <div className={styles.txt35}>(136)</div>
                        </div>
                        <div
                          className={styles.title22}
                        >{`Wireless Bluetooth Headphones Sony `}</div>
                      </div>
                      <div className={styles.pricebtn7}>
                        <div className={styles.price30}>
                          <b className={styles.price31}>$299.00</b>
                          <div className={styles.sale15}>$960.00</div>
                        </div>
                        <div className={styles.secondaryButton7}>
                          <img
                            className={styles.icon14}
                            alt=""
                            src="/icon-15.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.saleBanner}>
                <img
                  className={styles.backgroundIcon1}
                  alt=""
                  src="/background-1@2x.png"
                />
                <img
                  className={styles.imageIcon18}
                  alt=""
                  src="/image-18@2x.png"
                />
                <div className={styles.bannerContent1}>
                  <div className={styles.bannerShapeParent}>
                    <img
                      className={styles.bannerShapeIcon}
                      alt=""
                      src="/banner-shape.svg"
                    />
                    <div className={styles.groupWrapper}>
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.saleOffer}>
                  <h1 className={styles.seasonalWeeklySale}>
                    seasonal weekly sale 2024
                  </h1>
                  <div className={styles.saleOfferDescription}>
                    <div className={styles.useCodeSaleContainer}>
                      <span className={styles.useCode}>{`Use code  `}</span>
                      <span className={styles.sale2024}>Sale 2024</span>
                      <span className={styles.toGetBest}>
                        {" "}
                        to get best offer
                      </span>
                    </div>
                    <div className={styles.shape} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.featuredProducts}>
            <div className={styles.featuredContainer}>
              <div className={styles.header}>
                <div className={styles.inner1}>
                  <div className={styles.titleAndCountdown}>
                    <h1 className={styles.title23}>Special offers for you</h1>
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
                    <img className={styles.icon15} alt="" src="/icon-14.svg" />
                  </div>
                </div>
                <img
                  className={styles.dividerIcon1}
                  alt=""
                  src="/divider.svg"
                />
              </div>
            </div>
            <div className={styles.dealProducts}>
              <div className={styles.productCardElectronicsDeskParent}>
                <div className={styles.productCardElectronicsDesk8}>
                  <div className={styles.thumb8}>
                    <div className={styles.badge8}>
                      <div className={styles.label10}>-17%</div>
                    </div>
                    <img
                      className={styles.imageIcon19}
                      alt=""
                      src="/image-19@2x.png"
                    />
                  </div>
                  <div className={styles.body8}>
                    <div className={styles.titlerating8}>
                      <div className={styles.rating16}>
                        <div className={styles.stars16}>
                          <img
                            className={styles.starFillIcon66}
                            alt=""
                            src="/starfill.svg"
                          />
                          <img
                            className={styles.starFillIcon67}
                            alt=""
                            src="/starfill.svg"
                          />
                          <img
                            className={styles.starFillIcon68}
                            alt=""
                            src="/starfill.svg"
                          />
                          <img
                            className={styles.starFillIcon69}
                            alt=""
                            src="/starfill.svg"
                          />
                          <img
                            className={styles.starFillIcon70}
                            alt=""
                            src="/starfill.svg"
                          />
                        </div>
                        <div className={styles.txt36}>(14)</div>
                      </div>
                      <div className={styles.title24}>
                        Xiaomi Wireless Buds Pro
                      </div>
                    </div>
                    <div className={styles.pricebtn8}>
                      <div className={styles.price32}>
                        <b className={styles.price33}>$129.99</b>
                        <div className={styles.saleWrapper}>
                          <s className={styles.sale16}>$156.00</s>
                        </div>
                      </div>
                      <div className={styles.secondaryButton8}>
                        <img
                          className={styles.icon16}
                          alt=""
                          src="/icon-15.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.progress1}>
                      <div className={styles.progress2}>
                        <div className={styles.trail1} />
                        <div className={styles.filledTrail1} />
                      </div>
                      <div className={styles.txt37}>
                        <div className={styles.txt38}>Available:</div>
                        <div className={styles.dealProductProgressPercent}>
                          <div className={styles.txt39}>112</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.secondaryButton9}>
                  <img className={styles.icon17} alt="" src="/icon-25.svg" />
                </div>
              </div>
              <div className={styles.productCardElectronicsDesk9}>
                <div className={styles.thumb9}>
                  <div className={styles.badge9}>
                    <div className={styles.label11}>-17%</div>
                  </div>
                  <img
                    className={styles.imageIcon20}
                    alt=""
                    src="/image-12@2x.png"
                  />
                </div>
                <div className={styles.body9}>
                  <div className={styles.titlerating9}>
                    <div className={styles.rating17}>
                      <div className={styles.stars17}>
                        <img
                          className={styles.starFillIcon71}
                          alt=""
                          src="/starfill.svg"
                        />
                        <img
                          className={styles.starFillIcon72}
                          alt=""
                          src="/starfill.svg"
                        />
                        <img
                          className={styles.starFillIcon73}
                          alt=""
                          src="/starfill.svg"
                        />
                        <img
                          className={styles.starFillIcon74}
                          alt=""
                          src="/starfill.svg"
                        />
                        <img
                          className={styles.starFillIcon75}
                          alt=""
                          src="/starfill.svg"
                        />
                      </div>
                      <div className={styles.txt40}>(142)</div>
                    </div>
                    <div className={styles.title25}>
                      Smart Watch Series 7, White
                    </div>
                  </div>
                  <div className={styles.pricebtn9}>
                    <div className={styles.price34}>
                      <b className={styles.price35}>$429.00</b>
                      <div className={styles.quickViewSaleTag}>
                        <s className={styles.sale17}>$486.00</s>
                      </div>
                    </div>
                    <div className={styles.secondaryButton10}>
                      <img
                        className={styles.icon18}
                        alt=""
                        src="/icon-15.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.progress3}>
                    <div className={styles.progress4}>
                      <div className={styles.trail2} />
                      <div className={styles.filledTrail2} />
                    </div>
                    <div className={styles.txt41}>
                      <div className={styles.txt42}>Available:</div>
                      <div className={styles.quickViewProgressValue}>
                        <div className={styles.txt43}>45</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.productCardElectronicsDesk10}>
                <div className={styles.thumb10}>
                  <div className={styles.badge10}>
                    <div className={styles.label12}>-17%</div>
                  </div>
                  <img
                    className={styles.imageIcon21}
                    alt=""
                    src="/image-21@2x.png"
                  />
                </div>
                <div className={styles.body10}>
                  <div className={styles.titlerating10}>
                    <div className={styles.rating18}>
                      <div className={styles.stars18}>
                        <img
                          className={styles.starFillIcon76}
                          alt=""
                          src="/starfill.svg"
                        />
                        <img
                          className={styles.starFillIcon77}
                          alt=""
                          src="/starfill.svg"
                        />
                        <img
                          className={styles.starFillIcon78}
                          alt=""
                          src="/starfill.svg"
                        />
                        <img
                          className={styles.starFillIcon79}
                          alt=""
                          src="/starfill.svg"
                        />
                        <img
                          className={styles.starIcon14}
                          alt=""
                          src="/star-9.svg"
                        />
                      </div>
                      <div className={styles.txt44}>(64)</div>
                    </div>
                    <div className={styles.title26}>VRB01 Camera Nikon Max</div>
                  </div>
                  <div className={styles.pricebtn10}>
                    <div className={styles.price36}>
                      <b className={styles.price37}>$652.00</b>
                      <div className={styles.saleContainer}>
                        <s className={styles.sale18}>$785.00</s>
                      </div>
                    </div>
                    <div className={styles.secondaryButton11}>
                      <img
                        className={styles.icon19}
                        alt=""
                        src="/icon-15.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.progress5}>
                    <div className={styles.progress6}>
                      <div className={styles.trail3} />
                      <div className={styles.filledTrail3} />
                    </div>
                    <div className={styles.txt45}>
                      <div className={styles.txt46}>Available:</div>
                      <div className={styles.txtWrapper}>
                        <div className={styles.txt47}>13</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.productCardElectronicsDeskGroup}>
                <div className={styles.productCardElectronicsDesk11}>
                  <div className={styles.thumb11}>
                    <div className={styles.badge11}>
                      <div className={styles.label13}>-17%</div>
                    </div>
                    <img
                      className={styles.imageIcon22}
                      alt=""
                      src="/image-22@2x.png"
                    />
                  </div>
                  <div className={styles.body11}>
                    <div className={styles.titlerating11}>
                      <div className={styles.rating19}>
                        <div className={styles.stars19}>
                          <img
                            className={styles.starFillIcon80}
                            alt=""
                            src="/starfill.svg"
                          />
                          <img
                            className={styles.starFillIcon81}
                            alt=""
                            src="/starfill.svg"
                          />
                          <img
                            className={styles.starFillIcon82}
                            alt=""
                            src="/starfill.svg"
                          />
                          <img
                            className={styles.starIcon15}
                            alt=""
                            src="/star-9.svg"
                          />
                          <img
                            className={styles.starIcon16}
                            alt=""
                            src="/star-9.svg"
                          />
                        </div>
                        <div className={styles.txt48}>(51)</div>
                      </div>
                      <div className={styles.title27}>
                        Apple iPhone 14 128GB Blue
                      </div>
                    </div>
                    <div className={styles.pricebtn11}>
                      <div className={styles.price38}>
                        <b className={styles.price39}>$899.00</b>
                        <div className={styles.saleFrame}>
                          <s className={styles.sale19}>$967.00</s>
                        </div>
                      </div>
                      <div className={styles.secondaryButton12}>
                        <img
                          className={styles.icon20}
                          alt=""
                          src="/icon-15.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.progress7}>
                      <div className={styles.progress8}>
                        <div className={styles.trail4} />
                        <div className={styles.filledTrail4} />
                      </div>
                      <div className={styles.txt49}>
                        <div className={styles.txt50}>Available:</div>
                        <div className={styles.txtContainer}>
                          <div className={styles.txt51}>7</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.secondaryButton13}>
                  <img className={styles.icon21} alt="" src="/icon-29.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.brandLogos}>
            <div className={styles.logoContainer}>
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
      </main>
      <div className={styles.subscriptionVideoFeed}>
        <div className={styles.container}>
          <div className={styles.subscription}>
            <div className={styles.top1}>
              <div className={styles.heading1}>
                <h2 className={styles.title28}>Sign up to our newsletter</h2>
                <p
                  className={styles.txt52}
                >{`Receive our latest updates about our products & promotions`}</p>
              </div>
              <div className={styles.inputGroup}>
                <div className={styles.input}>
                  <input
                    className={styles.placeholder}
                    placeholder="Your email"
                    type="text"
                  />
                </div>
                <button className={styles.primaryButton2}>
                  <div className={styles.label14}>Subscribe</div>
                </button>
              </div>
            </div>
            <div className={styles.socialButtons}>
              <div className={styles.secondaryButton14}>
                <img className={styles.icon22} alt="" src="/icon-31.svg" />
              </div>
              <div className={styles.secondaryButton15}>
                <img className={styles.icon23} alt="" src="/icon-32.svg" />
              </div>
              <div className={styles.secondaryButton16}>
                <img className={styles.icon24} alt="" src="/icon-33.svg" />
              </div>
              <div className={styles.secondaryButton17}>
                <img className={styles.icon25} alt="" src="/icon-34.svg" />
              </div>
            </div>
          </div>
          <div className={styles.videoList}>
            <div className={styles.list2}>
              <div className={styles.videoCard}>
                <img
                  className={styles.imageIcon23}
                  alt=""
                  src="/image-23@2x.png"
                />
                <div className={styles.text}>
                  <div className={styles.time}>6:16</div>
                  <p className={styles.title29}>
                    5 New Cool Gadgets You Must See on Cartzilla - Cheap Budget
                  </p>
                </div>
              </div>
              <div className={styles.videoCard1}>
                <img
                  className={styles.imageIcon24}
                  alt=""
                  src="/image-24@2x.png"
                />
                <div className={styles.text1}>
                  <div className={styles.time1}>10:20</div>
                  <p className={styles.title30}>
                    5 Super Useful Gadgets on Cartzilla You Must Have in 2023
                  </p>
                </div>
              </div>
              <div className={styles.videoCard2}>
                <img
                  className={styles.imageIcon25}
                  alt=""
                  src="/image-25@2x.png"
                />
                <div className={styles.text2}>
                  <div className={styles.time2}>8:40</div>
                  <div className={styles.top5New}>
                    Top 5 New Amazing Gadgets on Cartzilla You Must See
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.linkButton2}>
              <a className={styles.regularText2}>View all</a>
              <img className={styles.icon26} alt="" src="/icon-35.svg" />
            </div>
          </div>
        </div>
      </div>
      <FooterElectronicsDektop />
    </div>
  );
};

export default Homepage;
