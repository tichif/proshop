import { Router } from 'express';

import { protect, admin } from '../middleware/authMiddleware.js';
import {
  addOrderItems,
  getLoggedInUserOrders,
  getOrderById,
  getOrders,
  updateOrderToDelivered,
  updateOrderToPaid,
} from '../controllers/orders.js';

const router = Router();

// @desc    Create an order
// @route   POST /api/orders
// @access  Private
router.post('/', protect, addOrderItems);

// @desc    GET all orders
// @route   GET /api/orders
// @access  Private - Admin
router.get('/', protect, admin, getOrders);

// @desc    Get Logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
router.get('/myorders', protect, getLoggedInUserOrders);

// @desc    Get an order by ID
// @route   GET /api/orders/:id
// @access  Private
router.route('/:id').get(protect, getOrderById);

// @desc    Update orders details to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
router.put('/:id/pay', protect, updateOrderToPaid);

// @desc    Update orders details to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private - Admin
router.put('/:id/deliver', protect, admin, updateOrderToDelivered);

export default router;
