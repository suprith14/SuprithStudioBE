const express = require("express");
const FeatureFEListModel = require("./../Models/featurfe")

const featurfeRouter = express.Router();

featurfeRouter.get("/featurefelist", async (req, res) => {
    try {
        const { userID } = req.query;
        const result = await FeatureFEListModel.find({ userID: userID });
        res.status(200).json({ status: 200, result })
    } catch (err) {
        console.log("Error fetching feature list ", err.message);
        res.status(500).json({ error: err.message }); // Handle errors and return a 500 status code
    }

})

featurfeRouter.post("/featurefelist", async (req, res) => {
    try {
        const { userID, description } = req.body;
        console.log("featurefelist" + userID + " " + description)
        const Data = new FeatureFEListModel({ userID, description })
        const savedData = await Data.save();
        console.log("Item description is saved " + savedData);
        res.status(200).json({ status: 200, message: "description is saved successfully", savedData })

    } catch (err) {
        console.log("Error creating tech stack", err.message);
        res.status(500).json({ error: err.message }); // Handle errors and return a 500 status code
    }
})


featurfeRouter.delete("/featurefelist", async (req, res) => {
  try {
    const { _id } = req.query;
    console.log("iddd")
    const del = await FeatureFEListModel.findOneAndDelete({ _id: _id })
    res.status(200).json({ status: 200, "message": "Deleted" }); // Return the tech stacks in the response
  } catch (err) {
    console.log("Error fetching tech stacks", err.message);
  }
})

module.exports = featurfeRouter