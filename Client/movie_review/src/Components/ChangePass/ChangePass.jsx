import React from 'react'

function ChangePass() {
  return (
    <div>
        <div className='container'>
     <h2 className='mt-3 mb-3'>Change Password</h2>

      <div className='register-container'>
      <div className='mb-3 '>
          <label htmlFor='cpass'>Current Password</label>
           <input
            // onChange={(e) => setFirstName(e.target.value)}
            type='password'
            className='form-control'
          />
          <label htmlFor='npass'>New Password</label>
          <input
            // onChange={(e) => setLastName(e.target.value)}
            type='password'
            className='form-control'
          />
          <label htmlFor='npass'>Confirm New Password</label>
          <input
            // onChange={(e) => setLastName(e.target.value)}
            type='password'
            className='form-control'
          />
        </div>
       

        
        
        <div className='mb-3'>
         <button
            // onClick={onRegister}
            className='btn btn-primary'
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  
  )
    </div>
  )
}

export default ChangePass