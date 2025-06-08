import { title } from '@/components/primitives';
import DefaultLayout from '@/layouts/default';
import { cyberSecurityServices } from '@/types';

import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
export default function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = cyberSecurityServices.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <DefaultLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className={title({ size: 'lg' })}>
            Услуга <span className="text-blue-600">не найдена</span>
          </h1>
          <p className="mt-4 mb-8">Запрашиваемая услуга кибербезопасности не существует или была удалена.</p>
          <Link to="/cyber-security" className="inline-flex items-center text-blue-600 font-medium hover:underline">
            <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Вернуться к списку услуг кибербезопасности</span>
          </Link>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Link to="/cyber-security" className="inline-flex items-center text-blue-600 font-medium hover:underline mb-8">
          <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Вернуться к списку услуг кибербезопасности</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-blue-600/10 text-blue-600 px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
              {service.category === 'protection' && 'Защита'}
              {service.category === 'monitoring' && 'Мониторинг'}
              {service.category === 'response' && 'Реагирование'}
              {service.category === 'compliance' && 'Соответствие'}
            </div>
            <h1 className={title({ size: 'lg' })}>
              <span className="text-blue-600">{service.title}</span>
            </h1>

            <div className="mt-8 prose prose-lg max-w-none">
              <p className="text-lg text-default-600 mb-8">{service.description}</p>

              {service.detailedDescription && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">О услуге</h2>
                  <p>{service.detailedDescription}</p>
                </div>
              )}

              {service.benefits && service.benefits.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Преимущества</h2>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.technologies && service.technologies.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Используемые технологии</h2>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div className="lg:col-span-1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="sticky top-24">
              <div className="bg-content1 rounded-xl overflow-hidden shadow-lg">
                <div className="h-56 overflow-hidden">
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/600x400?text=Cyber+Security+Image';
                    }}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Заинтересовала услуга?</h3>
                  <p className="text-default-600 mb-6">Свяжитесь с нами, чтобы обсудить детали и получить индивидуальное предложение для защиты вашего бизнеса.</p>

                  <div className="space-y-4">
                    <Link
                      to="/contact"
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Связаться с нами
                    </Link>

                    <Link
                      to="/cyber-security"
                      className="w-full border border-default-200 text-default-800 py-3 px-4 rounded-lg font-medium flex items-center justify-center hover:bg-default-100 transition-colors">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                      Все услуги кибербезопасности
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-content1 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Нужна консультация?</h3>
                <p className="text-default-600 mb-4">Оставьте свой номер телефона, и наш специалист по кибербезопасности свяжется с вами в ближайшее время.</p>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-default-700 mb-1">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-default-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      placeholder="Введите ваше имя"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-default-700 mb-1">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-default-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>

                  <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Заказать звонок
                  </button>

                  <p className="text-xs text-default-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с нашей{' '}
                    <Link to="/privacy" className="text-blue-600 hover:underline">
                      политикой конфиденциальности
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Другие услуги кибербезопасности</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cyberSecurityServices
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((relatedService) => (
                <motion.div
                  key={relatedService.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-content1 rounded-xl overflow-hidden shadow-md flex flex-col h-full">
                  <div className="h-40 overflow-hidden">
                    <img
                      src={relatedService.imageSrc}
                      alt={relatedService.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/600x400?text=Cyber+Security+Image';
                      }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-2">
                      <span className="bg-blue-600/10 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                        {relatedService.category === 'protection' && 'Защита'}
                        {relatedService.category === 'monitoring' && 'Мониторинг'}
                        {relatedService.category === 'response' && 'Реагирование'}
                        {relatedService.category === 'compliance' && 'Соответствие'}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{relatedService.title}</h3>
                    <p className="text-default-600 text-sm mb-4 flex-grow">{relatedService.description.substring(0, 100) + '...'}</p>
                    <Link to={`/cyber-security/${relatedService.id}`} className="text-blue-600 font-medium flex items-center hover:underline mt-auto">
                      Подробнее
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
