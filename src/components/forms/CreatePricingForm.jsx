import React, { useEffect, useState } from 'react';
import Input from '../ui/Input';
import {
    createPricing,
    updatePricing,
} from '../../services/pricingService';
import { useNavigate } from 'react-router';

const CreatePricingForm = ({
    initialData = null,
    isEdit = false,
}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: initialData?.title || '',
        price: initialData?.price || '',
        description: initialData?.description || '',
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                title: initialData.title,
                price: initialData.price,
                description: initialData.description,
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            if (isEdit) {
                await updatePricing(initialData.id, formData);
            } else {
                await createPricing(formData);
            }

            navigate('/dashboard/pricing');

        } catch (error) {
            console.log(error);
            alert("Xatolik yuz berdi!");
        }
    };

    return (
        <form className="col-md-7" onSubmit={handleSubmit}>
            <Input
                type="text"
                name="title"
                placeholder="Tarif nomi"
                label="Tarif nomi"
                value={formData.title}
                onChange={handleChange}
                className="mt-3"
            />

            <Input
                type="number"
                name="price"
                placeholder="Tarif narxi"
                label="Tarif narxi"
                value={formData.price}
                onChange={handleChange}
                className="mt-3"
            />

            <label htmlFor="description" className="mt-3">
                Tarif haqida
            </label>

            <textarea
                name="description"
                id="description"
                className="form-control"
                placeholder="Tarif haqida"
                value={formData.description}
                onChange={handleChange}
            />

            <button
                type="submit"
                className="btn btn-primary px-4 rounded-5 mt-3"
            >
                {isEdit ? "Yangilash" : "Saqlash"}
            </button>
        </form>
    );
};

export default CreatePricingForm;