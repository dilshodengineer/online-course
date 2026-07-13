import React, { useState } from 'react';
import { Link, Outlet } from 'react-router';
import Navbar from '../components/layouts/admin/Navbar';
import Sidebar from '../components/layouts/admin/Sidebar';

const AdminLayout = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='d-flex'>

      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex-grow-1 py-5 bg-light min-vh-100">
        <Navbar setSidebarOpen={setSidebarOpen} />

        <div className="main p-4">

          <Outlet />

        </div>
      </div>

    </div>
  )
}

export default AdminLayout