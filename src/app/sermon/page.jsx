'use client'

import React, { Suspense } from 'react'
import styles from './sermon.module.css'
import Image from 'next/image'
import { handleDownload, handleStream } from '../api/audhand'
import { getSermon } from '../api/api'
import Loading from './loading'


async function sermon () {
  const data = await getSermon('/sermon/sermoncl')

  return (

    <div className={styles.cards}>
      <Suspense fallback={<Loading/>}>
        {data.map(item => (
          <div className={styles.grids} key ={item.slug}>
            <div className={styles.imgContainer}>
              <Image onClick={() => handleStream(item.audio_url, 'audio')} fill src={item.img} alt={item.title} sizes="(min-width: 808px) 50vw, 100vw" style={{ objectFit: 'contain',}} className={styles.image} />
              <audio id="audio" controls className={styles.audio}>
                <source src={item.audio_url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div className={styles.cardTexts}>
              <small className={styles.author}>{item.author_name}</small>
              <p className={styles.book}>{item.title}</p>
              <button className={styles.link} onClick={(e) =>{e.preventDefault(); handleDownload(item.audio_url);}}>Download</button>
            </div>
          </div>
        ))}
      </Suspense>
    </div>
  )
}

export default sermon