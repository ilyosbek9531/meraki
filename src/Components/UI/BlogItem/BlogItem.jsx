import React from "react";
import styles from "./BlogItem.module.scss";
import { TimeIcon } from "helpers/icons";
import { useTheme } from "@emotion/react";

const BlogItem = ({elem}) => {
  const {palette: {mode}}=useTheme();

  return (
    <div
      className={styles.box}
      style={{ background: mode === "light" ? "#2B2D42" : "#424242" }}
    >
      <div className={styles.img_wrapper}>
        <img src={elem.img} alt="blog_img" />
      </div>
      <div className={styles.box_infos}>
        <h1 className={styles.title}>{elem.title}</h1>
        <h2 className={styles.subtitle}>{elem.subtitle}</h2>
        <p className={styles.box_infos_time}>
          <TimeIcon />
          {elem.time} minute
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
