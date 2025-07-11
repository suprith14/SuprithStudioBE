const mongoose = require("mongoose");

const TechStackSchema = mongoose.Schema({
    userID:{type:String ,required:true},
    teckName:{type:String, required:true},
});

const TechStack= mongoose.model("TechStack", TechStackSchema); //export the TechStack model to use in other files

module.exports = TechStack