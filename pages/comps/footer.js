import React from 'react'
import Image from 'next/image'
import styles from '/styles/Home.module.css'


function Footer() {
  return (
    <div>
         <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        

        <div className={styles.footerDiv}>

        <div className={styles.singleFooterDiv}>
        <div className={styles.shortlyFooterDiv}>
            <div>
              <h1>Shortly</h1>
            </div>
            <div className={styles.footerIcons}> 
               <div className={styles.smallIcon}><Image src="/icon-facebook.svg" layout='fixed' width={30} height={30} ></Image></div>
               <div className={styles.smallIcon}><Image src="/icon-twitter.svg" layout='fixed' width={30} height={30}></Image></div>
               <div className={styles.smallIcon}><Image src="/icon-pinterest.svg" layout='fixed' width={30} height={30}></Image></div>
               <div className={styles.smallIcon}><Image src="/icon-instagram.svg" layout='fixed' width={30} height={30}></Image></div>
            </div>
          </div>
          </div>
          
          <div className={styles.singleFooterDiv}>
            <div className={styles.footerDivHeader}>
              <h3>Features</h3>
            </div>
            <div className={styles.footerDivPara}>
            <p>Link shortening</p>
            <p>Branded Links</p>
            <p>Analytics</p>
            </div>
          </div>

          <div className={styles.singleFooterDiv}>
            <div className={styles.footerDivHeader}>
              <h3>Resourcess</h3>
            </div>
            <div className={styles.footerDivPara}>
            <p>Blog</p>
            <p>Developers</p>
            <p>Support</p>
            </div>
          </div>

          <div className={styles.singleFooterDiv}>
            <div className={styles.footerDivHeader}>
              <h3>Company</h3>
            </div>
            <div className={styles.footerDivPara}>
            <p>About</p>
            <p>Our team</p>
            <p>Careers</p>
            <p>Contact</p>
            </div>
          </div>


          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;