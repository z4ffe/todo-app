const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express()
require('dotenv').config()
const routes = require('./routes')
const path = require("path");
const DB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@${process.env.DB_HOST}?retryWrites=true&w=majority`
mongoose.connect(DB)

//

app.use(cors({origin: "http://localhost:4004"}));
app.use(bodyParser.json())

//

app.use('/api', routes)
app.use(express.static(path.join(__dirname, '../client', 'build')));
app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
})

//

const port = process.env.PORT || 5000;
app.listen(port, () => `Server running on PORT: ${port}`)
