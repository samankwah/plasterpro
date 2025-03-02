// import { useState, useEffect, useRef } from "react";
// import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
// import LogoWhite from "../assets/plasterpro-high-resolution-logo-transparent-white.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();
//   const mobileMenuRef = useRef(null);
//   const menuButtonRef = useRef(null);

//   // Handle scroll effect for navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Handle click outside to close mobile menu
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         isOpen &&
//         mobileMenuRef.current &&
//         !mobileMenuRef.current.contains(event.target) &&
//         !menuButtonRef.current.contains(event.target)
//       ) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [isOpen]);

//   // Navbar menu items
//   const navLinks = [
//     { name: "Home", link: "/" },
//     { name: "About", link: "/about-us" },
//     { name: "Products", link: "/products" },
//     { name: "Services", link: "/services" },
//     { name: "Blog", link: "/blogpage" },
//     { name: "Contact", link: "/contact" },
//   ];

//   // Check if link is active
//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav
//       className={`p-4 flex justify-between items-center fixed w-full top-0 z-50 transition-all duration-300
//       ${
//         scrolled
//           ? "bg-blue-900 shadow-lg"
//           : "bg-blue-950 bg-opacity-90 backdrop-blur-sm"
//       } text-white`}
//       // className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[100%] md:w-full p-1 md:p-2 z-50
//       // bg-white/5
//       // backdrop-blur-[100px]
//       // border border-white/20
//       // shadow-[0_4px_30px_rgba(0,0,0,0.1)]
//       // rounded-xl mt-1"
//       // style={{ maxWidth: "1400px" }}
//     >
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="flex items-center space-x-6">
//           <img src={LogoWhite} alt="PlasterPro Logo" className="w-50 h-10" />
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6">
//           {navLinks.map((item) => (
//             <li key={item.name}>
//               <Link
//                 to={item.link}
//                 className={`relative transition-colors ${
//                   isActive(item.link)
//                     ? "font-semibold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-blue-600"
//                     : "hover:text-blue-600"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Icons */}
//         <div className="hidden md:flex items-center space-x-4">
//           <button
//             className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
//             aria-label="Search"
//           >
//             <Search size={20} className="text-gray-700" />
//           </button>
//           <button
//             className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700 relative"
//             aria-label="Cart"
//           >
//             <ShoppingCart size={20} className="text-gray-700" />
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//               3
//             </span>
//           </button>
//           <button
//             className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
//             aria-label="Account"
//           >
//             <User size={20} className="text-gray-700" />
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           ref={menuButtonRef}
//           className="md:hidden p-2 rounded-lg bg-gray-700 text-white"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-expanded={isOpen}
//           aria-label="Toggle navigation menu"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div
//           ref={mobileMenuRef}
//           className="absolute top-16 left-0 w-full bg-blue-950 p-4 shadow-lg md:hidden"
//         >
//           <ul className="flex flex-col space-y-4 font-medium">
//             {navLinks.map((item) => (
//               <li key={item.name}>
//                 <Link
//                   to={item.link}
//                   className={`block transition-colors ${
//                     isActive(item.link)
//                       ? "font-semibold text-blue-600"
//                       : "hover:text-blue-600"
//                   }`}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-gray-700">
//             <button
//               className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
//               aria-label="Search"
//             >
//               <Search size={20} className="text-gray-700" />
//             </button>
//             <button
//               className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700 relative"
//               aria-label="Cart"
//             >
//               <ShoppingCart size={20} className="text-gray-700" />
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//                 3
//               </span>
//             </button>
//             <button
//               className="p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
//               aria-label="Account"
//             >
//               <User size={20} className="text-gray-700" />
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import { useState, useEffect, useRef } from "react";
// import { Menu, X } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
// import LogoWhite from "../assets/plasterpro-high-resolution-logo-transparent-white.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();
//   const mobileMenuRef = useRef(null);
//   const menuButtonRef = useRef(null);

//   // Handle scroll effect for navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Handle click outside to close mobile menu
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         isOpen &&
//         mobileMenuRef.current &&
//         !mobileMenuRef.current.contains(event.target) &&
//         !menuButtonRef.current.contains(event.target)
//       ) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [isOpen]);

//   // Navbar menu items
//   const navLinks = [
//     { name: "Home", link: "/" },
//     { name: "About", link: "/about-us" },
//     { name: "Products", link: "/products" },
//     { name: "Services", link: "/services" },
//     { name: "Blog", link: "/blogpage" },
//     { name: "Contact", link: "/contact" },
//   ];

