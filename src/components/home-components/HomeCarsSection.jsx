import { motion } from 'framer-motion';
import { popularCars } from '../../data/popularCars';

export default function HomeCarsSection() {
  return (
    <motion.section
      className="my-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold">Популярные автомобили</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {popularCars.map((car, index) => (
          <div key={index} className="p-4 border rounded-lg text-center">
            <h3 className="text-lg font-bold">{car.name}</h3>
            <p className="">{car.price}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
