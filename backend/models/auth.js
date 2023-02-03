const mongoose = require("mongoose");
const authSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true,
        minlength:8
        
    }
})
 

const AuthModel = mongoose.model("auth",authSchema);

module.exports = AuthModel;