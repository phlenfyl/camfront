import React from 'react'
import Link from 'next/link'
import styles from './footer.module.css'
import Image from 'next/image'
import MFM from 'public/mfm.png'
// import Button from '@/components/button/Button'

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
          <Link href='/' className={styles.links}>About Us</Link>
          <Link href='/' className={styles.links}>Contact Us</Link>
          <Link href='/' className={styles.links}>Privacy Policy</Link>
        </div>
        <div className={styles.link}>
          <Link href='/' className={styles.links}>Messages</Link>
          <Link href='/' className={styles.links}>Available Books</Link>
          <Link href='/' className={styles.links}>Our Program</Link>
        </div>
        <div className={styles.link}>
          <Link href='/' className={styles.links}>Contact</Link>
          <Link href='/' className={styles.links}>Mega Regional <br /> 
            headquarters, Omnisport <br /> Yaoundé Cameroon.
          </Link>
          <Link href='/' className={styles.links}>Telephone; 
            +237 677293958,              
            +237697524514.
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer