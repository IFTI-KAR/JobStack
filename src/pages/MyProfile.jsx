import React from 'react';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import userlogo from "../assets/userlogo.png";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router'
// Icons
import { FaUserAlt, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import { MdVerifiedUser } from 'react-icons/md';

const MyProfile = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();


  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <Navbar />

      <div className="flex justify-center items-center py-10 px-4">
        <div className="bg-white shadow-2xl rounded-2xl w-full max-w-2xl p-8">
          <div className="flex flex-col items-center gap-4">
            <img
              className="w-28 h-28 rounded-full border-4 border-green-500 object-cover shadow"
              src={user?.photoURL || userlogo}
              alt="User"
            />
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaUserAlt className="text-green-600" /> {user?.displayName || 'No Name'}
            </h2>
            <p className="text-gray-500 flex items-center gap-2">
              <FaEnvelope className="text-blue-500" /> {user?.email || 'No Email'}
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <FaBriefcase className="text-purple-600" /> Candidate
              <MdVerifiedUser className="text-green-500" title="Verified" />
            </p>
            <span className="mt-4 inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full font-semibold text-sm">
              Active Profile
            </span>
          </div>

          {/* Optional: Add buttons below */}
          <div className="mt-8 flex justify-center gap-4">
            <button
      onClick={() => navigate('/editprofile')}
      className="btn bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md shadow-md transition-all"
    >
      Edit Profile
    </button>
            
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyProfile;
