import { cyberSecurityServices } from '@/types';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import required modules
import { Database, FileCheck, Lock, Server, Shield, ShieldAlert } from 'lucide-react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const AnimatedServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Map icon names to components
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      case 'Lock':
        return <Lock className="w-5 h-5" />;
      case 'Server':
        return <Server className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5" />;
      case 'Shield':
        return <Shield className="w-5 h-5" />;
      default:
        return <Shield className="w-5 h-5" />;
    }
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-background w-full max-w-full overflow-hidden" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 md:mb-12">
          Услуги <span className="text-blue-600">кибербезопасности</span>
        </h2>

        <div className="mb-16">
          <Swiper
            grabCursor={true}
            slidesPerView={'auto'}
            spaceBetween={30}
            centeredSlides={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            style={{ padding: '50px 0' }}>
            {cyberSecurityServices.map((service) => (
              <SwiperSlide key={service.id} style={{ width: '350px', height: '500px' }}>
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/600x800?text=Cyber+Security+Image';
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-blue-600/90 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    {service.displayNumber}
                  </div>
                  <div className="absolute top-4 left-4 bg-blue-900/80 text-white p-2 rounded-lg flex items-center gap-2">
                    <span className="text-blue-300">{getIcon(service.icon)}</span>
                    <span className="text-xs font-medium capitalize">
                      {service.category === 'protection' && 'Защита'}
                      {service.category === 'monitoring' && 'Мониторинг'}
                      {service.category === 'response' && 'Реагирование'}
                      {service.category === 'compliance' && 'Соответствие'}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm mb-4 opacity-90 line-clamp-3">{service.description}</p>
                    <Link to={`/cyber-security/${service.id}`} className="inline-flex items-center text-white hover:text-blue-200 font-medium">
                      Узнать подробнее
                      <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* View all services button */}
          <div className="text-center mt-12">
            <Link
              to="/cyber-security"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
              Все услуги кибербезопасности
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedServicesSection;
