const express = require("express");
const {
  yogaSessionController,
  saveToDraft,
  mySession,
  publishYogaSession,
  mySessionIdSearch,
} = require("../controller/yogaSessionController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/sessions/create", authMiddleware, saveToDraft);
router.post("/sessions/publish/:id", authMiddleware, publishYogaSession);
router.get("/sessions", yogaSessionController);
router.get("/sessions/mysessions", authMiddleware, mySession);
router.get("/sessions/search/:id", authMiddleware, mySessionIdSearch);

module.exports = router;
