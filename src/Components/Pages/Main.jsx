import React from 'react'
import { useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import Home from 'Components/UI/Home/Home';
import Services from 'Components/UI/Services/Services';
import CountUpComp from 'Components/UI/CountupComp/CountUpComp';
import Projects from 'Components/UI/Projects/Projects';
import ChooseUs from 'Components/UI/ChooseUs/ChooseUs';
import Reviews from 'Components/UI/Reviews/Reviews';
import Partners from 'Components/UI/Partners/Partners';
import Articles from 'Components/UI/Articles/Articles';
import Contact from 'Components/UI/Contact/Contact';
import styles from "./Main.module.scss"


const Main_ = ({data}) => {

    const { t, i18n } = useTranslation("common");
  const {
    palette: { mode },
  } = useTheme();

  return (
    <div className={styles.main}>
    <Home data={data} />

    <Services />

    <div
      className={styles.projects_wrapper}
      style={{ backgroundColor: mode === "light" ? "#EC3B3B" : "" }}
    >
      <CountUpComp data={data} />
      
      <Projects />
    </div>

    <ChooseUs />

    <Reviews />

    <div style={{ backgroundColor: mode === "dark" ? "#535353" : "" }}>
      <Partners />
    </div>

    <Articles/>

    <div style={{ backgroundColor: mode === "light" ? "#EC3B3B" : "" }}>
      <Contact data = {data} isActive={true}/>
    </div>
  </div>
  )
}

export default Main_