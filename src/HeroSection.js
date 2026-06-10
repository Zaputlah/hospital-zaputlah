import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck, faPhone } from '@fortawesome/free-solid-svg-icons';
import heroImage from './img/rumahsakit.png';

const HeroSection = () => {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero-section" aria-labelledby="hero-title">
            <div className="site-container hero-grid">
                <div className="hero-copy">
                    <span className="eyebrow">Melayani sejak 1990</span>
                    <h1 id="hero-title">Perawatan yang tepat, dengan pendekatan yang hangat.</h1>
                    <p className="hero-lead">
                        Tim medis berpengalaman dan fasilitas terintegrasi untuk mendampingi
                        kesehatan Anda dan keluarga di setiap tahap.
                    </p>
                    <div className="hero-actions">
                        <button className="button button-primary" type="button" onClick={() => scrollTo('appointments')}>
                            Buat janji temu
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                        <a className="button button-secondary" href="tel:+62215550119">
                            <FontAwesomeIcon icon={faPhone} />
                            Hubungi IGD
                        </a>
                    </div>
                    <div className="hero-assurances" aria-label="Keunggulan utama">
                        <span><FontAwesomeIcon icon={faCheck} /> Dokter spesialis</span>
                        <span><FontAwesomeIcon icon={faCheck} /> Layanan 24 jam</span>
                        <span><FontAwesomeIcon icon={faCheck} /> Sistem terintegrasi</span>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-image-card">
                        <img src={heroImage} alt="Tim medis Rumah Sakit Zaputlah" />
                    </div>
                    <div className="hero-status-card">
                        <span className="status-dot" />
                        <div>
                            <strong>IGD siap melayani</strong>
                            <small>24 jam, setiap hari</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
