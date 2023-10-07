'use client'

import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import logo from 'public/logo.png'

const mfmcam = () => {
    return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <div className={styles.banner}>
                <div className={styles.bannerHeader}>
                <h2 className={styles.title}>About Us</h2>
                <small className={styles.desc}>Our Mission and our Vision</small>
                </div>
                <Image alt='banner image'
                src={logo}
                quality={100}
                fill={false}
                className={styles.img}
                />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>Our Mission and Vision</h2>
                <ul className={styles.list}>
                    <li>To promote the revival of Apostolic signs, wonders and miracles</li>
                    <li>To bring together children of God who are lost in dead churches</li>
                    <li>
                        To train believers in the art and science of spiritual warfare; 
                        thus making them an aggressive and victorious army for the Lord
                    </li>
                    <li>
                        To train believers to receive Holy Ghost baptism and fire as well 
                        as a daily walk and relationship with the Holy Spirit
                    </li>
                    <li>
                        To turn the joy of our enemies to sorrow. That is why we would always 
                        have a Deliverance ministry wherever we are. If you do not believe in 
                        deliverance, you are not supposed to be in MFM
                    </li>
                    <li>
                        To build an aggressive end-time army for the Lord. MFM is an end-time church 
                        where we build an aggressive end-time army for the LordWhat is an end-time 
                        church? An end-time church is a church where a sinner enters with two options: 
                        he either repents or does not come back, contrary to the present day church where 
                        sinners are comfortable and find things so easy and convenient
                    </li>
                    <li>
                        To deliver those who have become slaves to pastors, prophets and apostles
                    </li>
                    <li>
                        To build up heavenly-bound and aggressive Christians. The priority in MFM is 
                        for people to make heaven. It is not a worldly Church
                    </li>
                    <li>To build up prayer eagles</li>
                    <li>To purify the Pentecostal dirtiness of this age</li>
                </ul>

            </div>
        </div>
    </div>
    )
}

export default mfmcam