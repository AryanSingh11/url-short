import React from 'react'
import Image from 'next/image'
import styles from '/styles/Home.module.css'

function MainDisplay() {
  return (
    <div>
         <div className={styles.mainText}>MORE THAN JUST SHORTER LINKS</div>

        <Image 
        src="/people working.svg" 
        layout='responsive'
        alt="people-working Logo" 
        width={350}
        height={150}
        />
        
    </div>
  )
}

export default MainDisplay