//   // Check if link is active
//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav
//       className={`container mx:auto fixed w-full top-0 z-50 transition-all duration-500 rounded-full
//       ${
//         scrolled
//           ? "bg-gradient-to-r from-blue-900 to-blue-800 py-3 shadow-lg"
//           : "bg-gradient-to-r from-blue-950 to-blue-900 py-4 bg-opacity-95 backdrop-blur-md"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center px-8">
//         {/* Logo */}
//         <Link to="/" className="flex items-center">
//           <img
//             src={LogoWhite}
//             alt="PlasterPro Logo"
//             className="h-12 transform hover:scale-105 transition-transform duration-300"
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center space-x-1">
//           {navLinks.map((item) => (
//             <li key={item.name}>
//               <Link
//                 to={item.link}
//                 className={`px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 relative overflow-hidden group ${
//                   isActive(item.link)
//                     ? "text-white font-bold"
//                     : "text-gray-200 hover:text-blue"
//                 }`}
//               >
//                 {item.name}
//                 <span
//                   className={`absolute bottom-0 left-0 w-full h-1 transform scale-x-0 transition-transform duration-300 bg-blue-400 group-hover:scale-x-100 ${
//                     isActive(item.link) ? "scale-x-100" : ""
//                   }`}
//                 ></span>
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           ref={menuButtonRef}
//           className="md:hidden p-2 rounded-lg bg-blue-800 hover:bg-blue-700 text-white transition-colors duration-300"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-expanded={isOpen}
//           aria-label="Toggle navigation menu"
//         >
//           {isOpen ? <X size={20} /> : <Menu size={20} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div
//           ref={mobileMenuRef}
//           className="absolute top-full left-0 w-full bg-gradient-to-b from-blue-900 to-blue-950 py-4 shadow-lg md:hidden animate-fadeIn"
//         >
//           <ul className="flex flex-col space-y-2 px-6">
//             {navLinks.map((item) => (
//               <li
//                 key={item.name}
//                 className="border-b border-blue-800 pb-2 last:border-0"
//               >
//                 <Link
//                   to={item.link}
//                   className={`block py-2 px-3 rounded transition-colors duration-300 ${
//                     isActive(item.link)
//                       ? "font-bold text-white bg-blue-800 bg-opacity-50"
//                       : "text-gray-200 hover:bg-blue-800 hover:bg-opacity-30 hover:text-white"
//                   }`}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import LogoWhite from "../assets/plasterpro-high-resolution-logo-transparent-white.png";

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
    { name: "About", link: "/about-us" },
    { name: "Products", link: "/products" },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blogpage" },
    { name: "Contact", link: "/contact" },
  ];

  // Check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed top-0 w-full flex justify-center z-50 px-4 pt-4">
      <nav
        className={`container w-full rounded-full transition-all duration-500
        ${
          scrolled
            ? "bg-gradient-to-r from-blue-900 to-blue-800 py-2 shadow-lg"
            : "bg-gradient-to-r from-blue-950 to-blue-900 py-3 bg-opacity-95 backdrop-blur-md"
        }`}
      >
        <div className="flex justify-between items-center px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={LogoWhite}
              alt="PlasterPro Logo"
              className="h-11 transform hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.link}
                  className={`transition-colors relative text-white text-base ${
                    isActive(item.link)
                      ? "font-semibold text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-full after:h-1 after:bg-blue-400 after:rounded-full"
                      : "hover:text-blue-600"
                  }`}
                >
                  {item.name}
                  {/* <span
                    className={`absolute bottom-0 left-0 w-full h-1 transform scale-x-0 transition-transform duration-300 bg-blue-400 group-hover:scale-x-100 ${
                      isActive(item.link) ? "scale-x-100" : ""
                    }`}
                  ></span> */}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            className="md:hidden p-2 rounded-lg bg-blue-800 hover:bg-blue-700 text-white transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            ref={mobileMenuRef}
            className="absolute top-full left-0 right-0 mx-auto mt-2 w-full max-w-5xl bg-gradient-to-b from-blue-900 to-blue-950 py-4 shadow-lg rounded-2xl md:hidden animate-fadeIn"
          >
            <ul className="flex flex-col space-y-2 px-6">
              {navLinks.map((item) => (
                <li
                  key={item.name}
                  className="border-b border-blue-800 pb-2 last:border-0"
                >
                  <Link
                    to={item.link}
                    className={`block py-2 px-3 rounded transition-colors duration-300 ${
                      isActive(item.link)
                        ? "font-bold text-white bg-blue-800 bg-opacity-50"
                        : "text-gray-200 hover:bg-blue-800 hover:bg-opacity-30 hover:text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
