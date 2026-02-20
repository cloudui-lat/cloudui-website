import React from 'react';
import { Menubar } from 'primereact/menubar';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SelectButton } from 'primereact/selectbutton';
import logo from '../../assets/logo.png';
import usFlag from '../../assets/us.png';
import paFlag from '../../assets/pa.png';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const items = [
    {
      label: t('nav.home'),
      command: () => { navigate('/'); }
    },
    {
      label: t('nav.about'),
      command: () => { navigate('/about-us'); }
    },
    {
      label: t('nav.services'),
      items: [
        {
          label: t('nav.packages'),
          command: () => { navigate('/services/packages'); }
        },
        {
          label: t('nav.hour_pack'),
          command: () => { navigate('/services/hour-pack'); }
        }
      ]
    },
    {
      label: t('nav.contact'),
      url: 'mailto:info@cloudui.lat'
    },
    {
      label: t('nav.blog'),
      command: () => { navigate('/blog'); },
      visible: false
    }
  ];

  const languageOptions = [
    { value: 'en', icon: usFlag },
    { value: 'es', icon: paFlag }
  ];

  const languageTemplate = (option) => {
    return <img alt={option.value} src={option.icon} style={{ width: '16px', height: '16px' }} />;
  };

  const changeLanguage = (lng) => {
    if (lng) {
      i18n.changeLanguage(lng);
    }
  };

  
  const start = <img alt="logo" src={logo} style={{ height: '60px', width: '60px' }} className="p-mr-2"></img>;
  const end = (
    <div className="flex align-items-center gap-2">
      
      <SelectButton 
        value={i18n.language} 
        options={languageOptions} 
        onChange={(e) => changeLanguage(e.value)} 
        itemTemplate={languageTemplate} 
        optionLabel="value"
      />
    </div>
  );

  return (
    <Menubar id="main-navbar" model={items} start={start} end={end} className="p-menubar-soft-round sticky-navbar" />
  );
};


export default Navbar;

const styles = `
#main-navbar .p-menuitem-text {
  font-weight: bold;
  font-size: 14px;
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
