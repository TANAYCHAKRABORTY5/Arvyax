const express = require("express");
const {
  signupContainer,
  loginContainer,
  getUser,
} = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, getUser);
router.post("/signup", signupContainer);
router.post("/login", loginContainer);

module.exports = router;
