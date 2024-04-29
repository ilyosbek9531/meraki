import { Container, IconButton, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Nabvar.module.scss";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useDispatch } from "react-redux";
import { themeActions } from "redux/theme/theme.slice";
import { Divider, GithubIcon, LinkedinIcon, TelegramIcon } from "helpers/icons";

const navItems = [
  {
    path: "/",
    slug: "home",
    state: null,
  },
  {
    path: "/about",
    slug: "about",
    state: null,
  },
  {
    path: "/projects",
    slug: "projects",
    state: null,
  },
  {
    path: "/skills",
    slug: "skills",
    state: null,
  },
  // {
  //   path: "/blog",
  //   slug: "blog",
  //   state: null,
  // },
];

export function Navbar() {
  const { t, i18n } = useTranslation("common");
  const dispatch = useDispatch();
  const langs = [
    {
      label: "ru",
    },
    {
      label: "uz",
    },
    {
      label: "en",
    },
  ];

  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  const theme = useTheme();

  return (
    <header className={styles.header}>
      <Container>
        <div
          className={styles.header_navbar}
          style={{
            backgroundColor:
              theme.palette.mode === "dark"
                ? "rgba(24, 24, 29, 0.3)"
                : "rgb(255, 255, 255, 0.25)",
          }}
        >
          <NavLink
            to="/"
            style={{
              color: "inherit",
              textDecoration: "inherit",
            }}
          >
            <h2 className={styles.header_navbar_logo}>[ I ]</h2>
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
                        ? theme.palette.mode === "dark"
                          ? "#FF8C00"
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
          <div className={styles.header_navbar_utils}>
            <div className={styles.header_navbar_medias}>
              <div className={styles.header_navbar_medias_item}>
                <LinkedinIcon
                  fill={theme.palette.mode === "dark" ? "white" : "black"}
                />
              </div>
              <div className={styles.header_navbar_medias_item}>
                <GithubIcon
                  fill={theme.palette.mode === "dark" ? "white" : "black"}
                />
              </div>
              <div className={styles.header_navbar_medias_item}>
                <TelegramIcon
                  fill={theme.palette.mode === "dark" ? "white" : "black"}
                />
              </div>
            </div>
            <Divider
              stroke={theme.palette.mode === "dark" ? "white" : "black"}
            />
            <div className={styles.header_navbar_utils_langs}>
              <ul>
                {langs.map((lang) => (
                  <li
                    key={lang.label}
                    onClick={() => handleChangeLang(lang.label)}
                    style={{
                      cursor: "pointer",
                      color:
                        i18n.language.includes(lang.label) &&
                        (theme.palette.mode === "dark" ? "#FF8C00" : "crimson"),
                    }}
                  >
                    {lang.label}
                  </li>
                ))}
              </ul>
            </div>
            <IconButton
              onClick={() => dispatch(themeActions.colorMode())}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </div>
        </div>
      </Container>
    </header>
  );
}
