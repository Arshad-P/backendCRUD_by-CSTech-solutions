
// 2) file 2

// importing models or Schema the Employee.js file properties for storing in database mongoDB Atlas
const Employee = require('../models/Employee')


// POST
const createEmployee = async(req,resp)=>{
    try{
 // 1) De-structered & sending properties response to body OR POSTMAN-body
        const{name,email,mobileno,designation,gender,course} = req.body 

        // 2) object created
        const employeeProperties = new Employee({
         
              name,
              email,
              mobileno,
              designation,
              gender,
              course,
      
              
        })
// 3) saving data at mongodb
        await employeeProperties.save()
// 4) saving data in JSON formate if status 200 success
        resp.status(201).json(employeeProperties)
    }catch(err){
        console.log("there is an error",err)
// 5) if any issues then showing error at status 500
        resp.status(500).json({message: "server error"})
    }
}

// module.exports = {createEmployee}

// NOTE: after completion database saving structure then we have to send request to SERVER for that we have to create routes for that we will create routes folder and inside one file.,after that came back to controllers folder inside employeeController.js write GET, POST, PUT, DELETE methods.


// GET 
// To showing allemployees
const getEmployees = async(req,resp)=>{

    try{
  // Through Employee.js file finding Allemployees
        const employees = await Employee.find()
        resp.status(200).json(employees)
    }catch(err){

          console.log("there is an error",err) 
          resp.status(500).json({message:"server error"})   
    }
}


// GET Single by ID
// To showing individual employee or single
const singleEmployee = async(req,resp)=>{

    try{
        const employeeID = await Employee.findById(req.params.id)
        
        // if employeeId not found
        if(!employeeID){
          // Show 404 record not found
        return resp.status(404).json({message:"Employee not found"})
        }
        // else show success in JSON formate
        resp.status(200).json(employeeID)

    }
    catch(err){
        console.log("there is an error records",err)
        resp.status(500).json({message:"server error"})
    }
}


// UPDATE 
const updateEmployee = async(req,resp)=>{

    try{
        const {name,email,mobileno,designation,gender,course} = req.body

        const employeeUp = await Employee.findByIdAndUpdate(req.params.id,{name,email,mobileno,designation,gender,course,image})

        if(!employeeUp){
           return resp.status(400).json({message:"employee not found"})
        }
        resp.status(200).json(employeeUp)
    }
    catch(err){

      console.log("there is an error",err)
      // showing server error at POSTMAN terminal
      resp.status(500).json({message:"server error"})
    }
}

// DELETE
const deleteEmployee = async(req,resp)=>{

   try{
   const employeeDel = await Employee.findByIdAndDelete(req.params.id)
           
          // if employeeId not Found 
        if(!employeeDel){
        // show 404 record not found
          return res.status(404).json({message:"Employee not found"})
          }
          // else show success
          resp.status(200).json(employeeDel)
       
   }
   catch(err){
    console.log("there is an error",err)
    resp.status(500).json({message:"server error but item deleted"})  
   }
}
module.exports = {createEmployee, getEmployees, singleEmployee, updateEmployee, deleteEmployee}

// NOTE: all module.exports we will moves to employeeRoutes.js 




