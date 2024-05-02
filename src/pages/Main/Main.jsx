import { useTheme } from "@mui/material";
import styles from "./Main.module.scss";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import Services from "Components/Services/Services";
import Home from "Components/Home/Home";
import CountUpComp from "Components/CountupComp/CountUpComp";
import Projects from "Components/Projects/Projects";

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
    // {
    //   text: "Performance",
    //   color: "#EC3B3B",
    //   dark: "#000",
    // },
    // {
    //   text: "Strategy",
    //   color: "#fff"

    // },
    // {
    //   text: "Complex",
    //   color: "#EC3B3B",
    //   dark: "#000",
    // },
    // {
    //   text: "Communication",
    //   color: "#fff"

    // },
  ],
};

const Main = () => {
  const { t, i18n } = useTranslation("common");
  const {
    palette: { mode },
  } = useTheme();
  return (
    <div>
      <Home data ={data}/>
      
      <Services/>

      <div
        className={styles.projects_wrapper}
        style={{ backgroundColor: mode === "light" ? "#EC3B3B" : "" }}
      >
        <CountUpComp data={data}/>
        <Projects/>
      </div>
    </div>
  );
};

export default Main;
