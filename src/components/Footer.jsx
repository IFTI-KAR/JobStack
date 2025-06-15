import React from 'react';
import { Link } from 'react-router';
import { FaLinkedin, FaFacebookF, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#0A1128] text-white w-full border-t border-gray-700">
            <div className="w-11/12 mx-auto px-6 py-8">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Left Section - Logo and Copyright */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500" />
                            <span className="text-xl font-bold">Jobstack</span>
                        </Link>
                        <p className="text-sm text-gray-300 text-center md:text-left">
                            ©2025 Jobstack. All rights reserved. 
                            <br className="md:hidden" />
                            <br /> Designed with <span className="text-red-500">❤</span> by IFTI.
                        </p>
                    </div>

                    {/* Middle Section - Quick Links */}
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-lg mb-2">Company</h3>
                            <Link to="/about" className="text-gray-300 hover:text-green-400">About Us</Link>
                            <Link to="/contact" className="text-gray-300 hover:text-green-400">Contact</Link>
                            <Link to="/careers" className="text-gray-300 hover:text-green-400">Careers</Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-lg mb-2">Resources</h3>
                            <Link to="/blog" className="text-gray-300 hover:text-green-400">Blog</Link>
                            <Link to="/help" className="text-gray-300 hover:text-green-400">Help Center</Link>
                            <Link to="/privacy" className="text-gray-300 hover:text-green-400">Privacy Policy</Link>
                        </div>
                    </div>

                    {/* Right Section - Social Media */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-lg text-center md:text-right">Connect With Us</h3>
                        <div className="flex justify-center md:justify-end gap-4">
                            <a href="#" className="text-gray-300 hover:text-green-400 text-xl">
                                <FaLinkedin />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-green-400 text-xl">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-green-400 text-xl">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-green-400 text-xl">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-green-400 text-xl">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Divider */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
                    <p>Jobstack - Find your dream job today</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;