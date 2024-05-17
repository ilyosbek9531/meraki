import React from "react";
import styles from "./CountUpComp.module.scss";
import { Container } from "@mui/material";
import CounterBox from "Components/UI/CounterBox/CounterBox";
import { useTheme } from "@emotion/react";
import Marquee from "react-fast-marquee";
import { t } from "i18next";

const  CounterData =[
  {
    end: 1600,
    duration: 2.75,
    text: "apartments sold  thanks to us",
    borderRadius: "30px 30px 0 30px",
    textEditions: "+"
  },
  {
    end: 3,
    duration: 3,
    text: "cities in which we promote developers",
    borderRadius: "30px 30px 30px 0"
  },
  {
    end: 3,
    duration: 3.75,
    text: "awards received at festivals",
    borderRadius: "30px 0 30px 30px",
  },
  {
    end: 14,
    duration: 4,
    text: "residential complexes in promoting",
    borderRadius: "0 30px 30px 30px",
    textEditions: "+"
  },
]

const CountUpComp = ({ data }) => {


  const {
    palette: { mode },
  } = useTheme();



  return (
    <div className={styles.counter}>
      <div>
        <div className="animationslide_wrapper">
          <div
            className="marqueeRoot"
            style={{ backgroundColor: mode === "dark" ? "#EC3B3B" : "#2B2D42" }}
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
            className="marqueeRoot marquee3"
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
              {data?.root2?.map((el, index) => (
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

      <Container>
        <div className={styles.counter_wrapper}>
          <div className={styles.counter_wrapper_items}>
          {CounterData.map((boxData, boxIndex) => (
            <CounterBox
              key={boxIndex}
              start={0}
              end={boxData.end}
              duration={boxData.duration}
              text={boxData.text}
              borderRadius={boxData.borderRadius}
              textEditions={boxData.textEditions}
            />
        ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CountUpComp;
