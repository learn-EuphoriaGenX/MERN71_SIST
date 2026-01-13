let express = require('express')
const { authMiddleware } = require('../middleware/auth.middleware')
const { getAllConsultations, getConsultationById, createConsultation, updateConsultationById, deleteConsultationById } = require('../controllers/consultation.controller')
let route = express.Router()


route.get("/", getAllConsultations) // Get all consultations 
route.get("/:id", getConsultationById) // Get consultation by ID
route.post("/", createConsultation) // Create a new consultation / book consultation 
route.put("/:id", authMiddleware('admin'), updateConsultationById)  // Update consultation by ID
route.delete("/:id", authMiddleware('admin'), deleteConsultationById) // Delete consultation by ID


module.exports = route