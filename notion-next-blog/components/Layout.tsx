import Link from 'next/link'
import React, {FC} from 'react'
import { LayoutProps } from '../types/types'
import Footer from './Footer'
import Navibar from './Navibar'


const Layout:FC<LayoutProps> = ({children}) => {
  return (
    <div>
  {/** */}
  <Navibar />
  <main className="w-full pb-12 px-4">{children}</main>
  {/** */}
  <Footer/>
    </div>
  )
}

export default Layout
