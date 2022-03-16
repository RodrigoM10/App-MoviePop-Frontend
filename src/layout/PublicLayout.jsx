import React from 'react';
import { Footer } from '../components/footer/Footer';
import { NavbarMain } from '../components/navbarMain/NavbarMain';

const PublicLayout = ({ children }) => {

  return (
    <div className='schema-page'>
      <NavbarMain />
      <div className='my-auto'>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PublicLayout;