import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAmbulance,
    faBabyCarriage,
    faBed,
    faFlask,
    faHeartbeat,
    faStethoscope
} from '@fortawesome/free-solid-svg-icons';

const services = [
    { icon: faStethoscope, title: 'Poliklinik spesialis', text: 'Konsultasi terjadwal dengan dokter spesialis berpengalaman.' },
    { icon: faAmbulance, title: 'Instalasi gawat darurat', text: 'Penanganan cepat untuk kondisi darurat, tersedia 24 jam.' },
    { icon: faBed, title: 'Rawat inap', text: 'Ruang perawatan nyaman dengan pemantauan tim medis.' },
    { icon: faFlask, title: 'Laboratorium', text: 'Pemeriksaan penunjang dengan proses yang akurat dan efisien.' },
    { icon: faHeartbeat, title: 'Jantung & pembuluh darah', text: 'Pemeriksaan, diagnosis, dan perawatan jantung terpadu.' },
    { icon: faBabyCarriage, title: 'Ibu & anak', text: 'Pendampingan kehamilan, persalinan, dan tumbuh kembang anak.' }
];

const Services = () => {
    return (
        <section id="service" className="section services-section">
            <div className="site-container">
                <div className="section-heading">
                    <div>
                        <span className="eyebrow">Layanan unggulan</span>
                        <h2>Perawatan lengkap dalam satu rumah sakit.</h2>
                    </div>
                    <p>Mulai dari pemeriksaan rutin hingga penanganan darurat, tim kami bekerja dalam sistem yang saling terhubung.</p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <article className="service-card" key={service.title}>
                            <div className="service-icon"><FontAwesomeIcon icon={service.icon} /></div>
                            <h3>{service.title}</h3>
                            <p>{service.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
