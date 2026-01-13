const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    appointmentDate: Date,
    appointmentTime: String,
    problemDescription: String,
    status: { type: String, enum: ['scheduled', 'completed', 'cancelled'], default: 'scheduled' }
}, { timestamps: true })

module.exports = mongoose.model('Appointment', appointmentSchema)