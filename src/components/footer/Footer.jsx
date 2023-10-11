import React from 'react'
import Link from 'next/link'
import styles from './footer.module.css'
import Image from 'next/image'
import MFM from 'public/mfm.png'

const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={MFM} alt='mfm logo' className={styles.img} />
          <small className={styles.cam}>Mega Regional <br />
            headquarters, Omnisport <br />
            Yaoundé Cameroon.
          </small>
        </div>
        <div className={styles.link}>
          <Link href='/' className={styles.links}>MFM Cameroon</Link>
          <Link href='/mfmcam' className={styles.links}>About Us</Link>
          <Link href='/contact' className={styles.links}>Contact Us</Link>
          <Link href='/' className={styles.links}>Privacy Policy</Link>
        </div>
        <div className={styles.link}>
          <Link href='/sermon' className={styles.links}>Messages</Link>
          <Link href='/bookstore' className={styles.links}>Available Books</Link>
          <Link href='/programs' className={styles.links}>Our Program</Link>
        </div>
        <div className={styles.link}>
          <Link href='/contact' className={styles.links}>Contact</Link>
          <Link href='/' className={styles.links}>Mega Regional <br /> 
            headquarters, Omnisport <br /> Yaoundé Cameroon.
          </Link>
          <Link href='tel: +237677293958' className={styles.links}>Telephone; 
            +237 677293958,              
            +237697524514.
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer