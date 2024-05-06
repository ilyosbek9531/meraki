import React from "react";
import styles from "./ProjectReusible.module.scss";
import { Button, Grid } from "@mui/material";
import { createGridArray } from "utils/createGridArray";

const tabs = ["Branding", "SMM", "Websites", "SEO", "Targeting"];

const ProjectReusible = () => {
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
        {createGridArray(
          Array.from({ length: 31 }, (_, index) => index + 1)
        ).map((elem) => (
          <div
            className={styles.preusible_cards_card}
            style={{ flexDirection: elem.isReverse && "row-reverse" }}
          >
            <div>{elem.main}</div>
            <div>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 6 }}
              >
                {elem.fourth.map((item) => (
                  <Grid item xs={2} sm={3} key={item}>
                    {item}
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
