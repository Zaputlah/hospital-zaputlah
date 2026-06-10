import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import Services from './Services';
import Appointments from './Appointments';
import NewsEvents from './NewsEvents';
import Contact from './Contact';
import Footer from './Footer';
import './style/landing.css';

const HomePage = () => {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <HeroSection />
        <AboutUs />
        <Services />
        <Appointments />
        <NewsEvents />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
