import React from 'react'
import styles from "./Services.module.scss"
import { DoneIcon } from 'helpers/icons'
import { t } from 'i18next'
import { Container } from '@mui/material'
import ServiceItem from 'Components/ServiceItem/ServiceItem'


const data =[
  {
    img: "/",
    subtitle: "Communocation",
    serviceTypes: ["SMM promotion", "SMM promotion", "SMM promotion"]
  },
  {
    img: "/",
    subtitle: "Performance-marketing",
    serviceTypes: ["Target advertising", "Content advertising", "SEO - website promotion"]
  },
  {
    img: "/",
    subtitle: "Branding",
    serviceTypes: ["Identity", "Naming", "Design support"]
  },
  {
    img: "/",
    subtitle: "Communocation",
    serviceTypes: ["SMM promotion", "SMM promotion", "SMM promotion"]
  },
  {
    img: "/",
    subtitle: "Comprehensive promotion",
    serviceTypes: ["Analytics", "Optimization", "high-quality advertising creative"]
  },
  {
    img: "/",
    subtitle: "Websites",
    serviceTypes: ["UX/UI design", "No-code development", "Technical support"]
  }
];

export default function Services() {
  return (
    <Container>
        <div className={styles.services_wrapper}>
          <h1 className="title">{t("Our Services")}</h1>

          <div className={styles.services_wrapper_boxes}>
            {data?.map((item)=>(
              <ServiceItem img={item.img} subtitle={item.subtitle} serviceTypes={item.serviceTypes}/>              
            ))}
          </div>
        </div>
      </Container>
  )
}
