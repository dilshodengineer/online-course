import React, { useEffect, useState } from 'react';
import Input from '../ui/Input';
import FileInput from '../ui/FileInput';
import { createCourse, updateCourse } from '../../services/courseService';
import { useNavigate } from 'react-router';
import { getImageUrl } from '../../utils/getImageUrl';

const CreateCourseForm = ({
  initialData = null,
  isEdit = false,
}) => {

  const [errors, setErrors] = useState({});
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: initialData?.title || "",
    price: initialData?.price || "",
    description: initialData?.description || "",
    image: null,
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        title: initialData.title,
        price: initialData.price,
        description: initialData.description,
        image: null,
      });
    }
  }, [initialData]);


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

    Object.entries(form).forEach(([key, value]) => {
      if (value !== null) {
        formData.append(key, value);
      }
    });

    try {
      if (isEdit) {
        await updateCourse(initialData.id, formData);
      } else {
        await createCourse(formData);
      }

      navigate("/dashboard/courses");

    } catch (error) {
      // if (error.response?.status === 422) {
      //     setErrors(error.response.data.errors);
      // } else {
      //     console.error(error);
      // }

      console.log(error.response.data);

      if (error.response?.status === 422) {
        setErrors(error.response.data.errors);
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

      {isEdit && initialData?.image && (
        <div className="mt-3">
          <label className="mb-2">Joriy rasm</label>

          <img
            src={getImageUrl(initialData.image)}
            alt={initialData.title}
            className="img-thumbnail d-block mt-3"
            style={{
              width: "220px",
              height: "140px",
              objectFit: "cover",
            }}
          />
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
        type="submit"
      >
        {isEdit ? "Yangilash" : "Saqlash"}
      </button>


    </form>
  )
}

export default CreateCourseForm