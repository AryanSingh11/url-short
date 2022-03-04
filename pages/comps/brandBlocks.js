import React from 'react'
import Image from 'next/image'
import styles from '/styles/Home.module.css'

function BrandBlocks() {
  return (
    <div>
        <div className={styles.singleBrandDiv}>
        <div className={styles.brandLogoDiv}>
        <Image
            src="/icon-brand-recognition.svg"
            width={50}
            height={50}
            layout='fixed'
            alt='brand-logo'
            background-color='Black'
        ></Image></div>
        <h1>Brand Recognition</h1>
        <p className={styles.brandPara}>Boost your brand recognition with each link.Generic links do not mean a thing.Branded links help instill confidence in your content</p>
        </div>
    </div>
  )
}

export default BrandBlocks;
