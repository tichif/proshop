import express from 'express';

import {
  getProducts,
  getProduct,
  deleteProduct,
  createProduct,
  updateProduct,
  createReview,
} from '../controllers/products.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Fetch all products  /  Create a product
// @route   GET /api/products / POST /api/products
// @access  Public / Private - Admin
router.route('/').get(getProducts).post(protect, admin, createProduct);

// @desc    Fetch single products  / Delete a product  / Update a product
// @route   GET /api/products/:id  / DELETE /api/products/:id  / PUT /api/products/:id
// @access  Public  / Private - Admin  / Private - Admin
router
  .route('/:id')
  .get(getProduct)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

// @desc    Add new review
// @route   POST /api/products/:id/reviews
// @access  Private
router.route('/:id/reviews').post(protect, createReview);

export default router;
