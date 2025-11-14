import React from 'react'
import AllMovies from '../MoviesCard/AllMovies'

function Home_movie() {
  return (
    <div>  
    <div>
        <h2 className='ps-4 pt-4'>All Movies</h2>
      </div>  
    <div className='d-flex'>
      
      <AllMovies />
      <AllMovies />
    </div></div>
  )
}

export default Home_movie