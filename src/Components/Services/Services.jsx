import React from 'react'
import styles from "./Services.module.scss"
import { DoneIcon } from 'helpers/icons'
import { t } from 'i18next'
import { Container } from '@mui/material'
import ServiceItem from 'Components/ServiceItem/ServiceItem'
import serviceImg1 from "../../assets/images/communication.png"
import serviceImg2 from "../../assets/images/seo.png"
import serviceImg3 from "../../assets/images/branding.png"
import serviceImg4 from "../../assets/images/promotion.png"
import serviceImg5 from "../../assets/images/digital .png"
import serviceImg6 from "../../assets/images/website.png"



const data = [
  {
    img: serviceImg1,
    subtitle: "Communication",
    serviceTypes: [
      { name: "SMM promotion", link: "/smm-promotion" },
      { name: "SMM promotion", link: "/smm-promotion" },
      { name: "SMM promotion", link: "/smm-promotion" }
    ]
  },
  {
    img:serviceImg2,
    subtitle: "Performance-marketing",
    serviceTypes: [
      { name: "Target advertising", link: "/target-advertising" },
      { name: "Content advertising", link: "/content-advertising" },
      { name: "SEO - website promotion", link: "/seo-website-promotion" }
    ]
  },
  {
    img: serviceImg3,
    subtitle: "Branding",
    serviceTypes: [
      { name: "Identity", link: "/identity" },
      { name: "Naming", link: "/naming" },
      { name: "Design support", link: "/design-support" }
    ]
  },
  {
    img: serviceImg4,
    subtitle: "Communocation",
    serviceTypes: [
      { name: "SMM promotion", link: "/smm-promotion" },
      { name: "SMM promotion", link: "/smm-promotion" },
      { name: "SMM promotion", link: "/smm-promotion" }
    ]
  },
  {
    img: serviceImg5,
    subtitle: "Comprehensive promotion",
    serviceTypes: [
      { name: "Analytics", link: "/analytics" },
      { name: "Optimization", link: "/optimization" },
      { name: "High-quality advertising creative", link: "/high-quality-advertising-creative" }
    ]
  },
  {
    img: serviceImg6,
    subtitle: "Websites",
    serviceTypes: [
      { name: "UX/UI design", link: "/ux-ui-design" },
      { name: "No-code development", link: "/no-code-development" },
      { name: "Technical support", link: "/technical-support" }
    ]
  }
];


export default function Services() {
  const sliceData = data.slice(0, 6);

  return (
    <Container>
        <div className={styles.services_wrapper}>
          <h1 className="title">{t("Our Services")}</h1>

          <div className={styles.services_wrapper_boxes}>
            {sliceData?.map((item)=>(
              <ServiceItem img={item.img} subtitle={item.subtitle} serviceTypes={item.serviceTypes}/>              
            ))}
          </div>
        </div>
      </Container>
  )
}
