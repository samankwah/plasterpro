// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Play } from "lucide-react";

// const Hero = () => {
//   return (
//     <div className="relative w-full overflow-hidden bg-gradient-to-b from-amber-100 to-white pt-24">
//       {/* Background elements */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-amber-300 opacity-20 blur-3xl"></div>
//         <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-blue-300 opacity-20 blur-3xl"></div>
//       </div>

//       {/* Main content */}
//       <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
//         <div className="flex flex-col md:flex-row items-center">
//           {/* Left column - Text content */}
//           <motion.div
//             className="w-full md:w-1/2 md:pr-8 mb-12 md:mb-0"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//             >
//               <span className="inline-block px-4 py-1 bg-amber-200 text-amber-700 rounded-full text-sm font-medium mb-4">
//                 Innovation at its finest
//               </span>
//             </motion.div>
//             <motion.h1
//               className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-800 leading-tight"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//             >
//               Transform Your Experience{" "}
//               <span className="text-amber-500">with Fowohodie</span>
//             </motion.h1>
//             <motion.p
//               className="text-gray-600 text-lg mb-8 max-w-lg"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.7 }}
//             >
//               Experience the next generation of digital solutions that empower
//               your life. Simple, intuitive, and designed for the modern world.
//             </motion.p>
//             <motion.div
//               className="flex flex-wrap gap-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.9 }}
//             >
//               <a
//                 href="#features"
//                 className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors duration-300 flex items-center gap-2"
//               >
//                 Get Started <ArrowRight size={16} />
//               </a>
//               <a
//                 href="#demo"
//                 className="px-8 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition-colors duration-300 flex items-center gap-2"
//               >
//                 Watch Demo <Play size={16} />
//               </a>
//             </motion.div>
//             <motion.div
//               className="mt-8 flex items-center gap-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1.1 }}
//             >
//               <div className="flex -space-x-2">
//                 {[1, 2, 3, 4].map((num) => (
//                   <img
//                     key={num}
//                     src={`/api/placeholder/40/40`}
//                     alt={`User ${num}`}
//                     className="w-10 h-10 rounded-full border-2 border-white"
//                   />
//                 ))}
//               </div>
//               <p className="text-gray-600">
//                 <span className="font-semibold text-gray-800">500+</span>{" "}
//                 satisfied customers
//               </p>
//             </motion.div>
//           </motion.div>

//           {/* Right column - Hero image */}
//           <motion.div
//             className="w-full md:w-1/2"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             <div className="relative">
//               <img
//                 src="/api/placeholder/600/400"
//                 alt="Fowohodie Product"
//                 className="rounded-lg shadow-xl w-full h-auto"
//               />

//               {/* Floating elements */}
//               <motion.div
//                 className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1.0 }}
//               >
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                   <p className="text-sm font-medium">98% Satisfaction</p>
//                 </div>
//               </motion.div>

//               <motion.div
//                 className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1.1 }}
//               >
//                 <div className="flex items-center gap-2">
//                   <div className="text-amber-500 font-bold">⭐⭐⭐⭐⭐</div>
//                   <p className="text-sm font-medium">4.9/5 Rating</p>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Trusted by section */}
//         <motion.div
//           className="mt-16 pt-8 border-t border-gray-200"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.2 }}
//         >
//           <p className="text-center text-gray-500 mb-6">
//             Trusted by leading companies worldwide
//           </p>
//           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
//             {[
//               "Company A",
//               "Company B",
//               "Company C",
//               "Company D",
//               "Company E",
//             ].map((company) => (
//               <div key={company} className="text-gray-400 font-bold text-xl">
//                 {company}
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       {/* Wave divider */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
//         <svg
//           className="relative block w-full h-16"
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
//             opacity=".25"
//             fill="#f3f4f6"
//           ></path>
//           <path
//             d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
//             opacity=".5"
//             fill="#f3f4f6"
//           ></path>
//           <path
//             d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
//             fill="#f3f4f6"
//           ></path>
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollToTopButton from "../../../components/ScrollToTopButton";

const Hero = () => {
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
              Elegant Solutions for{" "}
              <span className="text-amber-500">Modern Challenges</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Fowohodie delivers intuitive experiences that blend seamlessly
              with your lifestyle. Simple. Powerful. Refined.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#services"
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors duration-200 flex items-center gap-2"
              >
                Explore Services <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-gray-300 hover:border-amber-500 hover:text-amber-500 text-gray-700 font-medium rounded-md transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-amber-500">★★★★★</div>
              <p className="text-gray-600 text-sm">
                <span className="font-medium">
                  Trusted by over 500+ clients
                </span>{" "}
                worldwide
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
              <img
                src="/api/placeholder/600/400"
                alt="Fowohodie Services"
                className="relative z-10 rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Clients section - minimal approach */}
        <motion.div
          className="mt-16 pt-6 border-t border-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-center text-gray-500 mb-4 text-sm font-medium">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {["COMPANY", "ENTERPRISE", "CORPORATION", "GROUP", "INDUSTRY"].map(
              (company) => (
                <div key={company} className="text-gray-400 font-bold">
                  {company}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
