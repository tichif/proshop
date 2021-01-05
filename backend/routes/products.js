import express from 'express';

import { getProducts, getProduct } from '../controllers/products.js';

const router = express.Router();

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get('/', getProducts);

// @desc    Fetch single products
// @route   GET /api/products/:id
// @access  Public
router.get('/:id', getProduct);

export default router;
