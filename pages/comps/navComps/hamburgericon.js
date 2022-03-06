import React from 'react'
import styles from '/styles/Home.module.css'

function Hamburgericon() {
  return (
    <div>
             <div>
            <button  className={styles.hamburger}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            </div>
    </div>
  )
}

export default Hamburgericon