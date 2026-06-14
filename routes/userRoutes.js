const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser
} = require("../controllers/userController");

// ================= REGISTER =================
router.post("/register", registerUser);

// ================= LOGIN =================
router.post("/login", loginUser);

// ================= TEST =================
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Auth Route Working"
  });
});

module.exports = router;
