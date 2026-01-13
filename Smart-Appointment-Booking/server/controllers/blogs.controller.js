const Blog = require("../models/blogs.model");

// Get all blogs
let getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author', 'name email');
        res.status(200).json({ success: true, blogs, message: "Blogs fetched successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Problem" });
    }
}

// Get blog by ID
let getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate('author', 'name email');
        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        res.status(200).json({ success: true, blog, message: "Blog fetched successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Problem" });
    }
}

// Create a new blog
let createBlog = async (req, res) => {
    try {
        const { title, description, category } = req.body;
        const author = req.user.userId;
        const newBlog = new Blog({
            title, description, image: req.file ? req.file.path : null
            , category, author
        });
        await newBlog.save();
        res.status(201).json({ success: true, message: "Blog created successfully", blog: newBlog });
    } catch (error) {
        console.log(error);

        res.status(500).json({ success: false, message: "Internal Server Problem" });
    }
}

// Update blog by ID
let updateBlogById = async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (req.file) {
            updatedBlog.image = req.file.path;
            await updatedBlog.save();
        }
        if (!updatedBlog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        res.status(200).json({ success: true, message: "Blog updated successfully", blog: updatedBlog });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Problem" });
    }
}

// Delete blog by ID
let deleteBlogById = async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        res.status(200).json({ success: true, message: "Blog deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Problem" });
    }
}

module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlogById,
    deleteBlogById
}

