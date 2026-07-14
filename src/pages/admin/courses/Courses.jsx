import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { getCourses } from '../../../services/courseService';
import CourseCard from '../../../components/ui/CourseCard'
import Container from '../../../components/layouts/admin/Container'
import Loader from '../../../components/ui/Loader';
import Alert from '../../../components/ui/Alert';

const Courses = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data } = await getCourses();

      setCourses(data.data);

    } catch (err) {
      setError(err.response?.data?.message || "Nimadir xato ketdi.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Container>

      <h4>Kurslar</h4>

      <div className="border-bottom border-top border-secondary py-2 mt-2">
        <Link to="/dashboard/courses/create" className='btn btn-primary btn-sm'>+ Yangi kurs yaratish</Link>
      </div>

      {loading && <Loader />}

      {error && <Alert type='danger' message="Xatolik yuz berdi" />}

      {!loading && !error && courses.length === 0 && (
        <Alert
          type="secondary"
          message="Hozircha kurslar mavjud emas."
        />
      )}

      {!loading && !error && (

        <div className="row">

          {courses.map(course => (
            <div
              key={course.id}
              className="col-md-6 col-lg-4 col-xl-3 mt-4"
            >
              <CourseCard course={course} />
            </div>
          ))}

        </div>
      )}

    </Container>
  )
}

export default Courses