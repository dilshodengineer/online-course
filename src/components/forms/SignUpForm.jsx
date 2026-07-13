import React, { useState } from "react";
import Input from "../ui/Input";
import { register } from "../../services/authService";
import { useNavigate } from "react-router";

const SignUpForm = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await register(formData);

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            navigate('/profile');

            console.log(response);

        } catch (error) {

            console.log(error);

        }
    };

    return (
        <form onSubmit={handleSubmit}>

            <Input
                id="name"
                name="name"
                label="To'liq ismingiz"
                placeholder="Ismingiz"
                value={formData.name}
                onChange={handleChange}
                className="mt-3"
            />

            <Input
                id="email"
                name="email"
                type="email"
                label="Email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="mt-3"
            />

            <Input
                id="password"
                name="password"
                type="password"
                label="Parol"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                className="mt-3"
            />

            <Input
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                label="Parolni tasdiqlang"
                placeholder="********"
                value={formData.password_confirmation}
                onChange={handleChange}
                className="mt-3"
            />

            <hr />

            <button className="btn btn-dark w-100">
                Yuborish
            </button>

        </form>
    );
};

export default SignUpForm;