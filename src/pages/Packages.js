import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ScrollTop } from 'primereact/scrolltop';
import './Packages.css';

const Packages = () => {
  const { t, i18n } = useTranslation();
  const packages = t('packages.items', { returnObjects: true });
  const services = t('packages.services_items', { returnObjects: true });

  return (
    <div className="packages-container">
      <section className="packages-section p-5">
        <h2 className="text-center packages-title">{t('packages.title')}</h2>
        <div className="grid mt-5">
          {packages.map((pkg, index) => (
            <div className="col-12 md:col-4" key={index}>
              <Card title={pkg.title} className="package-card">
                <h3 className="price">{pkg.price}</h3>
                <ul>
                  {pkg.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Button label={pkg.cta} className="p-button-lg p-2" rounded onClick={() => window.open(i18n.language === 'es' ? 'https://wa.link/jpqfat' : 'https://wa.link/gzmbhn', '_blank')} />
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section className="packages-section p-5">
        <h2 className="text-center packages-title">{t('packages.services_title')}</h2>
        <div className="grid mt-5">
          {services.map((service, index) => (
            <div className="col-12 md:col-4" key={index}>
              <Card title={service.title} className="package-card">
                <h3 className="price">{service.price}</h3>
              </Card>
            </div>
          ))}
        </div>
      </section>
      <ScrollTop />
    </div>
  );
};

export default Packages;
