import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import Services from './Services';
import Appointments from './Appointments';
import NewsEvents from './NewsEvents';
import Contact from './Contact';
import Footer from './Footer';
import Akun from './Akun';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <Appointments />
      <NewsEvents />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
