import React, { useState } from 'react'
import './Login.css'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../providers/AuthProvider'
import { login } from '../../Services/users'

function Login() {
     const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // get the user from AuthContext
  const { setUser } = useAuth()

  // get navigate function reference
  const navigate = useNavigate()

  // click event handler of Login button
  const onLogin = async () => {
    if (email.length == 0) {
      toast.warning('please enter email')
    } else if (password.length == 0) {
      toast.warning('please enter password')
    } else {
      const response = await login(email, password)
      if (response['status'] == 'success') {
        toast.success('login successful')

        localStorage.setItem('token', response['data']['token'])
        // localStorage.setItem('firstName', response['data']['firstName'])
        // localStorage.setItem('lastName', response['data']['lastName'])

        // set the logged in user information
        setUser({
          firstname: response['data']['firstname'],
          lastname: response['data']['lastname'],
        })

        // navigate to the PropertyListing page
        navigate('/home')
      } else {
        toast.error(response['error'])
      }
    }
  }
  return (
    <div className='container'>
      <h2 className='page-header'>Sign In</h2>

      <div className='login-container'>
        <div className='mb-3'>
          <label htmlFor=''>Email address</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type='email'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
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
            onClick={onLogin}
            className='btn btn-success'
          >
            Sign In
          </button>
        </div>
         <div className='mb-3'>
          Don't have an account yet? <Link to='/Register'>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login