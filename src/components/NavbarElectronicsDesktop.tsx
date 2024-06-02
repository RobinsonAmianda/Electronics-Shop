import { FunctionComponent, useState } from "react";
import {
  TextField,
  Icon,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./NavbarElectronicsDesktop.module.css";

export type NavbarElectronicsDesktopType = {
  className?: string;
};

const NavbarElectronicsDesktop: FunctionComponent<
  NavbarElectronicsDesktopType
> = ({ className = "" }) => {
  const [
    categoriesToggleDateTimePickerValue,
    setCategoriesToggleDateTimePickerValue,
  ] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <header
        className={[styles.navbarElectronicsDesktop, className].join(" ")}
      >
        <div className={styles.topbar}>
          <div className={styles.logoWrapper}>
            <div className={styles.logo}>
              <img className={styles.logoIcon} alt="" src="/logo.svg" />
              <div className={styles.cartzillaWrapper}>
                <img
                  className={styles.cartzillaIcon}
                  alt=""
                  src="/cartzilla.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.inputParent}>
            <div className={styles.input}>
              <div className={styles.icon}>
                <img className={styles.icon1} alt="" src="/icon.svg" />
              </div>
              <input
                className={styles.placeholder}
                placeholder="Search the products"
                type="text"
              />
            </div>
            <div className={styles.sale}>
              <div className={styles.secondaryButton}>
                <img className={styles.icon2} alt="" src="/icon-1.svg" />
              </div>
              <div className={styles.txtWrapper}>
                <div className={styles.txt}>
                  <div className={styles.txt1}>Only this month</div>
                  <a className={styles.txt2}>Super Sale 20%</a>
                </div>
              </div>
            </div>
            <div className={styles.buttons}>
              <div className={styles.secondaryButton1}>
                <img className={styles.icon3} alt="" src="/icon-1.svg" />
              </div>
              <div className={styles.secondaryButton2}>
                <img className={styles.icon4} alt="" src="/icon-1.svg" />
              </div>
              <div className={styles.secondaryButton3}>
                <img className={styles.icon5} alt="" src="/icon-1.svg" />
              </div>
              <div className={styles.cartButton}>
                <div className={styles.secondaryButton4}>
                  <img className={styles.icon6} alt="" src="/icon-1.svg" />
                </div>
                <div className={styles.number}>
                  <div className={styles.cartCircle} />
                  <a className={styles.txt3}>3</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navbar}>
          <div className={styles.categories}>
            <div className={styles.categoriesToggle}>
              <DatePicker
                value={categoriesToggleDateTimePickerValue}
                onChange={(newValue: any) => {
                  setCategoriesToggleDateTimePickerValue(newValue);
                }}
                sx={{
                  fieldset: {
                    borderColor: "transparent",
                    borderTopWidth: 1,
                    borderRightWidth: 1,
                    borderBottomWidth: 1,
                    borderLeftWidth: 1,
                  },
                  "&:hover": {
                    fieldset: { borderColor: "transparent" },
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                  },
                  "& input::placeholder": {
                    textColor: "#e0e5eb",
                    fontSize: 16,
                  },
                  input: {
                    color: "#e0e5eb",
                    fontSize: 16,
                    textAlign: "left",
                    fontWeight: "500",
                  },
                  "& .MuiInputBase-root": {
                    backgroundColor: "#333d4c",
                    height: 48,
                    gap: "8px",
                    flexDirection: { flexDirection: "row" },
                  },
                }}
                slotProps={{
                  textField: {
                    name: "Date",
                    size: "medium",
                    fullWidth: false,
                    required: false,
                    autoFocus: false,
                    error: false,
                    color: "primary",
                    placeholder: "Enter Date",
                  },
                  openPickerIcon: {
                    component: () => (
                      <img width="18px" height="18px" src="/icon-6.svg" />
                    ),
                  },
                }}
              />
            </div>
            <nav className={styles.nav}>
              <div className={styles.navLink}>
                <a className={styles.txt4}>Best Sellers</a>
              </div>
              <div className={styles.navLink1}>
                <a className={styles.txt5}>Today’s Deals</a>
              </div>
              <div className={styles.navLink2}>
                <a className={styles.txt6}>New Arrivals</a>
              </div>
              <div className={styles.navLink3}>
                <a className={styles.txt7}>Gift Cards</a>
              </div>
              <div className={styles.navLink4}>
                <a className={styles.txt8}>Help Center</a>
              </div>
            </nav>
          </div>
          <div className={styles.languageCurrecy}>
            <FormControl
              className={styles.item}
              variant="outlined"
              sx={{
                borderRadius: "0px 0px 0px 0px",
                width: "48px",
                height: "48px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "48px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "48px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "48px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "48px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select color="primary" disableUnderline displayEmpty />
              <FormHelperText />
            </FormControl>
            <FormControl
              className={styles.item1}
              variant="outlined"
              sx={{
                borderRadius: "0px 0px 0px 0px",
                width: "71px",
                height: "48px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "48px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "48px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "48px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "48px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select color="primary" disableUnderline displayEmpty />
              <FormHelperText />
            </FormControl>
          </div>
        </div>
      </header>
    </LocalizationProvider>
  );
};

export default NavbarElectronicsDesktop;
