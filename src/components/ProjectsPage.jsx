import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import these images when you have them
// import beforeAfter1 from "../../../assets/before-after-1.jpg";
// import beforeAfter2 from "../../../assets/before-after-2.jpg";
// import popCeiling from "../../../assets/pop-ceiling.jpg";
// import acousticCeiling from "../../../assets/acoustic-ceiling.jpg";
// import decorativePanel from "../../../assets/decorative-panel.jpg";
// import commercialCeiling from "../../../assets/commercial-ceiling.jpg";
// import caseStudyImage from "../../../assets/case-study.jpg";
// import testimonialVideo from "../../../assets/testimonial-video.mp4";

const ProjectsPage = () => {
  const [activeGalleryTab, setActiveGalleryTab] = useState("all");
  const [expandedCaseStudy, setExpandedCaseStudy] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Project categories data
  const projectCategories = [
    { id: "all", name: "All Projects" },
    { id: "pop", name: "POP Ceilings" },
    { id: "acoustic", name: "Acoustic Solutions" },
    { id: "decorative", name: "Decorative Panels" },
    { id: "commercial", name: "Commercial Projects" },
  ];

  // Gallery data - replace placeholder images with your actual images
  const galleryItems = [
    {
      id: 1,
      title: "Modern POP Ceiling Design",
      category: "pop",
      description: "Luxury home with custom POP ceiling design",
      location: "East Legon, Accra",
      // image: popCeiling,
      before: true,
    },
    {
      id: 2,
      title: "Acoustic Ceiling Installation",
      category: "acoustic",
      description: "Conference room with premium acoustic panels",
      location: "Airport Residential Area, Accra",
      // image: acousticCeiling,
      before: true,
    },
    {
      id: 3,
      title: "Decorative Wall Panel",
      category: "decorative",
      description: "Custom decorative wall panel for hotel lobby",
      location: "Cantonments, Accra",
      // image: decorativePanel,
      before: false,
    },
    {
      id: 4,
      title: "Commercial Ceiling Suspension",
      category: "commercial",
      description: "Office complex with suspended ceiling grid",
      location: "Osu, Accra",
      // image: commercialCeiling,
      before: false,
    },
  ];

  // Filter gallery items based on active tab
  const filteredGallery = galleryItems.filter(
    (item) => activeGalleryTab === "all" || item.category === activeGalleryTab
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Portfolio & Projects
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Our Expertise in Action: Discover the transformation we bring to
              every space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Intro */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-6"
            >
              Our Expertise in Action
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 mb-10"
            >
              At <strong>PlasterPro Ghana</strong>, we take pride in our
              exceptional craftsmanship and high-quality ceiling and wall
              finishing solutions. Our portfolio showcases a diverse range of
              residential, commercial, and industrial projects, highlighting our
              expertise in Plaster of Paris (POP) ceilings, plasterboard
              installations, fiber ceilings, acoustic solutions, metallic
              channel frameworks, decorative panels, and home charm paints.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-4"
            >
              Before & After Gallery
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 max-w-3xl mx-auto"
            >
              Our Before & After Gallery features real projects where we've
              transformed ordinary spaces into stunning interiors. From basic
              ceilings to luxurious POP and acoustic designs, our work speaks
              for itself.
            </motion.p>
          </motion.div>

          {/* Gallery Filter Tabs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {projectCategories.map((category) => (
              <motion.button
                key={category.id}
                variants={itemVariants}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeGalleryTab === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setActiveGalleryTab(category.id)}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredGallery.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  {/* Replace with actual images */}
                  <div className="bg-gray-300 h-64 w-full"></div>
                  {item.before && (
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Before & After
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-700 mb-3">{item.description}</p>
                  <div className="flex items-center text-gray-500">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{item.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-4"
            >
              Our Specialties
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 max-w-3xl mx-auto"
            >
              Explore our range of specialized services, each delivered with the
              highest quality standards and attention to detail.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Modern POP Ceilings</h3>
              <p className="text-gray-700">
                Customized designs for homes, hotels, and office spaces.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-2">
                Acoustic Ceiling Installations
              </h3>
              <p className="text-gray-700">
                Enhanced soundproofing for conference rooms and studios.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Decorative Wall Panels</h3>
              <p className="text-gray-700">
                Elegant and stylish finishes that redefine interior spaces.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-2">
                Commercial Ceiling Suspensions
              </h3>
              <p className="text-gray-700">
                Functional and aesthetic solutions for offices, malls, and
                showrooms.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-4"
            >
              Case Studies
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 max-w-3xl mx-auto"
            >
              We work closely with real estate developers, contractors,
              architects, and interior designers to bring large-scale projects
              to life. Our case studies provide a detailed breakdown of project
              challenges, solutions, materials used, and outcomes.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto"
          >
            <div className="md:flex">
              <div className="md:w-2/5">
                {/* Replace with actual image */}
                <div className="bg-gray-300 h-full min-h-64"></div>
              </div>
              <div className="md:w-3/5 p-8">
                <motion.h3
                  variants={itemVariants}
                  className="text-2xl font-bold mb-4"
                >
                  Luxury Apartment Complex Ceiling Installation
                </motion.h3>
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-2 gap-4 mb-6"
                >
                  <div>
                    <p className="text-gray-500 text-sm">Client</p>
                    <p className="font-semibold">[Real Estate Firm Name]</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Location</p>
                    <p className="font-semibold">East Legon, Accra</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Scope</p>
                    <p className="font-semibold">30+ apartments</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Materials</p>
                    <p className="font-semibold">
                      POP, acoustic panels, metallic channels
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className={`transition-all duration-500 overflow-hidden ${
                    expandedCaseStudy ? "max-h-screen" : "max-h-20"
                  }`}
                >
                  <h4 className="font-bold mb-2">Challenges</h4>
                  <p className="text-gray-700 mb-4">
                    Tight deadlines & large-scale material sourcing.
                  </p>

                  <h4 className="font-bold mb-2">Solution</h4>
                  <p className="text-gray-700 mb-4">
                    Efficient project planning, fast-track installation, and
                    skilled labor.
                  </p>

                  <h4 className="font-bold mb-2">Outcome</h4>
                  <p className="text-gray-700 mb-4">
                    A modern and elegant ceiling finish with excellent
                    durability & acoustic performance.
                  </p>
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  onClick={() => setExpandedCaseStudy(!expandedCaseStudy)}
                  className="mt-4 text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                >
                  {expandedCaseStudy ? "Show Less" : "Read Full Case Study"}
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                      expandedCaseStudy ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-4"
            >
              Customer Testimonials
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 max-w-3xl mx-auto"
            >
              Nothing speaks louder than the words of our satisfied customers!
              Our clients love our attention to detail, professionalism, and
              quality materials.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex mb-4">
                <div className="mr-4">
                  <div className="bg-gray-200 w-16 h-16 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold">Kofi O.</h4>
                  <p className="text-gray-500">Business Owner</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "PlasterPro Ghana completely transformed our office space with a
                sleek and modern ceiling design! Their team was professional and
                efficient."
              </p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex mb-4">
                <div className="mr-4">
                  <div className="bg-gray-200 w-16 h-16 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold">Sandra A.</h4>
                  <p className="text-gray-500">Homeowner</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "We hired PlasterPro for our home renovation, and they delivered
                beyond our expectations. The POP ceiling looks amazing!"
              </p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-colors duration-300">
              Watch More Testimonials
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-6"
            >
              Ready to Transform Your Space?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg mb-8">
              Let's discuss your project and create a ceiling solution that
              matches your vision and needs.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                to="/contact"
                className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
              >
                Get a Free Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
