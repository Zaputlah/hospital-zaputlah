import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudRain, faSnowflake, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faBars, faUser, faSignOutAlt, faStethoscope, faHospital, faFileMedical, faMoneyBill, faCog, faUserMd, faUserInjured, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './css/SuperAdmin.css'; // Sesuaikan dengan nama CSS Anda

const SuperAdmin = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isHospitalsOpen, setIsHospitalsOpen] = useState(false); // State untuk mengontrol submenu Hospitals
    const [weatherData, setWeatherData] = useState({});
    const [currentTime, setCurrentTime] = useState(new Date());
    const [expandedMenus, setExpandedMenus] = useState([]);
    const [activeMenu, setActiveMenu] = useState('Dashboard'); // State untuk melacak menu yang aktif

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleHospitals = () => {
        setIsHospitalsOpen(!isHospitalsOpen); // Toggle state submenu Hospitals ketika tombol Hospitals diklik
    };

    const handleLogout = () => {
        // Tambahkan kode logout di sini
    };

    const toggleMenu = (menu) => {
        const isExpanded = expandedMenus.includes(menu);

        if (isExpanded) {
            // If the menu is already expanded, collapse it
            setExpandedMenus(expandedMenus.filter((item) => item !== menu));
        } else {
            // If the menu is not expanded, expand it
            setExpandedMenus([...expandedMenus, menu]);
        }
    };

    useEffect(() => {
        const apiKey = '7a597a63c7b7422fb1bfb0ddf3ab682d';

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

                fetch(apiUrl)
                    .then(response => response.json())
                    .then(data => {
                        const temperature = data.main.temp;
                        const weatherDescription = data.weather[0].description; // Get weather description
                        setWeatherData({ temperature, weatherDescription });
                    })
                    .catch(error => {
                        console.error('Error fetching weather data:', error);
                    });
            },
            (error) => {
                console.error('Error getting user geolocation:', error);
            }
        );
    }, []);

    const getWeatherIcon = (weatherDescription) => {
        if (weatherDescription.includes('clear')) {
            return faSun;
        } else if (weatherDescription.includes('cloud')) {
            return faCloud;
        } else if (weatherDescription.includes('rain')) {
            return faCloudRain;
        } else if (weatherDescription.includes('snow')) {
            return faSnowflake;
        } else {
            return faCloudSun; // Default icon
        }
    };

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        // Di sini Anda dapat menambahkan logika lain yang sesuai dengan menu yang diklik
    };

    return (
        <nav className={`admin-sidebar ${isOpen ? '' : 'closed'}`}>
            <div className="sidebar-toggle" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars} />&nbsp;&nbsp;
                <span className={`toggle-text ${isOpen ? '' : 'hidden'}`}>superadmin</span>
            </div>
            <div className="sidebar-header">
                <FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;
                <span className={isOpen ? 'show-text' : ''}>Admin Name</span>
            </div>
            <ul className="sidebar-menu">
                <li>
                    <a href="#" onClick={() => handleMenuClick('Dashboard')}>
                        <FontAwesomeIcon icon={faStethoscope} />&nbsp;&nbsp;
                        <span className={isOpen ? 'show-text' : ''}>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => handleMenuClick('Hospitals')}>
                        <FontAwesomeIcon icon={faHospital} />&nbsp;&nbsp;
                        <span className={isOpen ? 'show-text' : ''}>Hospitals</span>
                    </a>
                    {isHospitalsOpen && (
                        <ul className="submenu">
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faUserInjured} />&nbsp;&nbsp;
                                    <span className={isOpen ? 'show-text' : ''}>Pasien</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faUserMd} />&nbsp;&nbsp;
                                    <span className={isOpen ? 'show-text' : ''}>Dokter</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faCalendarAlt} />&nbsp;&nbsp;
                                    <span className={isOpen ? 'show-text' : ''}>Jadwal</span>
                                </a>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <a href="#" onClick={() => handleMenuClick('Medical Records')}>
                        <FontAwesomeIcon icon={faFileMedical} />&nbsp;&nbsp;
                        <span className={isOpen ? 'show-text' : ''}>Medical Records</span>
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => handleMenuClick('Financial')}>
                        <FontAwesomeIcon icon={faMoneyBill} />&nbsp;&nbsp;
                        <span className={isOpen ? 'show-text' : ''}>Financial</span>
                    </a>
                </li>
                <li>
                    {/* Menampilkan jam digital */}
                    <span className={isOpen ? 'show-text' : ''}>{currentTime.toLocaleTimeString()}</span>
                    <br></br>
                    {/* Menampilkan ikon cuaca sesuai dengan kondisi cuaca */}
                    {weatherData.weatherDescription && (
                        <>
                            <FontAwesomeIcon icon={getWeatherIcon(weatherData.weatherDescription)} />&nbsp;&nbsp;
                            <span className={isOpen ? 'show-text' : ''}>{weatherData.weatherDescription}</span>
                        </>
                    )}
                    {/* Menampilkan suhu (derajat) */}
                    {weatherData.temperature && (
                        <span>&nbsp;&nbsp;{weatherData.temperature}°C</span>
                    )}
                </li>
            </ul>
            <div className="sidebar-footer">
                <div className="logout" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faCog} />&nbsp;&nbsp;
                    <span className={isOpen ? 'show-text' : ''}>Settings</span>
                </div>
                <div className="profile">
                    <FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;
                    <span className={isOpen ? 'show-text' : ''}>My Profile</span>
                </div>
                <div className="logout" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />&nbsp;&nbsp;
                    <span className={isOpen ? 'show-text' : ''}>Log Out</span>
                </div>
            </div>
        </nav >
    );
};

export default SuperAdmin;
