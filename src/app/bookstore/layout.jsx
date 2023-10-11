import React from 'react'
// import styles from './page.module.css'

export const metadata = {
    title: 'Bookstore',
    description: 'G.O books and others',
}

const layout = ({children}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default layout