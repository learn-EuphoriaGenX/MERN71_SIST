let express = require('express')
const connectDB = require('./config/db.config')
const cors = require('cors')
const path = require("path");
let app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.use("/auth", require('./routes/user.route'))
app.use("/blog", require('./routes/blogs.route'))
app.use("/appointment", require('./routes/appointment.route'))
app.use("/consultation", require('./routes/consultation.route'))


connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server Running in port ${process.env.PORT}`);
    })
})