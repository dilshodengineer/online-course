import React from 'react';

const Container = ({ children, className = "" }) => {
  return (
    <div className={`container-fluid ${className}`}>
        <div className="row">
            {children}
        </div>
    </div>
  )
}

export default Container;