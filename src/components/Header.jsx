import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function Header({ toggleTheme, isDarkMode }) {
  return (
    <header className="text-[24px] text-white w-full min-w-0 max-h-[120px] shadow-md bg-gray-900">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-[100px] h-[100px] transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
          />
        </Link>

        <nav className="flex space-x-6">
          <motion.div
            whileHover={{ scale: 1.1 }} 
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/">Главная</Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/catalog">Каталог</Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/contact">Контакты</Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/about">О нас</Link>
          </motion.div>
        </nav>
        <div
          className="relative w-[50px] h-[26px] bg-gray-700 rounded-full flex items-center p-1 cursor-pointer"
          onClick={toggleTheme}
        >
          <motion.div
            className="w-[22px] h-[22px] bg-white rounded-full flex items-center justify-center"
            initial={{ x: isDarkMode ? 24 : 0 }}
            animate={{ x: isDarkMode ? 24 : 0 }}
            transition={{ type: "tween", stiffness: 300 }}
          >
            {isDarkMode ? (
              <Moon className="w-4 h-4 text-gray-800" />
            ) : (
              <Sun className="w-4 h-4 text-yellow-500" />
            )}
          </motion.div>
        </div>
      </div>
    </header>
  );
}
