
// 1) file 1

// NOTE: Here assigning Schema DataTypes for properties 



const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({


 name:{
    type:String,    // data type
    required: true, // boolean values
 },
 email:{
    type:String,
    required:true,
 },
 mobileno:{
   type:Number,
   required:true,
},
designation:{
   type:String,
   required:true,
},
gender:{
   type:String,
   required:true,
},
course:{
   type:String,
   required:true,
},

})
module.exports = mongoose.model('Employee',employeeSchema)