import React from "react";
import styles from "./ServiceItem.module.scss";
import { t } from "i18next";
import { DoneIcon } from "helpers/icons";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ServiceItem = ({img, subtitle, serviceTypes}) => {

  return (
    <div className={styles.box}>
      <div className={styles.image_wrapper}>
        <img src={img} alt="serviceimage" />
      </div>
      <div className={styles.infos}>
        <h1 className="subtitle">{t(subtitle)}</h1>
        <div className={styles.types}>
          {serviceTypes.map((item) => (
            <Link to={item.link}>
              <p>
                <DoneIcon /> {t(item.servicetype)}
              </p>
            </Link>
          ))}
        </div>
        <Button variant="contained">{t("Learn more")}</Button>
      </div>
    </div>
  );
};

export default ServiceItem;
