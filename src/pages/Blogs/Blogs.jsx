import React from 'react'
import styles from "./Blogs.module.scss"
import SEO from 'SEO'
import Articles from 'Components/Pages/Articles/Articles'

const Blogs = () => {
  return (
    <div>
        <SEO title={"Blog"}/>
        <Articles/>
    </div>
  )
}

export default Blogs