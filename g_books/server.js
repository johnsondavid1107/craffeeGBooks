const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes/apiRoutes")
const mongoose = require('mongoose')






app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bookuser",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })


app.use("/search", routes)
app.use('/save', routes)
app.use('/find', routes)

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
})



app.listen(PORT, function () {
    console.log(`Listening on ${PORT} number!`)
})