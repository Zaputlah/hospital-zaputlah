import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPhone, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from './img/logo.png';
import Modal from 'react-bootstrap/Modal';
import Akun from './Akun';
import { OverlayTrigger, Popover } from 'react-bootstrap';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsNavOpen(false);
    };

    const popover = (
        <Popover id="login-access">
            <Popover.Header as="h3">Akses akun demo</Popover.Header>
            <Popover.Body>
                Gunakan username dan password yang sama: <strong>admin</strong>,
                <strong> dokter</strong>, atau <strong>pasien</strong>.
            </Popover.Body>
        </Popover>
    );

    return (
        <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`} id="home">
            <div className="utility-bar">
                <div className="site-container utility-content">
                    <span>IGD buka 24 jam</span>
                    <a href="tel:+62215550119">
                        <FontAwesomeIcon icon={faPhone} />
                        (021) 555-0119
                    </a>
                </div>
            </div>

            <div className="nav-wrap">
                <div className="site-container main-nav">
                    <button className="brand" type="button" onClick={() => scrollToSection('home')} aria-label="Kembali ke beranda">
                        <img src={logo} alt="" />
                        <span>
                            <strong>Zaputlah</strong>
                            <small>Hospital</small>
                        </span>
                    </button>

                    <button
                        className="nav-toggle"
                        type="button"
                        aria-label="Buka menu navigasi"
                        aria-expanded={isNavOpen}
                        onClick={() => setIsNavOpen(!isNavOpen)}
                    >
                        <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} />
                    </button>

                    <nav className={`nav-links ${isNavOpen ? 'is-open' : ''}`} aria-label="Navigasi utama">
                        <button type="button" onClick={() => scrollToSection('home')}>Beranda</button>
                        <button type="button" onClick={() => scrollToSection('about')}>Tentang</button>
                        <button type="button" onClick={() => scrollToSection('service')}>Layanan</button>
                        <button type="button" onClick={() => scrollToSection('appointments')}>Dokter</button>
                        <button type="button" onClick={() => scrollToSection('news')}>Informasi</button>
                        <button type="button" onClick={() => scrollToSection('contact')}>Kontak</button>
                        <Button className="account-button" onClick={() => setShowModal(true)}>
                            <FontAwesomeIcon icon={faUser} />
                            Masuk
                        </Button>
                    </nav>
                </div>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered className="account-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Portal pengguna</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Akun />
                </Modal.Body>
                <Modal.Footer>
                    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                        <Button className="demo-note-button">Lihat akun demo</Button>
                    </OverlayTrigger>
                </Modal.Footer>
            </Modal>
        </header>
    );
};

export default Header;
