import asyncHandler from 'express-async-handler';

import User from '../models/User.js';

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});
