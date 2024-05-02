import React from "react";
import styles from "./ServiceItem.module.scss";
import { t } from "i18next";
import { DoneIcon } from "helpers/icons";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

const ServiceItem = ({ img, subtitle, serviceTypes }) => {
  const {
    palette: { mode },
  } = useTheme();
  return (
    <div className={styles.box_wrapper}>
      <div className={styles.box}>
        <div className={styles.image_wrapper}>
          <img src={img} alt="serviceimage" />
        </div>
        <div className={styles.infos}>
          <h1 className="subtitle">{t(subtitle)}</h1>
          <div className={styles.types}>
            {serviceTypes.map((item) => (
              <Link to={item.link}>
                <p style={{ color: mode === "dark" ? "#F4F4F4" : "#2B2D42" }}>
                  <DoneIcon /> {t(item.name)}
                </p>
              </Link>
            ))}
          </div>
          <Button variant="contained">{t("Learn more")}</Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
