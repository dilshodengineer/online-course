import React from 'react';
import { useNavigate } from 'react-router';

const Navbar = ({ setSidebarOpen }) => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <nav className="navbar bg-white shadow-sm px-3 d-flex justify-content-between">

            <button
                className="bg-transparent border rounded-3 px-1 fs-4"
                onClick={() => setSidebarOpen(true)}
            >
                <i className="bi bi-list"></i>
            </button>

            <button
                className="btn btn-dark btn-sm d-flex gap-2"
                onClick={logout}
            >
                <i className="bi bi-person-circle"></i> Chiqish <i className="bi bi-escape"></i>
            </button>
        </nav>
    )
}

export default Navbar