// import React, { useState, useRef, useEffect } from "react";
// import {
//   MapPin,
//   Calendar,
//   Award,
//   ExternalLink,
//   Linkedin,
//   Mail,
//   Clock,
//   Video,
//   X,
// } from "lucide-react";
// import { HiOutlineAcademicCap } from "react-icons/hi2";
// import { FaGithub } from "react-icons/fa";
// import CEO from "../../../assets/ceiling4.jpg";
// import { Link } from "react-router-dom";

// const AboutInnovator = () => {
//   const dialogRef = useRef(null);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     date: "",
//     time: "",
//     topic: "",
//   });

//   const timeSlots = [
//     "09:00 AM",
//     "10:00 AM",
//     "11:00 AM",
//     "01:00 PM",
//     "02:00 PM",
//     "03:00 PM",
//     "04:00 PM",
//     "05:00 PM",
//   ];

//   // Function to open modal
//   const handleOpenDialog = () => {
//     if (dialogRef.current) {
//       dialogRef.current.showModal();
//     }
//   };

//   // Function to close modal
//   const handleCloseDialog = () => {
//     if (dialogRef.current) {
//       dialogRef.current.close();
//     }
//   };

//   // Handle form input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Meeting Request:", formData);
//     handleCloseDialog(); // Close modal after submission
//   };

//   // Close modal when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dialogRef.current && !dialogRef.current.contains(event.target)) {
//         handleCloseDialog();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Innovator data
//   const innovator = {
//     name: "Alex Osei",
//     title: "Entrepreneur & Founder of PlasterPro Ghana",
//     location: "Madina, Greater Accra Region, Ghana",
//     bio: "Alex Osei is a visionary entrepreneur who is revolutionizing the construction and interior décor industry in Ghana. Through PlasterPro Ghana, he provides comprehensive solutions for building hardware and interior finishing materials, making quality construction materials more accessible to everyone.",
//     story:
//       "Recognizing the challenges faced by individuals and construction companies in sourcing quality building materials, Alex established PlasterPro Ghana to bridge this gap. His experience in the construction industry led him to create a one-stop solution for all interior finishing needs, from POP ceilings to room lighting and hardware materials.",
//     achievements: [
//       "Pioneer in streamlined construction material distribution in Greater Accra",
//       "Established comprehensive building hardware solutions platform",
//       "Innovator in construction material accessibility",
//       "Leader in quality interior décor solutions",
//     ],
//     education: [
//       {
//         degree: "B.Sc. Construction Management",
//         institution: "Accra Technical University",
//         year: "2015-2019",
//       },
//       {
//         degree: "Certificate in Entrepreneurship",
//         institution: "GIMPA",
//         year: "2020",
//       },
//     ],
//     vision:
//       "Alex's vision for PlasterPro Ghana extends beyond mere product sales. He aims to transform the construction material sourcing experience in Ghana by creating an efficient, reliable, and accessible platform that serves both individual homeowners and large construction companies.",
//     socialLinks: [
//       {
//         platform: "LinkedIn",
//         url: "#",
//         icon: <Linkedin className="w-5 h-5" />,
//       },
//       { platform: "Email", url: "#", icon: <Mail className="w-5 h-5" /> },
//       { platform: "GitHub", url: "#", icon: <FaGithub className="w-5 h-5" /> },
//     ],
//   };

//   return (
//     <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
//       <div className="container mx-auto px-6 pt-12">
//         <div className="flex flex-col lg:flex-row gap-12 items-start">
//           {/* Left column - Profile and quick info */}
//           <div className="w-full lg:w-1/3">
//             <div className="sticky top-8">
//               <div className="relative mb-8">
//                 <div className="absolute -z-50 inset-8 rounded-full transform translate-x-3 translate-y-3"></div>
//                 <img
//                   src={CEO}
//                   alt="Alex Osei - Founder of PlasterPro Ghana"
//                   className="w-full max-w-md mx-auto rounded-sm shadow-lg relative z-10"
//                 />
//               </div>

//               <h1 className="text-3xl font-bold text-gray-800 mb-2">
//                 {innovator.name}
//               </h1>
//               <p className="text-xl text-amber-600 font-medium mb-4">
//                 {innovator.title}
//               </p>

