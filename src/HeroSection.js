import React from 'react';
import heroImage from './img/rumahsakit1.png';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-image">
                <div className="hero-text-overlay">
                    <img src={heroImage} alt="Ilustrasi Rumah Sakit" style={{ width: '100%', maxWidth: '100%', height: 'auto', display: 'block' }} />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

// import Image from 'react-bootstrap/Image';

// function FluidExample() {
//   return <Image src="holder.js/100px250" fluid />;
// }

// export default FluidExample;
