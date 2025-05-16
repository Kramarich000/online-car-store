import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="text-[24px] bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="gap-x-5 md:flex hidden justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to="/" className="text-white">
              Главная
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to="/catalog" className="text-white">
              Каталог
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to="/contact" className="text-white">
              Контакты
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to="/about" className="text-white">
              О нас
            </Link>
          </motion.div>
        </div>

        <div className="flex justify-center space-x-6 mt-6">
          <motion.a
            href="#"
            aria-label="Facebook"
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'tween', stiffness: 300 }}
          >
            <i className="fab fa-facebook-f"></i>
          </motion.a>

          <motion.a
            href="#"
            aria-label="X (Twitter)"
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'tween', stiffness: 300 }}
          >
            <i className="fab fa-twitter"></i>
          </motion.a>

          <motion.a
            href="#"
            aria-label="Instagram"
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'tween', stiffness: 300 }}
          >
            <i className="fab fa-instagram"></i>
          </motion.a>

          <motion.a
            href="#"
            aria-label="YouTube"
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'tween', stiffness: 300 }}
          >
            <i className="fab fa-youtube"></i>
          </motion.a>
        </div>

        <div className="mt-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to="/privacy" className="text-[20px]">
              Политика конфиденциальности
            </Link>
          </motion.div>
        </div>
      </div>
      <p className="text-[14px] mt-4">© 2025 AutoLux. Все права защищены.</p>
    </footer>
  );
}
