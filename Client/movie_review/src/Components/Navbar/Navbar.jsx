import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav
      className='navbar navbar-expand-lg bg-dark'
      data-bs-theme='dark'
    >
      <div className='container-fluid d-fle gap-3'>
        <div>
            <Link
          className='navbar-brand text-light'
          to='/home'
        >
        Movies Review
        </Link>

        <Link
          className='navbar-brand text-light'
          to='/home'
        >
        All Movies
        </Link>

        <Link
          className='navbar-brand text-light'
          to='/home'
        >
        My Reviews
        </Link>
        <Link
          className='navbar-brand text-light'
          to='/home'
        >
        Shared With Me
        </Link>
        <Link
          className='navbar-brand text-light'
          to='/home'
        >
        My Reviews
        </Link>
        </div>
        

        <div
          className='collapse navbar-collapse justify-content-end' // Added justify-content-end to align right
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <li className='nav-item '>
              <Link
                className='nav-link text-light'
                aria-current='page'
                to='/'
              >
              Edit Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/home/add-property'
              >
              Change Password
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/home/bookings'
              >
              Logout
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar