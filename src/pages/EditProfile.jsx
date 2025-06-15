import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EditProfile = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [loading, setLoading] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);

    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        alert('Profile updated successfully!');
        navigate('/myprofile');
      })
      .catch((error) => {
        alert('Update failed: ' + error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
        <Navbar></Navbar>
        <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Profile</h2>
        <form onSubmit={handleUpdate} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Photo URL</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn bg-green-600 hover:bg-green-700 text-white w-full py-2 font-semibold"
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Information'}
          </button>
        </form>
      </div>
    </div>
    <Footer></Footer>
    </div>
    
  );
};

export default EditProfile;
