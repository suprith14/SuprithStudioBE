const e = require("express");
const User = require("../../Models/user");
const express = require("express");
const authloginRouter = express.Router();



authloginRouter.get("/login", async (req, res) => {
  try {
    const { email, password } = req.query;// Destructure query parameters
    const user = await User.findOne({ email: email });// Find user by email
    if (!user) {
      return res.status(400).json({status:400,error: "User does not exist with this email" });
    }

    // Check if password matches
    if (user.password !== password) {
      return res.status(400).json({ status:400,error: "Password is incorrect" });
    }
    // If user exists and password matches, return user data
    console.log("User logged in successfully", user.email);
    res.status(200).json({status:200,data:user});
  } catch (err) {
    console.log("Error in login", err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = authloginRouter;
