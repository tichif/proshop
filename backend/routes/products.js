import express from 'express';

import {
  getProducts,
  getProduct,
  deleteProduct,
} from '../controllers/products.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get('/', getProducts);

// @desc    Fetch single products  / Delete a product
// @route   GET /api/products/:id  / DELETE /api/products/:id
// @access  Public  / Private - Admin
router.route('/:id').get(getProduct).delete(protect, admin, deleteProduct);

export default router;
