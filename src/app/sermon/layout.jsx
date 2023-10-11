import React from 'react'
import styles from './sermon.module.css'
import Image from 'next/image'
import go from 'public/go.png'

export const metadata = {
    title: 'Sermon',
    description: 'Messages to spring up your spiritual life',
}

const layout = ({children}) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerHeader}>
            <h2 className={styles.title}>Listen to our <br /> Messages</h2>
            <small className={styles.desc}>Listen and Download Messages</small>
          </div>
          <Image alt='banner image'
            src={go}
            quality={100}
            fill={false}
            className={styles.img}
          />
        </div>
        
        {children}
      </div>
    </div>
  )
}

export default layout