import { Router } from 'express';

import protect from '../middleware/authMiddleware.js';
import { addOrderItems } from '../controllers/orders.js';
import router from './products.js';

// @desc    Create an order
// @route   POST /api/orders
// @access  Private
router.post('/', protect, addOrderItems);

export default router;
