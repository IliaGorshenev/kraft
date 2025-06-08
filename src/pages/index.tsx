import ContactForm from '@/components/contact-form';
import CornerBorderedBox from '@/components/corner-bordered-box';
import FeatureSection from '@/components/features';
import PartnersSlider from '@/components/partners-slider';
import { Link } from '@heroui/link';
import { button as buttonStyles } from '@heroui/theme';
import { AlertTriangle, Award, Clock, Cpu, Database, FileCheck, HeadphonesIcon, Lock, Server, ShieldAlert, Users } from 'lucide-react';

import AboutCompanyHero from '@/components/about-company-hero';
import AnimatedServicesSection from '@/components/services';
import DefaultLayout from '@/layouts/default';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <AboutCompanyHero />
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-16">
        {/* First Cybersecurity Feature Section */}
        <FeatureSection
          rightSlot={
            <CornerBorderedBox className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                Кибербезопасность <span className="text-blue-600 dark:text-blue-400">СОПС</span>
              </h2>
              <p className="text-default-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Комплексные решения для защиты вашего бизнеса от современных киберугроз и обеспечения непрерывности бизнес-процессов.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 border border-blue-200 dark:border-blue-800 rounded-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="text-blue-600 dark:text-blue-400">
                      <ShieldAlert size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base">Аудит безопасности</h3>
                  </div>
                  <p className="text-default-600 text-xs sm:text-sm">Выявление уязвимостей в IT-инфраструктуре</p>
                </div>
                <div className="p-3 sm:p-4 border border-blue-200 dark:border-blue-800 rounded-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="text-blue-600 dark:text-blue-400">
                      <Lock size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base">Защита данных</h3>
                  </div>
                  <p className="text-default-600 text-xs sm:text-sm">Шифрование и контроль доступа к информации</p>
                </div>
                <div className="p-3 sm:p-4 border border-blue-200 dark:border-blue-800 rounded-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="text-blue-600 dark:text-blue-400">
                      <Server size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base">Мониторинг</h3>
                  </div>
                  <p className="text-default-600 text-xs sm:text-sm">Круглосуточное отслеживание инцидентов</p>
                </div>
                <div className="p-3 sm:p-4 border border-blue-200 dark:border-blue-800 rounded-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="text-blue-600 dark:text-blue-400">
                      <Database size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base">Восстановление</h3>
                  </div>
                  <p className="text-default-600 text-xs sm:text-sm">Быстрое восстановление после инцидентов</p>
                </div>
              </div>
              <div className="mt-4 sm:mt-6 text-center">
                <Link
                  className={buttonStyles({
                    color: 'primary',
                    variant: 'flat',
                    size: 'sm',
                    class: 'sm:text-base sm:py-2 bg-blue-600 hover:bg-blue-700 text-white',
                  })}
                  href="/cyber-security">
                  Подробнее о кибербезопасности
                </Link>
              </div>
            </CornerBorderedBox>
          }
          leftSlot={
            <CornerBorderedBox className="bg-default-200 rounded-2xl p-3 h-100 flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/80 z-10"></div>
                <img
                  src="/cyber-security.jpg"
                  alt="Кибербезопасность СОПС"
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80';
                  }}
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center">СОПС</h3>
                  <p className="text-sm md:text-base text-center max-w-xs">Современные решения для обеспечения информационной безопасности вашего бизнеса</p>
                </div>
              </div>
            </CornerBorderedBox>
          }
        />

        {/* Second Cybersecurity Feature Section */}
        <FeatureSection
          rightSlot={
            <CornerBorderedBox className="bg-default-200 rounded-2xl p-3 h-100 flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-slate-900/80 z-10"></div>
                <img
                  src="/cyber-defense.jpg"
                  alt="Преимущества СОПС"
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80';
                  }}
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center">Защита 24/7</h3>
                  <p className="text-sm md:text-base text-center max-w-xs">Непрерывный мониторинг и оперативное реагирование на инциденты безопасности</p>
                </div>
              </div>
            </CornerBorderedBox>
          }
          leftSlot={
            <CornerBorderedBox className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-green-50 dark:from-slate-900 dark:to-green-900/40">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                Преимущества <span className="text-green-600 dark:text-green-400">СОПС</span>
              </h2>
              <p className="text-default-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Наши решения по кибербезопасности обеспечивают надежную защиту и соответствуют всем современным требованиям.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 border border-green-200 dark:border-green-800 rounded-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="text-green-600 dark:text-green-400">
                      <FileCheck size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base">Соответствие</h3>
                  </div>
                  <p className="text-default-600 text-xs sm:text-sm">Соответствие требованиям регуляторов (152-ФЗ, GDPR)</p>
                </div>
                <div className="p-3 sm:p-4 border border-green-200 dark:border-green-800 rounded-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="text-green-600 dark:text-green-400">
                      <Users size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base">Экспертиза</h3>
                  </div>
                  <p className="text-default-600 text-xs sm:text-sm">Команда сертифицированных специалистов по безопасности</p>
                </div>
                <div className="p-3 sm:p-4 border border-green-200 dark:border-green-800 rounded-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="text-green-600 dark:text-green-400">
                      <AlertTriangle size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base">Превентивность</h3>
                  </div>
                  <p className="text-default-600 text-xs sm:text-sm">Упреждающий подход к выявлению угроз</p>
                </div>
                <div className="p-3 sm:p-4 border border-green-200 dark:border-green-800 rounded-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="text-green-600 dark:text-green-400">
                      <Cpu size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base">Интеграция</h3>
                  </div>
                  <p className="text-default-600 text-xs sm:text-sm">Бесшовная интеграция с существующими системами</p>
                </div>
              </div>
              <div className="mt-4 sm:mt-6 text-center">
                <Link
                  className={buttonStyles({
                    color: 'primary',
                    variant: 'flat',
                    size: 'sm',
                    class: 'sm:text-base sm:py-2 bg-green-600 hover:bg-green-700 text-white',
                  })}
                  href="/advantages">
                  Узнать о преимуществах
                </Link>
              </div>
            </CornerBorderedBox>
          }
        />

        <AnimatedServicesSection />

        {/* <ProductsShowcase /> */}

        <PartnersSlider />

        <section className="py-16 md:py-24 bg-default-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">Свяжитесь с нами</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы обсудить ваш проект?</h2>
                <p className="text-default-600 mb-8">
                  Наши специалисты готовы ответить на ваши вопросы и помочь подобрать оптимальное решение для вашего бизнеса. Заполните форму, и мы свяжемся с вами в
                  ближайшее время.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                      <HeadphonesIcon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Техническая поддержка</h3>
                      <p className="text-default-600 text-sm">Круглосуточная поддержка для наших клиентов</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Быстрый ответ</h3>
                      <p className="text-default-600 text-sm">Мы свяжемся с вами в течение 24 часов</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                      <Award size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Гарантия качества</h3>
                      <p className="text-default-600 text-sm">Мы гарантируем высокое качество наших услуг</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </section>
    </DefaultLayout>
  );
}
