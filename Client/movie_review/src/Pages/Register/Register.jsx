import React, { useState } from 'react'
import './Register.css'
import { register } from '../../Services/users'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
function Register() {
    const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [dob, setdob] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()
const onRegister = async () => {
    if (firstname.length == 0) {
      toast.warning('please enter first name')
    } else if (lastname.length == 0) {
      toast.warning('please enter last name')
    } else if (email.length == 0) {
      toast.warning('please enter email')
    } else if (phone.length == 0) {
      toast.warning('please enter phone number')
    } else if (password.length == 0) {
      toast.warning('please enter password')
    } else if (confirmPassword.length == 0) {
      toast.warning('please confirm password')
    } else if (password != confirmPassword) {
      toast.warning('password does not match')
    } else {
      const response = await register(
        firstname,
        lastname,
        email,
        password,
        phone
      )
      if (response['status'] === 'success') {
        toast.success('Successfully registered user')

        navigate('/')
      } else {
        toast.error(response['error'])
      }
    }
  }

  return (
    <div className='container'>
      <h2 className='page-header'>Sign Up</h2>

      <div className='register-container'>
      <div className='mb-3 '>
          <label htmlFor='firstname'>First Name</label>
           <input
            onChange={(e) => setFirstName(e.target.value)}
            type='text'
            className='form-control'
          />
          <label htmlFor='lastname'>Last Name</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email'>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
            <label htmlFor='phone'>Mobile Number</label>
           <input
            onChange={(e) => setPhone(e.target.value)}
            type='tel'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
            <label htmlFor='mobile'>Date of Birth</label>
          <input
            onChange={(e) => setdob(e.target.value)}
            type='date'
            className='form-control'
          />
        </div>


        
        <div className='mb-3'>
          <label htmlFor=''>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Confirm Password</label>
           <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type='password'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          Already have an account? <Link to='/login'>Sign In</Link>
        </div>
        <div className='mb-3'>
         <button
            onClick={onRegister}
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