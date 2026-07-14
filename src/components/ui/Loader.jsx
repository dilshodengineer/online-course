import React from 'react'

const Loader = () => {
    return (
        <div className='text-center my-3 p-3'>

            <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            
        </div>
    )
}

export default Loader