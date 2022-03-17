import React from 'react';
import { Footer } from '../components/footer/Footer';
import { NavbarMain } from '../components/navbarMain/NavbarMain';

const MainLayout = ({ children }) => {

  return (
    <div className='schema-page'>
      <NavbarMain />
        {children}
      <Footer />
    </div>
  );
};

export default MainLayout;