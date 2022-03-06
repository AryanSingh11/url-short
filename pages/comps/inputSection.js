import React from 'react'
import Image from 'next/image'
import styles from '/styles/Home.module.css'

function InputSection() {
  return (
    <div>
         <div className={styles.inputSection}>
      <div className={styles.inputDiv}>

          <div className={styles.inputfield}>
            <input className={styles.inputField}
                  onChange={updateInputLink}
                 
                  type='text'
                  value={inputLink}
                  id='inputLink'
                    placeholder='Shorten a link here'
            ></input>
          </div>
            
          <button className={styles.shortenButton} 
                  onClick={shortFunction}
                  
          >Shorten it!</button>

      </div>
      </div>
    </div>
  )
}

export default InputSection