const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express()
require('dotenv').config()
const routes = require('./routes')
const DB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@${process.env.DB_HOST}?retryWrites=true&w=majority`
mongoose.connect(DB)

//

app.use(cors({origin: "http://localhost:4004"}));
app.use(bodyParser.json())

//

app.use('/api', routes)

//

app.listen(process.env.PORT, () => `Server running on PORT: ${process.env.PORT}`)
