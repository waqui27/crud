require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectToDB = require("./config/db")
const userRoutes = require("./routes/userRoutes")
const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(cors());


// Initialising connection to DB
connectToDB()
app.use("/", userRoutes);



module.exports = app;
