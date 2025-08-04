const yogaSessionSchema = require("../models/yogaSessionModel");

const saveToDraft = async (req, res) => {
  try {
    const { title, content, isPublished } = req.body;
    const userId = req.user.identifier;
    const createdContent = await yogaSessionSchema.create({
      title,
      content,
      isPublished: isPublished || false,
      user: userId,
    });
    res.status(201).json({
      message: "Yoga session saved successfully",
      createdContent,
    });
  } catch (error) {
    console.log("Error while publishing yoga session");
    res.status(500).json({ message: "Yoga Publish server error" });
  }
};

const yogaSessionController = async (req, res) => {
  try {
    const session = await yogaSessionSchema
      .find({ isPublished: true })
      .populate("user", "name email");
    res.status(200).json(session);
  } catch (error) {
    console.error("Error in yoga session controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const mySession = async (req, res) => {
  try {
    const userId = req.user.identifier;
    const session = await yogaSessionSchema.find({ user: userId });
    res.status(200).json(session);
  } catch (error) {
    console.error("Error in yoga session controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const mySessionIdSearch = async (req, res) => {
  try {
    const sessionId = req.params.id;
    const session = await yogaSessionSchema.findById(sessionId);
    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    res.status(200).json(session);
  } catch (error) {
    console.error("Error in yoga session controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const publishYogaSession = async (req, res) => {
  try {
    const userId = req.user.identifier;
    const sessionId = req.params.id;

    const session = await yogaSessionSchema.findById(sessionId);
    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    if (sessionId.isPublished) {
      res.status(400).json({ message: "Yoga session already published" });
    }
    session.isPublished = true;
    await session.save();

    res.status(200).json({
      message: "Yoga session published successfully",
      updatedSession: session,
    });
  } catch (error) {
    res.status(401).json({ message: "Error while publishing yoga session" });
  }
};

module.exports = {
  yogaSessionController,
  saveToDraft,
  mySession,
  publishYogaSession,
  mySessionIdSearch,
};
