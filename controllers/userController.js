const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/userController");

// Register User
router.post("/register", registerUser);

// Test Route
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Auth API Working"
  });
});

module.exports = router;
