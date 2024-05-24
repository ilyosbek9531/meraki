import React from 'react'
import styles from "./Services.module.scss"
import SEO from 'SEO'
import Service from 'Components/Pages/Services/Service'

const Services = () => {
  return (
    <div>
        <SEO title={"Services"}/>
        <Service/>
    </div>
  )
}

export default Services