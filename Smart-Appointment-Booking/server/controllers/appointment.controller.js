let Appointment = require('../models/appointment.model')

// Get all appointments
exports.getAllAppointments = async (req, res) => {
    try {
        let appointments = await Appointment.find().populate('patient').populate('doctor')
        res.status(200).json({ success: true, data: appointments, message: "Appointments fetched successfully" })
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server problem" })
    }
}

// Get appointment by ID
exports.getAppointmentById = async (req, res) => {
    try {
        let appointment = await Appointment.findById(req.params.id).populate('patient').populate('doctor')
        if (!appointment) {
            return res.status(404).json({ success: false, message: "Appointment not found" })
        }
        res.status(200).json({ success: true, data: appointment, message: "Appointment fetched successfully" })
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server problem" })
    }
}

// Create a new appointment
exports.createAppointment = async (req, res) => {
    try {
        let { patient, doctor, appointmentDate, appointmentTime, problemDescription } = req.body
        let newAppointment = new Appointment({
            patient,
            doctor,
            appointmentDate,
            appointmentTime,
            problemDescription
        })
        await newAppointment.save()
        res.status(201).json({ success: true, data: newAppointment, message: "Appointment created successfully" })
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Internal server problem" })
    }
}

// Update appointment by ID
exports.updateAppointmentById = async (req, res) => {
    try {
        let updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updatedAppointment) {
            return res.status(404).json({ success: false, message: "Appointment not found" })
        }
        res.status(200).json({ success: true, data: updatedAppointment, message: "Appointment updated successfully" })
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server problem" })
    }
}

// Delete appointment by ID
exports.deleteAppointmentById = async (req, res) => {
    try {
        let deletedAppointment = await Appointment.findByIdAndDelete(req.params.id)
        if (!deletedAppointment) {  
            return res.status(404).json({ success: false, message: "Appointment not found" })
        }
        res.status(200).json({ success: true, message: "Appointment deleted successfully" })
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server problem" })
    }
}


