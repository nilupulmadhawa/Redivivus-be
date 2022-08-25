require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
import connectDB from './database'
const cors = require('cors');
// import { routesInit } from "./api/routes";

const app = express()

connectDB()

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Redivivus server successfully started on port ${port}`)
})

 app.use(bodyParser.json());
 app.use(cors());

//routes
app.use("/api/company" , require("./routes/company.route"));