import React from "react";
import styles from "./ChooseUs.module.scss";
import { Container } from "@mui/material";
import Lottie from "lottie-react-web";
import cityAnimation from "../../assets/images/city.json";
import cityDarkMode from "../../assets/images/cityDarkMode.json";
import cityAnimations from "../../assets/images/cityAnimation.json";
import { t } from "i18next";
import { BoldDoneIcon } from "helpers/icons";
import { useTheme } from "@emotion/react";

const data = [
  {
    title: "Performance approach for the developer",
    paragraph:
      "We attract promising clients, increase the number of visits to the sales office and the competitiveness of developers.",
  },
  {
    title: "Experts in the development niche",
    paragraph:
      "We attract promising clients, increase the number of visits to the sales office and the competitiveness of developers.",
  },
  {
    title: "Payback SMM for a residential complex",
    paragraph:
      "We attract promising clients, increase the number of visits to the sales office and the competitiveness of developers.",
  },
  {
    title:
      "We help launch new developer brand",
    paragraph:
      "We attract promising clients, increase the number of visits to the sales office and the competitiveness of developers.",
  },
];

const ChooseUs = () => {
  const {
    palette: { mode },
  } = useTheme();
  return (
    <Container>
      <div className={styles.chooseUs}>
        <div className={styles.infos}>
          <h2 className={`${styles.question} redLetters`}>
            {t("Why choose us")}
          </h2>
          <h1 className={styles.title}>
            {t("We know")} <span className="redLetters">{t("needs")}</span> of
            developers
          </h1>
          {data?.map((item) => (
            <div className={styles.content}>
              <div className={styles.content_item}>
                <BoldDoneIcon />
                <h1>{t(item.title)}</h1>
              </div>
                <p>{t(item.paragraph)}</p>
            </div>
          ))}
        </div>
        <div className={styles.img_wrapper}>
            <Lottie
              style={{
                width: "100%",
                height: "100%",
              }}
              options={{
                animationData: cityAnimations,
                speed: 50
              }}
            />
        </div>
      </div>
    </Container>
  );
};

export default ChooseUs;
