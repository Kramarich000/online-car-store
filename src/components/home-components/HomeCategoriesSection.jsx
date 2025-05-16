import { motion } from 'framer-motion';
import { categories } from '../../data/categories';
import { useNavigate } from 'react-router-dom';
export default function HomeCategoriesSection() {
  const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    navigate(`/catalog?filter=${category}`);
  };
  return (
    <motion.section
      className="grid grid-cols-2 md:grid-cols-3 gap-3 my-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {categories.map((category, index) => (
        <div
          key={index}
          className="col-span-2 md:col-span-1 p-4 border rounded-lg text-center cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          onClick={() => handleCategoryClick(category.value)}
        >
          {category.name}
        </div>
      ))}
    </motion.section>
  );
}
