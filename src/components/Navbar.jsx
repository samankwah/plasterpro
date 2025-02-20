import { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingCart, User, Sun, Moon } from "lucide-react";
import Logo from "../assets/fawohodie-logo1.png";
import { Link } from "react-router-dom";

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
  };

  // Navbar menu items with section links
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about-innovator" },
    { name: "Products", link: "/products" },
    { name: "Features", link: "/about-us" },
    { name: "Contact", link: "/contact" },
  ];

  // Handle navigation
  const handleNavigation = (item) => {
    setActiveItem(item.name);
    if (isOpen) setIsOpen(false);

    // Smooth scroll to section if it's on the same page
    const element = document.getElementById(item.link.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`p-4 flex justify-between items-center fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-amber-300 shadow-lg"
          : "bg-amber-300 bg-opacity-90 backdrop-blur-sm"
      } ${darkMode ? "bg-gray-900 text-white" : ""}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-6">
          <img src={Logo} alt="Fowohodie Logo" className="w-50 h-10" />
        </div>

        {/* Desktop Menu */}
        {/* <ul className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((item) => (
            <li
              key={item.name}
              className={`cursor-pointer relative ${
                activeItem === item.name
                  ? darkMode
                    ? "text-amber-300"
                    : "text-blue-600"
                  : darkMode
                  ? "text-gray-300"
                  : "text-gray-900"
              }`}
              onClick={() => handleNavigation(item)}
            >
              <a href={item.link} className="relative block py-2">
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 ${
                    activeItem === item.name
                      ? darkMode
                        ? "bg-amber-300"
                        : "bg-blue-600"
                      : "bg-transparent"
                  } transition-all duration-300`}
                />
              </a>
            </li>
          ))}
        </ul> */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.link} // Use `to` instead of `href`
                className={`hover:text-amber-600 transition-colors ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
                onClick={() => handleNavigation(item)}
              >
                {item.name}
              </Link>
            </li>
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
        <button
          className={`md:hidden p-2 rounded-lg ${
            darkMode ? "bg-amber-500 text-gray-900" : "bg-gray-800 text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`absolute top-16 left-0 w-full ${
            darkMode ? "bg-gray-800" : "bg-amber-300"
          } p-4 shadow-lg md:hidden`}
        >
          <ul className="flex flex-col space-y-4 font-medium">
            {navLinks.map((item) => (
              <li
                key={item.name}
                className={`cursor-pointer ${
                  activeItem === item.name
                    ? darkMode
                      ? "text-amber-300"
                      : "text-blue-600"
                    : darkMode
                    ? "text-white"
                    : "text-gray-900"
                }`}
                onClick={() => handleNavigation(item)}
              >
                <a href={item.link}>{item.name}</a>
              </li>
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
