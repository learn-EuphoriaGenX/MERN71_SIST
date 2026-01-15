import axios from "axios";
import React, { useEffect, useState } from "react";

function Blogs() {

  let [blogs, setBlogs] = useState([])


  let fetchBlogs = async () => {
    try {
      let response = await axios.get(`https://mern71-sist.onrender.com/blog/`)
      if (response.data.success) {
        setBlogs(response.data.blogs);
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }

  }

  useEffect(() => {
    fetchBlogs()
  }, [])


  return (
    <div className="bg-slate-100 min-h-screen py-14">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Blogs</h2>
          <p className="text-gray-500 mt-2">
            Latest articles from our aesthetic experts
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <img
                src={`https://mern71-sist.onrender.com/${blog.image}`}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {blog.category}
                </span>

                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-3">
                  {blog.description}
                </p>

                {/* Author */}
                <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                  <span>✍️ {blog.author.name}</span>
                  <span>📅 {blog.createdAt}</span>
                </div>

                {/* Button */}
                <button className="mt-5 w-full border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
