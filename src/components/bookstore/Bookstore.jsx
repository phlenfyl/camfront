'use client'

import React from 'react'
import styles from './bookstore.module.css'
import Link from 'next/link'

const Bookstore = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.bookstore}>
          <h2 className={styles.title}>Top Books Available <br /> in our Bookstore</h2>
          <small className={styles.desc}>A Gateway to higher Consciousness <br /> Elevate your Spirituality with Us</small>
          <div className={styles.mainCards}>
            <div>
              Available Soon
            </div>
          </div>
          <Link href='/bookstore' className={styles.but}>More Books</Link>
        </div>
    </div>
  )
}

export default Bookstore