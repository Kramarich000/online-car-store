import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "/images/logo.svg";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Header({ toggleTheme, isDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  const menuRef = useRef(null);

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMenuClick = (e) => {
    e.stopPropagation();  
    setIsMenuOpen(!isMenuOpen);  
  };

  return (
    <header className="text-[24px] text-white w-full min-w-0 max-h-[120px] shadow-md bg-gray-900">
      <div className="container mx-auto flex items-center justify-between px-1 md:px-4">
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="md:w-[80px] md:h-[80px] w-[50px] transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
          />
        </NavLink>

        <button
          className="md:hidden"
          onClick={handleMenuClick}  
        >
          {isMenuOpen ? <X size={42} /> : <Menu size={42} />}
        </button>

        <motion.nav
          ref={menuRef}
          className={`absolute md:static w-full md:w-auto left-0 top-15 bg-gray-900 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out 
            ${isMenuOpen ? "flex flex-col items-center" : "hidden"} 
            md:flex md:flex-row md:space-x-6 md:flex-wrap z-9999`}  
          initial={{ opacity: isMobile ? 0 : 1, visibility: isMobile ? "hidden" : "visible" }} 
          animate={{
            opacity: isMenuOpen || !isMobile ? 1 : 0,
            visibility: isMenuOpen || !isMobile ? "visible" : "hidden", 
          }}
          transition={{
            opacity: { duration: 0.3, ease: "easeInOut" },
            visibility: { duration: 0 },  
          }}
        >
          {[ 
            { name: "Главная", path: "/" }, 
            { name: "Каталог", path: "/catalog" }, 
            { name: "Контакты", path: "/contact" }, 
            { name: "О нас", path: "/about" }
          ].map(({ name, path }) => (
            <motion.div
              key={path}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full md:w-auto max-w-full"
            >
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${isActive ? "text-blue-500 font-bold border-b-2 border-blue-500" : "border-none"}`
                }
              >
                {name}
              </NavLink>
            </motion.div>
          ))}
        </motion.nav>

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
