import React from "react";
import styles from "./Contact.module.scss";
import Marquee from "react-fast-marquee";
import { t } from "i18next";
import ContactForm from "../../UI/ContactForm/ContactForm";
import { useTheme } from "@emotion/react";
import { Container } from "@mui/material";



const Contact = ({ data, isActive = false }) => {
  const {
    palette: { mode },
  } = useTheme();

  return (
    <div className={styles.contact}>
      {isActive && (
        <div>
          <div className="animationslide_wrapper">
            <div
              className="marqueeRoot"
              style={{
                backgroundColor: mode === "dark" ? "#EC3B3B" : "#2B2D42",
              }}
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
            <div
              className="marqueeRoot marquee3"
              style={{
                backgroundColor: mode === "dark" ? "#EC3B3B" : "#2B2D42",
              }}
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
      )}

      <Container>
        <h1
          className="title"
          style={{ color: mode === "light" ? "#fff" : "#2B2D42" }}
        >
          {t("Contact Us")}
        </h1>
        <ContactForm/>
      </Container>
    </div>
  );
};

export default Contact;
