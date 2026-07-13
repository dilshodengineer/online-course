import React from 'react';
import { useNavigate } from 'react-router';
import LogoutBtn from '../../ui/LogoutBtn';

const Navbar = ({ setSidebarOpen }) => {

    return (
        <nav className="navbar bg-white shadow-sm px-3 d-flex justify-content-between">

            <button
                className="bg-transparent border rounded-3 px-1 fs-4"
                onClick={() => setSidebarOpen(true)}
            >
                <i className="bi bi-list"></i>
            </button>

            <LogoutBtn/>

        </nav>
    )
}

export default Navbar