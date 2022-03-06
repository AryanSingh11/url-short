import React from 'react'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import BrandBlocks from './brandBlocks'

function WholeBrandBlocks() {
  return (
    <div>
        <div className={styles.brandMainDiv}>
            <BrandBlocks/>
            <BrandBlocks/>
            <BrandBlocks/>
    </div>
    </div>
  )
}

export default WholeBrandBlocks