import React from 'react';

const Footer = () => {
  return (
    <div className="p-d-flex p-jc-center p-ai-center" style={{ height: '60px', backgroundColor: '#f8f9fa' }}>
      <p>&copy; {new Date().getFullYear()} cloudui. All rights reserved.</p>
    </div>
  );
};

export default Footer;
