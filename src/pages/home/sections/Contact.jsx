import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsFacebook, BsTwitterX, BsInstagram } from "react-icons/bs";
import { FaLinkedin, FaTiktok } from "react-icons/fa";

function Contact() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Get in Touch with Fowohodie
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Have any questions or want to learn more about the Fowohodie
          Conversion Kit? We're happy to answer all your inquiries. Reach out to
          us, and we’ll be glad to assist!
        </p>

        {/* Contact Form and Info Section */}
        <div className="bg-gray-200 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 p-4 lg:p-0">
          {/* Contact Form */}
          <div className="shadow-lg rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block font-medium text-gray-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700"
                  rows="4"
                ></textarea>
              </div>
              <button className="w-full py-3 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition duration-200">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-6 pt-6 sm:pt-12">
              Contact Information
            </h2>
            <ul className="space-y-6">
              <li className="flex items-center space-x-4">
                <FaPhone className="text-blue-900 w-6 h-6" />
                <span className="text-gray-600">+233243999631</span>
              </li>
              <li className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-900 w-6 h-6" />
                <span className="text-gray-600">
                  <a
                    href="mailto:kingplastLtd.co@gmail.com"
                    className="hover:text-gray-800"
                  >
                    info@fawohodiekits.com
                  </a>
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-900 w-6 h-6" />
                <span className="text-gray-600">
                  Tarkwa-Nsuaem, Western Region, Ghana
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-700 mb-4">
                Follow Elizabeth's Innovation Journey
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://web.facebook.com/profile.php?id=61569529484943"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 hover:text-blue-700 transition"
                >
                  <BsFacebook size={24} />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 hover:text-blue-700 transition"
                >
                  <BsTwitterX size={24} />
                </a>
                <a
                  href="https://www.instagram.com/kingplastlimitedcompany/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 hover:text-blue-700 transition"
                >
                  <BsInstagram size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 hover:text-blue-700 transition"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://vm.tiktok.com/ZMkL54C5R/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 hover:text-blue-700 transition"
                >
                  <FaTiktok size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                What is the Fowohodie Conversion Kit?
              </h3>
              <p className="text-gray-600">
                The Fowohodie Conversion Kit automates manual wheelchairs by
                adding a battery-powered motor, transforming them into motorized
                wheelchairs.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                How does the kit improve mobility?
              </h3>
              <p className="text-gray-600">
                The kit reduces the physical effort required to move the
                wheelchair, enhancing autonomy and enabling easier navigation in
                different environments.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Who can use the Fowohodie Conversion Kit?
              </h3>
              <p className="text-gray-600">
                The kit is designed for individuals with mobility impairments
                who use traditional manual wheelchairs.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                How can I purchase the Fowohodie Conversion Kit?
              </h3>
              <p className="text-gray-600">
                You can contact us directly through the form above or email us
                at the address provided to place an order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
