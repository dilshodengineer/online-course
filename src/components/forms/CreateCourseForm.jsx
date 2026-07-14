import React, { useState } from 'react';
import Input from '../ui/Input';
import FileInput from '../ui/FileInput';
import { createCourse } from '../../services/courseService';

const CreateCourseForm = () => {

  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setForm({
      ...form,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});

    const formData = new FormData();

    formData.append("title", form.title);
    formData.append("price", form.price);
    formData.append("description", form.description);

    if (form.image) {
      formData.append("image", form.image);
    }

    try {
      const { data } = await createCourse(formData);

      setForm({
        title: "",
        price: "",
        description: "",
        image: null,
      });

      alert("Kurs muvaffaqiyatli yaratildi");
    } catch (error) {
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        console.error(error);
      }
    }
  };




  return (
    <form onSubmit={handleSubmit} className='col-md-7'>

      <Input
        type='text'
        name='title'
        placeholder='Kurs nomi'
        label="Kurs nomi"
        value={form.title}
        onChange={handleChange}
        className='mt-3'
      />

      {errors.title && (
        <div className="text-danger mt-1">
          {errors.title[0]}
        </div>
      )}


      <Input
        type='number'
        name='price'
        placeholder='Kurs narxi'
        label="Narxi"
        value={form.price}
        onChange={handleChange}
        className='mt-3'
      />

      {errors.price && (
        <div className="text-danger mt-1">
          {errors.price[0]}
        </div>
      )}

      <Input
        type='text'
        name="description"
        placeholder="Kurs haqida qo'shimchalar"
        label="Kurs Haqida qo'shimcha"
        value={form.description}
        onChange={handleChange}
        className='mt-3'
      />

      {errors.description && (
        <div className="text-danger mt-1">
          {errors.description[0]}
        </div>
      )}

      <FileInput
        className='mt-3'
        name="image"
        label="Kurs rasmi"
        onChange={handleImageChange}
      />

      {errors.image && (
        <div className="text-danger mt-1">
          {errors.image[0]}
        </div>
      )}



      <button
        className="btn btn-primary mt-3 px-4 rounded-5"
        type='submit'>
        Saqlash
      </button>


    </form>
  )
}

export default CreateCourseForm