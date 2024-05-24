import React from 'react'
import { useTheme } from "@mui/material";
import Home from 'Components/UI/Home/Home';
import Services from 'Components/UI/Services/Services';
import CountUpComp from 'Components/UI/CountupComp/CountUpComp';
import Projects from 'Components/Pages/Projects/Projects';
import ChooseUs from 'Components/UI/ChooseUs/ChooseUs';
import Reviews from 'Components/UI/Reviews/Reviews';
import Partners from 'Components/UI/Partners/Partners';
import Articles from 'Components/Pages/Articles/Articles';
import Contact from 'Components/Pages/Contact/Contact';
import styles from "./Main.module.scss"
import FAQ from 'Components/UI/FAQ/FAQ';


const Main_ = ({data}) => {

  const {
    palette: { mode },
  } = useTheme();

  return (
    <div className={styles.main}>
    <Home data={data} />

    <Services isSliceData={true}/>
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

    <Articles isSliceData={true}/>

    <div style={{ backgroundColor: mode === "light" ? "#EC3B3B" : "" }}>
      <Contact data = {data} isActive={true}/>
    </div>
    <FAQ/>
  </div>
  )
}

export default Main_