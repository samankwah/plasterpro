import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ShoppingCart, User, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real app, you would apply dark mode classes to the document here
  };

  // Navbar menu items
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about-innovator" },

    { name: "Features", link: "/about-us" },

    { name: "Services", link: "/products" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <motion.nav
      className={`p-4 flex justify-between items-center fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-amber-300 shadow-lg"
          : "bg-amber-300 bg-opacity-90 backdrop-blur-sm"
      } ${darkMode ? "bg-gray-900 text-white" : ""}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/api/placeholder/40/40"
            alt="Fowohodie Logo"
            className="w-10 h-10 rounded-full"
          />
          {/* <h4
            className={`text-xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Fowohodie
          </h4> */}
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {menuItems.map((item) => (
            <motion.li
              key={item.name}
              className={`cursor-pointer relative ${
                activeItem === item.name
                  ? darkMode
                    ? "text-amber-300"
                    : "text-blue-600"
                  : darkMode
                  ? "text-gray-300"
                  : "text-gray-900"
              } hover:${darkMode ? "text-amber-300" : "text-blue-600"}`}
              onClick={() => setActiveItem(item.name)}
              whileHover={{ scale: 1.1 }}
            >
              <a href={item.link}>{item.name}</a>
              {activeItem === item.name && (
                <motion.div
                  className={`absolute bottom-0 left-0 w-full h-0.5 ${
                    darkMode ? "bg-amber-300" : "bg-blue-600"
                  }`}
                  layoutId="underline"
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
            aria-label="Search"
          >
            <Search
              size={20}
              className={darkMode ? "text-white" : "text-gray-800"}
            />
          </button>
          <button
            className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700 relative"
            aria-label="Cart"
          >
            <ShoppingCart
              size={20}
              className={darkMode ? "text-white" : "text-gray-800"}
            />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>
          <button
            className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
            aria-label="Account"
          >
            <User
              size={20}
              className={darkMode ? "text-white" : "text-gray-800"}
            />
          </button>
          <button
            className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
            onClick={toggleDarkMode}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <Sun size={20} className="text-white" />
            ) : (
              <Moon size={20} className="text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className={`md:hidden p-2 rounded-lg ${
            darkMode ? "bg-amber-500 text-gray-900" : "bg-gray-800 text-white"
          }`}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`absolute top-16 left-0 w-full ${
              darkMode ? "bg-gray-800" : "bg-amber-300"
            } p-4 shadow-lg md:hidden`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-4 font-medium">
              {menuItems.map((item) => (
                <motion.li
                  key={item.name}
                  className={`cursor-pointer ${
                    activeItem === item.name
                      ? darkMode
                        ? "text-amber-300"
                        : "text-blue-600"
                      : darkMode
                      ? "text-white"
                      : "text-gray-900"
                  } hover:${darkMode ? "text-amber-300" : "text-blue-600"}`}
                  onClick={() => {
                    setActiveItem(item.name);
                    setIsOpen(false);
                  }}
                  whileHover={{ x: 5 }}
                >
                  <a href={item.link}>{item.name}</a>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-gray-700">
              <button
                className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
                aria-label="Search"
              >
                <Search
                  size={20}
                  className={darkMode ? "text-white" : "text-gray-800"}
                />
              </button>
              <button
                className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700 relative"
                aria-label="Cart"
              >
                <ShoppingCart
                  size={20}
                  className={darkMode ? "text-white" : "text-gray-800"}
                />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>
              <button
                className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
                aria-label="Account"
              >
                <User
                  size={20}
                  className={darkMode ? "text-white" : "text-gray-800"}
                />
              </button>
              <button
                className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
                onClick={toggleDarkMode}
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {darkMode ? (
                  <Sun size={20} className="text-white" />
                ) : (
                  <Moon size={20} className="text-gray-800" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
