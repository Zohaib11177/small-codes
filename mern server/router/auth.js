const express = require("express")
const router = express.Router()
const User = require("../models/UserShema")
router.post("/register",async(req , res)=>{
    const {name , email , password} = req.body
    if(!name || !email || !password) return res.send({success : false, message : "invalid crediantials"})
    const userExist = await User.exists({email : email})
    if(userExist)return res.send({success : false, message : "email already exist"})
    try{
        const saveUser = new User({name , email , password})
        await saveUser.save()
        res.send({success : true, message : "user registered successfully"})

    }catch(error){
        res.send({success : false, message : "something went wrong"})
    }
    
})
router.get("/users",async(req , res)=>{
   const users = await User.find({})
   if(!users) return res.send({success : false, message : "No users found"})
   res.send({success : true, users : users})
    
})
 
module.exports = router