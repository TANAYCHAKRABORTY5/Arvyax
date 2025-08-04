const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const user = require("./routes/user");
const connectDB = require("./db/db");
const yogaSession = require("./routes/yogaSession");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "http://localhost:5173"],
    credentials: true,
  })
);

connectDB();

app.use("/", user);
app.use("/", yogaSession);

app.get("/", (req, res) => {
  res.send("App is working ......");
});

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
