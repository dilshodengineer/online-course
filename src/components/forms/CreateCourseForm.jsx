import React, { useState } from 'react';
import Input from '../ui/Input';
import FileInput from '../ui/FileInput';
import { createCourse } from '../../services/courseService';

const CreateCourseForm = () => {

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

    const formData = new FormData();

    formData.append("title", form.title);
    formData.append("price", form.price);
    formData.append("description", form.description);

    if (form.image) {
      formData.append("image", form.image);
    }

    console.log(formData);
    

    // try {
    //   const { data } = await createCourse(formData);

    //   console.log(data);

    // } catch (error) {
    //   console.error(error.response?.data || error);
    // }
  };




  return (
    <form onSubmit={handleSubmit} className='col-md-7'>

      <Input
        type='text'
        name='title'
        placeholder='Kurs Nomi'
        label="Kurs nomi"
        value={form.title}
        onChange={handleChange}
        className='mt-3'
      />
      <Input
        type='number'
        name='price'
        placeholder='Kurs narxi'
        label="Kurs Narxi"
        value={form.price}
        onChange={handleChange}
        className='mt-3'
      />
      <Input
        type='text'
        name="description"
        placeholder="Kurs Haqida qo'shimcha"
        label="Kurs Haqida qo'shimcha"
        value={form.description}
        onChange={handleChange}
        className='mt-3'
      />

      <FileInput
        name="image"
        label="Kurs rasmi"
        onChange={handleImageChange}
      />



      <button
        className="btn btn-primary mt-3 px-4 rounded-5"
        type='submit'>
        Saqlash
      </button>


    </form>
  )
}

export default CreateCourseForm