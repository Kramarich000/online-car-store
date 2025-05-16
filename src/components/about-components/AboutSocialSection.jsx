import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

export default function AboutSocialSection() {
  return (
    <motion.section
      className="bg-yellow-100 dark:bg-yellow-900 p-6 rounded-lg text-center flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-2">Свяжитесь с нами</h2>
      <a
        href="tel:+79001234567"
        className="flex items-center gap-2 mx-auto mt-3 hover:text-blue-600"
      >
        <Phone size={18} /> +7 (900) 123-45-67
      </a>
      <a
        href="mailto:info@autolux.ru"
        className="flex items-center gap-2 mx-auto mt-1 hover:text-blue-600"
      >
        <Mail size={18} /> info@autolux.ru
      </a>
    </motion.section>
  );
}
