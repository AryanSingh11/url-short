import React from 'react'
import Image from 'next/image'
import styles from '/styles/Home.module.css'

function AboveFooter() {
  return (
    <div>

        <div>
            <div className={styles.boostDiv}>
                <div>
                <h1 className={styles.h1BoostText}>Boost your links today</h1>
                </div>
                <div>
                <button className={styles.boostButton}>Get Started</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboveFooter