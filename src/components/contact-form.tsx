import { sendTelegramNotification } from '@/utils/telegram';
import { Input } from '@heroui/input';
import { Switch } from '@heroui/switch';
import { button as buttonStyles } from '@heroui/theme';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
    loading: false,
    success: false,
    error: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConsentChange = () => {
    setFormData((prev) => ({ ...prev, consent: !prev.consent }));
  };

  // Add this import at the top with your other imports

  // Then modify your handleSubmit function:
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      alert('Пожалуйста, подтвердите согласие на обработку персональных данных');
      return;
    }

    setFormData((prev) => ({ ...prev, loading: true, error: false }));

    try {
      // Prepare notification message
      const message = `
<b>Новая заявка с сайта sops</b>
<b>Имя:</b> ${formData.name}
<b>Email:</b> ${formData.email}
<b>Телефон:</b> ${formData.phone || 'Не указан'}
<b>Сообщение:</b> ${formData.message || 'Не указано'}
    `.trim();

      // Send notification to Telegram (if configured)
      await sendTelegramNotification(message);

      // Continue with your existing success handling
      console.log('Form submitted:', formData);

      setFormData((prev) => ({
        ...prev,
        loading: false,
        success: true,
        name: '',
        email: '',
        phone: '',
        message: '',
        consent: false,
      }));

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormData((prev) => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormData((prev) => ({ ...prev, loading: false, error: true }));
    }
  };

  return (
    <motion.section
      id="feedback"
      className="bg-primary/5 rounded-2xl p-8 my-12"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Готовы обсудить ваш проект?</h2>
          <p className="text-default-600 max-w-2xl mx-auto">Заполните форму, и мы свяжемся с вами, чтобы обсудить, как мы можем помочь вашему бизнесу.</p>
        </div>

        {formData.success ? (
          <motion.div
            className="bg-success-100 border border-success-200 text-success-700 p-6 rounded-lg text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold mb-2">Сообщение отправлено!</h3>
            <p>Спасибо за обращение. Наши специалисты свяжутся с вами в ближайшее время.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="text"
              label="Имя"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Введите ваше имя"
              variant="bordered"
              radius="sm"
              isRequired
              className="md:col-span-1"
            />

            <Input
              type="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@company.com"
              variant="bordered"
              radius="sm"
              isRequired
              className="md:col-span-1"
            />

            <Input
              type="tel"
              label="Телефон"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+7 (___) ___-__-__"
              variant="bordered"
              radius="sm"
              className="md:col-span-2"
            />

            <Input
              type="text"
              label="Сообщение"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Расскажите о вашем проекте или задайте вопрос"
              variant="bordered"
              radius="sm"
              className="md:col-span-2 min-h-[100px]"
            />

            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Switch isSelected={formData.consent} onValueChange={handleConsentChange} size="sm" />
                <label className="text-sm text-default-600">
                  Я согласен на обработку персональных данных в соответствии с{' '}
                  <a href="/privacy" className="text-primary hover:underline">
                    политикой конфиденциальности
                  </a>
                </label>
              </div>

              {formData.error && (
                <div className="bg-danger-100 border border-danger-200 text-danger-700 p-3 rounded-lg text-sm mb-4">
                  Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.
                </div>
              )}

              <button
                type="submit"
                className={buttonStyles({
                  color: 'primary',
                  variant: 'shadow',
                  size: 'lg',
                  radius: 'full',
                  className: 'w-full',
                })}
                disabled={formData.loading}>
                {formData.loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Отправка...</span>
                  </div>
                ) : (
                  'Отправить заявку'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </motion.section>
  );
};

export default ContactForm;
