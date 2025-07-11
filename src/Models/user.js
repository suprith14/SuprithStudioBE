const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    confirmPassword:{type:String,required:true},
    phone:{type:Number,required:true},
})

const User = mongoose.model("User", userSchema); //export the User model to use in other files

module.exports = User; //export the User model to use in other files