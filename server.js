


// File 0 

const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser =  require('body-parser')
// route importing for middleware assigning
const employeeRoutes = require('./routes/employeeRoutes')
const app = express()
const cors = require('cors')



// 1) dotenv - configuration
dotEnv.config()
// 2) using as a medilleware for frontend and backend connection
app.use(cors())
// 3) configuring bodyParser in JSON formate for(POSTMAN)
app.use(bodyParser.json())

// 4) URL has defaultly set then ok || not set then 5000
const PORT = process.env.PORT || 5000
mongoose.connect(process.env.Mongo_URL)

.then(()=>{
    console.log("mongodb connected successfully")
})
.catch((err)=>{
 console.log(`${err}`)
})

// 4) file 4, - from employeeRoutes.js file
// Here middleware registering with .use creating url for linking route.,/employees NOTE:index.js = server.js file
app.use('/employees',employeeRoutes)

app.listen(PORT,()=>{
    console.log(`server started and running at ${PORT}`)
})

