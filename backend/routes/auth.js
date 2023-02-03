const express = require("express");
const AuthModel = require("../models/auth")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authRouter = express.Router();

authRouter.get("/",async(req,res)=>{
    try {
        let users = await AuthModel.find();
        return res.status(200).json({message:"All users",users})
        
    } catch (error) {
        return res.status(404).json(error)
    }
})

authRouter.post("/register",async (req,res)=>{
    let {name,email,password} = req.body;
    console.log(req.body)
    //console.log(req.body)
    let existingUser;
    try{
        existingUser = await AuthModel.findOne({email})
    }
    catch(err){
        console.log(err)
    }
    if(existingUser){
        return res.status(400).json({message:"User Already Exists"})
    }
    let newUser;
    try{
        const hashPassword = await bcrypt.hash(password,10);
        newUser = new AuthModel({
        name,email,password:hashPassword
    })
        await newUser.save()
    }
    catch(err){
        console.log(err)
    }
    return res.status(201).json(newUser)
})

authRouter.post("/login",async(req,res)=>{
    let {email,password} = req.body;
    let existingUser;
    try{
        existingUser = await AuthModel.findOne({email});
    }
    catch(err){
        console.log(err)
    }
    if(!existingUser){
        return res.status(404).json({message:"User Not Exists"})
    }
    const correctPassword = await bcrypt.compare(password,existingUser.password);
    if(!correctPassword){
        return res.status(400).json({message:"Incorrect Password"});
    }
    console.log(existingUser._id.toString())
    const token = jwt.sign(existingUser._id.toString(),"masai")
    
    return res.status(200).json({message:"Login Successful",user:existingUser,token})

})

module.exports = authRouter;
