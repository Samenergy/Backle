import React from 'react'
import VerticalNavbar from '../Dashbars/VerticalNavbar'
import HorizontalNavbar from '../Dashbars/HorizontalNavbar'

const Home = () => {
  return (
    <div className='flex'>
      <VerticalNavbar/>
      <HorizontalNavbar/>
    </div>
  )
}

export default Home
