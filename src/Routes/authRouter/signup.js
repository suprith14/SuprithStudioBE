
const express = require('express');
const User = require('../../Models/user');
const authRouter = express.Router();

authRouter.post('/signup',async(req,res)=>{
    try{
        const {name, email, password, confirmPassword, phone} = req.body;// Destructure request body
        const existingUser = await User.find({email: email});  // Check if user already exists
        if(existingUser.length > 0){
            return res.status(400).json({status:400,error: "User already exists with this email "+email});
        }
        // Check if password and confirmPassword match
        if(password !== confirmPassword){
            return res.status(400).json({status:400,error: "Password and confirm password do not match"});
        }
        // Create new user
        const newUser = new User({
            name,
            email,
            password,
            confirmPassword,
            phone
        });
        // Save user to database
        const savedUser = await newUser.save();
        console.log("User created successfully", savedUser);
        res.status(200).json( {status:200, message: "User created successfully",data:savedUser});    

    }
    catch(err){
        console.log("Error in signup", err.message);
        res.status(500).json({error: err.message});
    }

});



module.exports= authRouter