import React from 'react';
import { useTranslation } from 'react-i18next';
import about1 from '../assets/about1.png';
import about2 from '../assets/about2.png';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  const experienceSections = t('about_us.experience.sections', { returnObjects: true });
  const supportItems = t('about_us.support.items', { returnObjects: true });
  const infrastructureItems = t('about_us.infrastructure.items', { returnObjects: true });

  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">{t('about_us.title')}</h1>

        <section className="about-section about-section-top">
          <div className="about-text-block">
            <h2>{t('about_us.experience.title')}</h2>
            <p>{t('about_us.experience.intro')}</p>
            <p>{t('about_us.experience.proof')}</p>

            {experienceSections.map((section, index) => (
              <article key={`${section.title}-${index}`} className="about-experience-section">
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                {section.items?.length > 0 && (
                  <ul>
                    {section.items.map((item, itemIndex) => (
                      <li key={`${section.title}-item-${itemIndex}`}>{item}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}

            <h3>{t('about_us.experience.closing_title')}</h3>
            <p>{t('about_us.experience.closing_text')}</p>

            <h2>{t('about_us.support.title')}</h2>
            <p>
              {t('about_us.support.description_intro')}{' '}
              <strong>{t('about_us.support.description_highlight')}</strong>{' '}
              {t('about_us.support.description_outro')}
            </p>

            <ul>
              {supportItems.map((item, index) => (
                <li key={`support-${index}`}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="about-image-block about-image-right">
            <img src={about1} alt={t('about_us.images.support_alt')} />
          </div>
        </section>

        <section className="about-section about-section-bottom">
          <div className="about-image-block about-image-left">
            <img src={about2} alt={t('about_us.images.infrastructure_alt')} />
          </div>

          <div className="about-text-block">
            <h2>{t('about_us.infrastructure.title')}</h2>
            <p>
              {t('about_us.infrastructure.description_intro')}{' '}
              <strong>{t('about_us.infrastructure.description_highlight')}</strong>{' '}
              {t('about_us.infrastructure.description_outro')}
            </p>

            <ul>
              {infrastructureItems.map((item, index) => (
                <li key={`infrastructure-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
