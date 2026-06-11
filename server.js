const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("I Z DATA SUB API is running...");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
