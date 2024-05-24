import React from 'react'
import styles from "./Contact.module.scss"
import SEO from 'SEO'
import ContactUs from "../../Components/Pages/Contact/Contact"

const Contact = () => {
  return (
    <>
        <SEO title={"Contact"}/>
        <ContactUs/>

    </>
  )
}

export default Contact