import React from 'react';
import Logo from '../assets/Logo.png';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="/">
              <img src={Logo} alt="Logo" className="w-8 h-8 object-cover rounded-full" />
            </a>
          </div>
          <div className="flex items-center">
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">Tools</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">Faq</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">Carrers</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-gray-600 hover:text-gray-800">Blog</a>
          </div>
        </div>
      </div>
    </nav>
  );
};