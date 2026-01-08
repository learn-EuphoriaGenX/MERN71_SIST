let express = require('express')
const { DoctorLogin, DoctorRegister, DoctorProfile, PatientLogin, PatientRegister, PatientProfile, AdminLogin, AdminRegister, AdminProfile } = require('../controllers/user.controller')
let route = express.Router()


route.get("/doctor/login", DoctorLogin)
route.get("/doctor/register", DoctorRegister)
route.get("/doctor/profile", DoctorProfile)

route.get("/patient/login", PatientLogin)
route.get("/patient/register", PatientRegister)
route.get("/patient/profile", PatientProfile)

route.get("/admin/login", AdminLogin)
route.get("/admin/register", AdminRegister)
route.get("/admin/profile", AdminProfile)


module.exports = route