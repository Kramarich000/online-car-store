import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Контакты</h1>

      <section className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Свяжитесь с нами</h2>
        <p>
          Мы всегда рады помочь вам с любыми вопросами!
        </p>

        <div className="mt-4 space-y-2 text-lg">
          <p className="flex text-lg items-center justify-center gap-2">
            <MapPin size={18} className="w-5 h-5" />
            <strong>Адрес:</strong> Москва, ул. Примерная, 10
          </p>
          <p className="flex text-lg items-center justify-center gap-2">
            <Phone size={18} className="w-5 h-5" />
            <strong>Телефон:</strong>{" "}
            <a href="tel:+79001234567" className="text-blue-600">
              +7 (900) 123-45-67
            </a>
          </p>
          <p className="flex text-lg items-center justify-center gap-2">
            <Mail size={18} className="w-5 h-5 text-gray-700 transition-all dark:fill-gray-100" />
            <strong>Email:</strong>{" "}
            <a href="mailto:info@autolux.ru" className="text-blue-600">
              info@autolux.ru
            </a>
          </p>
        </div>
      </section>

      <section className="p-6 rounded-lg shadow-md mb-8 text-black dark:text-white">
        <h2 className="text-2xl  font-semibold text-center mb-4">
          Напишите нам
        </h2>
        <motion.form
          className="mx-auto space-y-4 w-[500px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.input
            type="text"
            placeholder="Ваше имя"
            className="w-full p-2 border rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />

          <motion.input
            type="email"
            placeholder="Ваш email"
            className="w-full p-2 border rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />

          <motion.textarea
            placeholder="Ваше сообщение"
            rows="4"
            className="w-full p-2 border rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />

          <motion.button
            type="submit"
            className="w-full bg-gray-900 text-white p-2 rounded hover:bg-blue-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.1 }}
          >
            Отправить
          </motion.button>
        </motion.form>
      </section>

      <section className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Мы на карте</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1122.887830021963!2d37.58872710000001!3d55.745026800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bb18e1014e5%3A0x9cbc04519e04f3b3!2z0JPQsNCz0LDRgNC40L3RgdC60LjQuSDQv9C10YAuLCA0NSwg0JzQvtGB0LrQstCwLCAxMTkwMDI!5e0!3m2!1sru!2sru!4v1743435962406!5m2!1sru!2sru"
          width="100%"
          height="600"
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}
