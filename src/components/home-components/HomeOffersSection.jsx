import { motion } from 'framer-motion';
import { specialOffers } from '../../data/specialOffers';

export default function HomeOffersSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-yellow-100 dark:bg-yellow-900 p-6 rounded-lg text-center my-8"
    >
      <h2 className="text-xl font-bold">🔥 Специальные предложения</h2>
      <ul className="mt-2 space-y-2">
        {specialOffers.map((offer, index) => (
          <li key={index}>{offer}</li>
        ))}
      </ul>
    </motion.section>
  );
}
