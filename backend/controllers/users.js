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
