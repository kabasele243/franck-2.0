import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const LayoutDefault = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-bg-DEFAULT overflow-hidden">
    <Header className="reveal-from-bottom" />
    <main className="site-content flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

export default LayoutDefault;