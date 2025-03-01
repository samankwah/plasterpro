import { useEffect, useState } from "react";
import ViewAllProductsButton from "./ViewAllProductsButton";
import Product1 from "../../../assets/ceiling2.jpg";
import Product2 from "../../../assets/lighting4.jpg";
import Product3 from "../../../assets/galvanisedprofiles.jpg";
import Product4 from "../../../assets/poptruck.jpg";
// Import additional product images - Add your actual imports
import Product5 from "../../../assets/ceiling1.jpg"; // Add actual path
import Product6 from "../../../assets/outdoorinetrior.jpg"; // Add actual path
import Product7 from "../../../assets/lighting3.jpg"; // Add actual path
import Product8 from "../../../assets/roomdeco.jpg"; // Add actual path

const Showcase = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [animateItems, setAnimateItems] = useState(false);

  // Define your storefront URL here
  const storefrontUrl = "https://paystack.shop/plasterpro-gha"; // Replace with your actual storefront URL

  const productDetails = {
    "POP Cement (Plaster of Paris Cement)": {
      description:
        "Plaster of Paris (POP) Cement is a fine, white powder derived from gypsum (calcium sulfate dihydrate), which, when mixed with water, forms a quick-setting paste that hardens over time. It is widely used for ceiling molding, wall coatings, false ceilings, and decorative elements.",
      keyFeatures: [
        "Smooth Finish – Ideal for interior walls and ceilings.",
        "Fast Drying – Sets in 10-15 minutes, fully cures within 24 hours.",
        "Lightweight & Crack-Resistant – Reduces surface shrinkage.",
        "Fire-Resistant & Non-Toxic – Enhances safety in buildings.",
      ],
      commonUses:
        "False ceilings, wall decorations, cornices, medallions, and molding designs.",
    },
    "Plasterboard (Gypsum Board / Drywall)": {
      description:
        "Plasterboard, also called drywall or gypsum board, is a sandwich-like panel consisting of a gypsum core pressed between two sheets of paper or fiberglass. It is commonly used for partition walls, ceilings, and wall linings.",
      keyFeatures: [
        "Quick & Easy Installation – Reduces construction time.",
        "Smooth, Paintable Surface – Ideal for finishing.",
        "Fire-Resistant & Soundproofing Capabilities – Improves safety and acoustics.",
        "Moisture-Resistant Options Available – Perfect for bathrooms & kitchens.",
      ],
      commonUses:
        "Wall partitions, false ceilings, and commercial & residential interiors.",
    },
    "Fiber Ceiling Boards": {
      description:
        "Fiber ceiling boards are made of compressed mineral fibers, which provide excellent acoustic insulation, fire resistance, and durability. They are ideal for commercial and office ceilings.",
      keyFeatures: [
        "Durable & Moisture-Resistant – Great for humid environments.",
        "Excellent Acoustic Performance – Reduces noise pollution.",
        "Fire-Resistant – Enhances safety in buildings.",
        "Eco-Friendly – Made with natural & recycled materials.",
      ],
      commonUses:
        "Suspended ceilings in offices, schools, hospitals, and shopping malls.",
    },
    "Home Charm Paints": {
      description:
        "Home Charm Paints are premium-quality wall coatings designed to provide long-lasting color, smooth finishes, and protection against environmental damage.",
      keyFeatures: [
        "Vibrant, Long-Lasting Colors – Fade-resistant technology.",
        "Easy to Apply & Quick Drying – Low maintenance and hassle-free.",
        "Washable & Stain-Resistant – Great for high-traffic areas.",
        "Low VOC (Volatile Organic Compounds) – Eco-friendly and non-toxic.",
      ],
      commonUses:
        "Interior & exterior walls, ceilings, trims, and decorative finishes.",
    },
    "Metallic Channels": {
      description:
        "Metallic channels are galvanized steel or aluminum profiles used for suspending ceilings, holding ceiling boards, and supporting gypsum or fiber ceiling panels.",
      keyFeatures: [
        "High Strength & Load-Bearing Capacity – Supports heavy ceiling materials.",
        "Rust & Corrosion Resistant – Long-lasting durability.",
        "Lightweight & Easy to Install – Saves time in ceiling setup.",
      ],
      commonUses:
        "False ceilings, gypsum ceiling grids, and office ceiling structures.",
    },
    "Acoustic Ceilings": {
      description:
        "Acoustic ceilings are sound-absorbing panels designed to reduce noise levels in commercial, residential, and industrial spaces.",
      keyFeatures: [
        "Superior Sound Absorption – Reduces echoes & noise pollution.",
        "Fire-Resistant & Lightweight – Enhances safety.",
        "Moisture-Resistant Coating – Prevents mold growth.",
      ],
      commonUses:
        "Offices, recording studios, conference rooms, restaurants, and homes.",
    },
    "Decorative Panels": {
      description:
        "Decorative panels are artistic, textured panels used to enhance wall and ceiling aesthetics. They come in various patterns, textures, and finishes.",
      keyFeatures: [
        "Visually Appealing & Luxurious Designs – Elevates interior décor.",
        "Durable & Impact-Resistant – Long-lasting beauty.",
        "Moisture & Fire-Resistant Options Available – Suitable for various environments.",
      ],
      commonUses:
        "Feature walls, luxury ceilings, hotel lobbies, and interior design accents.",
    },
    "Room Lighting Solutions": {
      description:
        "Professional lighting solutions designed to enhance the ambiance and functionality of any space. Our options include modern fixtures for both aesthetic appeal and practical illumination.",
      keyFeatures: [
        "Energy-Efficient Designs – Reduces electricity consumption.",
        "Customizable Brightness – Adjustable to suit different needs.",
        "Modern Aesthetics – Enhances interior design.",
        "Professional Installation – Ensures safety and optimal positioning.",
      ],
      commonUses:
        "Living rooms, offices, kitchens, showrooms, and commercial spaces.",
    },
    "Hardware Installation Services": {
      description:
        "Professional installation services for all types of building hardware components. Our experienced team ensures proper fitting and functionality.",
      keyFeatures: [
        "Expert Technicians – Trained in industry best practices.",
        "Quality Assurance – Rigorous testing after installation.",
        "Time-Efficient – Minimizes disruption to your space.",
        "Comprehensive Service – Handles all hardware types.",
      ],
      commonUses:
        "Ceiling frames, wall brackets, electrical fittings, doors and windows hardware.",
    },
    "Repairs & Maintenance": {
      description:
        "Complete repair and maintenance services to keep your property in pristine condition. We handle all aspects of ceiling, wall, and lighting maintenance.",
      keyFeatures: [
        "Prompt Response – Quick attention to urgent issues.",
        "Preventative Care – Identifies potential problems early.",
        "Skilled Technicians – Experienced in various repair types.",
        "Quality Materials – Uses only industry-approved products.",
      ],
      commonUses:
        "Damaged ceilings, wall cracks, lighting issues, routine maintenance checks.",
    },
  };

  const showcaseItems = [
    {
      title: "POP Cement (Plaster of Paris Cement)",
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
      price: "Starting at GH₵1000",
      badge: "Community",
    },
    {
      title: "Plasterboard (Gypsum Board / Drywall)",
      description:
        "Sandwich-like panels with a gypsum core for partition walls, ceilings, and wall linings. Easy to install with excellent finishing properties.",
      imageUrl: Product5,
      price: "GH₵3500",
      badge: "Versatile",
    },
    {
      title: "Fiber Ceiling Boards",
      description:
        "Compressed mineral fiber boards providing acoustic insulation, fire resistance, and durability for commercial and office ceilings.",
      imageUrl: Product6,
      price: "GH₵6500",
      badge: "Commercial",
    },
    {
      title: "Home Charm Paints",
      description:
        "Premium wall coatings with long-lasting color, smooth finishes, and protection against environmental damage.",
      imageUrl: Product8,
      price: "GH₵4000",
      badge: "Eco-Friendly",
    },
    {
      title: "Decorative Panels",
      description:
        "Artistic, textured 3D panels to enhance wall and ceiling aesthetics with various patterns, textures, and finishes.",
      imageUrl: Product7,
      price: "GH₵8500",
      badge: "Luxury",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateItems(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedItem) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [selectedItem]);

  const QuickViewModal = () => {
    const details = productDetails[selectedItem.title] || {
      description: selectedItem.description,
      keyFeatures: [],
      commonUses: "",
    };

    return (
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedItem(null)}
      >
        <div
          className="bg-white rounded-xl max-w-5xl w-full max-h-[100vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative p-6 sm:p-8">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-72 sm:h-full rounded-lg overflow-hidden">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {selectedItem.badge && (
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm">
                    {selectedItem.badge}
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedItem.title}
                </h3>

                <div className="mb-6">
                  <h4 className="text-sm uppercase text-gray-500 font-semibold mb-2">
                    Description
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {details.description}
                  </p>
                </div>

                {details.keyFeatures && details.keyFeatures.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm uppercase text-gray-500 font-semibold mb-2">
                      Key Features
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {details.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {details.commonUses && (
                  <div className="mb-6">
                    <h4 className="text-sm uppercase text-gray-500 font-semibold mb-2">
                      Common Uses
                    </h4>
                    <p className="text-gray-700">{details.commonUses}</p>
                  </div>
                )}

                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                  <span className="text-2xl font-bold text-gray-900">
                    {selectedItem.price}
                  </span>
                  <a
                    href={`${storefrontUrl}?product=${encodeURIComponent(
                      selectedItem.title
                    )}`}
                    className="px-6 py-3 rounded-full font-medium bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md transition-all duration-300"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
              <div
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-center transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                {item.badge && (
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm">
                    {item.badge}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <p className="font-medium">Quick View</p>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-700">
                    {item.price}
                  </span>
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Learn more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedItem && <QuickViewModal />}
        <div
          className={`text-center mt-16 transition-all duration-500 ${
            animateItems
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `${showcaseItems.length * 100 + 100}ms` }}
        >
          <ViewAllProductsButton productPagePath={storefrontUrl} />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
