"use client"

import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import Image from 'next/image'
import MFM from 'public/mfm.png'
{/* <script src="https://code.jquery.com/jquery-3.6.0.js"></script> */}

const links =[

    {
        id: 1,
        title: 'Home',
        slug: 'home',
        url: '/'
    },
    {
        id: 2,
        title: 'MFM Cameroon',
        slug: 'mfm-cameroon',
        url: '/mfmcam'
    },
    {
        id: 3,
        title: 'Sermon',
        slug: 'sermon',
        url: '/sermon'
    },
    {
        id: 4,
        title: 'Bookshop',
        slug: 'bookshop',
        url: '/bookstore'
    },
    {
        id: 5,
        title: 'Programs',
        slug: 'programs',
        url: '/programs'
    }
]

// if (typeof window !== 'undefined') {
//     const $ = require('jquery');
//     window.$ = window.jQuery = $;
// }

const Navbar = () => {    
    return (
        <main className={styles.mainContainer}>
            <div className={styles.logo}>
                <Image src={MFM} alt='mfm logo' className={styles.img} />
                <small className={styles.cam}>
                Mega Regional HQ., <br />
                Omnisport Yaoundé, <br />
                Cameroon
                </small>
            </div>
            <label id='icon' className={styles.icon}>
                <Image src='/icon.png' alt='' width={20} height={30} className={styles.burger} />
            </label>
            <div className={styles.color}></div>
            <div className={styles.nav}>
                {links.map(link=> 
                (<Link key={link.slug} href={link.url} className={styles.links}>{link.title}</Link>))} 
                <Link href="/contact" className={styles.contact}> Contact Us </Link>
            </div>
            <Link href="/contact" className={styles.smallContact}> Contact Us </Link>
        </main>
    )
}

export default Navbar