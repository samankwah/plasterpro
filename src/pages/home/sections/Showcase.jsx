import React, { useEffect, useState } from "react";
import ViewAllProductsButton from "./ViewAllProductsButton"; // Import the button component
import Product1 from "../../../assets/about1.jpg";
import Product2 from "../../../assets/about.jpg";
import Product3 from "../../../assets/feat2.jpg";
import Product4 from "../../../assets/product6.jpg";

const Showcase = () => {
  // Sample data for products/services
  const showcaseItems = [
    {
      title: "POP Ceiling Installation",
      description:
        "High-quality Plaster of Paris (POP) ceiling designs for modern homes and offices. Enhances aesthetics and improves interior ambiance.",
      imageUrl: Product1,
      price: "GH₵5000",
      badge: "Best Seller",
    },
    {
      title: "Room Lighting Solutions",
      description:
        "Professional installation of stylish and energy-efficient lighting for residential and commercial spaces.",
      imageUrl: Product2,
      price: "GH₵2500",
      badge: "New",
    },
    {
      title: "Hardware Installation Services",
      description:
        "Expert installation of various building hardware, including ceiling frames, wall brackets, and electrical fittings.",
      imageUrl: Product3,
      price: "GH₵7000",
      badge: "Premium",
    },
    {
      title: "Repairs & Maintenance",
      description:
        "Reliable repairs and maintenance services for ceilings, walls, and lighting fixtures to keep your space in top condition.",
      imageUrl: Product4,
      price: "Free",
      badge: "Community",
    },
  ];

  // Animation trigger state
  const [animateItems, setAnimateItems] = useState(false);

  useEffect(() => {
    // Trigger animation after the component is mounted
    const timer = setTimeout(() => {
      setAnimateItems(true);
    }, 300); // Delay for smooth fade-in effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 sm:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Featured Services
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
            Discover top-quality ceiling installations, lighting solutions, and
            maintenance services tailored for homes and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-500 transform ${
                animateItems
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {item.badge && (
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm">
                    {item.badge}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <button className="bg-white text-gray-900 py-2 px-5 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gray-50">
                    Quick View
                  </button>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight hover:text-indigo-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-5 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    {item.price}
                  </span>
                  <button
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      item.price === "Free"
                        ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200 hover:shadow-md"
                        : "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-md"
                    }`}
                  >
                    {item.price === "Free" ? "Get Started" : "Add to Cart"}
                  </button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-16 transition-all duration-500 ${
            animateItems
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `${showcaseItems.length * 100 + 100}ms` }}
        >
          <ViewAllProductsButton productPagePath="/product-catalog" />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
