const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
    firstHeading:{
        type:String,
        required:true
    } ,
    firstPara:{
        type:String,
        required:true
    } ,
    firstImage:{
        type:String,
        required:true
    } ,
    secondHeading:{
        type:String,
        required:true
    } ,
    secondPara:{
        type:String,
        required:true
    } ,
    thirdImage:{
        type:String,
        required:true
    } ,
    thirdHeading:{
        type:String,
        required:true
    } ,
    thirdPara:{
        type:String,
        required:true
    } ,
    
    fourthImage:{
        type:String,
        required:true
    } ,
    fourthHeading:{
        type:String,
        required:true
    } ,
    fourthPara:{
        type:String,
        required:true
    } ,
    fifthHeading1:{
        type:String,
        required:true
    } ,
    fifthHeading2:{
        type:String,
        required:true
    } ,
    fifthPara:{
        type:String,
        required:true
    } ,
    fifthImage:{
        type:String,
        required:true
    },
    
    facebook:{
        type:String,
        required:true
    } ,
    linkedin:{
        type:String,
        required:true
    } ,
    instagram:{
        type:String,
        required:true
    } ,
    twitter:{
        type:String,
        required:true
    }
})
 

const AdminModel = mongoose.model("admin",adminSchema);

module.exports = AdminModel;
  
 