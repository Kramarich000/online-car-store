import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomeHero from '../components/home-components/HomeHero';
import HomeCategoriesSection from '../components/home-components/HomeCategoriesSection';
import HomeCarsSection from '../components/home-components/HomeCarsSection';
import HomeOffersSection from '../components/home-components/HomeOffersSection';
export default function Home() {


  return (
    <motion.div
      className="container mx-auto px-3 md:px-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center py-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Добро пожаловать в наш автосалон!
        </h1>
        <p className="text-lg mt-2">Лучшие автомобили по выгодным ценам</p>
      </div>

      <HomeHero />
      <HomeCategoriesSection />
      <HomeCarsSection />
      <HomeOffersSection />
    </motion.div>
  );
}
