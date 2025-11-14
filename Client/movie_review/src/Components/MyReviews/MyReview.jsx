import React from 'react'

function MyReview() {
    return (
        <div className='container'>


                <div className="container">

                    <div className="card-body border border-gray border-1 rounded">
                    <div className='d-flex'>
                    <h5 className="card-title">Titanic</h5>
                   <button className='btn btn-primary ms-2 text-mb' > 9/10</button>


                    </div>
                        <p>An emotionally charged masterpiece. Beautiful cinematography</p>

                        <h6 className=" mb-4 mt-4 text-muted text-sm text-gray">Last Updated: 2023-05-15</h6>
                        <div className='d-flex'>
                            <button className='btn btn-primary me-3' > Edit </button>
                            <button className='btn btn-success me-3' > Share </button>
                            <button className='btn btn-danger' > Delete </button>


                        </div>
                    </div>


                </div>
            </div>


    )
}

export default MyReview