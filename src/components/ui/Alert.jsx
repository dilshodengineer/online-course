import React from 'react'

const Alert = ( {message, type = '' }) => {
  return (
    <div className={`my-3 alert alert-${type}`}>
        {message}
    </div>
  )
}

export default Alert