import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
import { Container, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const navItems = [
  {
    path: "/",
    slug: "home",
    state: null,
  },
  {
    path: "/blog",
    slug: "blog",
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
];

const medias = [
  {
    name: "Email",
    link: "ilyosbeksheraliyev838@gmail.com",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ilyosbek-sheraliyev-451116277/",
  },
  {
    name: "Github",
    link: "https://github.com/ilyosbek9531",
  },
  {
    name: "Telegram",
    link: "",
  },
];

export function Footer() {
  const { t } = useTranslation("common");
  const theme = useTheme();
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_main}>
          <div className={styles.footer_main_logo}>
            <NavLink
              to="/"
              style={{
                color: "inherit",
                textDecoration: "inherit",
              }}
            >
              <h2 className={styles.footer_main_logo}>[ I ]</h2>
            </NavLink>
            <p>Thanks for visiting site</p>
          </div>
          <div className={styles.footer_main_info}>
            <div className={styles.footer_main_info_items}>
              <h4>Links</h4>
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
            </div>
            <div className={styles.footer_main_info_items}>
              <h4>Elsewhere</h4>
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
                        {t(item.name)}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <span>© 2024 Ilyosbek Sheraliyev. All Rights Reserved.</span>
      </Container>
    </footer>
  );
}
