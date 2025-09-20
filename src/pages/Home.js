import React from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';
import bck from '../assets/bck.PNG';
import bck2 from '../assets/bck2.jpg';
import support from '../assets/support.lottie'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import banner from '../assets/banner.png';
import n8n from '../assets/n8n.png';

const Home = () => {
  const { t } = useTranslation();

  const images = [
    {
      itemImageSrc: bck,
      alt: 'Image 1',
      label: 'carousel.slide1.label',
      position: '75%',
      textColor: 'white',
    },
    {
      itemImageSrc: bck2,
      alt: 'Image 2',
      label: 'carousel.slide2.label',
      position: '25%',
      textColor: 'black'
    }
  ];

  const carouselTemplate = (item) => {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <img src={item.itemImageSrc} alt={item.alt} className="w-full h-full object-fill" style={{ height: '95%' }} />
        <div
          className="absolute top-1/2 -translate-y-1/2 flex flex-col"
          style={{ left: item.position, transform: 'translate(-50%, -50%)' }}
        >
          <div className="max-w-md">
            <p
              className="font-bold mb-4"
              style={{ color: item.textColor, fontSize: '34px' }}
            >
              {t(item.label)}
            </p>
          </div>
          <Button label={t('carousel.contacus_btn.label')} severity="primary" style={{ fontSize: '28px', color: item.textColor, background: '#6366F1', width: '50%' }} rounded />
        </div>
      </div>
    );
  };

  return (
    <div>
      <section className="carousel-section w-full relative" style={{ height: 'calc(100vh - var(--navbar-height))' }}>
        <Carousel
          value={images}
          numVisible={1}
          numScroll={1}
          itemTemplate={carouselTemplate}
          autoplayInterval={7000}
          circular
          showNavigators={true}
          showIndicators={true}
          className="w-full h-full"
        />
      </section>


      <section className="h-[25vh] flex flex-row w-full" style={{ background: '#424242' }}>
        <div className="w-1/2 flex flex-col justify-center text-left p-8">
          <h2 className="font-bold text-white text-[36px]">{t('section2.title')}</h2>
          <p className="text-[28px]" style={{ color: 'white' }}>{t('section2.body')}</p>
        </div>
        <div className="w-1/2 flex items-center justify-center p-1">
          <img src={n8n} alt="n8n" className="h-full w-auto object-contain" />
        </div>
      </section>

      <section 
        className="h-[50vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h2 className="text-white text-5xl font-bold"></h2>
      </section>

      <section className="h-[50vh] flex flex-row w-full" style={{ background: '#FFFFFF' }}>
        <div className="w-1/2 flex items-center justify-center p-1">
          <DotLottieReact src={support} loop autoplay style={{ height: '400px' }} />
        </div>
        <div className="w-1/2 flex flex-col justify-center text-left p-8">
          <h2 className="font-bold text-black text-[36px]">{t('section3.title')}</h2>
        </div>
      </section>
    </div>
  );
};

export default Home;
