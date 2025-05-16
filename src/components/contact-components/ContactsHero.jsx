import { motion } from 'framer-motion';
import { Phone, MapPin, Mail } from 'lucide-react';

export default function ContactsHero() {
  return (
    <motion.section
      className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md mb-8 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Свяжитесь с нами</h2>
      <p>Мы всегда рады помочь вам с любыми вопросами!</p>

      <div className="mt-4 space-y-2 text-lg">
        <p className="flex text-lg items-center justify-center gap-2 md:flex-row flex-col">
          <MapPin size={18} className="w-5 h-5" />
          <strong>Адрес:</strong> Москва, ул. Примерная, 10
        </p>
        <p className="flex text-lg items-center justify-center gap-2 md:flex-row flex-col">
          <Phone size={18} className="w-5 h-5" />
          <strong>Телефон:</strong>{' '}
          <a href="tel:+79001234567" className="">
            +7 (900) 123-45-67
          </a>
        </p>
        <p className="flex text-lg items-center justify-center gap-2 md:flex-row flex-col">
          <Mail
            size={18}
            className="w-5 h-5 text-gray-700 transition-all dark:fill-gray-100"
          />
          <strong>Email:</strong>{' '}
          <a href="mailto:info@autolux.ru" className="">
            info@autolux.ru
          </a>
        </p>
      </div>
    </motion.section>
  );
}
