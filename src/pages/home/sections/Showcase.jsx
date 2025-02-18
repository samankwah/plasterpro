import React, { useEffect, useState } from "react";

const Showcase = () => {
  // Sample data for products/services
  const showcaseItems = [
    {
      title: "Fowohodie Conversion Kit",
      description:
        "A locally designed mobility solution to help individuals with physical disabilities gain independence. It can be easily installed on existing wheelchairs.",
      imageUrl: "/images/fowohodie-kit.jpg",
      price: "$299.99",
    },
    {
      title: "Accessible Design Workshops",
      description:
        "Workshops aimed at training young engineers to design accessible technologies that improve the lives of people with disabilities.",
      imageUrl: "/images/workshops.jpg",
      price: "$149.99",
    },
    {
      title: "Smart Mobility Device",
      description:
        "A wearable, AI-powered device to assist with mobility in urban spaces. It offers real-time guidance and obstacle detection.",
      imageUrl: "/images/smart-device.jpg",
      price: "$499.99",
    },
    {
      title: "Community Support Groups",
      description:
        "Local communities formed to support individuals with disabilities by advocating for accessible public spaces and providing peer support.",
      imageUrl: "/images/community-group.jpg",
      price: "Free",
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
    <div className="p-6 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto text-center mb-12">
        <h4 className="text-4xl font-bold">Products Showcase</h4>
        <p className="text-lg text-gray-700 mt-4">
          Discover the innovative products and services created to empower
          individuals with disabilities and enhance their lives.
        </p>
      </div>

      <div
        className={`container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-500 ${
          animateItems
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {showcaseItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-amber-100 hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform hover:-translate-y-2"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out"
            />
            <div className="p-4">
              <h5 className="text-2xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h5>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="text-xl font-semibold text-amber-600 mb-4">
                {item.price}
              </div>
              <div className="mt-4">
                <button className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors duration-200">
                  {item.price === "Free" ? "Get Started" : "Buy Now"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
