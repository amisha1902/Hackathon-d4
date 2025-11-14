import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Home_movie from '../../Components/Home/home_movie'
import MyReviews from '../MyReviews/MyReviews'
function Home() {
  return (
    <div>
      <Navbar />
      <Home_movie/>

      <Outlet />

      
    </div>
  )
}

export default Home
