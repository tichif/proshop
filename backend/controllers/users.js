import asyncHandler from 'express-async-handler';

import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._is,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid credentials!!!');
  }
});

export const getUserProfile = asyncHandler(async (req, res) => {
  res.send(req.user);
});

export const signup = asyncHandler(async (req, res) => {
  const { email, password, name } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(400);
    throw new Error('user already exist');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    return res.status(201).json({
      _id: user._is,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user info');
  }
});

export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._is,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(400);
    throw new Error('User not found');
  }
});

export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});

  return res.status(200).json(users);
});
