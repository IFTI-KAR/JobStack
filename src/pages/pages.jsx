import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Pages = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow px-6 py-16 bg-gray-50 text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-green-700">About Us</h1>
          <p className="text-lg mb-4">
            Welcome to <span className="font-semibold text-green-600">JobFinder</span> — your go-to platform for finding the best opportunities from top companies around the world.
          </p>
          <p className="text-md text-gray-600 mb-6">
            Our mission is to connect talent with opportunity. Whether you're a fresh graduate or an experienced professional, we provide curated listings, detailed company insights, and a smooth application process to help you land your dream job.
          </p>
          <div className="bg-white shadow-md rounded-xl p-6 mt-10 text-left space-y-4">
            <h2 className="text-2xl font-semibold text-green-600">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Verified company listings</li>
              <li>Real-time job openings</li>
              <li>Personalized recommendations</li>
              <li>Free to use for all job seekers</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pages;
