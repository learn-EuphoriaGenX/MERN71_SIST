// Doctor 
let DoctorRegister = (req, res) => {
    res.send("This is Doctor Register Method")
}
let DoctorLogin = (req, res) => {
    res.send("This is Doctor Login Method")
}
let DoctorProfile = (req, res) => {
    res.send("This is Doctor Profile Method")
}
// Patient
let PatientRegister = (req, res) => {
    res.send("This is Patient Register Method")
}
let PatientLogin = (req, res) => {
    res.send("This is Patient Login Method")
}
let PatientProfile = (req, res) => {
    res.send("This is Patient Profile Method")
}
// Admin
let AdminRegister = (req, res) => {
    res.send("This is Admin Register Method")
}
let AdminLogin = (req, res) => {
    res.send("This is Admin Login Method")
}
let AdminProfile = (req, res) => {
    res.send("This is Admin Profile Method")
}

module.exports = {
    DoctorRegister,
    DoctorLogin,
    DoctorProfile,
    PatientRegister,
    PatientLogin,
    PatientProfile,
    AdminRegister,
    AdminLogin,
    AdminProfile
}