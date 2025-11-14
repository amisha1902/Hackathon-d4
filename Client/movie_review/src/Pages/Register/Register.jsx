import React, { useState } from 'react'
import './Register.css'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
function Register() {
  return (
    <div className='container'>
      <h2 className='page-header'>Sign Up</h2>

      <div className='register-container'>
      <div className='mb-3 '>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            className='form-control mb-2'
          />
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Email</label>
          <input
            // onChange={(e) => {
            //   setEmail(e.target.value)
            // }}
            type='email'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
            <label htmlFor='mobile'>Mobile Number</label>
          <input
            type='number'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
            <label htmlFor='mobile'>Date of Birth</label>
          <input
            type='date'
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
          <label htmlFor=''>Confirm Password</label>
          <input
            // onChange={(e) => {
            //   setPassword(e.target.value)
            // }}
            type='password'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          Already have an account? <Link to='/login'>Sign In</Link>
        </div>
        <div className='mb-3'>
          <button
            className='btn btn-success'
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register