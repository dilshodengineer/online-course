import React, { useState } from "react";
import Input from "../ui/Input";
import { login } from "../../services/authService";
import { useNavigate } from "react-router";

const SignInForm = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
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

      const response = await login(formData);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      if (response.data.user.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/profile");
      }

    } catch (error) {
      console.log(error.response?.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <Input
        id="email"
        name="email"
        type="email"
        label="Emailingiz"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="mt-3"
      />

      <Input
        id="password"
        name="password"
        type="password"
        label="Parolingiz"
        placeholder="********"
        value={formData.password}
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

export default SignInForm;