import { Button, Container } from '@mui/material'
import i18n from 'i18n'
import { t } from 'i18next'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Home.module.scss"

const Home = () => {
  return (
    <Container>
    <div className={styles.main_wrapper}>
      <div className={styles.main_wrapper_infos}>
        <div>
          <p className={styles.hashtitle}>
            #<span className="redLetters">w</span>e
            <span className="redLetters">h</span>elp
            <span className="redLetters">b</span>uild
            <span className="redLetters">h</span>appines
          </p>
          <h1 className={styles.mainTitle}>
            <span className='redLetters'>
              {t("Digital-marketing")}
            </span>{" "}
            <br /> {t("agency")}
          </h1>
          <p className={styles.info}>
            {i18n.language === "en"
              ? "We attract promising clients, increase the number of visits to the sales office and the competitiveness of developers"
              : i18n.language === "ru"
              ? "Привлекаем перспективных клиентов, увеличиваем количество посещений офис продаж и конкурентоспособность застройщиков."
              : "Biz istiqbolli mijozlarni jalb qilamiz, tashriflar sonini oshiramiz ofisi va ishlab chiquvchilarning raqobatbardoshligi."}
          </p>
        </div>

        <div className={styles.buttons}>
          <Link to="/contact">
            <Button variant="contained" fullWidth={true}>
              {t("let's talk")}
            </Button>
          </Link>
          <Link to="/projects">
            <Button variant="outlined" fullWidth={true}>
              {t("projects")}
            </Button>
          </Link>
        </div>
      </div>
      <div className={styles.main_wrapper_imgs}>
        <img src="" alt="" />
      </div>
    </div>
  </Container>
  )
}

export default Home