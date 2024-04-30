import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
import { Container, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  FaceBookIcon,
  InstagramIcon,
  StarIcon,
  TelegramIcon,
  WhatsupIcon,
} from "helpers/icons";
import i18n from "i18n";

const navItems = [
  {
    path: "/services",
    slug: "services",
    state: null,
  },
  {
    path: "/projects",
    slug: "projects",
    state: null,
  },
  {
    path: "/about",
    slug: "about",
    state: null,
  },
  {
    path: "/blog",
    slug: "blog",
    state: null,
  },
  {
    path: "/career",
    slug: "career",
    state: null,
  },
  {
    path: "/contact",
    slug: "contact",
    state: null,
  },
];

const medias = [
  // {
  //   icon: <FaceBookIcon/>,
  //   link: "",
  // },
  {
    icon: <InstagramIcon />,
    link: "",
  },
  {
    icon: <TelegramIcon />,
    link: "",
  },
  {
    icon: <WhatsupIcon />,
    link: "",
  },
];

export function Footer() {
  const { t } = useTranslation("common");
  const {
    palette: { mode },
  } = useTheme();
  return (
    <footer
      className={styles.footer}
      style={{ backgroundColor: mode === "dark" ? "" : "#2B2D42" }}
    >
      <Container>
        <div className={styles.footer_main}>
          <div className={styles.star_items}>
            <span className={`${styles.star_items_item} ${styles.item1}`}>
              {/* <img src="../../Portal.png" alt="" /> */}
              <StarIcon/>
            </span>
            <span className={`${styles.star_items_item} ${styles.item2}`}>
              <StarIcon/>
            </span>
            <span className={`${styles.star_items_item} ${styles.item3}`}>
              <StarIcon/>
            </span>
          </div>
          <div className={styles.footer_main_logo}>
            <NavLink
              to="/"
              style={{
                color: "inherit",
                textDecoration: "inherit",
              }}
            >
              <h2 className={styles.footer_main_logo}>meraki.</h2>
            </NavLink>
          </div>
          <div className={styles.footer_main_info}>
            <div className={styles.footer_main_info_items}>
              <h4>{t("location")}</h4>
              <p>
                {i18n.language === "en" ? (
                  <>
                    Tashkent, Uzbekistan <br />
                    Yakkasaray district, <br />
                    Urikzor st., 124
                  </>
                ) : i18n.language === "ru" ? (
                  <>
                    Ташкент, Узбекистан <br />
                    Яккасарайский район, <br />
                    ул. Урикзор, 124
                  </>
                ) : (
                  <>
                    Toshkent, O'zbekiston <br />
                    Yakkasaroy tumani, <br />
                    Oʻrikzor koʻchasi, 124-uy
                  </>
                )}
              </p>
            </div>
            <div className={styles.footer_main_info_items}>
              <h4>{t("pages")}</h4>
              <nav>
                <ul>
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        state={item.state}
                        style={({ isActive }) => ({
                          color: isActive
                            ? mode === "dark"
                              ? "#FFFFFF"
                              : "crimson"
                            : "inherit",
                          textDecoration: "inherit",
                        })}
                      >
                        {t(item.slug)}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className={styles.footer_main_info_items}>
              <h4>{t("our social medias")}</h4>
              <nav>
                <ul>
                  {medias.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.link}
                        style={{
                          color: "inherit",
                          textDecoration: "inherit",
                        }}
                      >
                        {item.icon}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <span className={styles.footer_items}>
          {t("© 2024 meraki. - All rights reserved.")}
          <a href="/">Digitals_Group</a>
        </span>
      </Container>
    </footer>
  );
}
