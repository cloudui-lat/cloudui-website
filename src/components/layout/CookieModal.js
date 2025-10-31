import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import './CookieModal.css';

const CookieModal = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookie_consent');
    if (!cookieConsent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    setVisible(false);
  };

  const footer = (
    <div>
      <Button label={t('cookies.reject')} icon="pi pi-times" onClick={rejectCookies} className="p-button-text" />
      <Button label={t('cookies.accept')} icon="pi pi-check" onClick={acceptCookies} autoFocus />
    </div>
  );

  return (
    <Dialog
      header={t('cookies.title')}
      visible={visible}
      style={{ width: '50vw' }}
      modal
      onHide={() => setVisible(false)}
      footer={footer}
    >
      <div className="cookie-policy-content">
        <p>{t('cookies.content')}</p>
      </div>
    </Dialog>
  );
};

export default CookieModal;