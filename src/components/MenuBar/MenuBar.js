import React from 'react'
import style from "./MenuBar.module.css"
import { NavLink } from 'react-router-dom'
const MenuBar = () => {
  return (
    <div className={style.menubar}>
      <NavLink to="/companyinfo" className={style.links}>Company Info</NavLink>
    </div>
  )
}

export default MenuBar