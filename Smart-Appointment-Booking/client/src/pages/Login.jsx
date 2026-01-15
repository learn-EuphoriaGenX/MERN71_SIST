import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login({ setUser, user }) {
  const [form, setForm] = useState({
    role: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate()

  let [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.role) {
      return toast.error("Please Select any Role")
    } else if (!form.email) {
      return toast.error("Please enter Email.")
    } else if (!form.password) {
      return toast.error("Please enter Password.")
    }

    try {
      setLoading(true)
      let response = await axios.post(`https://mern71-sist.onrender.com/auth/${form.role}/login`, form)
      if (response.data.success) {
        toast.success(response.data.message)
        setUser(response.data.user)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('role', response.data.user.role)
        navigate("/")
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
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Role */}
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button className={`w-full ${loading && 'cursor-not-allowed'} bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition`}>
            {loading ? "Loading...." : "Login"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link to={"/register"}><span className="text-blue-600 cursor-pointer">Rregister</span></Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
