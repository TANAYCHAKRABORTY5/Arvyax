const mongoose = require("mongoose");

const yogaSessionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserSchema",
    required: true,
  },
});

module.exports = mongoose.model("yogaSession", yogaSessionSchema);
