import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHeartbeat, faStethoscope, faUserMd } from '@fortawesome/free-solid-svg-icons';

const doctors = [
    { icon: faUserMd, name: 'dr. Arif Rahman, Sp.PD', specialty: 'Penyakit Dalam', schedule: 'Senin - Jumat' },
    { icon: faStethoscope, name: 'dr. Nadia Putri, Sp.B', specialty: 'Bedah Umum', schedule: 'Selasa - Sabtu' },
    { icon: faHeartbeat, name: 'dr. Michael Wijaya, Sp.JP', specialty: 'Jantung & Pembuluh Darah', schedule: 'Senin - Kamis' }
];

const Appointments = () => {
    const openContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section className="section doctors-section" id="appointments">
            <div className="site-container">
                <div className="section-heading compact">
                    <div>
                        <span className="eyebrow">Tim dokter</span>
                        <h2>Temukan dokter yang sesuai.</h2>
                    </div>
                    <button className="text-link" type="button" onClick={openContact}>
                        Lihat jadwal lengkap <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                <div className="doctor-grid">
                    {doctors.map((doctor) => (
                        <article className="doctor-card" key={doctor.name}>
                            <div className="doctor-avatar"><FontAwesomeIcon icon={doctor.icon} /></div>
                            <div className="doctor-info">
                                <span>{doctor.specialty}</span>
                                <h3>{doctor.name}</h3>
                                <p>Praktik {doctor.schedule}</p>
                            </div>
                            <button type="button" aria-label={`Buat janji dengan ${doctor.name}`} onClick={openContact}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Appointments;
