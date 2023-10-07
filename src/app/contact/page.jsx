import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import phone from 'public/phone.png'
import Link from 'next/link'

const programs = () => {
    return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <div className={styles.banner}>
                <div className={styles.bannerHeader}>
                <h2 className={styles.title}>About Us</h2>
                <small className={styles.desc}>Our Mission and our Vision</small>
                </div>
                <Image alt='banner image'
                src={phone}
                quality={100}
                fill={false}
                className={styles.img}
                />
            </div>
            <div className={styles.mainContent}>
                <h2 className={styles.title}>Need Help? <br /> Messages Us</h2>
                <small className={styles.desc}>Have a need or enquiry? <br /> Reach out to us Here <br /> by filling the form below</small>
                <div className={styles.content}>
                    <form className={styles.form}>
                        <div>
                            <label htmlFor="">Full Name</label>
                            <input type="text" placeholder='first name                   last name' className={styles.input} />
                        </div>
                        <div>
                            <label htmlFor="">Phone Number</label>
                            <input type="text" placeholder='enter your phone number' className={styles.input} />
                        </div>
                        <div>
                            <label htmlFor="">Email Address</label>
                            <input type="text" placeholder='example@gmail..' className={styles.input} />
                
                        </div>
                        <div>
                            <label htmlFor="">Your Message</label>
                            <textarea className={styles.textArea} cols={30} rows={10} placeholder='message'></textarea>
                        </div>

                        <Link href="/" className={styles.butlike}> Send Message </Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default programs