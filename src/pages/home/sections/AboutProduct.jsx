// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Wrench,
//   ClipboardList,
//   RefreshCw,
//   Phone,
//   MessageCircle,
//   CalendarCheck,
//   ChevronRight,
//   BadgeCheck,
//   Star,
// } from "lucide-react";
// import { CiLocationOn } from "react-icons/ci";
// import PropTypes from "prop-types";

// // Counter component with animation
// const Counter = ({ target, suffix, label }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (count < target) {
//       const increment = target / 60;
//       const timer = setInterval(() => {
//         setCount((prev) => {
//           const next = prev + increment;
//           return next >= target ? target : next;
//         });
//       }, 30);

//       return () => clearInterval(timer);
//     }
//   }, [count, target]);

//   const formatNumber = (num) => {
//     if (num >= 1000) return `${(num / 1000).toFixed(1)}k${suffix}`;
//     return `${Math.floor(num)}${suffix}`;
//   };
//   Counter.propTypes = {
//     target: PropTypes.number.isRequired,
//     suffix: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//   };

//   return (
//     <motion.div
//       initial={{ scale: 0.9, opacity: 0 }}
//       whileInView={{ scale: 1, opacity: 1 }}
//       viewport={{ once: true }}
//       className="space-y-2 p-6 bg-white/10 rounded-xl"
//     >
//       <div className="text-4xl font-bold">{formatNumber(count)}</div>
//       <div className="text-sm font-medium">{label}</div>
//     </motion.div>
//   );
// };

// const AboutProduct = () => {
//   const services = [
//     {
//       icon: <Wrench className="w-8 h-8 text-blue-600" />,
//       title: "Professional Installation",
//       items: [
//         "POP Ceiling & Wall Installations",
//         "Plasterboard & Drywall Systems",
//         "Acoustic Ceiling Solutions",
//         "Decorative 3D Panels",
//         "Metallic Channel Systems",
//       ],
//     },
//     {
//       icon: <ClipboardList className="w-8 h-8 text-blue-600" />,
//       title: "Project Consultations",
//       items: [
//         "Material Selection",
//         "3D Design Planning",
//         "Site Inspection",
//         "Budget Planning",
//       ],
//     },
//     {
//       icon: <RefreshCw className="w-8 h-8 text-blue-600" />,
//       title: "Maintenance Services",
//       items: [
//         "Ceiling Repairs",
//         "POP Restoration",
//         "Acoustic Upgrades",
//         "Preventive Plans",
//       ],
//     },
//   ];

//   const testimonials = [
//     {
//       text: "Exceptional service! The team transformed my living room with a stunning POP ceiling design.",
//       author: "Barbara Aboagye",
//       location: "Accra",
//     },
//     {
//       text: "Commercial drywall partition delivered beyond expectations. Professional and efficient!",
//       author: "Mabel",
//       location: "Adentan",
//     },
//     {
//       text: "Flawless acoustic installation - quieter and more elegant space. Great job!",
//       author: "Jacob N.A",
//       location: "Ashaley-Botwe",
//     },
//   ];

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-blue-50 to-gray-100 text-gray-950 py-20 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.h1
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
//           >
//             Premium Ceiling & Wall Solutions
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-xl mb-8 max-w-2xl mx-auto"
//           >
//             Expert installation and maintenance services with precision
//             craftsmanship
//           </motion.p>

//           {/* <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="flex flex-col md:flex-row gap-4 justify-center"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold flex items-center gap-3"
//             >
//               <CalendarCheck className="w-6 h-6" />
//               Get Free Quote
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="border-2 border-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold flex items-center gap-3"
//             >
//               <MessageCircle className="w-6 h-6" />
//               Book Consultation
//             </motion.button>
//           </motion.div> */}

//           <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
//             <div className="flex items-center gap-2 bg-blue-400/10 p-3 rounded-lg">
//               <Phone className="w-5 h-5" />
//               <span>+233 249 718 356</span>
//             </div>
//             <div className="flex items-center gap-2 bg-blue-400/10 p-3 rounded-lg">
//               <CiLocationOn className="w-5 h-5" />
//               <span>East Legon Hills, Accra</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 px-4 max-w-7xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-3xl font-bold text-center mb-16 text-gray-900"
//         >
//           Our Professional Services
//         </motion.h2>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid md:grid-cols-3 gap-8"
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ y: 20, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               className="bg-white p-8 rounded-2xl shadow-xl border border-blue-50 hover:border-blue-100 transition-all"
//             >
//               <div className="mb-6 flex items-center gap-4">
//                 <div className="p-3 bg-blue-50 rounded-xl">{service.icon}</div>
//                 <h3 className="text-xl font-bold text-blue-900">
//                   {service.title}
//                 </h3>
//               </div>
//               <ul className="space-y-4">
//                 {service.items.map((item, idx) => (
//                   <li
//                     key={idx}
//                     className="flex items-center gap-3 text-blue-800 group"
//                   >
//                     <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
//                     <span className="group-hover:text-blue-900 transition-colors">
//                       {item}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* USP Banner with Animated Counters */}
//       <div className="bg-blue-900 text-white py-12 px-4">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
//           <Counter target={3} suffix="+" label="Years Experience" />
//           <Counter target={500} suffix="+" label="Projects Completed" />
//           <Counter target={98} suffix="%" label="Satisfaction Rate" />
//         </div>
//       </div>

