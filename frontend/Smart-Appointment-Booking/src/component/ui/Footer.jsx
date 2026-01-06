import React from 'react';
import { FaHeart } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* 主要内容区域 */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo 和描述区域 */}
          <div className="lg:col-span-1">
            <h1 className="text-3xl font-bold mb-4">AESTHETIC</h1>
            <p className="text-gray-400 mb-6">
              Premium aesthetic and cosmetic services with expert care and attention to detail.
            </p>
          </div>

          {/* Company 链接 */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-white">Company</h2>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition duration-300 hover:pl-2 block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition duration-300 hover:pl-2 block"
                >
                  Departments
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition duration-300 hover:pl-2 block"
                >
                  Find a Doctor
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition duration-300 hover:pl-2 block"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition duration-300 hover:pl-2 block"
                >
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-white">Quick links</h2>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition duration-300 hover:pl-2 block"
                >
                  Facial Fillers
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition duration-300 hover:pl-2 block"
                >
                  Breast Surgery
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition duration-300 hover:pl-2 block"
                >
                  Body Lifts
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition duration-300 hover:pl-2 block"
                >
                  Face & Neck
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition duration-300 hover:pl-2 block"
                >
                  Fat Reduction
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-white">Contact Us</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 mt-1">📍</span>
                <span className="text-gray-400">
                  Los Angeles Cournard, 1230 Bartsal
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-3">📞</span>
                <a 
                  href="tel:+167712444227" 
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  +1-677-124-44227
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-3">✉️</span>
                <a 
                  href="mailto:Support@gmail.com" 
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Support@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* 底部版权信息 */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            Copyright © {currentYear} All rights reserved. | This template is made with 
            <FaHeart className="inline-block mx-1 text-red-500" size={14} /> 
            by Colorlib
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-gray-400">
            <a 
              href="#" 
              className="hover:text-white transition duration-300 mb-2 md:mb-0"
            >
              All Rights Reserved
            </a>
            <span className="hidden md:inline">•</span>
            <a 
              href="#" 
              className="hover:text-white transition duration-300 mb-2 md:mb-0"
            >
              Terms & Use
            </a>
            <span className="hidden md:inline">•</span>
            <a 
              href="#" 
              className="hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;