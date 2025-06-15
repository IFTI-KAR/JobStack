import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ForgotPass = () => {
  const location = useLocation();
  const [email, setEmail] = useState('');

  // ✅ Pre-fill email if passed from login page
  useEffect(() => {
    if (location?.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const handleReset = (e) => {
    e.preventDefault();

    // ✅ Redirect to Gmail
    window.open('https://mail.google.com', '_blank');
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-[70vh] flex justify-center items-center px-4">
        <form
          onSubmit={handleReset}
          className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full border border-gray-100"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Forgot Password
          </h2>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter your email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              placeholder="you@example.com"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full text-white font-semibold"
          >
            Reset Password
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPass;
