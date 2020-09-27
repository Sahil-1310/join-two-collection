const mongoose =require('mongoose');
const Schema=new mongoose.Schema({
    name:{
        type:String,required:true
    },
    jobId:{
        type:String,required:true
    },
    sal:{
        type:Number,required:true
    },
    email:{
        type:String,required:true
    }
  


})

module.exports=mongoose.model('employee_details',Schema);