import React, { useState } from 'react';
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
  const [visibleSubmenu, setVisibleSubmenu] = useState(null);

  const itemRenderer = (item) => {
    return (
      <a 
        href='#!'
        className="p-menuitem-link" 
        onMouseEnter={() => setVisibleSubmenu(item.label)}
        onMouseLeave={() => setVisibleSubmenu(null)}
        onClick={item.command}
      >
        <span className={item.icon} />
        <span className="p-menuitem-text">{item.label}</span>
        {item.items && <span className="p-submenu-icon pi pi-angle-down" />}
        {item.items && visibleSubmenu === item.label && (
          <ul className="p-submenu-list">
            {item.items.map((subItem, index) => (
              <li key={index} className="p-menuitem">
                <a href='#!' className="p-menuitem-link" onClick={subItem.command}>
                  <span className="p-menuitem-text">{subItem.label}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </a>
    );
  };

  const items = [
    {
      label: t('nav.home'),
      icon: 'pi pi-fw pi-home',
      command: () => { navigate('/'); }
    },
    {
      label: t('nav.services'),
      icon: 'pi pi-fw pi-cog',
      template: itemRenderer,
      items: [
        {
          label: t('nav.services_sub'),
          command: () => { navigate('/services'); }
        },
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
      label: t('nav.about'),
      icon: 'pi pi-fw pi-info-circle',
      command: () => { navigate('/about'); },
      visible: false,
      template: itemRenderer,
      items: [
        {
          label: t('nav.clients'),
          command: () => { navigate('/about/clients'); }
        }
      ]
    },
    {
      label: t('nav.contact'),
      icon: 'pi pi-fw pi-envelope',
      command: () => { navigate('/contact'); }
    },
    {
      label: t('nav.blog'),
      icon: 'pi pi-fw pi-book',
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
    <SelectButton 
      value={i18n.language} 
      options={languageOptions} 
      onChange={(e) => changeLanguage(e.value)} 
      itemTemplate={languageTemplate} 
      optionLabel="value"
    />
  );

  return (
    <Menubar id="main-navbar" model={items} start={start} end={end} className="p-menubar-soft-round sticky-navbar" />
  );
};

export default Navbar;