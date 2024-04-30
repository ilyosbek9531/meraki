import React from 'react'
import style from "./MainButton.module.scss"
import { NavLink } from 'react-router-dom'

export default function MainButton({text, link}) {
  return (
    <NavLink
    to={link}
    style={{
      color: "inherit",
      textDecoration: "inherit",
    }}
    >
        <div>{text}</div>
    </NavLink>
  )
}
