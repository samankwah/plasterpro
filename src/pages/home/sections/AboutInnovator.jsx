import React, { useState, useRef, useEffect } from "react";
import {
  MapPin,
  Calendar,
  Award,
  ExternalLink,
  Linkedin,
  Mail,
  Clock,
  Video,
  X,
} from "lucide-react";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import CEO from "../../../assets/ceo.jpg";
import { Link } from "react-router-dom";

const AboutInnovator = () => {
  const dialogRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    topic: "",
  });

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  // Function to open modal
  const handleOpenDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  // Function to close modal
  const handleCloseDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Meeting Request:", formData);
    handleCloseDialog(); // Close modal after submission
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        handleCloseDialog();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Innovator data
  const innovator = {
    name: "Alex Osei",
    title: "Entrepreneur & Founder of PlasterPro Ghana",
    location: "Madina, Greater Accra Region, Ghana",
    bio: "Alex Osei is a visionary entrepreneur who is revolutionizing the construction and interior décor industry in Ghana. Through PlasterPro Ghana, he provides comprehensive solutions for building hardware and interior finishing materials, making quality construction materials more accessible to everyone.",
    story:
      "Recognizing the challenges faced by individuals and construction companies in sourcing quality building materials, Alex established PlasterPro Ghana to bridge this gap. His experience in the construction industry led him to create a one-stop solution for all interior finishing needs, from POP ceilings to room lighting and hardware materials.",
    achievements: [
      "Pioneer in streamlined construction material distribution in Greater Accra",
      "Established comprehensive building hardware solutions platform",
      "Innovator in construction material accessibility",
      "Leader in quality interior décor solutions",
    ],
    education: [
      {
        degree: "B.Sc. Construction Management",
        institution: "Accra Technical University",
        year: "2015-2019",
      },
      {
        degree: "Certificate in Entrepreneurship",
        institution: "GIMPA",
        year: "2020",
      },
    ],
    vision:
      "Alex's vision for PlasterPro Ghana extends beyond mere product sales. He aims to transform the construction material sourcing experience in Ghana by creating an efficient, reliable, and accessible platform that serves both individual homeowners and large construction companies.",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "#",
        icon: <Linkedin className="w-5 h-5" />,
      },
      { platform: "Email", url: "#", icon: <Mail className="w-5 h-5" /> },
      { platform: "GitHub", url: "#", icon: <FaGithub className="w-5 h-5" /> },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-6 pt-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left column - Profile and quick info */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-8">
              <div className="relative mb-8">
                <div className="absolute -z-50 inset-8 rounded-full transform translate-x-3 translate-y-3"></div>
                <img
                  src={CEO}
                  alt="Alex Osei - Founder of PlasterPro Ghana"
                  className="w-full max-w-md mx-auto rounded-sm shadow-lg relative z-10"
                />
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {innovator.name}
              </h1>
              <p className="text-xl text-amber-600 font-medium mb-4">
                {innovator.title}
              </p>

              <div className="flex items-start gap-2 text-gray-700 mb-4">
                <MapPin className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span>{innovator.location}</span>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm border border-amber-100 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
                  Education
                </h3>
                <ul className="space-y-3">
                  {innovator.education.map((edu, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <HiOutlineAcademicCap className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">
                          {edu.degree}
                        </p>
                        <p className="text-sm text-gray-600">
                          {edu.institution} | {edu.year}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {innovator.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-amber-50 border border-gray-200 rounded-md text-gray-700 hover:text-amber-600 transition-colors duration-200"
                  >
                    {link.icon} {link.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Main content */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-2 border-amber-200 pb-2">
              About the Founder
            </h2>

            <div className="prose max-w-none mb-10">
              <p className="text-xl font-medium text-gray-700 mb-6">
                {innovator.bio}
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                The Journey
              </h3>
              <p className="text-gray-700 mb-8">{innovator.story}</p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Vision for the Future
              </h3>
              <p className="text-gray-700 mb-8">{innovator.vision}</p>

              <blockquote className="p-6 bg-amber-50 border-l-4 border-amber-500 italic text-lg text-gray-700 mb-8">
                "Our goal is to revolutionize how people access and purchase
                construction materials in Ghana, making quality building
                solutions accessible to everyone while providing exceptional
                service."
              </blockquote>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Key Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {innovator.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-amber-100"
                  >
                    <Award className="w-6 h-6 text-amber-500 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Impact Stories
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Customer Success
                  </h4>
                  <p className="text-gray-700 mb-4">
                    PlasterPro Ghana has helped numerous construction companies
                    and homeowners streamline their material sourcing process,
                    saving time and resources.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-amber-500 hover:text-amber-600 font-medium"
                  >
                    Read more <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Quality Service
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Our commitment to providing top-quality materials and
                    professional installation services has earned us trust
                    throughout Greater Accra.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-amber-500 hover:text-amber-600 font-medium"
                  >
                    Read more <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Connect with Alex
              </h3>
              <div className="bg-amber-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Interested in learning more about PlasterPro Ghana's services
                  or discussing your construction material needs? Schedule a
                  consultation with Alex.
                </p>
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenDialog();
                  }}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors duration-200"
                >
                  Request a Meeting
                </Link>
                {/* Meeting Request Modal */}
                <dialog
                  ref={dialogRef}
                  className="p-6 rounded-2xl shadow-xl backdrop:bg-black backdrop:opacity-60 w-full max-w-lg transition-all transform scale-95 open:scale-100"
                >
                  {/* Modal Header */}
                  <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center gap-3">
                      <Video className="w-6 h-6 text-amber-500" />
                      <h2 className="text-2xl font-semibold text-gray-800">
                        Schedule a Consultation
                      </h2>
                    </div>
                    <button
                      onClick={handleCloseDialog}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500"
                        onChange={handleInputChange}
                        value={formData.name}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500"
                        onChange={handleInputChange}
                        value={formData.email}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Consultation Topic
                      </label>
                      <input
                        type="text"
                        name="topic"
                        required
                        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500"
                        onChange={handleInputChange}
                        value={formData.topic}
                      />
                    </div>

                    {/* Date & Time Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                          <input
                            type="date"
                            name="date"
                            required
                            className="w-full pl-10 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500"
                            onChange={handleInputChange}
                            value={formData.date}
                            min={new Date().toISOString().split("T")[0]}
                          />
                        </div>{" "}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Time
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                          <select
                            name="time"
                            required
                            className="w-full pl-10 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500"
                            onChange={handleInputChange}
                            value={formData.time}
                          >
                            <option value="">Select time</option>
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot}>
                                {slot}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-4 pt-4">
                      <button
                        type="button"
                        className="px-5 py-3 text-gray-500 hover:text-gray-700 transition-all rounded-lg"
                        onClick={handleCloseDialog}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg shadow-lg transition-all"
                      >
                        Schedule Consultation
                      </button>
                    </div>
                  </form>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInnovator;
