import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company Name</h3>
            <p className="mb-4 text-gray-300">
              Providing quality services since 2010. We're dedicated to customer
              satisfaction and excellence in everything we do.
            </p>
            <div className="flex items-center mb-2">
              <MapPin size={18} className="mr-2" />
              <span className="text-sm">123 Main Street, City, Country</span>
            </div>
            <div className="flex items-center mb-2">
              <Phone size={18} className="mr-2" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail size={18} className="mr-2" />
              <span className="text-sm">contact@companyname.com</span>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              {["Home", "About Us", "Services", "Products", "Contact Us"].map(
                (link) => (
                  <li key={link} className="mb-2">
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="mb-4 text-gray-300">
              Stay updated with our latest news and offers.
            </p>
            <form className="mb-4">
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 w-full sm:w-auto mb-2 sm:mb-0 bg-gray-700 border border-gray-600 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <div className="mt-6">
              <img
                src="/api/placeholder/150/50"
                alt="Company Logo"
                className="h-8"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
