import { motion } from 'framer-motion';

export default function HomeHero() {
  return (
    <motion.section
      className="text-center my-8 bg-gray-200 dark:bg-gray-900 p-8 rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-[20px] font-semibold">
        Найдите любимый автомобиль уже сегодня!
      </h2>
      <p className="mt-2">Каталог с широким выбором новых и подержанных авто</p>
    </motion.section>
  );
}