//       {/* Testimonials Section */}
//       <section className="py-20 px-4 bg-blue-50">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-3xl font-bold text-center mb-16 text-blue-900"
//           >
//             Client Testimonials
//           </motion.h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ scale: 0.95, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 className="bg-white p-8 rounded-2xl shadow-lg relative border border-blue-100"
//               >
//                 <div className="absolute -top-6 left-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
//                   <Star className="w-6 h-6" />
//                 </div>
//                 <p className="text-blue-800 mb-6 text-lg leading-relaxed">
//                   "{testimonial.text}"
//                 </p>
//                 <div className="border-t pt-6">
//                   <h4 className="font-bold text-blue-900">
//                     {testimonial.author}
//                   </h4>
//                   <p className="text-blue-600 text-sm">
//                     {testimonial.location}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutProduct;

import { useState, useEffect } from "react";
import {
  Wrench,
  ClipboardList,
  RefreshCw,
  Phone,
  MapPin,
  ChevronRight,
  Star,
  Award,
  Users,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const Counter = ({ target, suffix, label, icon: Icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < target) {
      const increment = target / 60;
      const timer = setInterval(() => {
        setCount((prev) => {
          const next = prev + increment;
          return next >= target ? target : next;
        });
      }, 30);

      return () => clearInterval(timer);
    }
  }, [count, target]);

  const formatNumber = (num) => {
    if (num >= 1000) return `${(num / 1000).toFixed(1)}k${suffix}`;
    return `${Math.floor(num)}${suffix}`;
  };

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-slate-700 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
      <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-slate-700 rounded-full">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="text-5xl font-bold text-slate-800 mb-2">
          {formatNumber(count)}
        </div>
        <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
          {label}
        </div>
      </div>
    </div>
  );
};

const AboutProduct = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Professional Installation",
      description: "Expert craftsmanship for all your ceiling and wall needs",
      items: [
        "POP Ceiling & Wall Installations",
        "Plasterboard & Drywall Systems",
        "Acoustic Ceiling Solutions",
        "Decorative 3D Panels",
        "Metallic Channel Systems",
      ],
      gradient: "from-blue-600 to-slate-700",
    },
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: "Project Consultations",
      description: "Comprehensive planning for successful project execution",
      items: [
        "Material Selection",
        "3D Design Planning",
        "Site Inspection",
        "Budget Planning",
      ],
      gradient: "from-slate-700 to-blue-600",
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Maintenance Services",
      description: "Ongoing support to keep your spaces looking pristine",
      items: [
        "Ceiling Repairs",
        "POP Restoration",
        "Acoustic Upgrades",
        "Preventive Plans",
      ],
      gradient: "from-blue-500 to-slate-600",
    },
  ];

  const testimonials = [
    {
      text: "Exceptional service! The team transformed my living room with a stunning POP ceiling design.",
      author: "Barbara Aboagye",
      location: "Accra",
      rating: 5,
    },
    {
      text: "Commercial drywall partition delivered beyond expectations. Professional and efficient!",
      author: "Mabel",
      location: "Adentan",
      rating: 5,
    },
    {
      text: "Flawless acoustic installation - quieter and more elegant space. Great job!",
      author: "Jacob N.A",
      location: "Ashaley-Botwe",
      rating: 5,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-slate-50/30 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 opacity-95"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center px-4 py-12 md:py-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-xs md:text-sm font-medium mb-4 md:mb-6">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            Premium Quality Services
          </div>

          <h1 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight text-white">
            Premium Ceiling & Wall
            <span className="block text-blue-400">Solutions</span>
          </h1>

          <p className="text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto text-gray-300 leading-relaxed">
            Expert installation and maintenance services with precision
            craftsmanship that transforms spaces
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-xs md:text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-2 md:py-2.5 rounded-full text-white hover:bg-white/20 transition-all">
              <Phone className="w-3 h-3 md:w-4 md:h-4" />
              <span className="font-medium">+233 249 718 356</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-2 md:py-2.5 rounded-full text-white hover:bg-white/20 transition-all">
              <MapPin className="w-3 h-3 md:w-4 md:h-4" />
              <span className="font-medium">East Legon Hills, Accra</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 px-4 py-2 rounded-full text-sm font-semibold text-blue-700 mb-4">
            What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your construction and
            design needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
              ></div>

              <div className="relative">
                <div
                  className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-700 group/item"
                    >
                      <div
                        className={`mt-1 p-1 bg-gradient-to-br ${service.gradient} rounded-full flex-shrink-0`}
                      >
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                      <span className="group-hover/item:text-gray-900 transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Track Record
            </h2>
            <p className="text-white/80 text-lg">
              Numbers that speak for our excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Counter
              target={2}
              suffix="+"
              label="Years Experience"
              icon={Award}
            />
            <Counter
              target={50}
              suffix="+"
              label="Projects Completed"
              icon={TrendingUp}
            />
            <Counter
              target={98}
              suffix="%"
              label="Satisfaction Rate"
              icon={Users}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 px-4 py-2 rounded-full text-sm font-semibold text-blue-700 mb-4">
              Client Reviews
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real experiences from satisfied customers across Ghana
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-600 to-slate-700 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>

                <div className="relative">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-slate-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-600 text-sm flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 rounded-3xl p-12 text-center shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent"></div>
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Space?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Get in touch with us today for a free consultation and bring
                your vision to life
              </p>
              <button
                onClick={() => {
                  window.open(
                    "https://wa.me/233249718356?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project",
                    "_blank"
                  );
                }}
                className="inline-flex items-center gap-2 bg-white text-slate-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutProduct;
