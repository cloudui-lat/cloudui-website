import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Legal.css';

const slugify = (value) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

const Legal = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

  const sections = t('legal.sections', { returnObjects: true });

  const section = useMemo(() => {
    if (!Array.isArray(sections)) {
      return null;
    }
    return (
      sections.find((item) => item.slug === slug) ||
      sections.find((item) => slugify(item.title) === slug) ||
      null
    );
  }, [sections, slug]);

  useEffect(() => {
    if (section?.title) {
      document.title = `${section.title} | Cloud UI`;
    }
  }, [section]);

  if (!section) {
    return (
      <main className="legal-page">
        <div className="legal-container">
          <h1>{t('legal.not_found_title')}</h1>
          <p>{t('legal.not_found_description')}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="legal-page">
      <div className="legal-container">
        <h1>{section.title}</h1>
        {section.subtitle && <p className="legal-subtitle">{section.subtitle}</p>}
        {(section.description || []).map((paragraph, index) => (
          <p key={`${slug}-paragraph-${index}`}>{paragraph}</p>
        ))}
        {section.list?.length ? (
          <ul>
            {section.list.map((item, index) => (
              <li key={`${slug}-item-${index}`}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </main>
  );
};

export default Legal;
