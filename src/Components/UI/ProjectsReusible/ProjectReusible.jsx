import React from "react";
import styles from "./ProjectReusible.module.scss";
import { Button, Grid } from "@mui/material";
import { createGridArray } from "utils/createGridArray";
import img from "../../../assets/images/project1.png"

const tabs = ["Branding", "SMM", "Websites", "SEO", "Targeting"];
const data = [
  {
    name: "NRG",
    category: "SEO",
    img: img
  },
  {
    name: "NRG",
    category: "SEO",
    img: img
  },
  {
    name: "NRG",
    category: "SEO",
    img: img
  },
  {
    name: "NRG",
    category: "SEO",
    img: img
  },
  {
    name: "NRG",
    category: "SEO",
    img: img
  },
  {
    name: "NRG",
    category: "SEO",
    img: img
  },
  {
    name: "NRG",
    category: "SEO",
    img: img
  },
  {
    name: "NRG",
    category: "SEO",
    img: img
  },
  {
    name: "NRG",
    category: "SEO",
    img: img
  },
  {
    name: "NRG",
    category: "SEO",
    img: img
  },
]

const ProjectReusible = () => {
  const spliceData = data.slice(0, 10);

  return (
    <div className={styles.preusible}>
      <div className={styles.preusible_tabs}>
        <div className={styles.preusible_tabs_inner}>
          {tabs.map((tab) => (
            <Button variant="lighted">{tab}</Button>
          ))}
        </div>
      </div>
      <div className={styles.preusible_cards}>
        {createGridArray(spliceData).map((elem) => (
          <div
            className={styles.preusible_cards_card}
            style={{ flexDirection: elem.isReverse && "row-reverse" }}
          >
            <div className={styles.main_card} style={{border: "2px solid white", width:"714px", height:"659px", backgroundImage: `url(${img})`}}>{elem.main.name}</div>
            <div>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {elem.fourth.map((item) => (
                  <Grid item xs={12} sm={3} md={6} key={item}>
                    <div className={styles.four_cards} style={{border: "2px solid white", width:"319px", height:"319px", backgroundImage: `url(${img})`}}>
                    {item.name}
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectReusible;
