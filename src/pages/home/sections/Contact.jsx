import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageCircle, User } from "lucide-react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 5.6731,
  lng: -0.1664,
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
    console.log("Form submitted", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-7xl mx-auto px-5 py-16 pt-20">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Get in Touch with PlasterPro
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-xl p-8">
            <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-6 flex items-center">
              <Send className="mr-4 text-blue-500" size={32} />
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-700 flex items-center">
                  <User className="mr-2 text-gray-700" size={20} />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700 flex items-center">
                  <Mail className="mr-2 text-gray-700" size={20} />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700 flex items-center">
                  <Phone className="mr-2 text-gray-700" size={20} />
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="(123) 456-7890"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700 flex items-center">
                  <MessageCircle className="mr-2 text-gray-700" size={20} />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Your message to us..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white shadow-xl rounded-xl p-5 lg:p-6">
            <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-6">
              Our Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="mr-4 text-gray-800" size={32} />
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">East Legon Hills, Accra</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="mr-4 text-gray-800" size={32} />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">
                    +233 249 718 356 / +233 244 493 6551
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="mr-4 text-gray-800" size={32} />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">plasterproent@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">
                  Monday - Friday: 9:00 AM - 5:00 PM
                  <br />
                  Saturday: 10:00 AM - 5:00 PM
                  <br />
                  {/* Sunday: Closed (Worship Day) */}
                </p>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            {/* <div className="mt-8 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Location Map Placeholder</p>
            </div> */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-blue-500 mb-4 text-center">
                Find Us on the Map
              </h2>
              <div className="bg-gray-300 rounded-lg h-64">
                {/* Google Maps Integration */}

                <iframe
                  className="w-full h-full rounded-s-xl"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d541.5835636119347!2d-0.08196425565555408!3d5.709993766879441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf835f95c0f8f1%3A0x383f2bb951f8dc08!2sEast%20Legon%20Hills!5e0!3m2!1sen!2sgh!4v1740870208273!5m2!1sen!2sgh"
                  // width="600"
                  // height="450"
                  // style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="container mx-auto mt-16 px-4 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              What is POP Ceiling Installation?
            </h3>
            <p className="text-gray-600">
              POP Ceiling Installation involves using high-quality Plaster of
              Paris to create elegant, modern ceilings that enhance interior
              spaces.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              How do Room Lighting Solutions improve my space?
            </h3>
            <p className="text-gray-600">
              Our Room Lighting Solutions are designed to provide
              energy-efficient and stylish lighting, improving both the
              aesthetics and functionality of your space.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              What services are included in Hardware Installation?
            </h3>
            <p className="text-gray-600">
              We offer expert installation of various building hardware,
              including ceiling frames, wall brackets, and other essential
              fittings to ensure your space is secure and visually appealing.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              How can I book Repairs & Maintenance services?
            </h3>
            <p className="text-gray-600">
              You can easily contact us via our website form or email us
              directly to schedule repairs and maintenance for your ceilings,
              walls, or lighting fixtures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
