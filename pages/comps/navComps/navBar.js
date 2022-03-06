import React from 'react'
import styles from '/styles/Home.module.css'
import NavLogo from './navLogo'
import NavMenu from './navMenu'
import Hamburgericon from './hamburgericon'

function NavBar() {
  return (
    <div>
        <div className={styles.navWrapper}>
        <nav >
        <div className={styles.containerNav}>
        <NavLogo/>
        <NavMenu/>
        <Hamburgericon/>
        </div>
      </nav>
      </div>
    </div>
  )
}

export default NavBar