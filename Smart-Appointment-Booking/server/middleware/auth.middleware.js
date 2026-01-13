let jwt = require('jsonwebtoken')

module.exports.authMiddleware = (role) => async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ success: false, message: "No token provided" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (role && decoded.role !== role) {
            return res.status(403).json({ success: false, message: "Access denied" });
        }
        req.user = decoded;
        req.token = token;
        next();
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Problem" });
    }
}