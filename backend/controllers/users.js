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
