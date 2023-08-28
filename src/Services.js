import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faSyringe, faBed, faClinicMedical, faAmbulance, faFlask, faStethoscope, faHeartbeat, faBabyCarriage } from '@fortawesome/free-solid-svg-icons';
import "./style/services.css"

const Services = () => {
    return (
        <div id='service' className='services-bg'>
            <h2 className="section-title">Layanan Kami</h2>
            <section className="services">
                <div className="service">
                    <FontAwesomeIcon icon={faHospital} size="3x" />
                    <h3>Pelayanan Medis</h3>
                    <p>Pelayanan medis terbaik dari dokter berpengalaman.</p>
                </div>
                <div className="service">
                    <FontAwesomeIcon icon={faSyringe} size="3x" />
                    <h3>Rawat Inap</h3>
                    <p>Rawat inap dengan fasilitas dan perawatan terbaik.</p>
                </div>
                <div className="service">
                    <FontAwesomeIcon icon={faBed} size="3x" />
                    <h3>Bedah</h3>
                    <p>Pelayanan bedah dengan teknologi modern.</p>
                </div>
                <div className="service">
                    <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                    <h3>Rawat Jalan</h3>
                    <p>Rawat jalan untuk penanganan cepat dan efisien.</p>
                </div>
                {/* Tambahkan service lainnya sesuai kebutuhan */}
                <div className="service">
                    <FontAwesomeIcon icon={faAmbulance} size="3x" />
                    <h3>Pelayanan Darurat</h3>
                    <p>Penanganan cepat saat keadaan darurat medis.</p>
                </div>
                <div className="service">
                    <FontAwesomeIcon icon={faFlask} size="3x" />
                    <h3>Laboratorium</h3>
                    <p>Pemeriksaan laboratorium untuk diagnosis penyakit.</p>
                </div>
                <div className="service">
                    <FontAwesomeIcon icon={faStethoscope} size="3x" />
                    <h3>Konsultasi Medis</h3>
                    <p>Konsultasi dengan dokter untuk mendapatkan nasihat medis.</p>
                </div>
                <div className="service">
                    <FontAwesomeIcon icon={faHeartbeat} size="3x" />
                    <h3>Kardiologi</h3>
                    <p>Pemeriksaan dan perawatan penyakit jantung.</p>
                </div>
                <div className="service">
                    <FontAwesomeIcon icon={faBabyCarriage} size="3x" />
                    <h3>Kebidanan dan Kandungan</h3>
                    <p>Perawatan selama kehamilan dan kelahiran.</p>
                </div>
            </section>
        </div>
    );
};

export default Services;
