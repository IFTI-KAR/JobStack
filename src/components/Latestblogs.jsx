import React from 'react';
import { FaRegCalendarAlt, FaRegClock, FaUser } from 'react-icons/fa';

const blogs = [
  {
    date: "20th February, 2025",
    readTime: "8 min/read",
    title: "11 Tips to Help You Get New Clients Through Cold Calling",
    author: "Google",
  },
  {
    date: "20th February, 2025",
    readTime: "5 min/read",
    title: "DigitalOcean launches first Canadian data centre in Toronto",
    author: "Facebook",
  },
  {
    date: "20th February, 2025",
    readTime: "6 min/read",
    title: "Using Banner Stands To Increase Trade Show Traffic",
    author: "LinkedIn",
  },
];

const LatestBlogs = () => {
  return (
    <div className="w-11/12 max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Latest Blog or News</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Search all the open positions on the web. Get your own personalized salary estimate.
          Read reviews on over 30,000+ companies worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center text-gray-500 text-sm space-x-4 mb-4">
              <div className="flex items-center gap-1">
                <FaRegCalendarAlt className="text-green-500" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaRegClock className="text-blue-500" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 leading-snug">
              {blog.title}
            </h3>

            <div className="flex justify-between items-center mt-6">
              <button className="text-green-600 font-semibold hover:underline transition duration-200">
                Read More
              </button>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <FaUser />
                <span>{blog.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