//               <div className="flex items-start gap-2 text-gray-700 mb-4">
//                 <MapPin className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
//                 <span>{innovator.location}</span>
//               </div>

//               <div className="p-6 bg-white rounded-lg shadow-sm border border-amber-100 mb-6">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
//                   Education
//                 </h3>
//                 <ul className="space-y-3">
//                   {innovator.education.map((edu, index) => (
//                     <li key={index} className="flex items-start gap-2">
//                       <HiOutlineAcademicCap className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
//                       <div>
//                         <p className="font-medium text-gray-800">
//                           {edu.degree}
//                         </p>
//                         <p className="text-sm text-gray-600">
//                           {edu.institution} | {edu.year}
//                         </p>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="flex flex-wrap gap-3 mb-8">
//                 {innovator.socialLinks.map((link, index) => (
//                   <a
//                     key={index}
//                     href={link.url}
//                     className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-amber-50 border border-gray-200 rounded-md text-gray-700 hover:text-amber-600 transition-colors duration-200"
//                   >
//                     {link.icon} {link.platform}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right column - Main content */}
//           <div className="w-full lg:w-2/3">
//             <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-2 border-amber-200 pb-2">
//               About the Founder
//             </h2>

//             <div className="prose max-w-none mb-10">
//               <p className="text-xl font-medium text-gray-700 mb-6">
//                 {innovator.bio}
//               </p>
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                 The Journey
//               </h3>
//               <p className="text-gray-700 mb-8">{innovator.story}</p>

//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                 Vision for the Future
//               </h3>
//               <p className="text-gray-700 mb-8">{innovator.vision}</p>

//               <blockquote className="p-6 bg-amber-50 border-l-4 border-amber-500 italic text-lg text-gray-700 mb-8">
//                 "Our goal is to revolutionize how people access and purchase
//                 construction materials in Ghana, making quality building
//                 solutions accessible to everyone while providing exceptional
//                 service."
//               </blockquote>
//             </div>

