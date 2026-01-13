import React from 'react';
import { FaMedkit, FaUserMd, FaCertificate, FaAmbulance, FaShieldAlt, FaSkull, FaFemale, FaFlask } from 'react-icons/fa';

function Offer() {
    const features = [
        {
            icon: <FaMedkit className="w-8 h-8" />,
            title: "Advanced equipment",
            description: "Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor dicturit facilisis.",
            color: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            icon: <FaUserMd className="w-8 h-8" />,
            title: "Qualified doctors",
            description: "Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor dicturit facilisis.",
            color: "text-purple-600",
            bgColor: "bg-purple-50"
        },
        {
            icon: <FaCertificate className="w-8 h-8" />,
            title: "Certified services",
            description: "Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor dicturit facilisis.",
            color: "text-green-600",
            bgColor: "bg-green-50"
        },
        {
            icon: <FaAmbulance className="w-8 h-8" />,
            title: "Emergency care",
            description: "Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor dicturit facilisis.",
            color: "text-red-600",
            bgColor: "bg-red-50"
        },
    ];

    const services = [
        {
            icon: <FaShieldAlt className="w-10 h-10" />,
            title: "Body procedures",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dique.",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: <FaSkull className="w-10 h-10" />,
            title: "Facial Procedures",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dique.",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: <FaFemale className="w-10 h-10" />,
            title: "Breast procedures",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dique.",
            gradient: "from-green-500 to-emerald-500"
        },
        {
            icon: <FaFlask className="w-10 h-10" />,
            title: "Skin care & Beauty",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dique.",
            gradient: "from-orange-500 to-red-500"
        }
    ];

    return (
        <div className="bg-linear-to-b from-white to-gray-50 py-16">
            <div className="container mx-auto px-4">

                {/* 标题区域 */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 mb-4">
                        <div className="w-12 h-0.5 bg-blue-600"></div>
                        <span className="text-blue-600 font-semibold">WHAT WE OFFER</span>
                        <div className="w-12 h-0.5 bg-blue-600"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        OUR SERVICES
                    </h2>
                    <h3 className="text-2xl font-semibold text-blue-600 mb-6">
                        Offer for you
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Discover our comprehensive range of aesthetic treatments and services designed to enhance your natural beauty
                    </p>
                </div>

                {/* 特色区域 - 4个卡片 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`${feature.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className={`p-4 rounded-full ${feature.bgColor} ${feature.color} mb-2`}>
                                    {feature.icon}
                                </div>
                                <h3 className={`text-xl font-bold ${feature.color} mb-3`}>
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 服务区域 */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* 左侧服务列表 */}
                        <div className="p-8 md:p-12">
                            <div className="space-y-8">
                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-6 group cursor-pointer p-6 rounded-xl hover:bg-gray-50 transition-all duration-300"
                                    >
                                        <div className={`bg-gradient-to-br ${service.gradient} p-4 rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                                            {service.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                                {service.title}
                                            </h4>
                                            <p className="text-gray-600 leading-relaxed">
                                                {service.description}
                                            </p>
                                            <div className="mt-3">
                                                <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center space-x-2 group-hover:translate-x-2 transition-all duration-300">
                                                    <span>Learn More</span>
                                                    <span className="text-lg">→</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 右侧图像/内容区域 */}
                        <div className="relative min-h-[400px] lg:min-h-[600px]">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600">
                                {/* 这里可以添加背景图像 */}
                                <div className="absolute inset-0 flex items-center justify-center p-8">
                                    <div className="text-center text-white space-y-6">
                                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm">
                                            <span className="text-3xl">✨</span>
                                        </div>
                                        <h3 className="text-3xl font-bold">Premium Care</h3>
                                        <p className="text-white/90 max-w-md mx-auto">
                                            Experience the highest standard of aesthetic treatments with our state-of-the-art facilities
                                        </p>
                                        <div className="pt-6">
                                            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 transform hover:scale-105">
                                                View All Services
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* 装饰元素 */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mt-16 -mr-16"></div>
                                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -mb-20 -ml-20"></div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* 底部CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col items-center space-y-4 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900">
                            Ready to Transform Your Look?
                        </h3>
                        <p className="text-gray-600 max-w-2xl">
                            Book a consultation with our expert team and discover the perfect treatment plan for you
                        </p>
                        <div className="pt-4">
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                Schedule Free Consultation
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Offer;