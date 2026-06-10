import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faHeart, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import hospitalImage from './img/herosection.jpg';

const AboutUs = () => {
    return (
        <section className="section about-section" id="about">
            <div className="site-container about-grid">
                <div className="about-image">
                    <img src={hospitalImage} alt="Gedung dan tim Rumah Sakit Zaputlah" />
                    <div className="experience-badge">
                        <strong>30+</strong>
                        <span>tahun melayani</span>
                    </div>
                </div>

                <div className="about-content">
                    <span className="eyebrow">Tentang Zaputlah</span>
                    <h2>Pelayanan kesehatan yang tumbuh bersama masyarakat.</h2>
                    <p>
                        Sejak 1990, kami merawat pasien dengan standar medis yang terus berkembang
                        tanpa kehilangan hal yang paling penting: perhatian yang tulus dan komunikasi
                        yang jelas.
                    </p>
                    <div className="value-list">
                        <div className="value-item">
                            <FontAwesomeIcon icon={faHeart} />
                            <div><strong>Berpusat pada pasien</strong><span>Setiap keputusan dimulai dari kebutuhan pasien.</span></div>
                        </div>
                        <div className="value-item">
                            <FontAwesomeIcon icon={faShieldAlt} />
                            <div><strong>Aman dan terpercaya</strong><span>Prosedur klinis yang konsisten dan transparan.</span></div>
                        </div>
                        <div className="value-item">
                            <FontAwesomeIcon icon={faAward} />
                            <div><strong>Tim berpengalaman</strong><span>Kolaborasi lintas spesialis untuk hasil yang lebih baik.</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
