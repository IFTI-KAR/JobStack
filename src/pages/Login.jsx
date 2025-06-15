import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaFacebook } from "react-icons/fa";
const Login = () => {
  const [email, setEmail] = useState(''); // NEW: track email input
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  const { signIn, googleSignin } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;

    setError('');
    setPasswordError('');

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      return;
    }

    signIn(email, password)
      .then((result) => {
        navigate(location.state?.from || '/');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // ✅ NEW: handle forgot password navigation
  const handleForgotPassword = () => {
    navigate('/forgotpass', { state: { email } });
  };

  const handleGoogleLogin = () => {
    googleSignin()
      .then((result) => {
       // console.log(result.user);
        navigate(location.state?.from || '/');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="card w-full max-w-sm bg-white shadow-lg border border-gray-100 rounded-2xl p-6 sm:p-8">
        <div className="card-body space-y-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Login your Account</h2>
          <form onSubmit={handleLogin}>
            <fieldset className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  value={email} // ✅ make it controlled
                  onChange={(e) => setEmail(e.target.value)} // ✅ set email on change
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  required
                  name="password"
                  type="password"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
                {passwordError && (
                  <p className="text-red-600 text-sm mt-1">{passwordError}</p>
                )}
              </div>

              {/* ✅ REPLACED old anchor with click handler */}
              <div className="text-left">
                <p
                  onClick={handleForgotPassword}
                  className="text-sm text-blue-600 hover:underline cursor-pointer"
                >
                  Forgot password?
                </p>
              </div>

              {error && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm mt-3"
                  role="alert"
                >
                  <strong className="font-semibold">Error: </strong> {error}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-neutral w-full text-white font-semibold py-2"
              >
                Login
              </button>
            </fieldset>
          </form>

          <div className="flex items-center gap-4">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-400 text-sm">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 rounded-lg transition"
          >
            <FcGoogle size={20} />
            <span className="font-medium">Sign in with Google</span>
          </button>
          <button
            className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 rounded-lg transition"
          >
            <FaGithub size={20} />
            <span className="font-medium">Sign in with GitHub</span>
          </button>

          <button
            className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 rounded-lg transition"
          >
            <FaFacebook size={20} className="text-blue-600" />
            <span className="font-medium">Sign in with Facebook</span>
          </button>

          <p className="text-center font-semibold pt-5">
            Don't Have An Account?{' '}
            <Link className="underline text-red-600" to="/auth/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
