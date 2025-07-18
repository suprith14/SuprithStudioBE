const express = require("express");
const connectDB = require("./src/Config/db");
const { techStack } = require("./src/Models/techStack");
const cors = require("cors");


const app = express();
const port = process.env.PORT || 3000;

const allowedOrigins = [
  'http://localhost:4173',                         // vite preview
  'http://localhost:5173',                         // vite dev server
  'https://suprith-studio-fe.vercel.app'           // your production frontend
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // If you're using cookies/sessions
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.get('/ping', (req, res) => {
  console.log("Ping received");
  res.status(200).send('pong');
});




const authRouter = require("./src/Routes/authRouter/signup");
const authloginRouter = require("./src/Routes/authRouter/login");
const techStackRouter = require("./src/Routes/techStack")
const featurfeRouter = require("./src/Routes/featureFeList")
const UserDetailsRouter = require("./src/Routes/userDetails")
app.use('/', authRouter); // Use the authRouter for authentication routes
app.use('/', authloginRouter); // Use the authloginRouter for login routes
app.use('/', techStackRouter); // Use the authloginRouter for login routes
app.use('/', featurfeRouter);
app.use('/', UserDetailsRouter);

connectDB()
  .then(() => {
    //To start the server
    app.listen(port, () => {
      console.log(`server is running on port ${port} `);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err.message); //log error message to console
  }); //connect to MongoDB database
