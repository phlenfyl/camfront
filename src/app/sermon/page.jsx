import React from 'react'
import styles from './sermon.module.css'
import Image from 'next/image'
import go from 'public/go.png'

async function getData() {
  const res = await fetch('http://127.0.0.1:8000/sermon/sermoncl', { next: { revalidate: 10 } })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

async function sermon () {
  const data = await getData()
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
        <div className={styles.cards}>
          {data.map(item => (
            <div className={styles.grids} key ={item.slug}>
              <div className={styles.imgContainer}>
                <Image fill src={'http://127.0.0.1:8000' + item.img} sizes="(min-width: 808px) 50vw, 100vw" style={{ objectFit: 'contain',}} alt={item.name} className={styles.image} />
              </div>
              <div className={styles.cardTexts}>
                <small className={styles.author}>{item.author_name}</small>
                <p className={styles.book}>{item.title}</p>
                <a href='/' className={styles.link}>Download</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default sermon