import { useState, useEffect, useRef } from "react";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import LogoWhite from "../assets/logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Navbar menu items
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about-innovator" },
    { name: "Products", link: "/products" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];

  // Check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav
      // className={`p-4 flex justify-between items-center fixed w-full top-0 z-50 transition-all duration-300
      // ${
      //   scrolled
      //     ? "bg-gray-900 shadow-lg"
      //     : "bg-gray-900 bg-opacity-90 backdrop-blur-sm"
      // } text-white`}
      className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[100%] md:w-full p-1 md:p-2 z-50  
    bg-white/5
    backdrop-blur-[100px] 
    border border-white/20 
    shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
    rounded-xl mt-1"
      style={{ maxWidth: "1400px" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-6">
          <img src={LogoWhite} alt="PlasterPro Logo" className="w-40 h-10" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.link}
                className={`relative transition-colors ${
                  isActive(item.link)
                    ? "font-semibold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-amber-600"
                    : "hover:text-amber-600"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
            aria-label="Search"
          >
            <Search size={20} className="text-gray-700" />
          </button>
          <button
            className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700 relative"
            aria-label="Cart"
          >
            <ShoppingCart size={20} className="text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>
          <button
            className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
            aria-label="Account"
          >
            <User size={20} className="text-gray-700" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          className="md:hidden p-2 rounded-lg bg-gray-700 text-white"
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
          ref={mobileMenuRef}
          className="absolute top-16 left-0 w-full bg-gray-50 p-4 shadow-lg md:hidden"
        >
          <ul className="flex flex-col space-y-4 font-medium">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.link}
                  className={`block transition-colors ${
                    isActive(item.link)
                      ? "font-semibold text-amber-600"
                      : "hover:text-amber-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-gray-700">
            <button
              className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
              aria-label="Search"
            >
              <Search size={20} className="text-gray-700" />
            </button>
            <button
              className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700 relative"
              aria-label="Cart"
            >
              <ShoppingCart size={20} className="text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>
            <button
              className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
              aria-label="Account"
            >
              <User size={20} className="text-gray-700" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
