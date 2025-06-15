import React from "react";
import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaSearch,
  FaPaperPlane,
  FaChartLine,
} from "react-icons/fa";

// Steps with icons
const steps = [
  {
    title: "Create an Account",
    description:
      "Sign up easily with your email or Google account to start exploring job opportunities tailored to you.",
    icon: <FaUserPlus className="text-blue-500 text-4xl mb-4" />,
  },
  {
    title: "Browse Jobs",
    description:
      "Explore thousands of jobs from top companies. Filter by category, location, or employment type.",
    icon: <FaSearch className="text-blue-500 text-4xl mb-4" />,
  },
  {
    title: "Apply Easily",
    description:
      "One-click apply to your dream jobs. Your profile and resume are automatically shared with employers.",
    icon: <FaPaperPlane className="text-blue-500 text-4xl mb-4" />,
  },
  {
    title: "Track Applications",
    description:
      "Stay updated with real-time tracking of your job applications, interviews, and offers.",
    icon: <FaChartLine className="text-blue-500 text-4xl mb-4" />,
  },
];

// Animated background
const AnimatedBackground = () => {
  const circles = Array.from({ length: 10 });

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {circles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-200 opacity-20 rounded-full"
          initial={{
            y: "100vh",
            x: Math.random() * window.innerWidth,
            scale: Math.random() * 0.5 + 0.3,
          }}
          animate={{ y: [-100, window.innerHeight + 100] }}
          transition={{
            duration: Math.random() * 30 + 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: `${Math.random() * 60 + 40}px`,
            height: `${Math.random() * 60 + 40}px`,
          }}
        />
      ))}
    </div>
  );
};

const Howitworks = () => {
  return (
    <div className="relative w-11/12 py-20 bg-white overflow-hidden">
      <AnimatedBackground />
      <div className="w-11/12 mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          How It <span className="text-blue-600">Works</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Follow these easy steps to land your next opportunity with Jobstack.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center">
                {step.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
