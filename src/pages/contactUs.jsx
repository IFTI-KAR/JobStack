import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../assets/job-finder-logo-vector.jpg';
import { FaEnvelope, FaUser, FaCommentDots } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <img src={logo} alt="Jobstack Logo" className="w-20 h-20 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-green-700 mb-2">Contact Us</h1>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            We're here to help! Send us your questions, feedback, or just say hello.
          </p>

          <form className="bg-white rounded-2xl shadow-lg p-8 space-y-6 text-left border border-green-100">
            <div>
              <label className="block text-gray-700 font-semibold mb-1 flex items-center gap-2">
                <FaUser className="text-green-600" /> Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1 flex items-center gap-2">
                <FaEnvelope className="text-green-600" /> Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1 flex items-center gap-2">
                <FaCommentDots className="text-green-600" /> Message
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
