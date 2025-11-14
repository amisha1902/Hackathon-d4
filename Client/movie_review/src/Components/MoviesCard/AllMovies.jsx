import React from 'react'
import { Link } from 'react-router-dom';

function AllMovies() {
    

  return (
    
   <div className="container">
  
   <div className="card-body border border-gray border-1 rounded">
    <h5 className="card-title">Avatar</h5>
    <h6 className="card-subtitle mb-2 text-muted">Released Date</h6>
    <button className='btn btn-primary' > Review This Movie </button>
</div>
   
  
</div>
  );
};


export default AllMovies