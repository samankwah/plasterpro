import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Wrench,
  Hammer,
  Award,
  Star,
  Settings,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import ServiceImage from "../../../assets/kit-user.webp";
import PlasterProInstall from "../../../assets/popinstallation.mp4";

const AboutProduct = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/installation");
  };

  // Product features data
  const features = [
    {
      icon: <Wrench className="w-6 h-6 text-amber-500" />,
      title: "Quality Materials",
      description:
        "Premium POP ceilings, lighting fixtures, and hardware materials sourced from trusted manufacturers.",
    },
    {
      icon: <Hammer className="w-6 h-6 text-amber-500" />,
      title: "Professional Installation",
      description:
        "Expert installation services by our trained team, ensuring perfect finishing every time.",
    },
    {
      icon: <Settings className="w-6 h-6 text-amber-500" />,
      title: "Maintenance Support",
      description:
        "Comprehensive after-service support and maintenance for all installed products.",
    },
    {
      icon: <Star className="w-6 h-6 text-amber-500" />,
      title: "Customer Satisfaction",
      description:
        "Dedicated to delivering exceptional service and ensuring complete customer satisfaction.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 pt-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            PlasterPro Ghana Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your one-stop solution for quality building hardware, POP ceilings,
            and interior finishing materials.
          </p>
        </div>

        {/* Main product showcase */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-amber-100 rounded-lg transform translate-x-4 translate-y-4"></div>
              <video
                src={PlasterProInstall}
                autoPlay
                loop
                muted
                playsInline
                className="relative z-10 rounded-lg shadow-md w-full h-[70vh] object-cover"
              ></video>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-amber-500 font-semibold text-sm tracking-wider uppercase">
              Complete Solutions
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2 mb-4">
              Our Services
            </h3>
            <p className="text-gray-600 mb-6 text-justify">
              PlasterPro Ghana provides comprehensive solutions for all your
              interior finishing needs. From POP ceilings to room lighting and
              hardware materials, we handle everything from supply to
              installation, making your construction process seamless and
              efficient.
            </p>
            <ul className="space-y-4">
              {[
                "High-quality POP ceilings and installation",
                "Modern room lighting solutions",
                "Durable tapping and drywall screws",
                "Professional wall angle and galvanised profile installation",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <button
              className="mt-8 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors duration-200 flex items-center gap-2"
              onClick={handleClick}
            >
              Request Installation <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Benefits section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Why Choose PlasterPro Ghana
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the convenience and quality that sets us apart in the
              construction industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                One-Stop Solution
              </h4>
              <p className="text-gray-600">
                All your interior finishing materials and installation needs
                under one roof.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Quality Products
              </h4>
              <p className="text-gray-600">
                Premium materials sourced from reliable manufacturers ensuring
                durability and satisfaction.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Expert Installation
              </h4>
              <p className="text-gray-600">
                Professional installation services by trained technicians with
                years of experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Time Efficiency
              </h4>
              <p className="text-gray-600">
                Save time by avoiding multiple market visits and coordinating
                with different vendors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Customer Support
              </h4>
              <p className="text-gray-600">
                Dedicated support team available for consultation and
                after-service assistance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Competitive Pricing
              </h4>
              <p className="text-gray-600">
                Fair and transparent pricing with options for different budgets
                and project scales.
              </p>
            </div>
          </div>
        </div>

        {/* Technical features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Our Product Range
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive selection of quality building materials and hardware
              solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-20 bg-white p-8 md:p-12 rounded-lg shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-amber-500 text-4xl mb-6">"</div>
            <p className="text-xl md:text-2xl text-gray-700 italic mb-6">
              PlasterPro Ghana transformed our construction process. Their
              one-stop solution saved us countless hours of material sourcing,
              and their installation team delivered exceptional quality. I
              highly recommend their services to anyone looking for reliable
              interior finishing solutions.
            </p>
            <div className="flex items-center justify-center">
              <img
                src={ServiceImage}
                alt="Testimonial from client"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-800">Samuel Addo</p>
                <p className="text-gray-500 text-sm">Property Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Availability and pricing */}
        <div className="flex flex-col md:flex-row items-center bg-amber-50 rounded-lg overflow-hidden mb-20">
          <div className="w-full md:w-2/3 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Service Coverage & Support
            </h3>
            <p className="text-gray-700 mb-6">
              PlasterPro Ghana currently serves the Greater Accra Region with
              plans for expansion. We provide comprehensive support including
              consultation, installation, and after-service maintenance for all
              our products.
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-500" />
                <span className="text-gray-700">Quick response time</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-amber-500" />
                <span className="text-gray-700">Professional installation</span>
              </div>
            </div>
            <button className="mt-4 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors duration-200">
              Check Service Availability
            </button>
          </div>
          <div className="w-full md:w-1/3 bg-amber-100 p-8 md:p-12">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-800 mb-2">
                Free Consultation
              </p>
              <p className="text-4xl font-bold text-amber-600 mb-2">
                Available Now
              </p>
              <p className="text-gray-600 mb-4">
                Customized quotations for your project
              </p>
              <div className="flex justify-center">
                <Award className="w-8 h-8 text-amber-500" />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Trusted by leading construction companies
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join our satisfied customers who have experienced the convenience
            and quality of PlasterPro Ghana's services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/products"
              className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors duration-200"
            >
              Request a Quote
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border border-gray-300 hover:border-amber-500 hover:text-amber-500 text-gray-700 font-medium rounded-md transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
