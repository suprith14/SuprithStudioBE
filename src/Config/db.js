const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // await mongoose.connect("mongodb://admin:secret@192.168.31.230:27017/NodeBE?authSource=admin", {
    await mongoose.connect(
      "mongodb+srv://deesha:12345@deesha.hyusdd6.mongodb.net/SuprithStudio?retryWrites=true&w=majority&appName=Deesha/",
      {
        // await mongoose.connect("mongodb://localhost:27017/NodeBE", {

        useNewUrlParser: true,
        useUnifiedTopology: true,
        // await new Promise(resolve =>{setTimeout(resolve, 1000)}) //wait for 1 second before connecting to the database
        // .then(() => {
      }
    );
    console.log("Connected to MongoDB...");
  } catch (err) {
    console.log("MongoDB not connected ", err.message);
    process.exit(1); //exit the process with error code 1
  }
};

module.exports = connectDB; //export the connectDB function to use in other files
