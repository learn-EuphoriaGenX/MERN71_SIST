import React, { useState } from 'react';
import { FaCalendarAlt, FaUserMd, FaCheckCircle } from 'react-icons/fa';

function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: ''
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your consultation request! We will contact you soon.');
  };

  return (
    <div className="relative bg-linear-to-r px-20 from-blue-50 to-purple-50">
      {/* 背景装饰元素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full opacity-20 -ml-48 -mb-48"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* 左侧内容区域 */}
          <div className="space-y-8">
            {/* 标题和副标题 */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Take the world's best quality <span className="text-blue-600">Treatment</span>
              </h1>
              
              <div className="flex items-center space-x-4">
                <div className="w-20 h-1 bg-blue-600"></div>
                <h2 className="text-2xl font-semibold text-blue-600">CONTACT US</h2>
              </div>
            </div>

            {/* 主要描述 */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    REQUEST FOR YOUR <span className="text-blue-600">Consultation</span>
                  </h3>
                  <p className="text-gray-600">Fill out the form below to schedule your consultation</p>
                </div>

                {/* 表单 */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUserMd className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your name"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-400">📞</span>
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Enter your phone number"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-400">✉️</span>
                        </div>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter your email"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type of Service *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaCheckCircle className="text-gray-400" />
                        </div>
                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 appearance-none"
                        >
                          <option value="">Select a service</option>
                          <option value="facial-fillers">Facial Fillers</option>
                          <option value="breast-surgery">Breast Surgery</option>
                          <option value="body-lifts">Body Lifts</option>
                          <option value="face-neck">Face & Neck</option>
                          <option value="fat-reduction">Fat Reduction</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <span className="text-gray-400">▼</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <FaCalendarAlt />
                    <span>BOOK APPOINTMENT</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* 右侧内容区域 */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    WELCOME TO <span className="text-blue-600">AESTHETIC</span>
                  </h2>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Find Best Doctors With AESTHETIC
                  </h3>
                </div>

                {/* 经验徽章 */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold">30</div>
                      <div className="text-lg font-medium">Years of experience</div>
                      <div className="text-sm opacity-90">in Cosmetic</div>
                    </div>
                  </div>
                </div>

                {/* 描述文本 */}
                <div className="space-y-4">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our team of certified aesthetic professionals is dedicated to providing 
                    the highest quality treatments in a safe and comfortable environment.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris.
                  </p>
                </div>

                {/* 特色列表 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600">✓</span>
                    </div>
                    <span className="text-gray-700">Certified Specialists</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600">✓</span>
                    </div>
                    <span className="text-gray-700">Modern Equipment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600">✓</span>
                    </div>
                    <span className="text-gray-700">Personalized Care</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600">✓</span>
                    </div>
                    <span className="text-gray-700">Safe Environment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 统计卡片 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-md text-center">
                <div className="text-2xl font-bold text-blue-600">5,000+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md text-center">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Expert Doctors</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md text-center">
                <div className="text-2xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">Treatments</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md text-center">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;