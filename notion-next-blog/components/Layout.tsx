import Link from 'next/link'
import React from 'react'
import Footer from './Footer'
import Navibar from './Navibar'

export default function Layout() {
  return (
    <div>
  {/** */}
  <Navibar />
  <main></main>
  {/** */}
  <Footer/>
    </div>
  )
}
