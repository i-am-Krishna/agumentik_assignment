const express = require("express");
const AdminModel = require("../models/admin");
const adminRouter = express.Router();

adminRouter.get("/",async(req,res)=>{
    let data;
    try { 
         data = await AdminModel.find();
}
    catch(error) {
        console.log(err)
        return res.status(404).json({message:"something went wrong"})
    }
    res.status(200).json(data);
})

adminRouter.post("/",async(req,res)=>{
    let data = new AdminModel(req.body);
    try {
        await data.save()
    } catch (error) {
        return res.status(404).json({message:"data not saved"})
    }
    res.status(201).json({message:"Successfully saved"})
})


 

module.exports = adminRouter;
