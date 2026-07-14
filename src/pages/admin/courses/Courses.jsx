import React from 'react'
import { Link } from 'react-router'

const Courses = () => {
  return (
    <div>
      <div className="text-end border-bottom pb-2">
        <Link to="/dashboard/courses/create" className='btn btn-primary btn-sm'>+ Yangi kurs yaratish</Link>
      </div>
    </div>
  )
}

export default Courses