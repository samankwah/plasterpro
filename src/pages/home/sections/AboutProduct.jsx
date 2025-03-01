import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  ClipboardList,
  RefreshCw,
  Phone,
  MessageCircle,
  CalendarCheck,
  ChevronRight,
  BadgeCheck,
  Star,
} from "lucide-react";
import { CiLocationOn } from "react-icons/ci";
import PropTypes from "prop-types";

// Counter component with animation
const Counter = ({ target, suffix, label }) => {
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
  Counter.propTypes = {
    target: PropTypes.number.isRequired,
    suffix: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-2 p-6 bg-white/10 rounded-xl"
    >
      <div className="text-4xl font-bold">{formatNumber(count)}</div>
      <div className="text-sm font-medium">{label}</div>
    </motion.div>
  );
};

const AboutProduct = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Professional Installation",
      items: [
        "POP Ceiling & Wall Installations",
        "Plasterboard & Drywall Systems",
        "Acoustic Ceiling Solutions",
        "Decorative 3D Panels",
        "Metallic Channel Systems",
      ],
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-blue-600" />,
      title: "Project Consultations",
      items: [
        "Material Selection",
        "3D Design Planning",
        "Site Inspection",
        "Budget Planning",
      ],
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-blue-600" />,
      title: "Maintenance Services",
      items: [
        "Ceiling Repairs",
        "POP Restoration",
        "Acoustic Upgrades",
        "Preventive Plans",
      ],
    },
  ];

  const testimonials = [
    {
      text: "Exceptional service! The team transformed my living room with a stunning POP ceiling design.",
      author: "Barbara Aboagye",
      location: "Accra",
    },
    {
      text: "Commercial drywall partition delivered beyond expectations. Professional and efficient!",
      author: "Mabel",
      location: "Adentan",
    },
    {
      text: "Flawless acoustic installation - quieter and more elegant space. Great job!",
      author: "Jacob N.A",
      location: "Ashaley-Botwe",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-gray-100 text-gray-950 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Premium Ceiling & Wall Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Expert installation and maintenance services with precision
            craftsmanship
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold flex items-center gap-3"
            >
              <CalendarCheck className="w-6 h-6" />
              Get Free Quote
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border-2 border-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Book Consultation
            </motion.button>
          </motion.div> */}

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-blue-400/10 p-3 rounded-lg">
              <Phone className="w-5 h-5" />
              <span>+233 249 718 356</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-400/10 p-3 rounded-lg">
              <CiLocationOn className="w-5 h-5" />
              <span>East Legon Hills, Accra</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-16 text-gray-900"
        >
          Our Professional Services
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-blue-50 hover:border-blue-100 transition-all"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-xl">{service.icon}</div>
                <h3 className="text-xl font-bold text-blue-900">
                  {service.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-blue-800 group"
                  >
                    <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="group-hover:text-blue-900 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* USP Banner with Animated Counters */}
      <div className="bg-blue-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <Counter target={3} suffix="+" label="Years Experience" />
          <Counter target={500} suffix="+" label="Projects Completed" />
          <Counter target={98} suffix="%" label="Satisfaction Rate" />
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-16 text-blue-900"
          >
            Client Testimonials
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="bg-white p-8 rounded-2xl shadow-lg relative border border-blue-100"
              >
                <div className="absolute -top-6 left-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <Star className="w-6 h-6" />
                </div>
                <p className="text-blue-800 mb-6 text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-6">
                  <h4 className="font-bold text-blue-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-blue-600 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutProduct;