//             <div className="mb-10">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-6">
//                 Key Achievements
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {innovator.achievements.map((achievement, index) => (
//                   <div
//                     key={index}
//                     className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-amber-100"
//                   >
//                     <Award className="w-6 h-6 text-amber-500 flex-shrink-0" />
//                     <span className="text-gray-700">{achievement}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mb-10">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-6">
//                 Impact Stories
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//                   <h4 className="font-semibold text-gray-800 mb-3">
//                     Customer Success
//                   </h4>
//                   <p className="text-gray-700 mb-4">
//                     PlasterPro Ghana has helped numerous construction companies
//                     and homeowners streamline their material sourcing process,
//                     saving time and resources.
//                   </p>
//                   <a
//                     href="#"
//                     className="inline-flex items-center text-amber-500 hover:text-amber-600 font-medium"
//                   >
//                     Read more <ExternalLink className="w-4 h-4 ml-1" />
//                   </a>
//                 </div>
//                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//                   <h4 className="font-semibold text-gray-800 mb-3">
//                     Quality Service
//                   </h4>
//                   <p className="text-gray-700 mb-4">
//                     Our commitment to providing top-quality materials and
//                     professional installation services has earned us trust
//                     throughout Greater Accra.
//                   </p>
//                   <a
//                     href="#"
//                     className="inline-flex items-center text-amber-500 hover:text-amber-600 font-medium"
//                   >
//                     Read more <ExternalLink className="w-4 h-4 ml-1" />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-2xl font-semibold text-gray-800 mb-6">
//                 Connect with Alex
//               </h3>
//               <div className="bg-amber-50 p-6 rounded-lg">
//                 <p className="text-gray-700 mb-4">
//                   Interested in learning more about PlasterPro Ghana's services
//                   or discussing your construction material needs? Schedule a
//                   consultation with Alex.
//                 </p>
//                 <Link
//                   to="/"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleOpenDialog();
//                   }}
//                   className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors duration-200"
//                 >
//                   Request a Meeting
//                 </Link>
//                 {/* Meeting Request Modal */}
//                 <dialog
//                   ref={dialogRef}
//                   className="p-6 rounded-2xl shadow-xl backdrop:bg-black backdrop:opacity-60 w-full max-w-lg transition-all transform scale-95 open:scale-100"
//                 >
//                   {/* Modal Header */}
//                   <div className="flex justify-between items-center mb-5">
//                     <div className="flex items-center gap-3">
//                       <Video className="w-6 h-6 text-amber-500" />
//                       <h2 className="text-2xl font-semibold text-gray-800">
//                         Schedule a Consultation
//                       </h2>
//                     </div>
//                     <button
//                       onClick={handleCloseDialog}
//                       className="text-gray-500 hover:text-gray-700"
//                     >
//                       <X className="w-6 h-6" />
//                     </button>
//                   </div>

//                   {/* Form */}
//                   <form onSubmit={handleSubmit} className="space-y-5">
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-gray-700">
//                         Name
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         required
//                         className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500"
//                         onChange={handleInputChange}
//                         value={formData.name}
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-gray-700">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         required
//                         className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500"
//                         onChange={handleInputChange}
//                         value={formData.email}
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-gray-700">
//                         Consultation Topic
//                       </label>
//                       <input
//                         type="text"
//                         name="topic"
//                         required
//                         className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500"
//                         onChange={handleInputChange}
//                         value={formData.topic}
//                       />
//                     </div>

//                     {/* Date & Time Selection */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       <div className="space-y-2">
//                         <label className="text-sm font-medium text-gray-700">
//                           Date
//                         </label>
//                         <div className="relative">
//                           <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
//                           <input
//                             type="date"
//                             name="date"
//                             required
//                             className="w-full pl-10 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500"
//                             onChange={handleInputChange}
//                             value={formData.date}
//                             min={new Date().toISOString().split("T")[0]}
//                           />
//                         </div>{" "}
//                       </div>

//                       <div className="space-y-2">
//                         <label className="text-sm font-medium text-gray-700">
//                           Time
//                         </label>
//                         <div className="relative">
//                           <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
//                           <select
//                             name="time"
//                             required
//                             className="w-full pl-10 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500"
//                             onChange={handleInputChange}
//                             value={formData.time}
//                           >
//                             <option value="">Select time</option>
//                             {timeSlots.map((slot) => (
//                               <option key={slot} value={slot}>
//                                 {slot}
//                               </option>
//                             ))}
//                           </select>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Buttons */}
//                     <div className="flex justify-end gap-4 pt-4">
//                       <button
//                         type="button"
//                         className="px-5 py-3 text-gray-500 hover:text-gray-700 transition-all rounded-lg"
//                         onClick={handleCloseDialog}
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         type="submit"
//                         className="px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg shadow-lg transition-all"
//                       >
//                         Schedule Consultation
//                       </button>
//                     </div>
//                   </form>
//                 </dialog>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutInnovator;

// import React from "react";
// import { MapPin, Award, Linkedin, Mail } from "lucide-react";
// import { HiOutlineAcademicCap } from "react-icons/hi2";
// import { FaGithub } from "react-icons/fa";
// import CEO from "../../../assets/ceiling4.jpg";

// const AboutInnovator = () => {
//   return (
//     <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
//       <div className="container mx-auto px-6 pt-12">
//         <div className="flex flex-col lg:flex-row gap-12 items-start">
//           {/* Left Column - Profile & Info */}
//           <div className="w-full lg:w-1/3">
//             <div className="sticky top-8">
//               <div className="relative mb-8">
//                 <img
//                   src={CEO}
//                   alt="Betty Baffour Awuah - CEO of PlasterPro Ghana"
//                   className="w-full max-w-md mx-auto rounded-sm shadow-lg"
//                 />
//               </div>

//               <h1 className="text-3xl font-bold text-gray-800 mb-2">
//                 Betty Baffour Awuah
//               </h1>
//               <p className="text-xl text-amber-600 font-medium mb-4">
//                 CEO & Founder, PlasterPro Ghana
//               </p>

//               <div className="flex items-start gap-2 text-gray-700 mb-4">
//                 <MapPin className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
//                 <span>Madina, Greater Accra Region, Ghana</span>
//               </div>

//               {/* Education Section */}
//               <div className="p-6 bg-white rounded-lg shadow-sm border border-amber-100 mb-6">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
//                   Education
//                 </h3>
//                 <ul className="space-y-3">
//                   <li className="flex items-start gap-2">
//                     <HiOutlineAcademicCap className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
//                     <div>
//                       <p className="font-medium text-gray-800">
//                         Bachelor of Arts in Communication Studies
//                       </p>
//                       <p className="text-sm text-gray-600">
//                         Wisconsin University, Ghana
//                       </p>
//                     </div>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <HiOutlineAcademicCap className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
//                     <div>
//                       <p className="font-medium text-gray-800">
//                         Post-Graduate Diploma in Business Administration
//                       </p>
//                       <p className="text-sm text-gray-600">GIMPA</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <HiOutlineAcademicCap className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
//                     <div>
//                       <p className="font-medium text-gray-800">
//                         MBA in Project Management
//                       </p>
//                       <p className="text-sm text-gray-600">GIMPA</p>
//                     </div>
//                   </li>
//                 </ul>
//               </div>

//               {/* Social Links */}
//               <div className="flex flex-wrap gap-3 mb-8">
//                 <a
//                   href="#"
//                   className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-amber-50 border border-gray-200 rounded-md text-gray-700 hover:text-amber-600 transition-colors duration-200"
//                 >
//                   <Linkedin className="w-5 h-5" /> LinkedIn
//                 </a>
//                 <a
//                   href="#"
//                   className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-amber-50 border border-gray-200 rounded-md text-gray-700 hover:text-amber-600 transition-colors duration-200"
//                 >
//                   <Mail className="w-5 h-5" /> Email
//                 </a>
//                 <a
//                   href="#"
//                   className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-amber-50 border border-gray-200 rounded-md text-gray-700 hover:text-amber-600 transition-colors duration-200"
//                 >
//                   <FaGithub className="w-5 h-5" /> GitHub
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - About Us Content */}
//           <div className="w-full lg:w-2/3">
//             <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-2 border-amber-200 pb-2">
//               About PlasterPro Ghana
//             </h2>

//             {/* Company History */}
//             <div className="prose max-w-none mb-10">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                 Company History – Our Journey
//               </h3>
//               <p className="text-gray-700">
//                 Established in August 2023, PlasterPro Ghana was founded with a
//                 vision to revolutionize the ceiling and wall finishing industry
//                 by providing high-quality materials and professional
//                 installation services. Our goal is to be the **go-to supplier**
//                 for both **wholesale and retail** customers across Ghana.
//               </p>
//             </div>

//             {/* Mission & Vision */}
//             <div className="mb-10">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                 Mission & Vision – Our Commitment to Quality
//               </h3>
//               <p className="text-gray-700">
//                 <strong>Mission:</strong> Delivering superior ceiling and wall
//                 finishing solutions through quality materials, expert
//                 craftsmanship, and exceptional customer service.
//               </p>
//               <p className="text-gray-700">
//                 <strong>Vision:</strong> To become the **No.1 provider** of
//                 premium ceiling and wall finishing materials and installations
//                 in Ghana and West Africa.
//               </p>
//             </div>

//             {/* Core Values */}
//             <div className="mb-10">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                 Core Values – What Drives Us
//               </h3>
//               <ul className="space-y-2 text-gray-700">
//                 <li>
//                   🌟 <strong>Excellence</strong> – Highest standards in products
//                   & services.
//                 </li>
//                 <li>
//                   💡 <strong>Innovation</strong> – Embracing new technologies &
//                   designs.
//                 </li>
//                 <li>
//                   🤝 <strong>Customer-First</strong> – Prioritizing personalized
//                   solutions.
//                 </li>
//                 <li>
//                   ⚙ <strong>Reliability</strong> – Timely deliveries & flawless
//                   installations.
//                 </li>
//                 <li>
//                   🌱 <strong>Sustainability</strong> – Eco-friendly materials &
//                   practices.
//                 </li>
//               </ul>
//             </div>

//             {/* Meet the Team */}
//             <div className="mb-10">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                 Meet the Team – Experts Behind Our Success
//               </h3>
//               <ul className="space-y-2 text-gray-700">
//                 <li>
//                   👩‍💼 <strong>Betty Baffour Awuah</strong> – CEO & Founder
//                 </li>
//                 <li>
//                   👨‍💻 <strong>Felix</strong> – Accountant
//                 </li>
//                 <li>
//                   🚛 <strong>Emmanuel</strong> – Logistics & Delivery
//                   Coordinator
//                 </li>
//                 <li>
//                   🔨 <strong>Michael</strong> – Lead Installer
//                 </li>
//                 <li>
//                   🛠️ <strong>Skilled Technicians</strong> – Experts in POP
//                   ceiling installations & more!
//                 </li>
//               </ul>
//             </div>

//             {/* Call to Action */}
//             <div className="text-center">
//               <a
//                 href="#"
//                 className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors duration-200"
//               >
//                 Get a Free Consultation
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutInnovator;

import React from "react";
import CEO from "../../../assets/ceo.jpg";
import { motion } from "framer-motion"; // Note: changed from react-motion to framer-motion
import { Link } from "react-router-dom";

const AboutInnovator = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-blue-900 opacity-80">
          <img
            src={CEO}
            alt="PlasterPro Ghana Office"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div> */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-950 tracking-tight mb-4">
            About <span className="text-blue-500">PlasterPro Ghana</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-900">
            Transforming spaces with premium ceiling and wall finishing
            solutions since 2023
          </p>
        </div>
      </div>

      {/* Company History Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="rounded-xl overflow-hidden shadow-2xl mb-10 lg:mb-0">
            <img
              src={CEO}
              alt="PlasterPro Ghana Projects"
              className="w-full h-[400px] lg:h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 relative">
              <span className="relative z-10">Our Journey</span>
              {/* <span className="absolute bottom-0 left-0 h-1 w-24 bg-blue-400"></span> */}
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Established in{" "}
              <span className="font-semibold text-blue-900">August 2023</span>,{" "}
              <span className="font-semibold text-blue-900">
                PlasterPro Ghana
              </span>{" "}
              was founded with a vision to revolutionize the ceiling and wall
              finishing industry by providing high-quality materials and
              professional installation services.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Recognizing a growing demand for durable, aesthetic, and
              cost-effective solutions, we set out to become the go-to supplier
              for both wholesale and retail customers across Ghana.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                POP Cement
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Plasterboard
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Fiber Ceilings
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Acoustic Solutions
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Decorative Panels
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Premium Paints
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="mb-12 lg:mb-0">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <div className="bg-[rgba(17,25,40,0.60)] border border-white/10 backdrop-saturate-180 backdrop-blur-lg p-6 rounded-xl text-white">
                <p className="text-lg leading-relaxed">
                  At{" "}
                  <span className="font-semibold text-blue-400">
                    PlasterPro Ghana
                  </span>
                  , our mission is to deliver superior ceiling and wall
                  finishing solutions through quality materials, expert
                  craftsmanship, and exceptional customer service. We aim to
                  enhance interior spaces by providing durable, stylish, and
                  efficient solutions tailored to our clients' unique needs.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <div className="bg-[rgba(17,25,40,0.60)] border border-white/10 backdrop-saturate-180 backdrop-blur-lg p-8 rounded-xl text-white">
                <p className="text-lg leading-relaxed">
                  We strive to become{" "}
                  <span className="font-semibold text-blue-400">
                    the No.1 provider
                  </span>{" "}
                  of premium ceiling and wall finishing materials and
                  installations in Ghana and the West African region, setting
                  industry standards for quality, sustainability, and customer
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      {/* <div className="py-16 bg-gray-50"> */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 relative inline-block">
              Our Core Values
              {/* <span className="absolute bottom-0 left-0 h-1 w-24 bg-blue-400 rounded-full"></span> */}
            </h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            {[
              {
                icon: "🌟",
                title: "Excellence",
                description:
                  "We uphold the highest standards in our products and services.",
              },
              {
                icon: "💡",
                title: "Innovation",
                description:
                  "We embrace new technologies and designs to stay ahead in the industry.",
              },
              {
                icon: "🤝",
                title: "Customer-First",
                description:
                  "We prioritize client needs and deliver personalized solutions.",
              },
              {
                icon: "⚙",
                title: "Reliability",
                description:
                  "We ensure timely deliveries, flawless installations, and long-lasting results.",
              },
              {
                icon: "🌱",
                title: "Sustainability",
                description:
                  "We source environmentally friendly materials and promote sustainable building practices.",
              },
              {
                icon: "🔍",
                title: "Attention to Detail",
                description:
                  "We believe that perfect finishes come from meticulous attention to every detail.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white border-l-4 border-blue-500 rounded-xl text-center overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                {/* <div className="h-2 bg-blue-600"></div> */}
                <div className="p-8">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 relative inline-block">
              Meet Our Team
              {/* <span className="absolute bottom-0 left-0 h-1 w-24 bg-blue-400 rounded-full"></span> */}
            </h2>
            <p className="text-xl text-gray-600">
              The experts behind our success
            </p>
          </div>

          {/* CEO Section */}
          <div className="mb-16">
            <div className="lg:grid lg:grid-cols-5 lg:gap-12">
              <div className="col-span-2 lg:mb-0 mb-8">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={CEO}
                    alt="Betty Baffour Awuah - CEO & Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-3 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Betty Baffour Awuah
                </h3>
                <p className="text-xl font-semibold text-blue-600 mb-4">
                  CEO & Founder
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  With a strong background in business administration, brand
                  communication, and corporate sales, Betty leads PlasterPro
                  Ghana with a passion for excellence and customer satisfaction.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Holding a Bachelor of Arts in Communication Studies from
                  Wisconsin University, Ghana, a Post-Graduate Diploma in
                  Business Administration, and an MBA in Project Management from
                  GIMPA, her leadership ensures that the company remains an
                  industry leader.
                </p>
                <div className="flex mt-6 space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.126 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Other Team Members */}
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Felix",
                role: "Accountant",
                image: { CEO },
                description:
                  "Manages financial operations, ensuring seamless transactions and transparent pricing.",
              },
              {
                name: "Emmanuel",
                role: "Logistics & Delivery Coordinator",
                image: { CEO },
                description:
                  "Oversees timely delivery of materials and installation tools across Ghana.",
              },
              {
                name: "Michael",
                role: "Lead Installer",
                image: { CEO },
                description:
                  "With years of experience in ceiling and wall installations, he ensures top-notch craftsmanship and efficiency on every project.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="h-3 bg-blue-600"></div>
                <div className="p-2">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-center rounded-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Installation Team */}
          <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl overflow-hidden shadow-xl">
            <div className="lg:grid lg:grid-cols-2">
              <div className="p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Skilled Technicians & Installers
                </h3>
                <p className="text-lg text-blue-100 mb-8">
                  Our team of dedicated experts specializes in POP ceiling
                  installations, plasterboard fitting, acoustic ceiling
                  solutions, and more!
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-gray-600 bg-opacity-20 text-white rounded-full text-sm font-medium">
                    POP Installations
                  </span>
                  <span className="px-4 py-2 bg-gray-600 bg-opacity-20 text-white rounded-full text-sm font-medium">
                    Plasterboard Fitting
                  </span>
                  <span className="px-4 py-2 bg-gray-600 bg-opacity-20 text-white rounded-full text-sm font-medium">
                    Acoustic Solutions
                  </span>
                  <span className="px-4 py-2 bg-gray-600 bg-opacity-20 text-white rounded-full text-sm font-medium">
                    Decorative Finishes
                  </span>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src={CEO}
                  alt="Installation Team at Work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="relative bg-gradient-to-r from-blue-400 to-blue-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join the growing number of clients who trust PlasterPro Ghana!
          </h2>
          <p className="text-xl text-gray-900 mb-10">
            Let's bring your vision to life—
            <span className="font-bold">one ceiling at a time!</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-500 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              Contact Us Today
            </Link>
            <Link
              to="/projects"
              className="bg-blue-900 text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              View Our Projects
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,101.3C960,107,1056,117,1152,122.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AboutInnovator;
