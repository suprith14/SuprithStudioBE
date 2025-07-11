const express = require('express');
const TechStack = require('../Models/techStack');


const techStackRouter = express.Router();

techStackRouter.get('/techStack', async (req, res) => {
  try {
    const { userID } = req.query;
    console.log("userID1 :: ", userID)
    const techStacks = await TechStack.find({ userID: userID }); // Fetch all tech stacks from the database
    res.status(200).json({ status: 200, techStacks }); // Return the tech stacks in the response
  } catch (err) {
    console.log("Error fetching tech stacks", err.message);
    res.status(500).json({ error: err.message }); // Handle errors and return a 500 status code
  }
});
techStackRouter.post('/techStack', async (req, res) => {
  try {
    const { teckName, userID } = req.body; // Destructure request body
    const newTechStack = new TechStack({ teckName, userID }); // Create a new tech stack instance
    const savedTechStack = await newTechStack.save(); // Save the tech stack to the database
    console.log("Tech stack created successfully", savedTechStack);
    res.status(200).json({ status: 200, message: "Tech stack created successfully", savedTechStack }); // Return success response
  } catch (err) {
    console.log("Error creating tech stack", err.message);
    res.status(500).json({ error: err.message }); // Handle errors and return a 500 status code
  }
});


techStackRouter.delete("/techStack", async (req, res) => {
  try {
    const { _id } = req.query;
    const del = await TechStack.findOneAndDelete({ _id: _id })
    del.then(res.status(200).json({ status: 200, "message": "Deleted" })); // Return the tech stacks in the response
  } catch (err) {
    console.log("Error fetching tech stacks", err.message);
  }
})



module.exports = techStackRouter