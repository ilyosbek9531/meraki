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
      <Home/>
      <div className={styles.animationslide_wrapper}>
        <div
          className={styles.marqueeRoot}
          style={{ backgroundColor: mode === "dark" ? "#EC3B3B" : "#2B2D42" }}
        >
          <Marquee
            className={styles.marquee}
            pauseOnHover={false}
            speed={40}
            direction="left"
            gradientWidth={100}
            // gradient={width1000px}
            gradientColor={[255, 255, 255]}
          >
            {data?.root1?.map((el, index) => (
              <div
                className={styles.marquee__item}
                style={{ color: mode === "dark" ? el.dark : el.color }}
              >
                <h1>{t(el.text)}</h1>
              </div>
            ))}
          </Marquee>
        </div>
        <div
          className={styles.marqueeRoot}
          style={{ backgroundColor: mode === "dark" ? "#EC3B3B" : "#2B2D42" }}
        >
          <Marquee
            className={styles.marquee}
            pauseOnHover={false}
            speed={40}
            direction="right"
            gradientWidth={100}
            // gradient={width1000px}
            gradientColor={[255, 255, 255]}
          >
            {data?.root1?.map((el, index) => (
              <div
                className={styles.marquee__item}
                style={{ color: mode === "dark" ? el.dark : el.color }}
              >
                <h1>{t(el.text)}</h1>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <Services/>
      <div className={styles.animationslide_wrapper}>
        <div
          className={styles.marqueeRoot}
          style={{ backgroundColor: mode === "dark" ? "#EC3B3B" : "#2B2D42" }}
        >
          <Marquee
            className={styles.marquee}
            pauseOnHover={false}
            speed={40}
            direction="left"
            gradientWidth={100}
            // gradient={width1000px}
            gradientColor={[255, 255, 255]}
          >
            {data?.root2?.map((el, index) => (
              <div
                className={styles.marquee__item}
                style={{ color: mode === "dark" ? el.dark : el.color }}
              >
                <h1>{t(el.text)}</h1>
              </div>
            ))}
          </Marquee>
        </div>

        <div
          className={styles.marqueeRoot}
          style={{ backgroundColor: mode === "dark" ? "#EC3B3B" : "#2B2D42" }}
        >
          <Marquee
            className={styles.marquee}
            pauseOnHover={false}
            speed={40}
            direction="right"
            gradientWidth={100}
            // gradient={width1000px}
            gradientColor={[255, 255, 255]}
          >
            {data?.root2?.map((el, index) => (
              <div
                className={styles.marquee__item}
                style={{ color: mode === "dark" ? el.dark : el.color }}
              >
                <h1>{t(el.text)}</h1>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div
        className={styles.projects_wrapper}
        style={{ backgroundColor: mode === "light" ? "#EC3B3B" : "" }}
      >
        <CountUpComp/>
        <Projects/>
      </div>
    </div>
  );
};

export default Main;
