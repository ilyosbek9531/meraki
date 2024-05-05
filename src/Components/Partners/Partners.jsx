import React from "react";
import styles from "./Partners.module.scss";
import img1 from "../../assets/images/samsung 3.png";
import img2 from "../../assets/images/caffeine 3.png";
import img3 from "../../assets/images/intel 4.png";
import img4 from "../../assets/images/zoom 3.png";
import img5 from "../../assets/images/huawei 3.png";
import { t } from "i18next";
import Marquee from "react-fast-marquee";
import { Container } from "@mui/material";

const data = {
  root1: [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
  ],
  root2: [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
  ],
};
const Partners = () => {
  return (
    <div>
      <Container>
        <h1 style={{ textAlign: "left" }} className="title">
          {t("Partners")}
        </h1>
      </Container>
      <div className={styles.partners}>
        <div className={styles.marqueeRoot}>
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
              <div className={styles.marquee__item} key={index}>
                <img src={el.img} alt="partners_image" />
              </div>
            ))}
          </Marquee>
        </div>

        <div className={styles.marqueeRoot}>
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
              <div key={index} className={styles.marquee__item}>
                <img src={el.img} alt="partners_images" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Partners;
