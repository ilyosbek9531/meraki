import React from 'react'
import styles from "./Project.module.scss"
import Projects from "../../Components/Pages/Projects/Projects"
import SEO from 'SEO'

const Project = () => {
  return (
    <>
    <SEO title={"Projects"}/>
    <Projects/>
    </>
)
}

export default Project