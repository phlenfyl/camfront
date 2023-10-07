import './globals.css'
import { Quicksand } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const quick = Quicksand({ subsets: ['latin'], weight:'400', display:'swap' })

export const metadata = {
  title: 'MFM Yaounde',
  description: 'Official Platform of mfm cameroon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quick.className}>
        <div className='container'>
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
