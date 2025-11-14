import React, { useState } from 'react'
import './Login.css'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
  return (
    <div className='container'>
      <h2 className='page-header'>Sign In</h2>

      <div className='login-container'>
        <div className='mb-3'>
          <label htmlFor=''>Email address</label>
          <input
            // onChange={(e) => {
            //   setEmail(e.target.value)
            // }}
            type='email'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Password</label>
          <input
            // onChange={(e) => {
            //   setPassword(e.target.value)
            // }}
            type='password'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <input
            type='checkbox'
            className='me-2'
          />
          <label htmlFor=''>Remember me</label>
        </div>
        <div className='mb-3'>
          <button
            // onClick={onLogin}
            className='btn btn-success'
          >
            Sign In
          </button>
        </div>
         <div className='mb-3'>
          {/* <button className='btn btn-link'>Forgot password?</button> */}
          Don't have an account yet? <Link to='/Register'>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login