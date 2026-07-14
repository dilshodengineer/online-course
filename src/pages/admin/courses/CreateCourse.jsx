import React from 'react'
import Container from '../../../components/layouts/admin/Container'
import CreateCourseForm from '../../../components/forms/CreateCourseForm'

const CreateCourse = () => {
  return (
    <Container>
      <h4>Yangi kurs yaratish</h4>
      <CreateCourseForm/>
    </Container>
  )
}

export default CreateCourse