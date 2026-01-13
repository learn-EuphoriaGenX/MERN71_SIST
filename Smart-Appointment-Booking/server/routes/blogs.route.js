let express = require('express')
const { getAllBlogs, getBlogById, createBlog, updateBlogById, deleteBlogById } = require('../controllers/blogs.controller')
const { authMiddleware } = require('../middleware/auth.middleware')
const upload = require('../middleware/upload.middleware')
let route = express.Router()


route.get("/", getAllBlogs) // Get all blogs
route.get("/:id", getBlogById) // Get blog by ID
route.post("/", authMiddleware('admin'), upload.single("blogImage"), createBlog) // Create a new blog
route.put("/:id", authMiddleware('admin'), upload.single("blogImage"), updateBlogById) // Update blog by ID
route.delete("/:id", authMiddleware('admin'), deleteBlogById) // Delete blog by ID


module.exports = route