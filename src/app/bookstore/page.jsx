import React from 'react'
import Image from 'next/image'
import { items } from './data'
import Link from 'next/link'
import styles from './page.module.css'
import books from 'public/books.png'

const bookstore = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <div className={styles.banner}>
                <div className={styles.bannerHeader}>
                <h2 className={styles.title}>Available books <br /> in store</h2>
                <small className={styles.desc}>Read and Download your favourite books</small>
                </div>
                <Image alt='banner image'
                src={books}
                quality={100}
                fill={false}
                className={styles.img}
                />
            </div>
            <div className={styles.cards}>
                {items.map(item => (
                    <div className={styles.grids} key={item.id}>
                        <Image alt={item.title} className={styles.image} src={item.image} quality={100} fill={true}/>
                        <div className={styles.cardTexts}>
                            <small className={styles.author}>{item.title}</small>
                            <p className={styles.book}>{item.price}</p>
                            <Link href={item.url} className={styles.link}>Buy Now</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default bookstore