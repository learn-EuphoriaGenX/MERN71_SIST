let express = require('express')
let app = express()

app.use("/auth", require('./routes/user.route'))


app.listen(3000, () => {
    console.log("Server Running in port 3000");
})