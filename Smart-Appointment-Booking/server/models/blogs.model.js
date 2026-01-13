const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    titile: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: {
        type: String,
        required: true,
        enum: ['Health', 'Wellness', 'Medical News', 'Tips', 'Research', 'Other']
    },
    isPublished: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })
module.exports = mongoose.model('Blog', blogSchema)