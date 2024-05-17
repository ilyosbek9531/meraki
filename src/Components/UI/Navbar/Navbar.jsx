import { Button, Container, IconButton, useTheme } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Nabvar.module.scss";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useDispatch } from "react-redux";
import { themeActions } from "redux/theme/theme.slice";
import {
  Divider,
  LangEnIcon,
  LangRuIcon,
  LangUzIcon,
  LanguageIcon,
} from "helpers/icons";
import { useEffect, useState } from "react";

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

export function Navbar() {
  const { t, i18n } = useTranslation("common");
  const dispatch = useDispatch();
  const langs = [
    {
      key: "ru",
      label: "ru",
      icon: <LangRuIcon />,
    },
    {
      key: "uz",
      label: "uz",
      icon: <LangUzIcon />,
    },
    {
      key: "en",
      label: "en",
      icon: <LangEnIcon />,
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  const {
    palette: { mode },
  } = useTheme();


  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`} style={{backgroundColor: mode === "dark" ? "#2A2A2A" : "#F6F6F6" }}>
      <Container>
        <div className={styles.header_navbar} >
          <NavLink
            to="/"
            style={{
              color: "inherit",
              textDecoration: "inherit",
            }}
          >
            <h2 className={styles.header_navbar_logo}>meraki.</h2>
          </NavLink>
          <nav>
            <ul>
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    state={item.state}
                    style={({ isActive }) => ({
                      color: isActive
                        ? "#EC3B3B"
                        : "inherit",
                      textDecoration: "inherit",
                      borderBottom: isActive ? "2px solid #EC3B3B" : "",
                      paddingBottom: isActive ? "4px" : "",
                    })}
                  >
                    {t(item.slug)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.header_navbar_utils}>
            <IconButton
              onClick={() => dispatch(themeActions.colorMode())}
              color="inherit"
            >
              {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

            <Divider stroke={mode === "dark" ? "white" : "black"} />

            <div className={styles.header_navbar_utils_langs}>
              <li className={styles.item}>
                <div
                  className={styles.item_wrapper}
                  style={{
                    borderColor: mode === "dark" ? "#F4F4F4" : "#2B2D42",
                  }}
                >
                  <LanguageIcon fill={mode === "dark" ? "#FAFAFA" : "#000"} />

                  <span>{i18n.language}</span>
                </div>
                <div className={styles.childList}>
                  <ul
                    style={{
                      backgroundColor: mode === "dark" ? "#2A2A2A" : "",
                    }}
                  >
                    {langs.map((lang) => (
                      <li
                        key={lang?.label}
                        className={styles.childItems}
                        onClick={() => handleChangeLang(lang.label)}
                      >
                        <>
                          {lang.icon}
                          <a style={{ color: mode === "dark" ? "white" : "" }}>
                            {lang.label}{" "}
                          </a>
                        </>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </div>

            <Divider stroke={mode === "dark" ? "white" : "black"} />
            <Link to={"/contact"}>
              <Button variant="contained" fullWidth={true}>
                    {t("let's talk")}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
