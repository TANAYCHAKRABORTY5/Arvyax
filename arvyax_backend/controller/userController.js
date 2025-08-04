const express = require("express");
const bcrypt = require("bcrypt");
const UserSchema = require("../models/userModel");
const getToken = require("../db/service");

const getUser = async (req, res) => {
  try {
    const userId = req.user.identifier;
    const user = await UserSchema.findById(userId).select("-password");

    res.status(200).json(user);
  } catch (error) {}
};

const signupContainer = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
      return res.status(400).json({ message: "User data is required" });
    }
    const existingUser = await UserSchema.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ messsage: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserSchema.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = await getToken(email, newUser);
    const userToReturn = { ...newUser.toJSON(), token };
    //have to store this token in frontend local storage
    return res.status(201).json({
      message: "User created successfully",
      user: userToReturn,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const loginContainer = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserSchema.findOne({ email: email });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = await getToken(email, user);
    const userToReturn = { ...user.toJSON(), token };
    return res.status(200).json({
      message: "User logged in successfully",
      user: userToReturn,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

module.exports = { signupContainer, loginContainer, getUser };
