'use client'

import styles from './page.module.css'
import Banner from '@/components/banner/Banner'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { getSermon, getMain, getSlider } from './api/api'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import Bookstore from '@/components/bookstore/Bookstore'
import { handleDownload, handleStream } from './api/audhand'

var $ = require('jquery');
if (typeof window !== 'undefined'){
  window.$ = window.jQuery = require('jquery');
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default async function Home() {
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
  const data = await getSermon('/main/limited/sermon')
  const main = await getMain('/main/limited/main')
  const slider = await getSlider('/main/limited/program/?program=speicalprogram')


  return (
    <main className={styles.mainContainer}>
      {/* #########################  BANNER AREA ##################### */}
      <div className={styles.container}>
        <Banner />
        <div className={styles.texts}>
          <h1 data-scroll className={styles.title}>
            Surely the Lord <br /> is in this place
          </h1>
          <small className={styles.desc}>
            MFM Ministries is a full gospel ministry devoted <br /> to the Revival of 
            Apostolic Signs, Holy Ghost <br /> fireworks and the unlimited demonstration 
            of the <br /> power of God to deliver to the uttermost.
          </small>
          <br />
          <div className={styles.but}>
            <Link href="/mfmcam" className={styles.butlike}> About Us </Link>
            <Link href="/sermon" className={styles.sermons}> Sermon </Link>
          </div>
        </div>
      </div>

      {/* ######################### ABOUT US AREA ####################### */}
      <div className={styles.about}>
        <div className={styles.aboutsub}>
          <h2 className={styles.abttitle}>Who we are?</h2>
          <p className={styles.abtdesc}>
            MFM Ministries is a full gospel ministry <br />
            devoted to the Revival of Apostolic Signs,<br />
            Holy Ghost fireworks and the unlimited <br />
            demonstration of the power of God to <br />
            deliver to the uttermost.
          </p>
          <Link href="/mfmcam" className={styles.like}> Read More </Link>
        </div>
      </div>

      {/* ######################## PROGRAMS AREA ########################### */}
      <div className={styles.mainSlider}>
        <h2 className={styles.title}>Join us for our <br /> special programs</h2>
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
                {slider && slider.length > 0
                ? slider.map((product) => {
                  return (
                    <div id="featuredProducts" className="item float-left w-100" key={product.slug}>
                      <div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
                        <a href=''>
                          <a className="product float-left">
                            <span className="image text-center">
                              <img id={"img" + product.id} className={styles.img} fill
                                src={product.img} alt={product.title} title={product.title}/>
                            </span>
                          </a>
                        </a>
                      </div>
                    </div>
                  );
                })
                : ""}
              </OwlCarousel>
            </ul>
          </div>
          <Link href="/programs" className={styles.butlike}> More Programs </Link>
        </div>
      </div>

      {/* ####################### SERMONS AREA ############################ */}
      <div className={styles.sermon}>
        <h2 className={styles.title}>Listen to our <br /> Messages</h2>
        <small className={styles.desc}>Listen and Download Messages</small>
        <div className={styles.cards}>
          {data.map(item =>
            (
              <div className={styles.grids} key={item.slug}>
                <div className={styles.imgContainer}>
                  <Image onClick={() => handleStream(item.audio_url, 'audio')} alt={item.title} src={item.img} quality={100} sizes="(min-width: 808px) 50vw, 100vw" style={{ objectFit: 'contain',}} fill className={styles.img}/>
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
            )
          )}
        </div>

        <Link href="/sermon" className={styles.butlike}> More Sermons </Link>
      </div>

      {/* ####################### BOOKSTORES AREA ############################ */}
      <Bookstore />

      {/* ####################### CONTACT AREA ############################ */}
      <div className={styles.program}>
        <h2 className={styles.title}>Join us for our <br /> Mid-Week Programs</h2>
        <div className={styles.content}>
          {main.map(item =>
              (
                <div className={styles.grids} key={item.slug}>
                  <div className={styles.imgContainer}>
                    <Image alt={item.name} src={item.img} quality={100} sizes="(min-width: 808px) 50vw, 100vw" style={{ objectFit: 'fill',}} fill className={styles.img}/>
                  </div>
                  <div className={styles.cardTexts}>
                    <div className={styles.mainTitle}>
                      <span className={styles.author}>{item.name}</span>
                      <small className={styles.book}>{item.time}</small>
                    </div>
                    <a href="/programs" className={styles.link}>Read more</a>
                  </div>
                </div>
              )
            )}
        </div>
        <Link href="/programs" className={styles.butlike}> View All </Link>
      </div>
      
    </main>
  )
}
