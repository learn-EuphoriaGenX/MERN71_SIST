const mongoose = require('mongoose')

const consultationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: String,
    email: String,
    phone: String,
    message: String,
    status: {
        type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending'
    }
}, { timestamps: true })
module.exports = mongoose.model('Consultation', consultationSchema)