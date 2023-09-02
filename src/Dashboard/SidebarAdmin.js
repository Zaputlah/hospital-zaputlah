import React, { useState } from 'react';
import { FaBars, FaHome, FaUser, FaCloudSun, FaUsers, FaCog, FaShieldAlt, FaList, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './css/SidebarAdmin.css'; // Pastikan Anda memiliki file CSS yang sesuai

const SidebarAdmin = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
            <div className="toggle-button" onClick={toggleSidebar}>
                <FaBars />
            </div>
            <ul className="menu">
                <li>
                    <Link to="/">
                        <FaHome />
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/userinfo">
                        <FaUser />
                        <span>Informasi Pengguna</span>
                    </Link>
                </li>
                <li>
                    <Link to="/weather">
                        <FaCloudSun />
                        <span>Cuaca Hari Ini</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageusers">
                        <FaUsers />
                        <span>Mengelola Pengguna</span>
                    </Link>
                </li>
                <li>
                    <Link to="/settings">
                        <FaCog />
                        <span>Pengaturan Sistem</span>
                    </Link>
                </li>
                <li>
                    <Link to="/security">
                        <FaShieldAlt />
                        <span>Pengaturan Keamanan</span>
                    </Link>
                </li>
                <li>
                    <Link to="/todolist">
                        <FaList />
                        <span>To-Do List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/logout">
                        <FaSignOutAlt />
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SidebarAdmin;
