let Consultation = require('../models/consultation.model')

// Get all consultations
exports.getAllConsultations = async (req, res) => {
    try {
        let consultations = await Consultation.find().populate('user')
        res.status(200).json({ success: true, data: consultations, message: "Consultations fetched successfully" })
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server problem" })
    }
}

// Get consultation by ID
exports.getConsultationById = async (req, res) => {
    try {
        let consultation = await Consultation.findById(req.params.id).populate('user')
        if (!consultation) {
            return res.status(404).json({ success: false, message: "Consultation not found" })
        }
        res.status(200).json({ success: true, data: consultation, message: "Consultation fetched successfully" })
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server problem" })
    }
}

// Create a new consultation / book consultation
exports.createConsultation = async (req, res) => {
    try {
        let { user, name, email, phone, message } = req.body
        let newConsultation = new Consultation({
            user,
            name,
            email,
            phone,
            message
        })
        await newConsultation.save()
        res.status(201).json({ success: true, data: newConsultation, message: "Consultation booked successfully" })
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server problem" })
    }
}

// Update consultation by ID
exports.updateConsultationById = async (req, res) => {
    try {
        let updatedConsultation = await Consultation.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updatedConsultation) {
            return res.status(404).json({ success: false, message: "Consultation not found" })
        }
        res.status(200).json({ success: true, data: updatedConsultation, message: "Consultation updated successfully" })
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server problem" })
    }
}

// Delete consultation by ID
exports.deleteConsultationById = async (req, res) => {
    try {
        let deletedConsultation = await Consultation.findByIdAndDelete(req.params.id)
        if (!deletedConsultation) {
            return res.status(404).json({ success: false, message: "Consultation not found" })
        }
        res.status(200).json({ success: true, data: deletedConsultation, message: "Consultation deleted successfully" })
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server problem" })
    }
}