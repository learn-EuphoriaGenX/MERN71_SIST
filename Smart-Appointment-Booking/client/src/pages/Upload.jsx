import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Upload() {
    const [form, setForm] = useState({
        title: "",
        description: "",
        category: "",
        blogImage: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm({
            ...form,
            [name]: files ? files[0] : value,
        });
    };

    let navigate = useNavigate()
    let [loading, setLoading] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("description", form.description);
        formData.append("category", form.category);
        formData.append("blogImage", form.blogImage);


        if (!form.title) {
            return toast.error("Please enter a Title")
        } else if (!form.description) {
            return toast.error("Please enter description.")
        } else if (!form.category) {
            return toast.error("Please choose one Category.")
        } else if (!form.blogImage) {
            return toast.error("Please choose one Image.")
        }

        try {
            setLoading(true)
            let response = await axios.post(`https://mern71-sist.onrender.com/blog/`, formData, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            if (response.data.success) {
                toast.success(response.data.message)
                navigate("/blogs")
            }
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }

    };

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
            <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Upload Blog
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Blog Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter blog title"
                            value={form.title}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            rows="5"
                            placeholder="Write blog description..."
                            value={form.description}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Category
                        </label>
                        <select
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Health">SHealth</option>
                            <option value="Wellness">Wellness</option>
                            <option value="Medical News">Medical News</option>
                            <option value="Tips">Tips</option>
                            <option value="Research">Research</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Blog Image
                        </label>
                        <input
                            type="file"
                            name="blogImage"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2 bg-white"
                            required
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className={`w-full bg-blue-600 ${loading && 'cursor-not-allowed'} text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition`}
                    >
                        {loading ? "Loading...." : "Upload Blog"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Upload;
