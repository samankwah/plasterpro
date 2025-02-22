import React, { useState, useEffect } from "react";
import { ChevronUp, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Open WhatsApp with a pre-filled message
  const openWhatsApp = () => {
    const phoneNumber = "1234567890"; // Replace with the innovator's WhatsApp number
    const message = "Hello, I would like to get in touch with you."; // Optional pre-filled message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-8 z-50 flex flex-row space-6 gap-2">
          {/* WhatsApp Button */}
          <button
            onClick={openWhatsApp}
            className="bg-green-500 text-white p-3 rounded-sm shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out"
            aria-label="Contact on WhatsApp"
          >
            <FaWhatsapp size={28} />
          </button>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="bg-gray-300 text-white p-3 rounded-sm shadow-lg hover:bg-gray-400 transition-all duration-300 ease-in-out"
            aria-label="Scroll to top"
          >
            <ChevronUp size={28} />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
