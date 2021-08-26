const express = require("express");
const path = require("path")

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(express.static("public"))

//routing

app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/stats.html"))
})

app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/exercise.html"))
})

app.listen(PORT)