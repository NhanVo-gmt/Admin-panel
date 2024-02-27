import React from 'react'
import MainHeader from './MainHeader'

const MainLayout = ({children}) => {
  return (
    <div className='bg-gray-100 w-full min-h-screen'>
        <MainHeader />
        <h1>MainLayout</h1>
        <hr />
        <main>{children}</main>
    </div>
  )
}

export default MainLayout