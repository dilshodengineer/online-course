import React from 'react'
import { getImageUrl } from '../../utils/getImageUrl'

const CourseCard = ({ course }) => {
  return (
    <div className='card shadow-sm'>
        <div className="card-body">
            <img src={getImageUrl(course.image)} alt="" className='w-100'/>
            <h5>{course.title}</h5>
            <p className='text-secondary'>
                {course.description}
            </p>
        </div>
    </div>
  )
}

export default CourseCard