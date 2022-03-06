import React from 'react'
import styles from '/styles/Home.module.css'

function NavMenu() {
  return (
    <div>

        <div className={styles.menu}>
          <a href=''>Features </a>
          <a href=''>Pricing </a>
          <a href=''>Resources</a>
      </div>

    </div>
  )
}

export default NavMenu