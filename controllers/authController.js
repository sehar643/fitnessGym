import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import jwt from "jsonwebtoken";

const registerController = async (req, res) => {
  const { name, email, password, userImg } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Name, email and password must be provided",
    });
  }

  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(403).json({
        success: false,
        message: "User already registered, please login",
      });
    }

    let hashedPassword = await bcrypt.hash(password, 10);

    let userData = {
      name,
      email,
      password: hashedPassword,
      userImg,
    };

    let finalUser = await new User(userData).save();

    if (finalUser) {
      return res.status(201).json({
        status: 201,
        success: true,
        message: "User created successfully",
        finalUser,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Error in registration",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internet Server Error - Something went wrong",
      error,
    });
  }
};

// Login Controller
const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({
        success: false,
        Message: "Email is not registered, please sign up first",
      });
    }
    //   let validPassword = await bcrypt.compare(password, hashedPassword)
    let validPassword = await comparePassword(password, user.password);
    if (!validPassword) {
      return res.status(403).json({
        success: false,
        Message: "Password dos'nt match",
      });
    }

    const token = jwt.sign(
      { id: user._id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      success: true,
      Message: "Logged-in successfully",
      user: user,
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      Message: "Internet Server Error - Something went wrong",
      error,
    });
  }
};

const getinfo = (req, res) => {
  const userName = req.user.name;
  return res.status(200).send({ Message: "HELLOW WORLD", Name: userName });
};

export { registerController, loginController, getinfo };

// let result = await fetch("asdjfsadlkfjsdklfjskljfsdklaf")
// result = await result.json()

// result.status == 400{
//     alert(result.Message)
// }

// export default registerController
//    const data = await User(req.body)
//    const result = data.save()
//    res.send(result)

// if(password.length<6  && !password ){
//     return res.status(400).json({Message: "Password is required and alreat 6 characters"})
// }
