import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import { Form, Link, useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    role: "",
    name: "",
    email: "",
    password: "",
  });

  let [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.role) {
      return toast.error("Please Select any Role")
    } else if (!form.name) {
      return toast.error("Please enter Name.")
    } else if (!form.email) {
      return toast.error("Please enter Email.")
    } else if (!form.password) {
      return toast.error("Please enter Password.")
    }

    try {
      setLoading(true)
      let response = await axios.post(`https://mern71-sist.onrender.com/auth/${form.role}/register`, form)
      if (response.data.success) {
        toast.success(response.data.message)
        navigate("/login")
      }
    } catch (error) {
      toast.error(error.response.data.message)
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Role */}
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

          />

          <button className={`w-full ${loading && 'cursor-not-allowed'} bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition`}>
            {loading ? "Loading...." : "Register"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to={"/login"}><span className="text-blue-600 cursor-pointer">Login</span></Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
