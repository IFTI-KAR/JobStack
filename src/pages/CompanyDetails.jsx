import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CompanyDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    if (Array.isArray(data)) {
      const companyDetails = data.find((singleCompany) => singleCompany.id === id);
      setCompany(companyDetails);
    }
  }, [data, id]);

  if (!company) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow w-11/12 mx-auto px-6 py-8 text-center">
          <p className="text-xl text-gray-600">Loading company details or company not found...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow w-11/12 mx-auto px-6 py-12">
        {/* Company Info */}
        <div className="mb-12 bg-white shadow-lg rounded-xl p-8">
          <div className="flex items-center gap-6">
            <img src={company.logo} alt={company.name} className="h-16 w-16 object-contain rounded-full border" />
            <div>
              <h1 className="text-3xl font-extrabold text-green-700 mb-1">{company.name}</h1>
              <p className="text-gray-600"><strong>Location:</strong> {company.location}</p>
              <p className="text-gray-600"><strong>Industry:</strong> {company.industry}</p>
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-2 inline-block"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>

        {/* Jobs */}
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Available Jobs</h2>
        <div className="grid grid-cols-1 gap-6">
          {company.jobs?.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
              <p className="text-sm text-gray-600 mb-1">Type: {job.jobType}</p>
              <p className="text-sm text-gray-600 mb-3">Salary: {job.salary}</p>
              <button
                onClick={() => setSelectedJob(job)}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
            <div className="bg-white rounded-xl shadow-2xl p-6 max-w-2xl w-full relative">
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl font-bold"
              >
                &times;
              </button>
              <img
                src={selectedJob.bannerImage}
                alt={selectedJob.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedJob.title}</h3>
              <p className="text-gray-700 mb-3">{selectedJob.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
                <p><strong>Location:</strong> {selectedJob.location}</p>
                <p><strong>Type:</strong> {selectedJob.jobType}</p>
                <p><strong>Salary:</strong> {selectedJob.salary}</p>
              </div>
              <div>
                <strong className="block mb-1">Requirements:</strong>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {selectedJob.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex justify-end gap-4">
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Apply Now
                </a>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="bg-gray-300 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-400 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CompanyDetails;
