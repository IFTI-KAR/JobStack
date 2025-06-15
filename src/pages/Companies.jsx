import React, { use } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const companyPromise = fetch("/company-jobs.json").then((res) => res.json());

// Variants for parent container to stagger child animations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

// Variants for individual company cards
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Companies = () => {
  const companies = use(companyPromise);

  return (
    <motion.div
        id="companies"
      className="w-11/12 mx-auto px-6 py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-bold mb-10 text-center text-green-700"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        Best Companies with Jobs
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        variants={containerVariants}
      >
        {companies.map((company, index) => (
          <motion.div
            key={company.id}
            variants={cardVariants}
            whileHover={{ scale: 1.08 }}
            className="p-5 border rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <Link
              to={`/company/${company.id}`}
              className="flex flex-col items-center"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-16 h-16 object-contain mb-3"
              />
              <span className="text-center font-semibold text-gray-800">
                {company.name}
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Companies;
