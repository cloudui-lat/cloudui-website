import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-container">
      <div className="grid">
        <div className="col-12 md:col-3">
          <h3>{t('footer.contact_title')}</h3>
          <p><i className="pi pi-envelope"></i> {t('footer.email')}</p>
          <p><i className="pi pi-map-marker"></i> {t('footer.location')}</p>
        </div>
        <div className="col-12 md:col-3">
          <h3>{t('footer.services_title')}</h3>
          <ul>
            <li>{t('footer.service1')}</li>
            <li>{t('footer.service2')}</li>
            <li>{t('footer.service3')}</li>
            <li>{t('footer.service4')}</li>
            <li>{t('footer.service5')}</li>
            <li>{t('footer.service6')}</li>
          </ul>
        </div>
        <div className="col-12 md:col-3">
          <h3>{t('footer.links_title')}</h3>
          <ul>
            <li><Link to="/">{t('nav.home')}</Link></li>
            <li><Link to="/services">{t('nav.services')}</Link></li>
            <li><Link to="/contact">{t('nav.contact')}</Link></li>
          </ul>
        </div>
        <div className="col-12 md:col-3">
          <h3>{t('footer.social_media_title')}</h3>
          <div className="social-media-icons">
            <a href="https://instagram.com/cloudui.lat" target="_blank" rel="noreferrer"><i className="pi pi-instagram"></i></a>
            <a href="https://facebook.com/cloudui.lat" target="_blank" rel="noreferrer"><i className="pi pi-facebook"></i></a>
            <a href="https://github.com/cloudui-lat" target="_blank" rel="noreferrer"><i className="pi pi-github"></i></a>
            <a href="https://linkedin.com/in/cloudui-lat" target="_blank" rel="noreferrer"><i className="pi pi-linkedin"></i></a>
            <a href="https://tiktok.com/@cloudui.lat" target="_blank" rel="noreferrer"><i className="pi pi-tiktok"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center mt-5">
        <h1>{t('footer.company_name')}</h1>
        <h3>{t('footer.copyright')}</h3>
      </div>
    </footer>
  );
};

export default Footer;