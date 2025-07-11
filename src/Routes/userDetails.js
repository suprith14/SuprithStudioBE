const express = require("express");

const User = require("./../Models/user")

const UserDetailsRouter = express.Router();


UserDetailsRouter.get("/getalluser", async (req, res) => {
    console.log("getalluser")

    try {
        const user = await User.find({});
        if (user) {
            console.log(user)
            res.status(200).json({ status: 200, message: "fetched all users", data: user })
        }
        else {
            console.log("Error in login");
            res.status(500).json({ error: err.message });
        }

    } catch (err) {
        console.log("Error in login 2", err.message);
        res.status(500).json({ error: err.message });

    }



})

module.exports = UserDetailsRouter