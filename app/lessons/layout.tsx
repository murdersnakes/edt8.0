import React from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'

export default function layout({children}) :React.ReactNode {
  return (
    <div className='cont flex mt-24'>
        <Sidebar />
        {children}
    </div>
  )
}
