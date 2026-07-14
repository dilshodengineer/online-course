import React, { useEffect, useState } from 'react';
import Container from '../../../components/layouts/admin/Container';
import CreateCourseForm from '../../../components/forms/CreateCourseForm';
import { useParams } from 'react-router';
import { getCourse } from '../../../services/courseService';
import Loader from '../../../components/ui/Loader';

const EditCourse = () => {

    const { id } = useParams();

    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchCourse = async () => {
        try {
            const { data } = await getCourse(id);

            setCourse(data.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourse();
    }, [id]);

    return (
        <Container>
            <h4>Kursni tahrirlash</h4>

            {loading && <Loader />}

            {!loading && (
                <CreateCourseForm
                    initialData={course}
                    isEdit={true}
                />
            )}

        </Container>
    )
}

export default EditCourse;