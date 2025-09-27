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
        <img src={item.itemImageSrc} alt={item.alt} className="w-full h-full object-cover" />
        <div
          className="absolute top-1/2 -translate-y-1/2 flex flex-col p-4 md:p-0"
          style={{ left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <div className="max-w-md text-center">
            <p
              className="font-bold mb-4 text-2xl md:text-4xl"
              style={{ color: item.textColor }}
            >
              {t(item.label)}
            </p>
          </div>
          <Button 
            label={t('carousel.contacus_btn.label')} 
            severity="primary" 
            className="text-lg md:text-2xl w-auto self-center" 
            style={{ color: item.textColor, background: '#6366F1' }} 
            rounded 
          />
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
          showNavigators={false}
          showIndicators={false}
          className="w-full h-full"
        />
      </section>

      <section className="flex flex-col md:flex-row w-full" style={{ background: '#424242' }}>
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left p-8">
          <h2 className="font-bold text-white text-2xl md:text-4xl">{t('section2.title')}</h2>
          <p className="text-xl md:text-2xl" style={{ color: 'white' }}>{t('section2.body')}</p>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <img src={n8n} alt="n8n" className="h-auto w-1/2 md:w-auto md:h-full object-contain" />
        </div>
      </section>

      <section 
        className="h-[25vh] md:h-[50vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h2 className="text-white text-3xl md:text-5xl font-bold text-center p-4"></h2>
      </section>

      <section className="flex flex-col md:flex-row w-full" style={{ background: '#FFFFFF' }}>
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 order-1 md:order-1">
          <DotLottieReact src={support} loop autoplay className="h-64 w-64" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left p-8 order-2 md:order-2">
          <h2 className="font-bold text-black text-2xl md:text-4xl">{t('section3.title')}</h2>
        </div>
      </section>
    </div>
  );
};

export default Home;
