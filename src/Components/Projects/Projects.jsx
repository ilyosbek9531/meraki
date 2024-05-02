import React from 'react'
import styles from "./Projects.module.scss"
import { Container } from '@mui/material'
import Lottie from 'lottie-react-web'
import cityAnimation  from "../../assets/images/city.json"
import cityDarkMode from "../../assets/images/cityDarkMode.json"
import { useTheme } from '@emotion/react'

const Projects = () => {
  const {palette:{mode}}= useTheme()
  return (
    <Container>
        <h1>LOttie React component</h1>

        <div className=''>
          {mode === "dark" ?  <Lottie options={{
          animationData: cityDarkMode
        }}/> :  <Lottie options={{
          animationData: cityAnimation
        }}/>}
        </div>

    </Container>
  )
}

export default Projects