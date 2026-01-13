let express = require('express')
const { DoctorLogin, DoctorRegister, DoctorProfile, PatientLogin, PatientRegister, PatientProfile, AdminLogin, AdminRegister, AdminProfile } = require('../controllers/user.controller')
const { authMiddleware } = require('../middleware/auth.middleware')
const upload = require('../middleware/upload.middleware')
let route = express.Router()


route.get("/doctor/login", DoctorLogin)
route.get("/doctor/register", upload.single("profilePic"), DoctorRegister)
route.get("/doctor/profile", authMiddleware('doctor'), DoctorProfile)

route.get("/patient/login", PatientLogin)
route.get("/patient/register", upload.single("profilePic"), PatientRegister)
route.get("/patient/profile", authMiddleware('patient'), PatientProfile)

route.get("/admin/login", AdminLogin)
route.get("/admin/register", AdminRegister)
route.get("/admin/profile", authMiddleware('admin'), AdminProfile)


module.exports = route