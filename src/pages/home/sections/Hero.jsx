// import React, { useEffect } from "react";
// import { motion, useAnimationControls } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import ScrollToTopButton from "../../../components/ScrollToTopButton";
// import Image from "../../../assets/hero.jpg";

// const Hero = () => {
//   const controls = useAnimationControls();
//   const companies = [
//     "COMPANY",
//     "ENTERPRISE",
//     "CORPORATION",
//     "GROUP",
//     "INDUSTRY",
//     "STARTUP",
//     "TECH",
//     "SOLUTIONS",
//   ];
//   const duplicatedCompanies = [...companies, ...companies];

//   useEffect(() => {
//     const startSlideAnimation = async () => {
//       await controls.start({
//         x: [0, -1920],
//         transition: {
//           duration: 20,
//           ease: "linear",
//           repeat: Infinity,
//         },
//       });
//     };

//     startSlideAnimation();
//   }, [controls]);

//   return (
//     <div className="w-full bg-gradient-to-br from-amber-50 to-white pt-20">
//       <div className="container mx-auto px-6 py-16">
//         <ScrollToTopButton />
//         <div className="flex flex-col lg:flex-row items-center justify-between">
//           {/* Left column - Text content */}
//           <motion.div
//             className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
//               Elegant Solutions for{" "}
//               <span className="text-amber-500">Modern Challenges</span>
//             </h1>
//             <p className="text-gray-600 text-lg mb-8 max-w-lg">
//               Fowohodie delivers intuitive experiences that blend seamlessly
//               with your lifestyle. Simple. Powerful. Refined.
//             </p>
//             <div className="flex flex-wrap gap-4 mb-8">
//               <a
//                 href="/product-catalog"
//                 className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors duration-200 flex items-center gap-2"
//               >
//                 Explore Services <ArrowRight size={16} />
//               </a>
//               <a
//                 href="/contact"
//                 className="px-6 py-3 border border-gray-300 hover:border-amber-500 hover:text-amber-500 text-gray-700 font-medium rounded-md transition-colors duration-200"
//               >
//                 Contact Us
//               </a>
//             </div>
//             <div className="flex items-center gap-3">
//               <div className="text-amber-500">★★★★★</div>
//               <p className="text-gray-600 text-sm">
//                 <span className="font-medium">
//                   Trusted by over 500+ clients
//                 </span>{" "}
//                 worldwide
//               </p>
//             </div>
//           </motion.div>

//           {/* Right column - Hero image */}
//           <motion.div
//             className="w-full lg:w-1/2"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <div className="relative">
//               <div className="absolute -z-10 w-4/5 h-4/5 top-8 right-0 bg-amber-200 rounded-lg"></div>
//               <img
//                 src={Image}
//                 alt="Fowohodie Services"
//                 className="relative z-10 rounded-lg shadow-md w-full h-auto object-cover"
//               />
//             </div>
//           </motion.div>
//         </div>

//         {/* Updated Clients section with slider */}
//         <motion.div
//           className="mt-16 pt-6 border-t border-gray-100"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           <p className="text-center text-gray-500 mb-4 text-sm font-medium">
//             TRUSTED BY INDUSTRY LEADERS
//           </p>
//           <div className="relative w-full overflow-hidden">
//             <motion.div
//               className="flex items-center gap-16 whitespace-nowrap"
//               animate={controls}
//             >
//               {duplicatedCompanies.map((company, index) => (
//                 <div
//                   key={`${company}-${index}`}
//                   className="text-gray-400 font-bold px-8 flex-shrink-0"
//                 >
//                   {company}
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollToTopButton from "../../../components/ScrollToTopButton";
import PlasterProVideo from "../../../assets/ouroffice.mp4"; // Update with actual image

const Hero = () => {
  const controls = useAnimationControls();
  const companies = [
    "BUILDING MATERIALS",
    "INTERIOR DESIGN",
    "POP CEILINGS",
    "LIGHTING SOLUTIONS",
    "WALL FIXTURES",
    "PLASTERPRO GHANA",
  ];
  const duplicatedCompanies = [...companies, ...companies];

  useEffect(() => {
    const startSlideAnimation = async () => {
      await controls.start({
        x: [0, -1920],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    startSlideAnimation();
  }, [controls]);

  return (
    <div className="w-full bg-gradient-to-br from-amber-50 to-white pt-20">
      <div className="container mx-auto px-6 py-16">
        <ScrollToTopButton />
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left column - Text content */}
          <motion.div
            className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Elevate Your Space with{" "}
              <span className="text-amber-500">PlasterPro Ghana</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              We provide high-quality **POP ceilings, lighting, wall screws, and
              other interior building materials**—all with expert installation
              and repair services. Say goodbye to traditional carpenters and
              experience modern convenience.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="/product-catalog"
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors duration-200 flex items-center gap-2"
              >
                Shop Now <ArrowRight size={16} />
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border border-gray-300 hover:border-amber-500 hover:text-amber-500 text-gray-700 font-medium rounded-md transition-colors duration-200"
              >
                Get a Quote
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-amber-500">★★★★★</div>
              <p className="text-gray-600 text-sm">
                <span className="font-medium">
                  Trusted by homeowners & construction experts
                </span>{" "}
                across Ghana.
              </p>
            </div>
          </motion.div>

          {/* Right column - Hero image */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -z-10 w-4/5 h-4/5 top-8 right-0 bg-amber-200 rounded-lg"></div>
              <video
                src={PlasterProVideo} // Update the path to your video file
                autoPlay
                loop
                muted
                playsInline
                className="relative z-10 rounded-lg shadow-md w-full h-auto object-cover"
              ></video>
            </div>
          </motion.div>
        </div>

        {/* Updated Clients section with slider */}
        <motion.div
          className="mt-16 pt-6 border-t border-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-center text-gray-500 mb-4 text-sm font-medium">
            TRUSTED BY HOMEOWNERS & PROFESSIONALS
          </p>
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex items-center gap-16 whitespace-nowrap"
              animate={controls}
            >
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`${company}-${index}`}
                  className="text-gray-400 font-bold px-8 flex-shrink-0"
                >
                  {company}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
