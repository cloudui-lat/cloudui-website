import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'primereact/card';
import './Services.css';

const Services = () => {
  const { t } = useTranslation();
  const services = t('services.items', { returnObjects: true });

  return (
    <div className="services-container">
      <section className="services-section p-5">
        <h2 className="text-center services-title">{t('services.title')}</h2>
        <div className="grid mt-5">
          {services.map((service, index) => (
            <div className="col-12 md:col-4" key={index}>
              <Card title={service.title} className="service-card">
                <div className="image-placeholder-small"></div>
                <p>{service.text}</p>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
