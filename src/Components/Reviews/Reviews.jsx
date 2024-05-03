import React, { useRef, useState } from "react";
import styles from "./Reviews.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import reviewer from "../../assets/images/reviewer.jpg";
import { Container } from "@mui/material";
import { t } from "i18next";

const data = [
  {
    name: "Alisher Gulomov",
    videoLink: "https://youtu.be/gPQaFXtvTF4?si=9r7-NyEUn4gprd6n",
    reviewerImg: reviewer,
    companyName: "Digital Solutions",
    position: "Project Manager",
    review:
      "“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa. Aliquam in hendrerit urn. Pellentesque sit amet sapien fringilla, mattis ligu consecetur, ultrices mauris. Maecenas vitae mattis tellus. ”  ",
  },
  {
    name: "Alisher Gulomov",
    videoLink: "https://youtu.be/gPQaFXtvTF4?si=9r7-NyEUn4gprd6n",
    reviewerImg: reviewer,
    companyName: "Digital Solutions",
    position: "Project Manager",
    review:
      "“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa. Aliquam in hendrerit urn. Pellentesque sit amet sapien fringilla, mattis ligu consecetur, ultrices mauris. Maecenas vitae mattis tellus. ”  ",
  },
  {
    name: "Alisher Gulomov",
    videoLink: "https://youtu.be/gPQaFXtvTF4?si=9r7-NyEUn4gprd6n",
    reviewerImg: reviewer,
    companyName: "Digital Solutions",
    position: "Project Manager",
    review:
      "“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa. Aliquam in hendrerit urn. Pellentesque sit amet sapien fringilla, mattis ligu consecetur, ultrices mauris. Maecenas vitae mattis tellus. ”  ",
  },
  {
    name: "Alisher Gulomov",
    videoLink: "https://youtu.be/gPQaFXtvTF4?si=9r7-NyEUn4gprd6n",
    reviewerImg: reviewer,
    companyName: "Digital Solutions",
    position: "Project Manager",
    review:
      "“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa. Aliquam in hendrerit urn. Pellentesque sit amet sapien fringilla, mattis ligu consecetur, ultrices mauris. Maecenas vitae mattis tellus. ”  ",
  },
  {
    name: "Alisher Gulomov",
    videoLink: "https://youtu.be/gPQaFXtvTF4?si=9r7-NyEUn4gprd6n",
    reviewerImg: reviewer,
    companyName: "Digital Solutions",
    position: "Project Manager",
    review:
      "“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa. Aliquam in hendrerit urn. Pellentesque sit amet sapien fringilla, mattis ligu consecetur, ultrices mauris. Maecenas vitae mattis tellus. ”  ",
  },
];

const Reviews = () => {
  return (
    <Container>
      <h1 className="title">{t("Reviews")}</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.map((item) => (
          <SwiperSlide>
            <div className={styles.review_wrapper}>
              <div className={styles.video_wrapper}>
                <video controls>
                  <source src={item.videoLink} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className={styles.review_wrapper_infos}>
                <div className={styles.personDetails}>
                  <div className={styles.img_wrapper}>
                    <img src={item.reviewerImg} alt="reviewer_image" />
                  </div>
                  <div className={styles.personJobsDetails}>
                    <h1>{item.name}</h1>
                    <h2>{item.companyName}</h2>
                    <h3>{item.position}</h3>
                  </div>
                </div>
                <p>{t(item.review)}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Reviews;
