import React from 'react';
import { NavLink } from 'react-router';
import { sidebarData } from '../../../constants/sidebarData';

const Sidebar = ({ open, setOpen }) => {
  return (
    <>
            {/* Backdrop */}
            {open && (
                <div
                    className="d-lg-none position-fixed top-0 start-0 w-100 h-100 bg-dark"
                    style={{
                        opacity: .5,
                        zIndex: 1040
                    }}
                    onClick={() => setOpen(false)}
                />
            )}

            <aside
                className={`
                    bg-dark text-white
                    position-fixed
                    position-lg-static
                    top-0
                    start-0
                    vh-100
                    p-3
                `}
                style={{
                    width: 260,
                    zIndex: 1050,
                    transition: ".3s",
                    transform:
                        open
                            ? "translateX(0)"
                            : window.innerWidth < 992
                            ? "translateX(-100%)"
                            : "translateX(0)"
                }}
            >

                <div className="d-flex justify-content-between align-items-center mb-4 border-bottom w-100 pb-1">

                    <h4 className="mb-0">
                        Kurs.uz
                    </h4>

                    <button
                        className="btn btn-sm btn-outline-light d-lg-none"
                        onClick={() => setOpen(false)}
                    >
                        ✕
                    </button>

                </div>

                <ul className="nav flex-column">

                    {sidebarData.map(menu => (

                        <li key={menu.path}>

                            <NavLink
                                to={menu.path}
                                end={menu.path === "/dashboard"}
                                className={({ isActive }) =>
                                    `sidebar-item ${
                                        isActive
                                            ? "active"
                                            : "text-white"
                                    }`
                                }
                                onClick={() => setOpen(false)}
                            >
                                <i className={`${menu.icon} me-2`} />

                                {menu.name}
                            </NavLink>

                        </li>

                    ))}

                </ul>

            </aside>
        </>
  )
}

export default Sidebar