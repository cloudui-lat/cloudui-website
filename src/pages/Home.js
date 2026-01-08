import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { ScrollTop } from 'primereact/scrolltop';
import './Home.css';
import logo from '../assets/logo.png';
import Image4 from '../assets/4.png';
import n8n from '../assets/n8n.png';
import quickstart from '../assets/quickstart.png';
import shape from '../assets/shape.png';
import analyticsDashboard from '../assets/analytics-dashboard.png';
import automation from '../assets/automation.png';
import cloudmigration from '../assets/cloudmigration.png';
import webmobdev from '../assets/webmobdev.png';
import dta from '../assets/dta.png';
import b2b from '../assets/b2b.png';

const Home = () => {
  const { t } = useTranslation();
  const services = t('services.items', { returnObjects: true });

  return (
    <div className="home-container services-container">
      {/* Section 1: Main Title */}
      <section className="main-title-section text-center p-5 grid">
        <div className="col-12 md:col-6 flex flex-column justify-content-center align-items-center">
          <h1 className="main-title">{t('home.main_title')}</h1>
          <p className="main-subtitle p-3">{t('home.main_subtitle')}</p>
          <Button label={t('home.main_cta')} className="p-button-lg p-button-outlined p-button-success mt-3 final-cta-button" onClick={() => window.open('https://forms.gle/FrSYGdgbRD9WU9FF6', '_blank')} />
        </div>
        <div className="col-12 md:col-6">
          <img src={logo} alt="Cloud UI" />
        </div>
      </section>
      <Divider />
      
      <section>
        <div className="ideas-section mt-5">
          <h3 className="text-center focus-title">{t('home.focus_title')}</h3>
          <div className="grid mt-3">
            <div className="col-12 md:col-4">
              <Card title={t('home.focus_item1_title')}>
                <img src={shape} alt="Shaped Ideas" className="image-placeholder-small" />
                <p>{t('home.focus_item1_text')}</p>
              </Card>
            </div>
            <div className="col-12 md:col-4">
              .              <Card title={t('home.focus_item2_title')}>
                <img src={quickstart} alt="Quick Start" className="image-placeholder-small" />
                <p>{t('home.focus_item2_text')}</p>
              </Card>
            </div>
            <div className="col-12 md:col-4">
              <Card title={t('home.focus_item3_title')}>
                <img src={n8n} alt="n8n" className="image-placeholder-small" />
                <p>{t('home.focus_item3_text')}</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section p-5">
        <h2 className="text-center services-title">{t('services.title')}</h2>
        <div className="grid mt-5">
          {services.map((service, index) => (
            <div className="col-12 md:col-4" key={index}>
              <Card title={service.title} className="service-card">
                {service.imageKey === 'data_analytics' ? (
                  <img src={analyticsDashboard} alt="Data Analytics" className="image-placeholder-small" />
                ) : service.imageKey === 'automation' ? (
                  <img src={automation} alt="Automation" className="image-placeholder-small" />
                ) : service.imageKey === 'cloud_migration' ? (
                  <img src={cloudmigration} alt="Cloud Migration" className="image-placeholder-small" />
                ) : service.imageKey === 'software_mobile_development' ? (
                  <img src={webmobdev} alt="Software & Mobile Development" className="image-placeholder-small" />
                ) : service.imageKey === 'digital_transformation_advisory' ? (
                  <img src={dta} alt="Digital Transformation Advisory" className="image-placeholder-small" />
                ) : service.imageKey === 'custom_websites' ? (
                  <img src={b2b} alt="Custom Websites" className="image-placeholder-small" />
                ) : (
                  <div className="image-placeholder-small"></div>
                )}
                <p>{service.text}</p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <Divider />
      {/* Section 4: Final Call to Action */}



      <ScrollTop className="scroll-top-left" />
    </div>
  );
};

export default Home;