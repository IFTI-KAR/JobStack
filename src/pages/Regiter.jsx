import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const { createUser, setUser, updateUser, googleSignin } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value.trim();
    const photo = form.photo.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    let hasError = false;

    // Name validation
    if (name.length <= 4) {
      setNameError('Name should be more than 4 characters');
      hasError = true;
    } else {
      setNameError('');
    }

    // Password validation
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUppercase || !hasLowercase || !isLongEnough) {
      setPasswordError('Password must have at least one uppercase, one lowercase letter, and be at least 6 characters.');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (hasError) return;

    setIsLoading(true);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        return updateUser({
          displayName: name,
          photoURL: photo
        }).then(() => {
          navigate('/');
        });
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleGoogleRegister = () => {
    googleSignin()
      .then((result) => {
        navigate('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="card w-full max-w-sm bg-white shadow-lg border border-gray-100 rounded-2xl p-6 sm:p-8">
        <div className="card-body space-y-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Register your Account</h2>
          <form onSubmit={handleRegister}>
            <fieldset className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input
                  required
                  type="text"
                  name="name"
                  className="input input-bordered w-full"
                  placeholder="Your name"
                />
                {nameError && (
                  <p className="text-red-600 text-sm mt-1">{nameError}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
                <input
                  required
                  type="text"
                  name="photo"
                  className="input input-bordered w-full"
                  placeholder="Photo link"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  required
                  type="password"
                  name="password"
                  className="input input-bordered w-full"
                  placeholder="Enter your password"
                />
                {passwordError && (
                  <p className="text-red-600 text-sm mt-1">{passwordError}</p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-neutral w-full text-white font-semibold py-2"
                disabled={isLoading}
              >
                {isLoading ? 'Registering...' : 'Register'}
              </button>
            </fieldset>
          </form>

          <div className="flex items-center gap-4 pt-4">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-400 text-sm">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Google Sign Up Button */}
          <button
            onClick={handleGoogleRegister}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 rounded-lg transition"
          >
            <FcGoogle size={20} />
            <span className="font-medium">Sign up with Google</span>
          </button>

          <p className="text-center font-semibold pt-5">
            Already Have An Account?{' '}
            <Link className="underline text-green-600" to="/auth/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
