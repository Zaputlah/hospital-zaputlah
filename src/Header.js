import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { animateScroll as scroll, scroller } from 'react-scroll';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from './img/logo.png';
import Modal from 'react-bootstrap/Modal';
import Akun from "./Akun"
import { OverlayTrigger, Popover } from 'react-bootstrap';


const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [showModal, setShowModal] = useState(false); // Langkah 2

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const scrollToSection = (sectionId) => {
        const isSmallScreen = window.innerWidth < 768;

        if (isSmallScreen) {
            const scrollOptions = {
                behavior: 'smooth',
                left: 0,
                top: document.getElementById(sectionId).offsetTop - 50 // Sesuaikan offset di sini
            };
            window.scrollTo(scrollOptions);
        } else {
            scroller.scrollTo(sectionId, {
                duration: 400, // Durasi animasi untuk layar besar
                smooth: 'easeInOutQuart',
                offset: -60 // Offset untuk layar besar
            });
        }

        if (isSmallScreen && isNavOpen) {
            toggleNav();
        }
    };

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">akses login</Popover.Header>
            <Popover.Body>
                Username&Password = admin
                Username&Password = dokter
                Username&Password = pasien
            </Popover.Body>
        </Popover>
    );


    return (
        <header className="header" id='home' style={{ marginBottom: '100px' }}>
            <Navbar fixed="top" expand="lg" bg="light" variant="secondary" className="bg-tertiary">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="https://linktree-versi-react.vercel.app/">
                            <img
                                src={logo} alt="logo" style={{ width: '50px', height: '50px' }} />
                        </Link>
                    </Navbar.Brand>
                    <div className="slogan">
                        Memberikan Layanan Kesehatan Terbaik
                    </div>
                    <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleNav} />
                    <Navbar.Collapse id="navbarScroll" className={`navigation ${isNavOpen ? 'open' : ''}`}>
                        <Nav variant="underline" className="ms-auto me-2" navbarScroll>
                            <Nav.Item>
                                <Nav.Link href="#home" as="span">Beranda</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => scrollToSection('about')} as="span">Tentang Kami</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => scrollToSection('service')} as="span">Layanan</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => scrollToSection('appointments')} as="span">Buat Janji</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => scrollToSection('news')} as="span">Berita & Acara</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => scrollToSection('contact')} as="span">Kontak</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Button variant="outline-info" onClick={openModal}> {/* Langkah 3 */}
                            <FontAwesomeIcon icon={faUser} className="me-1" /> Akun
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show={showModal} onHide={closeModal}> {/* Langkah 4 */}
                <Modal.Header closeButton>
                    <Modal.Title>Akun</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Akun />
                </Modal.Body>
                <Modal.Footer>
                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                        <Button variant="success">Note</Button>
                    </OverlayTrigger>
                </Modal.Footer>
            </Modal>
        </header>
    );
};

export default Header;
