import React from 'react'

function EditProfile() {
  return (
     <div className='container'>
     <h2 className='mt-5 mb-5'>Edit Profile</h2>

      <div className='register-container'>
      <div className='mb-3 '>
          <label htmlFor='firstname'>First Name</label>
           <input
            // onChange={(e) => setFirstName(e.target.value)}
            type='text'
            className='form-control'
          />
          <label htmlFor='lastname'>Last Name</label>
          <input
            // onChange={(e) => setLastName(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email'>Email</label>
          <input
            // onChange={(e) => setEmail(e.target.value)}
            type='email'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
            <label htmlFor='phone'>Mobile Number</label>
           <input
            // onChange={(e) => setPhone(e.target.value)}
            type='tel'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
            <label htmlFor='mobile'>Date of Birth</label>
          <input
            // onChange={(e) => setdob(e.target.value)}
            type='date'
            className='form-control'
          />
        </div>


        
        
        <div className='mb-3'>
         <button
            // onClick={onRegister}
            className='btn btn-primary'
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  
  )
}

export default EditProfile