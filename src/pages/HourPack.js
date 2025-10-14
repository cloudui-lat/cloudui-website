import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './HourPack.css';

const HourPack = () => {
  const { t, i18n } = useTranslation();
  const hourPacks = t('hour_pack.items', { returnObjects: true });

  return (
    <div className="hour-pack-container">
      <section className="hour-pack-section p-5">
        <h2 className="text-center hour-pack-title">{t('hour_pack.title')}</h2>
        <div className="grid mt-5">
          {hourPacks.map((pack, index) => (
            <div className="col-12 md:col-4" key={index}>
              <Card title={pack.title} className="hour-pack-card">
                <h3 className="price">{pack.price}</h3>
                <ul>
                  {pack.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Button label={pack.cta} className="p-button-lg p-2" rounded onClick={() => window.open(i18n.language === 'es' ? 'https://wa.link/jpqfat' : 'https://wa.link/gzmbhn', '_blank')} />
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HourPack;
