import { useTheme } from "@mui/material";
import styles from "./Main.module.scss";
import { useTranslation } from "react-i18next";
import Services from "Components/Services/Services";
import Home from "Components/Home/Home";
import CountUpComp from "Components/CountupComp/CountUpComp";
import Projects from "Components/Projects/Projects";
import ChooseUs from "Components/ChooseUs/ChooseUs";
import Reviews from "Components/Reviews/Reviews";
import Partners from "Components/Partners/Partners";
import { Article } from "@mui/icons-material";
import Articles from "Components/Articles/Articles";
const data = {
  root1: [
    {
      text: "Website",
      color: "#EC3B3B",
      dark: "#000",
    },
    {
      text: "Design",
      color: "#fff",
    },
    {
      text: "Performance",
      color: "#EC3B3B",
      dark: "#000",
    },
    {
      text: "Strategy",
      color: "#fff",
    },
    {
      text: "Complex",
      color: "#EC3B3B",
      dark: "#000",
    },
    {
      text: "Communication",
      color: "#fff",
    },
  ],
  root2: [
    {
      text: "digital-marketing",
      color: "#EC3B3B",
      dark: "#000",
    },
    {
      text: "meraki",
      color: "#fff",
    },
  ],
};

const Main = () => {
  const { t, i18n } = useTranslation("common");
  const {
    palette: { mode },
  } = useTheme();
  return (
    <div className={styles.main}>
      <Home data={data} />

      <Services />

      <div
        className={styles.projects_wrapper}
        style={{ backgroundColor: mode === "light" ? "#EC3B3B" : "" }}
      >
        <CountUpComp data={data} />
        
        <Projects />
      </div>

      <ChooseUs />

      <Reviews />

      <div style={{ backgroundColor: mode === "dark" ? "#535353" : "" }}>
        <Partners />
      </div>

      <Articles/>
    </div>
  );
};

export default Main;
