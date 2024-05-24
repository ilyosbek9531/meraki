import React from "react";
import { Container, Grid } from "@mui/material";
import { t } from "i18next";
import styles from "./Articles.module.scss";
import { ArrowUpIcon } from "helpers/icons";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/phoneBlog.png";
import img2 from "../../../assets/images/socialBlog.png";
import img3 from "../../../assets/images/seoBlog.png";
import { useTheme } from "@emotion/react";
import BlogItem from "Components/UI/BlogItem/BlogItem";

const config = {
  data: [
    {
      img: img1,
      title: "The Power of Storytelling in Marketing",
      subtitle:
        "Explore how brands can effectively use storytelling to  build stronger relationships.",
      time: "5",
    },
    {
      img: img2,
      title: "Social Media Trends to Watch in 2024",
      subtitle: "Discuss the latest trends in social media marketing.",
      posterName: "Munisa Rakhmatullayeva",
      time: "5",
    },
    {
      img: img3,
      title: "The Importance of SEO for Your Business",
      subtitle: "Explain the significance of search engine optimization (SEO).",
      time: "5",
    },
    {
      img: "",
      title: "The Power of Storytelling in Marketing",
      subtitle:
        "Explore how brands can effectively use storytelling to  build stronger relationships.",
      time: "5",
    },
    {
      img: "",
      title: "The Power of Storytelling in Marketing",
      subtitle:
        "Explore how brands can effectively use storytelling to  build stronger relationships.",
      time: "5",
    },
    {
      img: "",
      title: "The Power of Storytelling in Marketing",
      subtitle:
        "Explore how brands can effectively use storytelling to  build stronger relationships.",
      time: "5",
    },
    {
      img: "",
      title: "The Power of Storytelling in Marketing",
      subtitle:
        "Explore how brands can effectively use storytelling to  build stronger relationships.",
      time: "5",
    },
  ],
};
const Articles = ({ isSliceData = false }) => {
  const {
    palette: { mode },
  } = useTheme();
  const sliceData = config?.data?.slice(0, 3);
  const articlesData = isSliceData ? sliceData : config?.data;

  return (
    <Container>
      <div className={styles.blog}>
        <div
          className={styles.header_container}
          style={{
            display: !isSliceData ? "blog" : "flex",
            justifyContent: !isSliceData ? "center" : "space-between",
          }}
        >
          <h1 className={`${styles.title} title`} style={{ textAlign: "left" }}>
            {t("News")}
          </h1>
          <Link to={"/blog"}>
            <span
              className={`${
                mode === "dark" ? styles.darkStyles : styles.lightStyles
              }`}
              style={{ display: !isSliceData && "none" }}
            >
              <ArrowUpIcon />
            </span>
          </Link>
        </div>
        <div className={styles.boxes}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {articlesData?.map((elem, index) => (
              <Grid xs={12} sm={6} md={4} key={index} item>
                <BlogItem elem={elem} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default Articles;
