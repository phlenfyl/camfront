'use client'

import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import old from 'public/old.png'
import dynamic from 'next/dynamic'
import { getSermon, getMain, getSlider } from '../api/api'

import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'



var $ = require('jquery');
if (typeof window !== 'undefined'){
  window.$ = window.jQuery = require('jquery');
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

async function programs () {
    const data = await getSermon('/program/all/?program=speicalprogram')
    const deli = await getMain('/program/all/?program=deliverance')
    const couns = await getSlider('/program/all/?program=counseling')
    const options ={
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplay: true,
        fluidSpeed: 200,
        smartSpeed: 1000,
        navClass: ["owl-prev", "owl-next"],
        navText: [
            '',
            '',
        ],
        responsive: {0: {items: 1,},400: {items: 2,},
        }
    }
    return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <div className={styles.banner}>
                <div className={styles.bannerHeader}>
                <h2 className={styles.title}>Join us for <br /> special programs</h2>
                <small className={styles.desc}>Listen and watch our Programs</small>
                </div>
                <Image alt='banner image'
                src={old}
                quality={100}
                fill={false}
                className={styles.img}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.slider}>
                    <div className={styles.owl} id="owl-carousel-products">
                        <ul id="owl-carousel-ul" className="owl-theme owl-loaded owl-drag">
                            <OwlCarousel className="owl-theme" items={2} loop margin={10} nav navText={[
                            `${<Image src="/next.png" alt='' width={200} height={200}/>}`,
                            `${<Image src="/previous.jpeg" alt='' width={200} height={200}/>}`,
                            ]}
                            dots={false}
                            animateIn={true}
                            {...options}
                            >
                            {data && data.length > 0
                            ? data.map((product) => {
                                return (
                                <div id="featuredProducts" className="item float-left w-100" key={product.slug}>
                                    <div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
                                    <a href=''>
                                        <a className="product float-left">
                                            <span className="image text-center">
                                                <img id={"img" + product.id} className={styles.img}
                                                src={product.img} alt={product.title} title={product.title}/>
                                            </span>
                                        </a>
                                        <div className={styles.cardTexts}>
                                            <small className={styles.author}>{product.title}</small>
                                            <p className={styles.book}>{product.date}</p>
                                        </div>
                                    </a>
                                    </div>
                                </div>
                                );
                            })
                            : ""}
                            </OwlCarousel>
                        </ul>
                    </div>
                </div>
                <div className={styles.slider}>
                    <div className={styles.owl} id="owl-carousel-products">
                        <ul id="owl-carousel-ul" className="owl-theme owl-loaded owl-drag">
                            <OwlCarousel className="owl-theme" items={2} loop margin={10} nav navText={[
                            `${<Image src="/next.png" alt='' width={200} height={200}/>}`,
                            `${<Image src="/previous.jpeg" alt='' width={200} height={200}/>}`,
                            ]}
                            dots={false}
                            animateIn={true}
                            {...options}
                            >
                            {deli && deli.length > 0
                            ? deli.map((product) => {
                                return (
                                <div id="featuredProducts" className="item float-left w-100" key={product.slug}>
                                    <div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
                                    <a href=''>
                                        <a className="product float-left">
                                            <span className="image text-center">
                                                <img id={"img" + product.id} className={styles.img}
                                                src={product.img} alt={product.title} title={product.title}/>
                                            </span>
                                        </a>
                                        <div className={styles.cardTexts}>
                                            <small className={styles.author}>{product.title}</small>
                                            <p className={styles.book}>{product.date}</p>
                                        </div>
                                    </a>
                                    </div>
                                </div>
                                );
                            })
                            : ""}
                            </OwlCarousel>
                        </ul>
                    </div>
                </div>
                <div className={styles.slider}>
                    <div className={styles.owl} id="owl-carousel-products">
                        <ul id="owl-carousel-ul" className="owl-theme owl-loaded owl-drag">
                            <OwlCarousel className="owl-theme" items={2} loop margin={10} nav navText={[
                            `${<Image src="/next.png" alt='' width={200} height={200}/>}`,
                            `${<Image src="/previous.jpeg" alt='' width={200} height={200}/>}`,
                            ]}
                            dots={false}
                            animateIn={true}
                            {...options}
                            >
                            {couns && couns.length > 0
                            ? couns.map((product) => {
                                return (
                                <div id="featuredProducts" className="item float-left w-100" key={product.slug}>
                                    <div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
                                    <a href={product.url}>
                                        <a className="product float-left">
                                            <span className="image text-center">
                                                <img id={"img" + product.id} className={styles.img} fill
                                                src={product.img} alt={product.title} title={product.title}/>
                                            </span>
                                        </a>
                                        <div className={styles.cardTexts}>
                                            <small className={styles.author}>{product.title}</small>
                                            <p className={styles.book}>{product.date}</p>
                                        </div>
                                    </a>
                                    </div>
                                </div>
                                );
                            })
                            : ""}
                            </OwlCarousel>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default programs