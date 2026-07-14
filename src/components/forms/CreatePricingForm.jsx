import React, { useState } from 'react';
import Input from '../ui/Input';
import { createPricing } from '../../services/pricingService';

const CreatePricingForm = () => {


    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: '',
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await createPricing(formData);

            console.log(response);

            alert("Tarif muvaffaqiyatli yaratildi!");

            setFormData({
                title: '',
                price: '',
                description: '',
            });

        } catch (error) {
            console.log(error);
            alert("Xatolik yuz berdi!");
        }
    };


    return (
        <form className='col-md-7' onSubmit={handleSubmit}>
            <Input
                type='text'
                name='title'
                placeholder='Tarif nomi'
                label="Tarif nomi"
                value={formData.title}
                onChange={handleChange}
                className='mt-3'
            />

            <Input
                type='text'
                name='price'
                placeholder='Tarif narxi'
                label="Tarif nomi"
                value={formData.price}
                onChange={handleChange}
                className='mt-3'
            />

            <label htmlFor="description" className='mt-3'>Tarif haqida</label>
            <br />
            <textarea
                name="description"
                id="description"
                className='form-control'
                placeholder='Tarif haqida'
                value={formData.description}
                onChange={handleChange}
            ></textarea>

            <button
                type='submit'
                className="btn btn-primary px-3 rounded-5 mt-3"
            >
                Yaratsh
            </button>
        </form>
    )
}

export default CreatePricingForm