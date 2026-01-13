let express = require('express')
const { DoctorLogin, DoctorRegister, DoctorProfile, PatientLogin, PatientRegister, PatientProfile, AdminLogin, AdminRegister, AdminProfile } = require('../controllers/user.controller')
const { authMiddleware } = require('../middleware/auth.middleware')
const upload = require('../middleware/upload.middleware')
let route = express.Router()


route.post("/doctor/login", DoctorLogin)
route.post("/doctor/register", upload.single("profilePic"), DoctorRegister)
route.get("/doctor/profile", authMiddleware('doctor'), DoctorProfile)

route.post("/patient/login", PatientLogin)
route.post("/patient/register", upload.single("profilePic"), PatientRegister)
route.get("/patient/profile", authMiddleware('patient'), PatientProfile)

route.post("/admin/login", AdminLogin)
route.post("/admin/register", AdminRegister)
route.get("/admin/profile", authMiddleware('admin'), AdminProfile)


module.exports = route