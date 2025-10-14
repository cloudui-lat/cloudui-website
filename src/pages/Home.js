import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { ScrollTop } from 'primereact/scrolltop';
import './Home.css';
import Image7 from '../assets/7.png';
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
          <Button label={t('home.main_cta')} className="p-button-lg p-button-outlined mt-3 main-cta-button" />
        </div>
        <div className="col-12 md:col-6">
          <img src={Image7} alt="Cloud UI" className="image-placeholder" />
        </div>
      </section>

      {/* Section 2: The Main Argument */}
      <section className="main-argument-section p-5 grid">
        <div className="col-12 md:col-6">
          <img src={Image4} alt="Cloud UI" className="image-placeholder" />
        </div>
        <div className="col-12 md:col-6 flex flex-column justify-content-center">
          <Card title={t('home.argument_title')} className="argument-card">
            <p>{t('home.argument_text')}</p>
          </Card>
        </div>
      </section>

      <Divider />

      {/* Section 3: What We Do */}
      <section className="what-we-do-section p-5">
        <h2 className="text-center what-we-do-title">{t('home.what_we_do_title')}</h2>
        <div className="grid mt-5">
          <div className="col-12 md:col-6">
            <Card title={t('home.who_we_work_for_title')}>
              <p>{t('home.who_we_work_for_text')}</p>
            </Card>
          </div>
          <div className="col-12 md:col-6">
            <Card title={t('home.how_we_do_it_title')}>
              <p>{t('home.how_we_do_it_text')}</p>
            </Card>
          </div>
        </div>
      </section>
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
                {service.title === 'Data Analytics' ? (
                  <img src={analyticsDashboard} alt="Data Analytics" className="image-placeholder-small" />
                ) : service.title === 'Automation(Power Automate & n8n)' ? (
                  <img src={automation} alt="Automation" className="image-placeholder-small" />
                ) : service.title === 'Cloud Migration' ? (
                  <img src={cloudmigration} alt="Cloud Migration" className="image-placeholder-small" />
                ) : service.title === 'Software & Mobile Development' ? (
                  <img src={webmobdev} alt="Software & Mobile Development" className="image-placeholder-small" />
                ) : service.title === 'Digital Transformation Advisory' ? (
                  <img src={dta} alt="Digital Transformation Advisory" className="image-placeholder-small" />
                ) : service.title === 'Custom Websites' ? (
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
      
      <section className="what-we-do-section p-5">
        <div className="mt-5">

          <div className="grid mt-2">
            <div className="col-12 md:col-6">
              <Card title={t('home.mission_tittle')}>
                <p>{t('home.mission_text')}</p>
              </Card>
            </div>
            <div className="col-12 md:col-6">
              <Card title={t('home.vision_tittle')}>
                <p>{t('home.vision_text')}</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Divider />
      {/* Section 4: Final Call to Action */}
      <section className="final-cta-section text-center p-5">
        <h2>{t('home.final_cta_title')}</h2>
        <Button label={t('home.final_cta_button')} className="p-button-lg p-button-outlined p-button-success mt-3 final-cta-button" />
      </section>


      <ScrollTop />
    </div>
  );
};

export default Home;