require('dotenv').config()
const express = require('express')
import connectDB from './database'

const app = express()

connectDB()

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Redivivus server successfully started on port ${port}`)
})