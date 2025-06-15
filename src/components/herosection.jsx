import React from 'react';
import heroimage from "../assets/hero.png";
import candidate from "../assets/candidate.png"
const HeroSection = () => {
    return (
        <div className="w-full bg-white">
            {/* Container with same padding as Navbar */}
            <div className="w-11/12 mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Left side - Text content */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                            Start Building<br />
                            <span className="text-blue-600">Your Dream Career</span> with Jobstack
                        </h1>
                        <p className="text-lg text-gray-600 mb-6">
                            Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                                Explore Jobs
                            </button>
                            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition duration-300">
                                How It Works
                            </button>
                        </div>
                        
                        <div className="flex items-center">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((item) => (
                                <img
                                    key={item}
                                    src={candidate}
                                    alt="Candidate"
                                    className="w-12 h-12 rounded-full border-4 border-white shadow-lg object-cover"
                                />
                                ))}
                            </div>
                            <p className="ml-4 text-gray-600 text-base">
                                <span className="font-bold">5k+</span> candidates get jobs
                            </p>
                            </div>
                    </div>
                    
                    {/* Right side - Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <img 
                            src={heroimage} 
                            alt="People celebrating career success" 
                            className="w-full max-w-md lg:max-w-lg xl:max-w-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;