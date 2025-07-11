const mongoose = require("mongoose");

const FeatureFEListSchema= mongoose.Schema({
    userID:{type:String,required:true},
    description:{type:String,required:true}
})

const FeatureFEListModel= mongoose.model("FeatureFEListModel",FeatureFEListSchema);

module.exports=FeatureFEListModel;