import { Router } from 'express';

import { protect } from '../middleware/authMiddleware.js';
import {
  addOrderItems,
  getLoggedInUserOrders,
  getOrderById,
  updateOrderToPaid,
} from '../controllers/orders.js';

const router = Router();

// @desc    Create an order
// @route   POST /api/orders
// @access  Private
router.post('/', protect, addOrderItems);

// @desc    Get Logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
router.get('/myorders', protect, getLoggedInUserOrders);

// @desc    Get an order by ID
// @route   GET /api/orders/:id
// @access  Private
router.route('/:id').get(protect, getOrderById);

// @desc    Update orders details
// @route   PUT /api/orders/:id/pay
// @access  Private
router.put('/:id/pay', protect, updateOrderToPaid);

export default router;
