const bcrypt = require('bcrypt');
const User = require("../models/user.model");
const jwt = require('jsonwebtoken');

// Doctor 
let DoctorRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists", success: false });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newDoctor = new User({
            name,
            email,
            password: hashedPassword,
            image: req.file ? req.file.path : null,
            role: 'doctor'
        });
        await newDoctor.save();
        res.status(201).json({ message: "Doctor registered successfully", success: true });
    } catch (error) {
        console.log(error);

        res.status(500).json({ message: "Internal Server Problem", success: false });
    }
}
let DoctorLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Find user by email
        const user = await User.findOne({ email, role: 'doctor' });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password", success: false });
        }
        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password", success: false });
        }

        // create token
        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Successful login
        res.status(200).json({ message: "Login successful", success: true, user, token });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Problem", success: false });
    }
}
let DoctorProfile = async (req, res) => {
    try {
        let userId = req.user.userId;
        let user = await User.findById(userId).select('-password');
        res.status(200).json({ success: true, message: "Doctor profile fetched successfully", user, token: req.token });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Problem" });
    }
}


// Patient
let PatientRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists", success: false });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newPatient = new User({
            name,
            email,
            password: hashedPassword,
            image: req.file ? req.file.path : null,
            role: 'patient'
        });
        await newPatient.save();
        res.status(201).json({ message: "Patient registered successfully", success: true });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Problem", success: false });
    }
}
let PatientLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Find user by email
        const user = await User.findOne({ email, role: 'patient' });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password", success: false });
        }
        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password", success: false });
        }

        // create token
        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Successful login
        res.status(200).json({ message: "Login successful", success: true, user, token });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Problem", success: false });
    }
}
let PatientProfile = async (req, res) => {
    try {
        let userId = req.user.userId;
        let user = await User.findById(userId).select('-password');
        res.status(200).json({ success: true, message: "Patient profile fetched successfully", user, token: req.token });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Problem" });
    }
}


// Admin
let AdminRegister = async (req, res) => {
    try {

        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists", success: false });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new User({
            name,
            email,
            password: hashedPassword,
            role: 'admin'
        });
        await newAdmin.save();
        res.status(201).json({ message: "Admin registered successfully", success: true });
    } catch (error) {
        console.log(error);

        res.status(500).json({ message: "Internal Server Problem", success: false });
    }
}
let AdminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Find user by email
        const user = await User.findOne({ email, role: 'admin' });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password", success: false });
        }
        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password", success: false });
        }

        // create token
        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Successful login
        res.status(200).json({ message: "Login successful", success: true, user, token });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Problem", success: false });
    }
}
let AdminProfile = async (req, res) => {
    try {
        let userId = req.user.userId;
        let user = await User.findById(userId).select('-password');
        res.status(200).json({ success: true, message: "Admin profile fetched successfully", user, token: req.token });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Problem" });
    }
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