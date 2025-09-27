import React, { useState, useEffect } from 'react';
import maintenance from '../assets/maintenance.png';
import maintenancemob from '../assets/maintenancemob.png';
import '../App.css';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="h-screen w-screen relative">
      <img 
        src={isMobile ? maintenancemob : maintenance} 
        alt="Maintenance" 
        className={`absolute top-0 left-0 w-full h-full ${isMobile ? 'object-fill' : 'object-cover'}`} 
      />
    </div>
  );
};

export default Home;