let express = require('express')
const { authMiddleware } = require('../middleware/auth.middleware')
const { getAllAppointments, getAppointmentById, createAppointment, updateAppointmentById, deleteAppointmentById } = require('../controllers/appointment.controller')
let route = express.Router()


route.get("/", getAllAppointments) // Get all appointments 
route.get("/:id", getAppointmentById) // Get appointment by ID
route.post("/", authMiddleware('patient'), createAppointment) // Create a new appointment 
route.put("/:id", authMiddleware('doctor'), updateAppointmentById)  // Update appointment by ID
route.delete("/:id", authMiddleware('admin'), deleteAppointmentById) // Delete appointment by IDs


module.exports = route