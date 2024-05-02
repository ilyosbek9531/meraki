import { Button, Container } from "@mui/material";
import i18n from "i18n";
import { t } from "i18next";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import mainimg from "../../assets/images/mainimg.png";
import mainimg2 from "../../assets/images/mainimg2.png";
import topimg from "../../assets/images/top.png";
import bottomimg from "../../assets/images/bottom.png";
import { useTheme } from "@emotion/react";
import PlayButton from "Components/PlayButton/PlayButton";
import Marquee from "react-fast-marquee";
const Home = ({data}) => {
  const {
    palette: { mode },
  } = useTheme();
  return (
    <>
    <div className={styles.home}>
      <span className={styles.topimg}>
        <img src={topimg} alt="topimg"/>
      </span>
      <span className={styles.bottomimg}>
        <img src={bottomimg} alt="bottomimg" />
      </span>
    <Container>
      <div className={styles.main_wrapper}>
        <div className={styles.main_wrapper_infos}>
          <div className={styles.main_wrapper_infos_item}>
            <div>
              <p className={styles.hashtitle}>
                #<span className="redLetters">w</span>e
                <span className="redLetters">h</span>elp
                <span className="redLetters">b</span>uild
                <span className="redLetters">h</span>appines
              </p>
              <h1 className={styles.mainTitle}>
                <span className="redLetters">{t("Digital-marketing")}</span>{" "}
                <br /> {t("agency")}
              </h1>
              <p className={styles.info}>
                {i18n.language === "en"
                  ? "We attract promising clients, increase the number of visits to the sales office and the competitiveness of developers"
                  : i18n.language === "ru"
                  ? "Привлекаем перспективных клиентов, увеличиваем количество посещений офис продаж и конкурентоспособность застройщиков."
                  : "Biz istiqbolli mijozlarni jalb qilamiz, tashriflar sonini oshiramiz ofisi va ishlab chiquvchilarning raqobatbardoshligi."}
              </p>
            </div>

            <div className={styles.buttons}>
              <Link to="/contact">
                <Button variant="contained" fullWidth={true}>
                  {t("let's talk")}
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outlined" fullWidth={true}>
                  {t("projects")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.main_wrapper_imgs}>
          {mode === "light" ? (
            <img src={mainimg} alt="mainimg" />
          ) : (
            <img src={mainimg2} alt="mainimg" />
          )}
        </div>

      </div>
    </Container>
    <div className="animationslide_wrapper">
        <div
          className="marqueeRoot"
          style={{  backgroundColor: mode === "dark" ? "#EC3B3B" : "#2B2D42" }}
        >
          <Marquee
            className="marquee"
            pauseOnHover={false}
            speed={40}
            direction="right"
            gradientWidth={100}
            // gradient={width1000px}
            gradientColor={[255, 255, 255]}
          >
            {data?.root1?.map((el, index) => (
              <div
              className="marquee__item"
                style={{ color: mode === "dark" ? el.dark : el.color }}
              >
                <h1>{t(el.text)}</h1>
              </div>
            ))}
          </Marquee>
        </div>
        
        <div
          className="marqueeRoot marquee2"
          style={{ backgroundColor: mode === "dark" ? "#EC3B3B" : "#2B2D42" }}
        >
          <Marquee
            className="marquee"
            pauseOnHover={false}
            speed={40}
            direction="left"
            gradientWidth={100}
            // gradient={width1000px}
            gradientColor={[255, 255, 255]}
          >
            {data?.root1?.map((el, index) => (
              <div
              className="marquee__item"
                style={{ color: mode === "dark" ? el.dark : el.color }}
              >
                <h1>{t(el.text)}</h1>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
