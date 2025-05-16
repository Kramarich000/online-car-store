import { motion } from 'framer-motion';

export default function AboutRuleSection() {
  return (
    <motion.section
      className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md mb-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold text-center">Наши принципы</h2>
      <ul className="list-disc list-inside mt-4">
        <li>Прозрачность и честность в сделках</li>
        <li>Широкий ассортимент и гибкие условия</li>
        <li>Качественное обслуживание и поддержка клиентов</li>
        <li>Гарантия на автомобили и сервисные услуги</li>
      </ul>
    </motion.section>
  );
}
