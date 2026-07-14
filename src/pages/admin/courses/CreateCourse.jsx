import React from 'react'
import Container from '../../../components/layouts/admin/Container'
import CreateCourseForm from '../../../components/forms/CreateCourseForm'

const CreateCourse = () => {
  return (
    <Container title="Yangi kurs yaratish.">
      <CreateCourseForm/>
    </Container>
  )
}

export default CreateCourse