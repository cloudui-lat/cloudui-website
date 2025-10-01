import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { ScrollTop } from 'primereact/scrolltop';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      {/* Section 1: Main Title */}
      <section className="main-title-section text-center p-5 grid">
        <div className="col-12 md:col-6 flex flex-column justify-content-center align-items-center">
            <h1 className="main-title">{t('home.main_title')}</h1>
            <p className="main-subtitle p-3">{t('home.main_subtitle')}</p>
            <Button label={t('home.main_cta')} className="p-button-lg p-button-outlined mt-3 main-cta-button" />
        </div>
        <div className="col-12 md:col-6">
            <div className="image-placeholder"></div>
        </div>
      </section>

      {/* Section 2: The Main Argument */}
      <section className="main-argument-section p-5 grid">
        <div className="col-12 md:col-6">
            <div className="image-placeholder"></div>
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
        <div className="mt-5">
            <h3 className="text-center focus-title">{t('home.focus_title')}</h3>
            <div className="grid mt-3">
                <div className="col-12 md:col-4">
                    <Card title={t('home.focus_item1_title')}>
                        <div className="image-placeholder-small"></div>
                        <p>{t('home.focus_item1_text')}</p>
                    </Card>
                </div>
                <div className="col-12 md:col-4">
                    <Card title={t('home.focus_item2_title')}>
                        <div className="image-placeholder-small"></div>
                        <p>{t('home.focus_item2_text')}</p>
                    </Card>
                </div>
                <div className="col-12 md:col-4">
                    <Card title={t('home.focus_item3_title')}>
                        <div className="image-placeholder-small"></div>
                        <p>{t('home.focus_item3_text')}</p>
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