import React from 'react'
import MyReview from '../../Components/MyReviews/MyReview'
import Navbar from '../../Components/Navbar/Navbar'
function MyReviews() {
  return (
    <div>
        <Navbar/>
         <h4 className='ps-5 pt-4'>My Reviews</h4>

    <MyReview/>
    
    <MyReview/>
    <MyReview/></div>
  )
}

export default MyReviews