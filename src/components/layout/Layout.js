import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from '../effects/CustomCursor';

const Layout = ({ children }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="layout min-h-screen flex flex-col">
      <CustomCursor />
      <Navbar />
      <main className="layout-main flex-grow">{children}</main>
      <Footer />
      <div className="elfsight-app-a0caeb88-23ad-48c5-9c51-770b10e6ca12" data-elfsight-app-lazy></div>
    </div>
  );
};

export default Layout;
