// src/components/Layout.jsx
import React from 'react';
import CustomCursor from './CustomCursor';
import Navbar from './Navbar';
import WhatsappButton from './WhatsappButton';
import Footer from '../sections/Footer';

function Layout({ children }) {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="relative gradient text-white">
        {children}
      </main>
      <WhatsappButton />
      <Footer />
    </>
  );
}

export default Layout;