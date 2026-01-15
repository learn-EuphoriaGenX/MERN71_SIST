import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Navbar({ setUser, user }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    let navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        setUser({})
        navigate('/login')
        toast.success("User Logout successfully")

    }

    return (
        <nav className="bg-white shadow-md">
            <div className="bg-gray-800 text-white text-sm py-2 px-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="mr-4">📞 +012 345 6789</span>
                        <span>✉️ info@example.com</span>
                    </div>
                    <div className="hidden md:flex items-center">
                        <span className="mr-2">📅</span>
                        <span>Mon to Sat</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-3xl font-bold text-gray-900">
                        AESTHETIC
                    </div>

                    <div className="hidden lg:flex space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
                            HOME
                        </Link>
                        <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
                            ABOUT
                        </Link>
                        <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
                            SERVICES
                        </Link>
                        <Link to="/doctors" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
                            DOCTORS
                        </Link>
                        <Link to="/blogs" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
                            BLOGS
                        </Link>
                        <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
                            CONTACT
                        </Link>
                        {
                            user.role && user.role === "admin" && <Link to="/upload" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
                                UPLOAD
                            </Link>
                        }
                    </div>
                    {user?.role && (
                        <span className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            {user.name}
                            <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                                {user.role}
                            </span>
                        </span>
                    )}

                    <div className="hidden lg:flex space-x-4">
                        {
                            user.role ?
                                <button onClick={handleLogout} className="bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition duration-300 shadow-md">
                                    LOGOUT
                                </button> : <>
                                    <Link to={"/login"}>
                                        <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300 shadow-md">
                                            LOGIN
                                        </button>
                                    </Link>
                                    <Link to={"/register"}>
                                        <button className="border text-blue-600 px-6 py-3 rounded-md font-medium  transition duration-300 shadow-md">
                                            REGISTER
                                        </button>
                                    </Link>
                                </>
                        }
                    </div>

                    <button
                        className="lg:hidden text-gray-700 focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4">
                        <div className="flex flex-col space-y-4">
                            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                                HOME
                            </a>
                            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                                ABOUT
                            </a>
                            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                                SERVICES
                            </a>
                            <a href="#pages" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                                PAGES
                            </a>
                            <a href="#news" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                                NEWS
                            </a>
                            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                                CONTACT
                            </a>
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300 mt-2">
                                APPOINTMENT
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;