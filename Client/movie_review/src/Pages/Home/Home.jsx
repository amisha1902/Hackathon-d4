import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
function Home() {
  return (
    <div>
      <Navbar />

      <Outlet />

      <footer>
        <div>Copyrights to Sunbeam @2025</div>
      </footer>
    </div>
  )
}

export default Home
