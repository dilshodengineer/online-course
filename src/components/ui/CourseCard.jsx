import React from 'react';
import { getImageUrl } from '../../utils/getImageUrl';
import { Link } from 'react-router';
import { deleteCourse } from '../../services/courseService';

const CourseCard = ({ course }) => {

    const handleDelete = async () => {
        if (!window.confirm("Rostdan ham o'chirmoqchimisiz?")) {
            return;
        }

        try {
            await deleteCourse(course.id);

            alert("Kurs o'chirildi");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='card shadow-sm'>
            <div className="card-body">
                <img src={getImageUrl(course.image)} alt="" className='w-100 mb-2' />
                <h5>{course.title}</h5>
                <hr />
                <p className='text-secondary'>
                    {course.description}
                </p>
                <div className="d-flex gap-2 justify-content-end">
                    
                    <button
                        onClick={handleDelete}
                        className="btn btn-sm py-1 btn-danger"
                    >
                        <i className="bi bi-trash-fill"></i>
                    </button>

                    <Link
                        to={`/dashboard/courses/${course.id}/edit`}
                        className="btn btn-sm py-1 btn-success"
                    >
                        <i className="bi bi-pencil-fill"></i>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default CourseCard;