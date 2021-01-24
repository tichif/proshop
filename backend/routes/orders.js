import { Router } from 'express';

import protect from '../middleware/authMiddleware.js';
import { addOrderItems, getOrderById } from '../controllers/orders.js';

const router = Router();

// @desc    Create an order
// @route   POST /api/orders
// @access  Private
router.post('/', protect, addOrderItems);

// @desc    Get an order by ID
// @route   GET /api/orders/:id
// @access  Private
router.route('/:id').get(protect, getOrderById);

export default router;
